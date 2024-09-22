<template>
    <CContainer class="navbar">
        <p class="title">Sophie Illustrations</p>
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
        display: flex;
        flex-direction: column;
        align-items: center;
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
</style>
