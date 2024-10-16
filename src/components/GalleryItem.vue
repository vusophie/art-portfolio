<template>
  <div class="gallery-item">
    <div class="gallery-panel">
      <RouterLink :to="{ name: 'image', params: { id: id } }">
        <div class="image-container">
          <img :src="photo" :alt="title" @error="handleImageError" class="responsive-image">
          <div class="overlay">
            <div class="overlay-content">
              <span class="hover-title">{{ title }} </span>
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
  width: 20vw;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.responsive-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 59, 222, 0.8);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
}

.image-container:hover .overlay {
  opacity: 1;
}

.hover-title {
  margin-top: 3vh;
  font-size: 1em;
}
</style>
