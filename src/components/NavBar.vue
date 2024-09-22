<template>
    <CContainer 
      class="navbar"
      :class="{ 'navbar--hidden': !showNavbar }">
      <RouterLink to="/" class="title">Sophie Illustrations</RouterLink>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/traditional">Traditional</RouterLink>
        <RouterLink to="/digital">Digital</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </CContainer>
    <RouterView />
  </template>
  
  <style>
  .navbar {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
    z-index: 1000;
  }
  
  .navbar--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
  }
  
  .title {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
    transform: rotate(-12deg);
  }
  
  nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-size: 12px;
    text-align: center;
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
  