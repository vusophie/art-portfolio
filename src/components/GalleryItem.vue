<template>
  <div class="gallery-item">
    <div class="gallery-panel">
      <RouterLink :to="{ name: 'image', params: { id: id } }">
        <div class="image-container">
          <img :src="thumbnail" :alt="title" @error="handleImageError">
          <div class="overlay">
            <div class="overlay-content">
              <span class="hover-title">{{ title }} / </span>
              <span class="hover-tools">{{ description }}</span>
            </div>
          </div>
        </div>
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

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99%;
  background-color: rgba(181, 52, 255, 0.9); 
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1em;
  color: white;
}

.image-container:hover .overlay {
  opacity: 1;
}

span {
  font-family: 'Trebuchet MS', sans-serif;
  font-weight: 100 !important;
  font-size: 1em;
}

</style>
