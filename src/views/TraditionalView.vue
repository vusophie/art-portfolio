
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
    margin: 40vh 0vh 20vh 0vh;
    display: flex;
    align-items: center;
  }
}
</style>