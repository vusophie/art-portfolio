<template>
  <v-container fluid class="image-container">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" class="image-card">
        <v-btn color="primary" @click="goBack" class="back-btn">
          <v-icon left>mdi-arrow-left</v-icon>
          Go Back
        </v-btn>
        <v-row justify="center" align="center" class="text-section">
          <div class="divider">
            <h1 class="title-text">{{ photo.title }}</h1> <br>
          <p class="img-info-text">
            This is a {{ photo.type }} piece made using {{ photo.description.tools }}.
          </p>
          </div>
          
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
        <v-row justify="center" class="image-section">
          <v-img
            :src="photo.filename.original"
            :alt="photo.title"
            class="original-image"
            max-height="100%"
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

.divider {
  display: flex;
  flex-direction: column;
}

.image-container {
  margin-top: 10%;
  background: #f9f9f9;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2em 1em;
}

.image-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 2em;
  position: relative;
}

/* Back button styling */
.back-btn {
  position: absolute;
  top: 1em;
  left: 1em;
  font-weight: bold;
}

/* Title and text styling */
.title-text {
  font-family: "Belanosima", sans-serif;
  color: #1f2f76;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1em;
}

.img-info-text {
  font-weight: 500;
  color: #555;
  text-align: center;
  margin-bottom: 1em;
}

/* Contact chips styling */
.contact-info {
  display: flex;
  justify-content: center;
  gap: 1em;
  margin-top: 1em;
}

.contact-chip {
  font-weight: 500;
  padding: 0.5em 1em;
  border-radius: 4px;
}

/* Image styling */
.original-image {
  border-radius: 8px;
  margin-top: 1em;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
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
