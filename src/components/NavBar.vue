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

      <div class="sublink contact-btn" @click="showContactDialog = true">contact</div>
      <div class="sublink auth-btn" @click="authLogin">{{ loggedIn ? 'logout' : 'login' }}</div>
    </div>

    <hr class="dotted">

  </nav>

  <v-dialog v-model="showContactDialog" persistent max-width="600">
    <template v-slot:default>
      <v-card>
        <v-card-title class="gradient-bg">
          <span class="text-h5">Let's Connect!</span>
          <v-btn icon dark @click="showContactDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <p>I’d love to hear from you! Email me at <a href="mailto:sottvu@gmail.com" class="link">sottvu@gmail.com</a> or connect with me on <a href="https://www.linkedin.com/vusophie" target="_blank" class="link">LinkedIn</a>.</p>
          <p>Let’s chat about coding, design, or any creative ideas!</p>
        </v-card-text>
        <v-img src="../../public/photos/2.png" max-height="200px" />
      </v-card>
    </template>
  </v-dialog>

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
      activeIndex: null, // Default to no active index
      showContactDialog: false,
      showLoginDialog: false,
      loggedIn: false, // Track user login state
      loading: false, // Loading state for login form
      form: false, // Form validity state
      email: '', // Email input
      password: '', // Password input
      links: [
        { text: "about", route: '/about' },
        { text: 'sketchbook', route: '/' },
        { text: 'digital', route: '/digital' },
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
  },
  watch: {
    $route(to) {
      const activeIndex = this.links.findIndex(link => link.route === to.path);
      this.activeIndex = activeIndex !== -1 ? activeIndex : null;
    },
  },
  mounted() {
    // Set initial active link on page load
    const activeIndex = this.links.findIndex(link => link.route === this.$route.path);
    this.activeIndex = activeIndex !== -1 ? activeIndex : null;
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
  width: 100%;
  margin: 3% 0;
  border-top: 3px dotted #f35f71;
}

.title {
  font-family: 'Basteleur', sans-serif;
  font-size: 8vh;
  font-weight: 400;
  color: #5790f4;
  text-align: center;
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
  width: inherit;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f9f7f3;
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: transform 0.3s ease, background-color 0.3s ease;
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
  color: #5790f4; /* Default link color */
  font-size: 1.1rem;
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  transition: color 0.3s ease; /* Smooth color change */
}

.sublink:hover {
  color: #f35f71; /* Hover color */
  background-color: transparent; /* No bubble effect */
}

.sublink.active {
  color: #f35f71; /* Active link color */
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
  color: #2575fc; /* Hover color for buttons */
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

