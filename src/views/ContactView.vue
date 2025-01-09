<template>
  <div class="contact-section">
      <!-- <div class="contact-image">
        <img src="../../public/photos/pc.jpg" alt="Contact Image" />
      </div> -->
      <div class="contact-content">
        <h1>Get in Touch</h1>
        <h3>
          I’d love to hear from you! Email me at <a href="mailto:sottvu@gmail.com">sottvu@gmail.com</a> or connect with me on 
          <a href="https://www.linkedin.com/in/vu-sophie/" target="_blank">LinkedIn</a>. Let’s chat about coding, design, or any creative ideas!
        </h3>
        <form ref="form" @submit.prevent="sendEmail" class="contact-form">
          <div class="form-group">
            <KInput
              class="form-input"
              name="name"
              v-model="user_name"
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <KInput
              class="form-input"
              name="email"
              v-model="user_email"
              placeholder="Email Address"
            />
          </div>
          <div class="form-group">
            <KTextarea
              class="form-input"
              name="message"
              v-model="user_message"
              placeholder="Your Message"
              :rows="4"
            />
          </div>
          <div class="form-group">
            <div ref="recaptcha"></div>
          </div>
          <div class="form-group">
            <kButton class="submit-button">Send Message</kButton>
          </div>
        </form>
      </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import { Card } from "@progress/kendo-vue-layout";
import { Input, TextArea } from "@progress/kendo-vue-inputs";
import { Button } from "@progress/kendo-vue-buttons";
import "@progress/kendo-theme-default";
import { loadReCaptcha } from "vue-recaptcha-v3";  // Importing the vue-recaptcha-v3 package for CAPTCHA

export default {
  name: "ContactForm",
  components: {
    card: Card,
    KInput: Input,
    KTextarea: TextArea,
    kButton: Button,
  },
  data() {
    return {
      user_name: "",
      user_email: "",
      user_message: "",
      recaptchaToken: "",
    };
  },
  mounted() {
    // Initialize reCAPTCHA
    // loadReCaptcha("your-recaptcha-site-key");  // Replace with your reCAPTCHA site key
  },
  methods: {
    // Send email logic using emailjs
    sendEmail() {
      // if (!this.recaptchaToken) {
      //   alert("Please complete the CAPTCHA.");
      //   return;
      // }

      emailjs
        .sendForm(
          "service_24xxafl", // Replace with your EmailJS service ID
          "template_mo3qwej", // Replace with your EmailJS template ID
          this.$refs.form,
          "Au8LzJk-8BWTHPcwW" // Replace with your EmailJS user ID
        )
        .then(
          (result) => {
            console.log("Message sent successfully", result.text);
            alert("Your message has been sent successfully!");
            // Optionally, reset the form here
            this.$refs.form.reset();
          },
          (error) => {
            console.log("Error sending message", error.text);
            alert("An error occurred, please try again later.");
          }
        );
    },

    // Handle CAPTCHA token generation
    handleRecaptcha(token) {
      this.recaptchaToken = token;
    },
  },
};
</script>

<style scoped>
.contact-section {
  margin-top: 25%;
  padding: 2em 1em;
  display: flex;
  justify-content: center;
  font-family: "Roboto Mono", monospace;
}
.contact-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.contact-content {
  padding: 2em;
  flex: 1 1 400px;
}

h1 {
  font-size: 2em;
  color: #1f2f76;
  text-align: center;
  margin-bottom: 1em;
  font-family: "Roboto Mono", monospace;
}

h3 {
  font-size: 1.2em;
  margin-bottom: 1.5em;
  line-height: 1.6;
  font-family: "Roboto Mono", monospace;

}

h3 a {
  color: #ff5a5f;
  text-decoration: none;
}

h3 a:hover {
  text-decoration: underline;
}

.form-group {
  margin-bottom: 1.2em;
}

.form-input {
  width: 100%;
  padding: 0.75em;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  transition: border-color 0.3s;
    font-family: "Roboto Mono", monospace;

}

.form-input:focus {
  border-color: #ff5a5f;
  outline: none;
  box-shadow: 0 0 5px rgba(255, 90, 95, 0.5);
}

.submit-button {
  background-color: #ff5a5f;
  color: white;
  border-radius: 5px;
  padding: 0.8em 1.5em;
  font-size: 1em;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.submit-button:hover {
  background-color: #ff7a7f;
}

.submit-button:active {
  transform: scale(0.98);
}

@media (max-width: 768px) {
  .contact-content {
    padding: 1.5em;
  }

  h1 {
    font-size: 1.8em;
  }

  h3 {
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  .card-section {
    flex-direction: column;
  }

  .contact-content {
    padding: 1em;
  }

  h1 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 0.9em;
  }

  .submit-button {
    padding: 0.6em 1.2em;
  }
}
</style>
