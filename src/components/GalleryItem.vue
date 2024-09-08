<template>
    <div class="gallery-item">
        <div class="gallery-panel">
            <img :src="thumbnail" :alt="title">
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GalleryItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  methods: {
    // TODO
    handleImageError(event) {
    //     event.target.src = 'path/to/default-image.jpg'; 
    },
  },
};
</script>

<style scoped>
.gallery-panel img {
  width: 100%;
  height: 22vw;
  object-fit: cover;
  border-radius: 0.75rem;
}
</style>