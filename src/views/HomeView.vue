
<template>
  <div class="home">
    <GalleryList initialTab="home" />
  </div>
</template>

<script>
  import GalleryList from '../components/GalleryList.vue';

  export default {
    name: 'home',
    components: {
      GalleryList,
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