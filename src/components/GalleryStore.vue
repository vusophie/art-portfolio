<template>
    <div class="gallery-store">
        <GalleryItem
            v-for="photo in filteredPhotos"
            :key="photo.id"
            :photo="photo"
        />
    </div>
</template>

<script>
import GalleryItem from './GalleryItem.vue';
import photos from '../photos.json';

export default {
    name: 'GalleryStore',
    components: {
        GalleryItem,
    },
    props: {
        initialTab: {
            type: String,
        },
    },
    data() {
        return {
            photos,
            filterTab: this.initialTab,
        };
    },
    computed: {
        filteredPhotos() {
            if (this.filterTab === 'all') {
                return this.photos;
            }
            return this.photos.filter(photo => photo.type === this.filterTab);
        },
    },
    methods: {
        filterByTab(tabName) {
            this.filterTab = tabName;
        },
    },
};
</script>

<style scoped>
.gallery-store {
    display: flex;
    flex-wrap: wrap;
}
</style>