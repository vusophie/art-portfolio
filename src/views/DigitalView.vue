<template>
  <div class="digital">
      
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

<style scoped>
.digital {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em 1em;
}

/* Media Queries for Mobile Responsiveness */
@media (max-width: 768px) {
  .title-text {
    font-size: 2.5rem;
  }

  .second-star {
    width: 2.5rem;
    margin-top: -1.5em;
  }

  .digital {
    padding: 2em 1.5em;
  }

  .title {
    margin-top: 5em;
  }
}

@media (max-width: 480px) {
  .title-text {
    font-size: 2rem;
  }

  .second-star {
    width: 2rem;
    margin-top: -1em;
  }

  .digital {
    padding: 1.5em 1em;
  }

  .title {
    margin-top: 3em;
  }
}
</style>
