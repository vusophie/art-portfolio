<template>
  <div class="digital">
    <div class="title">
        <div class="title-text">
          <h1>Digital.</h1>
        </div>
        <img src="../../public/icons/star.svg" class="second-star"/>
    </div>
      
    <GalleryList initialTab="digital" />
  </div>
</template>

<script>
import GalleryList from '../components/GalleryList.vue';

export default {
  name: 'Digital',
  components: {
    GalleryList,
  },

};
</script>

<style>
.digital {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  margin-top: 10em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.second-star {
  margin: 0;
  width: 3rem;
  height: auto;
  margin-top: -5em;
}
</style>
