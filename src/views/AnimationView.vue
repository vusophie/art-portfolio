
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
@media (min-width: 1024px) {
  .animation {
    margin-top: 13vh;
    min-height: 70vh;
    display: flex;
    align-items: center;
  }
}
</style>