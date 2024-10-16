<template>
  <CContainer fluid class="image">
    <div class="img-info">
      <p class="img-title">{{ photo.title }}</p>
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
  margin-top: 60vh;
  max-height: 190vh;
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  align-items: center; 
}

.img-info {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  text-align: center;
  margin-bottom: 5em;
}

.img-title {
  font-family: 'Times New Roman', serif;
  font-weight: 600;
  font-size: 1.5em;
  margin-bottom: 3em;
}

.img-info, .img-url {
  font-size: 1em;
}

.img-display {
  display: flex; 
  flex-direction: column; 
  align-items: center;
  margin-bottom: 15em;
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
