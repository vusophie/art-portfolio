<template>
  <div class="gallery-container">
    <div class="gallery-row">
      <div 
        v-for="photo in filteredPhotos"
        :key="photo.id"
        class="photo-col"
      >
        <RouterLink :to="{ name: 'image', params: { id: photo.id } }">
          <div class="image-container">
            <img
              :src="photo.filename.original"
              :alt="photo.title"
              class="image"
            />
            <div class="overlay">
              <span class="title">{{ photo.title }}</span>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
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
.gallery-container {
  width: 98%;
}

.gallery-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.photo-col {
  flex: 0 0 32%; /* Adjust width to have 3 images per row */
  margin-bottom: 5vh;
  position: relative;
}

.image-container {
  width: 100%;
  position: relative;
}

.image {
  width: 100%;
  height: 45vh;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(249, 247, 243, 1);
  opacity: 0;
  transition: opacity 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container:hover .overlay {
  opacity: 1;
}

.title {
  color: #5790f4;
  font-size: 1.2em;
  text-align: center;
  font-family: "Roboto Mono", monospace;
}
</style>
