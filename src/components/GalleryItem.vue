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

.image-container {
  position: relative;
  width: 25vw;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 3%;
}

.responsive-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #1f2f76;
  padding: 1em;
  margin: 0.75em;
  opacity: 0;
  border-radius: 10%;
  transition: opacity 0.2s ease;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  font-weight: 600;
}

.image-container:hover .overlay {
  opacity: 1;
}

.hover-title {
  font-size: 1em;
}
</style>
