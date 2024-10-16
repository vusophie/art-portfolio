
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
  .digital {
    margin: 50vh 0vh 20vh 0vh;
    display: flex;
    align-items: center;
    justify-content: center;

  }
</style>