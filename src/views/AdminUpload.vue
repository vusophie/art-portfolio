<template>
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
  </template>
  
  <script>
  import { ref } from "vue";
  import { storage } from "../firebase"; // Updated import path
  import { ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
  import { Button } from "@progress/kendo-vue-buttons";
  
  export default {
    name: "AdminUpload",
    components: {
      kButton: Button,
    },
    data() {
      return {
        file: null,
        uploadProgress: null,
        downloadURL: null,
      };
    },
    methods: {
      handleFileChange(event) {
        this.file = event.target.files[0];
      },
      async uploadFile() {
        if (!this.file) {
          alert("Please select a file to upload.");
          return;
        }
  
        const fileRef = storageRef(storage, `artwork/${this.file.name}`);
        const uploadTask = uploadBytesResumable(fileRef, this.file);
  
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          },
          (error) => {
            console.error("Upload failed:", error);
          },
          async () => {
            this.downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            alert("Upload complete!");
          }
        );
      },
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
  </style>
  