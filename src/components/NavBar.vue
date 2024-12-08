<template>    
  <nav class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
    <RouterLink 
      v-for="(link, index) in links"
      :key="index"
      class="sublink"
      :to="link.route"
      :class="{ 'active': activeIndex === index }"
      @click="setActiveLink(index)"
    >
      {{ link.text }}
    </RouterLink>
    <div class="active-slider" :style="sliderStyle"></div>
  </nav>
  <keep-alive>
    <RouterView />
  </keep-alive>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      activeIndex: 0,  // Track active index
      links: [
        { text: 'Sophie Illustrations [/]', route: '/' },
        { text: 'Sketchbook', route: '/sketchbook' },
        { text: 'Digital', route: '/digital' },
        { text: 'Contact', route: '/contact' }
      ]
    };
  },
  methods: {
    setActiveLink(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style>

.navbar {
  width: 40vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2% 5%;
  border-radius: 55px;
  margin: 2% 4%;
  font-size: 1em;
  position: fixed; 
  top: 0; 
  z-index: 1000; 
  transition: background-color 0.3s ease; 
}

.sublink {
  padding: 10px 15px;
  text-decoration: none;
  color: #1f2f76; 
  font-size: 1.1em;
  font-weight: 600;
  display: inline-block;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.sublink:hover {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}

.sublink.active {
  background-color: rgba(255, 255, 255, 0.7); 
  border-radius: 25px; 
  padding: 10px 20px;
}

</style>
