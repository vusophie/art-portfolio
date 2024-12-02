<template>
  <CContainer 
    class="navbar"
    :class="{ 'navbar--hidden': !showNavbar }">
    <nav>
      <RouterLink class="sublink" to="/" @click="logClick"> <i>Sophie Illustrations</i></RouterLink>
      <RouterLink class="sublink" to="/sketchbook" @click="logClick">Sketchbook</RouterLink>
      <RouterLink class="sublink" to="/digital" @click="logClick">Digital</RouterLink>
      <RouterLink class="sublink" to="/contact" @click="logClick">Contact</RouterLink>
    </nav>
  </CContainer>
  <keep-alive>
    <RouterView />
  </keep-alive>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0
    };
  },
  mounted() {
    console.log("Navbar component mounted.");
    window.addEventListener('scroll', this.onScroll);

    // Example: you can directly log clicks on navbar
    this.$router.beforeEach((to, from, next) => {
      console.log(`Before navigating to: ${to.fullPath}`);
      next();
    });
    this.$router.afterEach((to, from) => {
      console.log(`After navigating to: ${to.fullPath}`);
    });
  },
  beforeDestroy() {
    console.log("Navbar component is about to be destroyed.");
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      console.log(`Current scroll position: ${currentScrollPosition}`);
      
      if (currentScrollPosition < 0) {
        console.log("Scroll position is less than zero, returning.");
        return;
      }

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        console.log("Scroll difference is less than 60px, skipping navbar update.");
        return;
      }

      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      console.log(`Navbar visibility: ${this.showNavbar ? 'Visible' : 'Hidden'}`);

      this.lastScrollPosition = currentScrollPosition;
    },
    logClick(event) {
      console.log(`Link clicked: ${event.target.textContent}`);
    }
  }
};
</script>
