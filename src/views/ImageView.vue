<template>
  <v-container fluid class="image-container">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" class="image-card">
        <div class="text-container">
          <v-btn color="primary" @click="goBack" class="back-btn">
            <v-icon left>mdi-arrow-left</v-icon>
            Back
          </v-btn>
          <v-row justify="center" align="center" class="text-section">
            <h1 class="title-text">{{ photo.title }}</h1> <br>
            
            <div class="contact-info">
              <v-chip color="primary" text-color="white" class="contact-chip">
                <v-icon left>mdi-email</v-icon>
                sottvu@gmail.com
              </v-chip>
              <v-chip color="primary" text-color="white" class="contact-chip">
                <v-icon left>mdi-linkedin</v-icon>
                linkedin.com/vusophie
              </v-chip>
            </div>
          </v-row>          
        </div>
        
        <v-row justify="center" class="image-section">
          <v-img
            :src="photo.filename.original"
            :alt="photo.title"
            class="original-image"
            height="70vh"
          ></v-img>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import photos from '../photos.json';

export default {
  name: 'ImageView',
  data() {
    return {
      photos,
    };
  },
  computed: {
    photo() {
      return this.photos.find(photo => photo.id === Number(this.$route.params.id));
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Navigate to the previous page
    }
  }
};
</script>

<style scoped>
.image-container {
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 5em;
}

.image-card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 2em;
  position: relative;

  .text-container {
    display: flex;
    flex-direction: column;
    margin: 1em;
  }
  
  .text-section {
    display: flex;
    flex-direction: column;
    margin: 1em;
  }
}

/* Back button styling */
.back-btn {
  position: absolute;
  top: 1em;
  left: 1em;
  font-weight: bold;
  font-family: "Roboto Mono", monospace;

}

.title-text {
  font-family: "Roboto Mono", monospace;
  color: #1f2f76;
  font-size: 2rem;
  text-align: center;
}

.img-info-text {
  font-weight: 500;
  color: #555;
  text-align: center;
}

.contact-info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1em;
}

.contact-chip {
  font-weight: 500;
  padding: 0.5em 1em;
  border-radius: 4px;
  font-family: "Roboto Mono", monospace;

}

/* Image styling */
.original-image {
  border-radius: 8px;
  margin-top: 1em;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .title-text {
    font-size: 1.5rem;
  }

  .contact-info {
    flex-wrap: wrap;
  }

  .contact-chip {
    margin: 0.5em 0;
  }
}

@media (max-width: 480px) {
  .title-text {
    font-size: 1.2rem;
  }

  .back-btn {
    font-size: 0.875rem;
  }
}
</style>
