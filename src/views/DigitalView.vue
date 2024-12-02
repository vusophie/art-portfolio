<template>
  <div class="digital">
    <GalleryList initialTab="digital" />
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router'; // Vue Router hooks to track route changes
import GalleryList from '../components/GalleryList.vue';

export default {
  name: 'Digital',
  components: {
    GalleryList,
  },

  // Lifecycle hook to run when the component is mounted
  mounted() {
    console.log("Digital component has been mounted!");
    // You can also perform any initialization or setup here
  },

  // Lifecycle hook to run when the component is about to be unmounted
  beforeUnmount() {
    console.log("Digital component will be unmounted!");
    // Cleanup logic, if necessary
  },

  // Optionally, you can use Vue Router lifecycle hooks to ensure the component is reloaded when navigating to the same route
  beforeRouteEnter(to, from, next) {
    // Prevent infinite loop by handling route correctly
    console.log("Navigating to Digital component");
    // You can handle other logic here if needed, but avoid window.location.reload()
    next();  // Ensure we call next to allow the navigation
  },

  beforeRouteLeave(to, from, next) {
    console.log("Leaving the Digital component");
    next();  // Ensure we call next to allow the navigation
  }
};
</script>

<style>
.digital {
  margin: 50vh 0vh 20vh 0vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
