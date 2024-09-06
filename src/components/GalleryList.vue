/*
Feeds the GalleryStore the tabName and displays the gallery items on the webpage. 
*/
<template>
  <div class="gallery-list">
    <GalleryStore :initialTab="initialTab" />
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
};
</script>

<style scoped>
.gallery-list {
  display: flex;
  justify-items: center;
}
</style>
