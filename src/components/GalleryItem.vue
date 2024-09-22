<template>
  <div class="gallery-item">
    <div class="gallery-panel">
      <RouterLink :to="{ name: 'image', params: { id: id } }">
        <img :src="thumbnail" :alt="title" @error="handleImageError">
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryItem',
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
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
    handleImageError(event) {
      // event.target.src = 'path/to/default-image.jpg'; 
    },
  },
};
</script>

<style scoped>
.gallery-panel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
