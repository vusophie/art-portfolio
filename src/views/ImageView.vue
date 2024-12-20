<template>
  <CContainer fluid class="image">
    <div class="img-info">
      <button class="close-btn" @click="goBack">✖</button>
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
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.image {
  margin-top: 10em;
  min-height: 100vh;
  width: 100%;
  padding: 6em 2em;
  border-radius: 2%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: rgba(255, 255, 255, 0.55);
}

.img-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1em;
  width: 80%;
  font-weight: 600;
  color: #1f2f76;
}

.title-text {
  font-family: "Belanosima", sans-serif;
  font-style: normal;
  color: #1f2f76;
  line-height: 1em;
  font-size: 3rem;
  margin: 0;
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 0.5em;
}

.img-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: auto;
}

.responsive-image {
  display: block;
  object-fit: cover;
  max-width: 100%;
  max-height: 80vh;
  border-radius: 2%;
}

.close-btn {
  background-color: rgba(255, 255, 255, 0.55);
  color: #1f2f76;
  border: none;
  border-radius: 20%;
  width: 2em;
  height: 2em;
  font-size: 1.25em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 9.5em;
  right: 13em;
}

.close-btn:hover {
  background-color: rgba(255, 255, 255, 0.25);
}

/* Media Queries for Mobile Responsiveness */
@media (max-width: 768px) {
  .title-text {
    font-size: 2.5rem;
  }

  .img-info {
    width: 90%;
  }

  .img-display {
    width: 90%;
    height: auto;
  }

  .responsive-image {
    max-height: 70vh;
  }

  .close-btn {
    top: 7em;
    right: 2em;
  }
}

@media (max-width: 480px) {
  .title-text {
    font-size: 2rem;
  }

  .img-info {
    width: 95%;
  }

  .img-display {
    width: 100%;
    height: auto;
  }

  .responsive-image {
    max-height: 60vh;
  }

  .close-btn {
    top: 6em;
    right: 1em;
  }
}
</style>
