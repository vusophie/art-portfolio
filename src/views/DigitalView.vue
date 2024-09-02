
<template>
  <div class="digital">
    <GalleryList initialTab="digital" />
  </div>
</template>

<script>
  import GalleryList from '../components/GalleryList.vue';

  export default {
    name: 'digital',
    components: {
      GalleryList,
    },
  };

</script>

<style>
@media (min-width: 1024px) {
  .digital {
    min-height: 90vh;
    display: flex;
    align-items: center;
  }
}
</style>