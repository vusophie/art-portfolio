<template>    
  <nav class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
    <div class="navbar-toggle" @click="toggleNavbar">
      <span class="toggle-icon">&#9776;</span>
    </div>
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
      activeIndex: 0,
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
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    }
  }
};
</script>

<style>

.navbar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 2% 5%;
  border-radius: 55px;
  margin: 2% 4%;
  font-size: 1em;
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
}

.navbar-toggle {
  display: none;
  cursor: pointer;
}

.toggle-icon {
  font-size: 1.5em;
  color: #1f2f76;
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
  background-color: rgba(255, 255, 255, 0.55);
  border-radius: 25px;
  padding: 10px 20px;
}

/* Mobile view */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    margin: 0;
  }

  .navbar-toggle {
    display: block;
    margin-bottom: 1rem;
  }

  .sublink {
    font-size: 1.2em;
    padding: 10px;
    text-align: center;
    width: 100%;
  }

  .navbar--hidden {
    display: none;
  }

  .navbar-toggle + .sublink {
    display: none;
  }

  .navbar-show .sublink {
    display: block;
    margin: 0.5rem 0;
  }
}
</style>
