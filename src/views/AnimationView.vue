
<template>
  <div class="animation">
    <GalleryList initialTab="animation" />
  </div>
</template>

<script>
  import GalleryList from '../components/GalleryList.vue';

  export default {
    name: 'animation',
    components: {
      GalleryList,
    },
  };

</script>

<style>
  .animation {
    margin: 50vh 0vh 20vh 0vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>