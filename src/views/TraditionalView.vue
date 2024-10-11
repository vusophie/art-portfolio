
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
  .traditional {
    margin: 40vh 0vh 20vh 0vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>