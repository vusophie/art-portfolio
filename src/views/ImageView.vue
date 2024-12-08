<template>
  <CContainer fluid class="image">
    <div class="img-info">
      <h1 class="title-text">{{ photo.title }}</h1>
      <p class="img-info">
        This is a {{ photo.type }} piece made using {{ photo.description.tools }}. {{ photo.description.more }}
      </p>
    </div>
    <div class="img-display">
      <img :src="photo.filename.original" alt="photo.title" class="responsive-image">
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
};
</script>

<style>
.image {
  margin-top: 10em;
  min-height: 100vh;
  width: 70vw;
  padding: 6em 0em;
  border-radius: 3%;
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  align-items: center; 
  background: rgba(255, 255, 255, 0.7);
}

.img-info {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  text-align: center;
  margin-bottom: 5em;
}

.title-text {
  letter-spacing: 0em;
  margin-bottom: 3em;
}

.img-info, .img-url {
  font-size: 1em;
}

.img-display {
  display: flex; 
  flex-direction: column; 
  align-items: center;
  width: 40vw;
  height: 80vh;
}

.responsive-image {
  display: block; 
  object-fit: cover; 
  margin-bottom: 1em; 
  max-height: 90vh;
  width: auto;

}
</style>
