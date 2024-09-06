/*
Contains the logic that ensures that the displayed galleryItems are in the correct tab.
*/
<template>
  <div class="gallery-grid"> 
    <GalleryItem 
      v-for="photo in filteredPhotos"
      :key="photo.id"
      :title="photo.title"
      :thumbnail="photo.filename.thumbnail"
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
        if (this.filterTab === 'home') {
          return this.photos;
        }
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

<style>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  grid-template-rows: repeat(4, auto);  /* 4 rows */
  gap: 10px;
  justify-items: center;
  align-items: center;
}
</style>
