<template>
    <div class="image-view">
      <img :src="imagePath" :alt="title" class="image-view__image" />
      <h2 class="image-view__title">{{ title }}</h2>
      <p class="image-view__description">{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageView',
    props: {
      imagePath: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .image-view {
    text-align: center;
    margin: 20px;
  }
  
  .image-view__image {
    max-width: 100%;
    height: auto;
  }
  
  .image-view__title {
    margin-top: 10px;
    font-size: 24px;
    font-weight: bold;
  }
  
  .image-view__description {
    margin-top: 10px;
    font-size: 16px;
    color: #666;
  }
  </style>
  