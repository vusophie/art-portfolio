/*
Contains the logic that ensures that the displayed galleryItems are in the correct tab.
*/
<template>
    <div class="gallery-grid"> 
      <GalleryItem 
        v-for="photo in filteredPhotos"
        :key="photo.id"
        :id="photo.id"
        :title="photo.title"
        :photo="photo.filename.original"
        :description="photo.description.url" 
      />
    </div>
</template>

<script>
import photos from '../photos.json';
import GalleryItem from './GalleryItem.vue';

export default {
  name: 'GalleryStore',
  components: {
    GalleryItem,
  },
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
.gallery-grid {
  margin-top: 10em;
  display: grid;
    grid-template-columns:
      repeat(3, 1fr);
    gap: 3em;

}
</style>
