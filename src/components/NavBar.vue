<template>
  <nav class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
    <div class="navbar-toggle" @click="toggleNavbar">
      <span class="toggle-icon">&#9776;</span>
    </div>
    <h1 class="title">
      <RouterLink class="title-link" :to="'/'">SOPHIE VU</RouterLink>
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

      <button class="sublink contact-btn" @click="showContactDialog = true">Contact</button>
      <button class="sublink auth-btn" @click="authLogin">{{ loggedIn ? 'Logout' : 'Login' }}</button>
    </div>
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
      activeIndex: 0,
      showContactDialog: false,
      showLoginDialog: false,
      loggedIn: false, // Track user login state
      loading: false, // Loading state for login form
      form: false, // Form validity state
      email: '', // Email input
      password: '', // Password input
      links: [
      { text: "About", route: '/about' },
      { text: 'Sketchbook', route: '/sketchbook' },
        { text: 'Digital', route: '/digital' },
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
        // Logout Logic
        this.loggedIn = false;
        this.showLoginDialog = false;
        alert('Logged out successfully!');
      } else {
        // Login Logic
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
};

</script>

<style scoped>
.title {
  font-family: "Vibur", serif;
  font-size: 2.5em;
  font-weight: 400;
  color: #1f2f76;
}

.title-link {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

.title-link:hover {
  color: #2575fc;
}

.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f4f4f4;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
  color: #1f2f76;
  padding: 0.6rem 1rem;
  border-radius: 25px;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.sublink:hover {
  background-color: rgba(31, 47, 118, 0.1);
}

.sublink.active {
  background-color: #1f2f76;
  color: white;
}

.auth-btn, .contact-btn {
  background-color: #2575fc;
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.auth-btn:hover, .contact-btn:hover {
  background-color: #1f2f76;
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

