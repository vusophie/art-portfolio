<template>
  <!-- Row: Align Items Dynamically Based on Filter Tab -->
  <v-row class="gallery-row" no-gutters justify="center">
    <!-- Define each column to take up 3 of 12 units, which will give us 4 items per row -->
    <v-col
      v-for="photo in filteredPhotos"
      :key="photo.id"
      cols="12" sm="6" md="3"
      class="photo-col"
    >
      <v-sheet class="photo-sheet" width="100%" height="100%">
        <!-- Wrap the image in RouterLink for routing to image details -->
        <RouterLink :to="{ name: 'image', params: { id: photo.id } }">
          <div class="image-container">
            <v-img
              :src="photo.filename.original"
              :lazy-src="photo.filename.thumbnail"
              class="image"
              cover
            >
              <!-- Placeholder while the image is loading -->
              <template v-slot:placeholder>
                <v-row align="center" class="fill-height ma-0" justify="center">
                  <v-progress-circular
                    color="grey-lighten-5"
                    indeterminate
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>

            <!-- Title Overlay on Hover -->
            <div class="overlay">
              <span class="title">{{ photo.title }}</span>
            </div>
          </div>
        </RouterLink>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import photos from '../photos.json';

export default {
  name: 'GalleryStore',
  props: {
    initialTab: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      filterTab: this.initialTab,
      photos,
    };
  },
  computed: {
    filteredPhotos() {
      return this.photos.filter(photo => photo.type === this.filterTab);
    },
  },
  watch: {
    filteredPhotos(newPhotos) {
      this.$emit('filteredPhotos', newPhotos);
    },
  },
  created() {
    this.$emit('filteredPhotos', this.filteredPhotos);
  },
};
</script>

<style scoped>
/* Center the entire row */
.gallery-row {
  margin: 5% 0;
  justify-content: center;
}

/* Wrapper for each photo, ensuring proper alignment and spacing */
.photo-sheet {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  background-color: transparent;
}

/* Image container for proper positioning */
.image-container {
  position: relative;
  width: 100%;
}

/* Image styling */
.image {
  height: 45vh;
  width: 45vh;
  object-fit: cover;
  margin: 10px auto;
}

/* Overlay for hover effect */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f9f7f3;
  opacity: 0;
  transition: opacity 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Title styling in the center of the overlay */
.title {
  color: black;
  font-size: 1.5em;
  text-align: center;
}

/* Show overlay on hover */
.image-container:hover .overlay {
  opacity: 1;
}

/* Add equal padding between columns */
.photo-col {
  padding: 0.5em;
  display: flex;
  justify-content: center;
}
</style>
