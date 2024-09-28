<template>
    <CContainer fluid class="image">
      <div class="img-info">
        <p class="img-title" v-if="photo.title">{{ photo.title }}</p>
        <p class="img-type" v-if="photo.type">This is a {{ photo.type }} piece made using </p>
        <p class="img-description" v-if="photo.description.tools">{{ photo.description.tools }}. </p>
        <p class="img-url" v-if="photo.description.url">See more >> {{ photo.description.url }}. </p>
      </div>
      <div class="img-display">
        <img :src="photo.filename.original" alt="photo.title">
        <img :src="photo.filename.second" alt="photo.title">
        <img :src="photo.filename.third" alt="photo.title">
      </div>
    </CContainer>
  </template>
  
  <script>
  import photos from '../photos.json';
  
  export default {
    name: 'ImageView',
    data() {
      return {
        photos,
      };
    },
    computed: {
      photo() {
        let img = this.photos.find(photo => photo.id === Number(this.$route.params.id));
        return img;
        },  
    },
    methods: {
        photoUrl(filename) {
            return require(`/thumbnails/${filename}`);
        },
      closeLightbox() {
        this.$router.push('/'); 
      },
    },
  };
  </script>

<style>
  .image {
    margin-top: 60vh;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    padding: 20px;
  }

  .img-info {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-content: center;
    text-align: center;
    margin-bottom: 5em;
  }

  .img-title {
    font-family: 'Times New Roman', serif;
    font-weight: 600;
    font-size: 1.5em;
    margin-bottom: 3em;
  }

  .img-type, .img-description, .img-url {
    font-size: 0.75em;
  }

  .img-display {
    display: flex;
    flex-flow: column;
    gap: 1.5em;
    margin-bottom: 5em;
  }
</style>
  