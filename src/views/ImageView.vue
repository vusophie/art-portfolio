<template>
    <CContainer fluid class="image">
      <div>
        <p v-if="photo.title">{{ photo.title }}</p>
        <p v-if="photo.type">{{ photo.type }}</p>
        <p v-if="photo.description.tools">{{ photo.description.tools }}</p>
        <p v-if="photo.description.url">{{ photo.description.url }}</p>
      </div>
      <img :src="photo.filename.original" alt="photo.title">
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
    margin-top: 20vh;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    background-color: #f5f5f5;
    padding: 20px;
  }
</style>
  