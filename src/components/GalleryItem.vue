<template>
  <div class="gallery-item">
    <div class="gallery-panel">
      <RouterLink :to="{ name: 'image', params: { id: id } }">
        <div class="image-container">
          <img :src="photo" :alt="title" @error="handleImageError" class="responsive-image">
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
    photo: {
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
.gallery-panel {
  position: relative;
}

.image-container {
  position: relative;
  max-width: 32vw;
  max-height: 32vh;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.responsive-image {
  width: 100%;
  height: auto; 
  display: block; 
  max-height: none; 
  object-fit: cover; 
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 59, 222, 0.9);
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
  font-size: 1em;
}
</style>
