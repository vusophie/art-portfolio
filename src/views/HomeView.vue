
<template>
  <div class="home">
    <GalleryStore initialTab="all" />
  </div>
</template>

<script>
  import GalleryStore from '../components/GalleryStore.vue';

  export default {
    name: 'home',
    components: {
      GalleryStore,
    },
  };

</script>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 90vh;
    display: flex;
    align-items: center;
  }
}
</style>