<template>
  <div class="gallery-list">
    <GalleryStore 
      :initialTab="initialTab" 
      @filteredPhotos="updatePhotos" />
    <div class="gallery-item" v-for="photo in photos" :key="photo.id">
      <img :src="photo.filename.thumbnail">
    </div>
  </div>
</template>

<script>
import GalleryStore from './GalleryStore.vue';

export default {
  name: 'GalleryList',
  components: {
    GalleryStore,
  },
  props: {
    initialTab: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      photos: [],
    };
  },
  methods: {
    updatePhotos(filteredPhotos) {
      this.photos = filteredPhotos;
    },
  },
};
</script>

<style scoped>
.gallery-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  gap: 10px;
  justify-items: center;
  align-items: center;
}

.gallery-item img {
  width: 100%;
  height: auto;
}
</style>
