/*
Feeds the GalleryStore the tabName and displays the gallery items on the webpage. 
*/
<template>
    <GalleryStore :initialTab="initialTab" />
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


</style>
