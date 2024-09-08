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

<style>
    nav {
        width: 100%;
        font-size: 12px;
        text-align: center;
        margin-top: 2rem;
    }
  
    nav a.router-link-exact-active {
        color: blue;
    }
    
    nav a.router-link-exact-active:hover {
        background-color: blue;
    }
    
    nav a {
        display: inline-block;
        padding: 0 1rem;
        border-left: 1px solid var(--color-border);
    }
    
    nav a:first-of-type {
        border: 0;
    }

    /* @media (min-width: 1024px) {
        nav {
            text-align: left;
            margin-left: -1rem;
            font-size: 1rem;

            padding: 1rem 0;
            margin-top
            : 1rem;
        }
    } */
</style>