import { RouterLink, RouterView } from 'vue-router'

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/traditional">Traditional</RouterLink>
        <RouterLink to="/digital">Digital</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
</template>
