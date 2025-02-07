<template>
  <div id="login" v-if="!isLoggedIn">
    <h2>Admin Login</h2>
    <input
      v-model="password"
      type="password"
      placeholder="Enter password"
      @keyup.enter="login"
    />
    <button @click="login">Login</button>
    <p v-if="error" style="color: red;">Incorrect password. Try again.</p>
  </div>

  <div v-else>
    <div class="upload-section">
      <div class="upload-content">
        <h1>Upload Artwork</h1>
        <h3>Upload your latest artwork directly to your portfolio.</h3>

        <form @submit.prevent="uploadFile" class="upload-form">
          <div class="form-group">
            <input type="file" @change="handleFileChange" class="form-input" />
          </div>
          <div class="form-group">
            <kButton class="submit-button" :disabled="!file">Upload</kButton>
          </div>
        </form>

        <div v-if="uploadProgress !== null" class="progress">
          <p>Uploading: {{ uploadProgress }}%</p>
        </div>

        <div v-if="downloadURL">
          <h3>File Uploaded Successfully!</h3>
          <a :href="downloadURL" target="_blank">View File</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { storage, db } from "../firebase"; // Ensure Firestore & Storage are imported
import { uploadBytesResumable, getDownloadURL, ref as storageRef } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { Button } from "@progress/kendo-vue-buttons";

export default {
  name: "AdminUpload",
  components: {
    kButton: Button,
  },
  setup() {
    const password = ref('');
    const isLoggedIn = ref(false);
    const error = ref(false);
    const file = ref(null);
    const uploadProgress = ref(null);
    const downloadURL = ref(null);

    // Handle login
    const login = () => {
      if (password.value === '5ophieIsThe@min') {
        isLoggedIn.value = true;
        error.value = false;
      } else {
        error.value = true;
      }
    };

    // Handle file selection
    const handleFileChange = (event) => {
      file.value = event.target.files[0];
    };

    // Handle file upload
    const uploadFile = async () => {
      if (!file.value) {
        alert("Please select a file to upload.");
        return;
      }

      const fileRef = storageRef(storage, `artwork/${file.value.name}`);
      const uploadTask = uploadBytesResumable(fileRef, file.value);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          uploadProgress.value = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        (error) => {
          console.error("Upload failed:", error);
        },
        async () => {
          downloadURL.value = await getDownloadURL(uploadTask.snapshot.ref);
          alert("Upload complete!");

          // Store metadata in Firestore
          await addDoc(collection(db, "artwork"), {
            filename: { original: downloadURL.value },
            timestamp: new Date(),
          });

          // Reset fields
          file.value = null;
          uploadProgress.value = null;
        }
      );
    };

    return {
      password,
      isLoggedIn,
      error,
      file,
      uploadProgress,
      downloadURL,
      login,
      handleFileChange,
      uploadFile,
    };
  },
};
</script>

<style scoped>
.upload-section {
  margin-top: 25%;
  margin-right: 25%;
  padding: 2em 1em;
  display: flex;
  justify-content: center;
  font-family: "Roboto Mono", monospace;
}

.upload-content {
  padding: 2em;
  flex: 1 1 400px;
  text-align: center;
}

h1 {
  font-size: 2em;
  color: #1f2f76;
  margin-bottom: 1em;
}

h3 {
  font-size: 1.2em;
  margin-bottom: 1.5em;
}

.form-group {
  margin-bottom: 1.2em;
}

.form-input {
  width: 100%;
  padding: 0.75em;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
}

.submit-button {
  background-color: #ff5a5f;
  color: white;
  border-radius: 5px;
  padding: 0.8em 1.5em;
  font-size: 1em;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.submit-button:hover {
  background-color: #ff7a7f;
}

.progress {
  margin-top: 1em;
  font-weight: bold;
}

#login {
  padding-top: 35%;
  padding-right: 4%;
}
</style>
