
  <script>
  import photos from '../photos.json';
  
  export default {
    name: 'GalleryStore',
    props: {
      initialTab: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        filterTab: this.initialTab,
        photos,
      };
    },
    computed: {
      filteredPhotos() {
        if (this.filterTab === 'home') {
          return this.photos;
        }
        return this.photos.filter(photo => photo.type === this.filterTab);
      },
    },
    watch: {
      filteredPhotos(newPhotos) {
        this.$emit('filteredPhotos', newPhotos);
      },
    },
    created() {
      this.$emit('filteredPhotos', this.filteredPhotos);
    },
  };
  </script>
  