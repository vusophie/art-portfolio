<template>
    <div class="gallery-item">
        <div class="gallery-panel">
            <img :src="thumbnail" @error="handleImageError" :alt="title">
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
/* .gallery-item {
  margin: 10px;
}
.gallery-panel {
  display: flex;
  justify-content: center;
} */
</style>