<template>
  <div class="sketchbook">
    <div class="button-group">
      <v-btn variant="tonal" @click="setActiveTab('dreams')">DREAMS</v-btn>
      <v-btn variant="tonal" @click="setActiveTab('fantasy')">FANTASY</v-btn>
      <v-btn variant="tonal" @click="setActiveTab('portrait')">PORTRAIT</v-btn>
      <v-btn variant="tonal" @click="setActiveTab('pixel')">PIXEL</v-btn>
    </div>
    <GalleryList :initialTab="activeTab" />
  </div>
</template>

<script>
import GalleryList from '../components/GalleryList.vue';

export default {
  name: 'Sketchbook',
  components: {
    GalleryList,
  },
  data() {
    return {
      activeTab: 'dreams', // Default tab
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
}

.button-group {
  display: flex;
  gap: 1em;
  margin-bottom: 2em;
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
}

@media (max-width: 480px) {
  .button-group {
    flex-direction: column;
    gap: 0.5em;
  }

  .sketchbook {
    padding: 1.5em 1em;
  }
}
</style>
