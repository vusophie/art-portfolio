<template>
  <div class="sketchbook">
    <div class="title">
        <div class="title-text">
          <h1>Sketchbook.</h1>
        </div>
        <img src="../../public/icons/star.svg" class="second-star"/>
    </div>
    <GalleryList initialTab="sketchbook" />
  </div>
</template>

<script>
import GalleryList from '../components/GalleryList.vue';

export default {
  name: 'Sketchbook',
  components: {
    GalleryList,
  },

};
</script>

<style>
.sketchbook {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title-text {
  font-family: "Belanosima", sans-serif;
  font-style: normal;
  color:  #1f2f76;
  /* letter-spacing: -0.33em; */
  line-height: 1em;
  font-size: 3rem;
  margin: 0;
  display: inline-block;
  vertical-align: middle;
}


.title {
  margin-top: 10em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.second-star {
  width: 3rem;
  height: auto;
  margin-top: -2em;
}
</style>
