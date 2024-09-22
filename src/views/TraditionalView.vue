
<template>
  <div class="traditional">
    <GalleryList initialTab="traditional" />
  </div>
</template>

<script>
  import GalleryList from '../components/GalleryList.vue';

  export default {
    name: 'traditional',
    components: {
      GalleryList,
    },
  };

</script>

<style>
@media (min-width: 1024px) {
  .traditional {
    margin-top: 10vh;
    min-height: 90vh;
    display: flex;
    align-items: center;
  }
}
</style>