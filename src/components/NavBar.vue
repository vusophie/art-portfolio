<template>
    <CContainer 
      class="navbar"
      :class="{ 'navbar--hidden': !showNavbar }">
    <RouterLink to="/" class="title"><i>SOPHIE ILLUSTRATIONS</i></RouterLink>
      <nav>
        <RouterLink class="sublink" to="/animation">ANIMATION</RouterLink>
        <RouterLink class="sublink" to="/traditional">TRADITIONAL</RouterLink>
        <RouterLink class="sublink" to="/digital">DIGITAL</RouterLink>
        <RouterLink class="sublink" to="/about">ABOUT</RouterLink>
      </nav>
    </CContainer>
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </template>
  
  <style>
  .navbar {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    position: fixed;
    padding-top: 10vh;
    top: 0;
    left: 0;
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
    z-index: 1000;
}

.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.title {
  padding-top: 3vh;
  padding-bottom: 5vh;
  max-width: 25vh;
  text-align: center;
  margin-bottom: 1rem;
  transform: rotate(-10deg);
  text-decoration: none;
  color: black;
  font-family: 'Times New Roman', serif;
  font-weight: 600;
  font-size: 1.5em;
}

nav {
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin: 10vh;
}

nav a {
  text-decoration: none !important;
  color: black;
  font-size: 12px;
}

nav a:hover {
  color: rgba(0, 59, 222, 1) !important;
}

nav a:visited {
  color: black;
}

.router-link-active {
  color: rgba(0, 59, 222, 1) !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
  
  <script>
  export default {
    data() {
      return {
      showNavbar: true,
      lastScrollPosition: 0
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    }
  }
};
</script>
  