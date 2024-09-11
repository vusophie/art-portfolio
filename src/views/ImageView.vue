<template>
    <div class="lightbox" @click.self="closeLightbox">
      <img :src="photo.filename.simplified" alt="Full image">
      <div class="lightbox-info">
        <div class="lightbox-info-inner">
          <p v-if="photo.title">{{ photo.title }}</p>
          <p v-if="photo.type">{{ photo.type }}</p>
          <p v-if="photo.description">{{ photo.description }}</p>
        </div>
      </div>
    </div>
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
        // console.log(img);
        return img;
        },  
    },
    methods: {
        photoUrl(filename) {
            return require(`../images/thumbnails/${filename}`);
        },
      closeLightbox() {
        this.$router.push('/'); 
      },
    },
  };
  </script>
  
  <style scoped>
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
    }

    .lightbox img {
        margin: auto;
        width: 100%;
        grid-column-start: 2;
    }

    .lightbox-info {
        margin: auto 2rem auto 0;
    }

    .lightbox-info-inner {
        background-color: #FFFFFF;
        display: inline-block;
        padding: 2rem;
    }
</style>  