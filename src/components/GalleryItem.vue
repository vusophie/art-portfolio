<template>
    <div class="gallery-item">
        <div class="gallery-panel">
            <img :src="photo.filename.thumbnail" @error="handleImageError" :alt="photo.title">
        </div>
    </div>
</template>

<script>
export default {
    name: 'GalleryItem',
    props: {
        photo: {
            type: Object,
            required: true,
        },
    },
    methods: {
        // TODO
        handleImageError(event) {
        //     event.target.src = 'path/to/default-image.jpg'; 
        },
    },
};
</script>

<style scoped>
/* TODO
.gallery-item {
    margin: 10px;
}
.gallery-panel {
    display: flex;
    justify-content: center;
} */
</style>
