<template>
  <div class="sketchbook">
    <v-dialog v-model="isModalVisible" persistent max-width="600">
      <v-card>
        <v-card-title>
          Welcome!
          <v-spacer></v-spacer>
          <v-btn icon @click="closeModal">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <h1>Welcome to my Sketchbook</h1>
          <p>
            Explore my recent artwork and creative journey. I’m excited to
            share this with you!
          </p>
          <v-btn @click="closeModal" color="primary">Get Started</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>

    <GalleryList initialTab="sketchbook" />
  </div>
</template>

<script>
import GalleryList from '../components/GalleryList.vue';

export default {
  name: 'Sketchbook',
  components: {
    GalleryList,
  },
  data() {
    return {
      isModalVisible: false, // Default to hidden
    };
  },
  mounted() {
    // Check if the modal has been shown before
    // if (!localStorage.getItem('hasSeenModal')) {
    //   this.isModalVisible = true;
    //   localStorage.setItem('hasSeenModal', 'true'); // Mark as shown
    // }
  },
  methods: {
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
.sketchbook {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25%;
}
/* Media Queries for Mobile Responsiveness */
@media (max-width: 768px) {
  .title-text {
    font-size: 2.5rem;
  }

  .second-star {
    width: 2.5rem;
    margin-top: -1.5em;
  }

  .sketchbook {
    padding: 2em 1.5em;
  }

  .title {
    margin-top: 5em;
  }
}

@media (max-width: 480px) {
  .title-text {
    font-size: 2rem;
  }

  .second-star {
    width: 2rem;
    margin-top: -1em;
  }

  .sketchbook {
    padding: 1.5em 1em;
  }

  .title {
    margin-top: 3em;
  }
}
</style>
