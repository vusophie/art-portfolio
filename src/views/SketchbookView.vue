<template>
  <div class="sketchbook">
    <h1>CLICK ON A SKETCHBOOK TO VIEW BY BOOK!</h1>
    <div class="button-group">
      <div
        v-for="tab in tabs"
        :key="tab.name"
        @click="setActiveTab(tab.name)"
        class="tab"
        :class="{ active: activeTab === tab.name }"
      >
        <div class="image-container">
          <img :src="tab.image" />
          <div class="hover-overlay"></div>
        </div>
        <p>{{ activeTab === tab.name ? `* ${tab.label} *` : tab.label }}</p>
      </div>
    </div>
    <GalleryList :initialTab="activeTab" />
  </div>
</template>

<script>
import GalleryList from '../components/GalleryList.vue';
import dreamsImage from '../../public/photos/png2jpg/dreams.jpg';
import fantasyImage from '../../public/photos/png2jpg/fantasy.jpg';
import portraitImage from '../../public/photos/png2jpg/portrait.jpg';
import pixelImage from '../../public/photos/png2jpg/pixel.jpg';

export default {

  name: 'Sketchbook',
  components: {
    GalleryList,
  },
  data() {
    return {
      activeTab: 'dreams', // Default tab
      tabs: [
      { name: 'dreams', label: 'DREAMS', image: dreamsImage },
      { name: 'fantasy', label: 'FANTASY', image: fantasyImage },
      { name: 'portrait', label: 'PORTRAIT', image: portraitImage },
      { name: 'pixel', label: 'PIXEL', image: pixelImage },
      ],
    };
  },
  methods: {
    setActiveTab(tab) {
      console.log(tab);
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
.sketchbook {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25%;

  h1 {
    font-family: "Roboto Mono", monospace;
    margin: 2% 0 5% 0;
    color: darkgrey;
    font-weight: 400;
    font-size: 1.2em;
  }
}

.button-group {
  display: flex;
  gap: 1em;
  margin-bottom: 8vh;
}

.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  text-align: center;
}

.image-container {
  position: relative;
  width: 14vw;
}

img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.05);
}

.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.33);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .hover-overlay {
  opacity: 1;
}

p {
  font-size: 1.2em;
  font-family: "Roboto Mono", monospace;
  margin-top: 0.5em;
}

.tab.active p {
  font-weight: bold;
  color: #5790f4;
}

/* Media Queries for Mobile Responsiveness */
@media (max-width: 768px) {
  .button-group {
    flex-wrap: wrap;
    justify-content: center;
  }

  .sketchbook {
    padding: 2em 1.5em;
  }

  img {
    width: 20vw;
  }
}

@media (max-width: 480px) {
  .button-group {
    flex-direction: column;
    gap: 0.5em;
  }

  .sketchbook {
    padding: 1.5em 1em;
  }

  img {
    width: 60vw;
  }
}
</style>
