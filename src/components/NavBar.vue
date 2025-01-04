<template>
  <nav class="navbar" :class="{ 'navbar--hidden': !showNavbar }">
    <div class="navbar-toggle" @click="toggleNavbar">
      <span class="toggle-icon">&#9776;</span>
    </div>
    <h1 class="title">SOPHIE VU</h1>
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

      <button class="sublink contact-btn" @click="showContactDialog = true">
        Contact
      </button>

      <!-- Login/Logout Button -->
      <button class="sublink auth-btn" @click="authLogin">
        {{ loggedIn ? 'Logout' : 'Login' }}
      </button>
    </div>
  </nav>

  <!-- Contact Dialog -->
  <v-dialog
    v-model="showContactDialog"
    persistent
    max-width="600"
    transition="dialog-bottom-transition"
  >
    <template v-slot:default>
      <v-card>
        <v-card-title>
          <span>Contact</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="showContactDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <p>Email: <a href="mailto:sottvu@gmail.com">sottvu@gmail.com</a></p>
          <p>LinkedIn: 
            <a
              href="https://www.linkedin.com/vusophie"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linkedin.com/vusophie
            </a>
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="showContactDialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>

  <v-dialog
  v-model="showLoginDialog"
  persistent
  max-width="600"
  transition="dialog-bottom-transition"
  >
    <template v-slot:default>
      <v-card>
        <v-card-title>
          <span>Login</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="showLoginDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-form
            v-model="form"
            @submit.prevent="onSubmit"
          >
            <v-text-field
              v-model="email"
              :readonly="loading"
              :rules="[required]"
              class="mb-2"
              label="Email"
              clearable
            ></v-text-field>

            <v-text-field
              v-model="password"
              :readonly="loading"
              :rules="[required]"
              label="Password"
              placeholder="Enter your password"
              clearable
            ></v-text-field>

            <br>

            <v-btn
              :disabled="!form"
              :loading="loading"
              color="success"
              size="large"
              type="submit"
              variant="elevated"
              block
            >
              Sign In
            </v-btn>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="showLoginDialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>

  <keep-alive>
    <RouterView />
  </keep-alive>
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
        { text: "About", route: '/' },
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
  font-size: 3em;
  font-weight: 100;
}

.navbar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
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
  gap: 1rem;
}

.sublink {
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  color: #1f2f76;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-family: "Overpass", serif;
  font-size: 1.1em;
  font-weight: 100;
}

.sublink:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.sublink.active {
  background-color: #1f2f76;
  color: #ffffff;
}

.auth-btn {
  background-color: #ff4081;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.auth-btn:hover {
  background-color: #e73370;
}

/* Mobile View */
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
    gap: 0.5rem;
    width: 100%;
  }
}
</style>
