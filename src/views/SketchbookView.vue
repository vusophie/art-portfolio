
<template>
  <div class="sketchbook">
    <GalleryList initialTab="sketchbook" />
  </div>
</template>

<script>
  import GalleryList from '../components/GalleryList.vue';

  export default {
    name: 'sketchbook',
    components: {
      GalleryList,
    },
  };

</script>

<style>
  .sketchbook {
    display: flex;
    align-items: center;
  }
</style>