<template>
  <nav class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
    <div class="navbar-toggle" @click="toggleNavbar">
      <span class="toggle-icon">&#9776;</span>
    </div>
    <h1 class="title">
      <RouterLink class="title-link" :to="'/'">
        SOPHIE'S <br> ART
      </RouterLink>
    </h1>
    <div class="nav-links">
      <RouterLink
        v-for="(link, index) in links"
        :key="index"
        class="sublink"
        :to="link.route"
        :class="{ 'active': activeIndex === index }"
        @click="setActiveLink(index)"
      >
        {{ link.text }}
      </RouterLink>
    </div>

    <hr class="dotted">
  </nav>

  <v-dialog v-model="showLoginDialog" persistent max-width="600">
    <template v-slot:default>
      <v-card>
        <v-card-title>Login</v-card-title>
        <v-btn icon dark @click="showLoginDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        <v-card-text>
          <v-form v-model="form" @submit.prevent="onSubmit">
            <v-text-field v-model="email" :readonly="loading" :rules="[required]" label="Email" clearable class="mb-2"></v-text-field>
            <v-text-field v-model="password" :readonly="loading" :rules="[required]" label="Password" placeholder="Enter your password" clearable></v-text-field>
            <v-btn :disabled="!form" :loading="loading" color="primary" size="large" type="submit" block>Sign In</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>

  <keep-alive><RouterView /></keep-alive>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: true,
      activeIndex: null,
      showContactDialog: false,
      showLoginDialog: false,
      loggedIn: false,
      loading: false,
      form: false,
      email: '',
      password: '',
      links: [
        { text: "about", route: '/about' },
        { text: 'sketchbook', route: '/' },
        { text: 'admin upload', route: '/adminupload' },
        { text: 'contact', route: '/sayhi' },
      ],
    };
  },
  methods: {
    setActiveLink(index) {
      this.activeIndex = index;
    },
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    },
    authLogin() {
      if (this.loggedIn) {
        this.loggedIn = false;
        this.showLoginDialog = false;
        alert('Logged out successfully!');
      } else {
        this.showLoginDialog = true;
      }
    },
    onSubmit() {
      if (!this.form) return;
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loggedIn = true;
        this.showLoginDialog = false;
        alert('Login Successful!');
      }, 2000);
    },
    required(value) {
      return !!value || 'Required.';
    },
    scrollFunction() {
      if (this.showNavbar) {
        const navbar = document.querySelector('.navbar');
        const title = document.querySelector('.title');
        const dotted = document.querySelector('.dotted');
        if (window.scrollY > 80) {
          title.style.fontSize = '25px';
          navbar.style.height = '20%';
          navbar.style.marginBottom = '5%';
          title.style.paddingTop = '0.5%';
          navbar.style.zIndex = 1000;
          dotted.style.visibility = 'hidden';
        } else {
          title.style.fontSize = '8vh';
          navbar.style.height = '';
          navbar.style.backgroundColor = '#f9f7f3';
          dotted.style.visibility = 'visible';
          title.style.paddingTop = '5%';
          dotted.style.visibility = 'visible';
        }      
      }
    },      
  },
  watch: {
    // Watch for route changes to detect if we are on the /image/:id route
    $route(to) {
      const activeIndex = this.links.findIndex(link => link.route === to.path);
      this.activeIndex = activeIndex !== -1 ? activeIndex : null;

      // Hide navbar on image route
      if (to.name === 'image') {
        this.showNavbar = false;
      } else {
        this.showNavbar = true;
      }
    },
  },
  mounted() {
    // Check initial route on mount
    const activeIndex = this.links.findIndex(link => link.route === this.$route.path);
    this.activeIndex = activeIndex !== -1 ? activeIndex : null;

    // Add scroll event listener
    window.addEventListener('scroll', this.scrollFunction);

    // Hide navbar if we are on the image route
    if (this.$route.name === 'image') {
      this.showNavbar = false;
    }
  },
  beforeDestroy() {
    // Remove scroll event listener
    window.removeEventListener('scroll', this.scrollFunction);
  },
};
</script>

<style scoped>
@font-face {
  font-family: 'Basteleur';
  src: url('../../public/Basteleur-Bold.otf') format('opentype');
  font-weight: normal; 
  font-style: normal;
}

hr.dotted {
  width: 90%;
  margin: 3% 0;
  border-top: 3px dotted #f35f71;
}

.title {
  font-family: 'Basteleur', sans-serif;
  font-size: 8vh;
  font-weight: 400;
  color: #5790f4;
  text-align: center;
  transition: font-size 0.3s ease;
  padding-top: 5%;
}

.title-link {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

.title-link:hover {
  color: #f35f71;
}

.navbar {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f7f3;
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: padding 0.3s ease, background-color 0.3s ease;
}

.navbar--hidden {
  transform: translateY(-100%);
}

.navbar-toggle {
  display: none;
  cursor: pointer;
}

.toggle-icon {
  font-size: 1.5rem;
  color: #1f2f76;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.sublink {
  text-decoration: none;
  color: #5790f4;
  font-size: 1.1rem;
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  transition: color 0.3s ease;
}

.sublink:hover {
  color: #f35f71;
  background-color: transparent;
}

.sublink.active {
  color: #f35f71;
}

.auth-btn,
.contact-btn {
  color: #5790f4;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.auth-btn:hover,
.contact-btn:hover {
  color: #2575fc;
}

.gradient-bg {
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: white;
}

.link {
  color: #2575fc;
  text-decoration: underline;
}

.link:hover {
  color: #6a11cb;
}

.rounded-circle {
  border-radius: 50%;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 1rem;
  }

  .navbar-toggle {
    display: block;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style>
