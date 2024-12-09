<template>
  <div class="contact-section">
    <card class="card-section">
      <h1>Say Hi</h1>
      <form ref="form" @submit.prevent="sendEmail">
        <div class="form-group">
          <KInput
            class="form-input"
            :style="{ width: '290px' }"
            name="name"
            v-model="user_name"
            placeholder="Name"
          />
        </div>
        <div class="form-group">
          <KInput
            class="form-input"
            :style="{ width: '290px' }"
            name="email"
            v-model="user_email"
            placeholder="Email Address"
          />
        </div>
        <div class="form-group">
          <KTextarea
            class="form-input"
            :style="{ width: '290px' }"
            name="message"
            v-model="user_message"
            placeholder="Your Message"
            :rows="4"
          />
        </div>
        
        <!-- reCAPTCHA Widget -->
        <div class="form-group">
          <div ref="recaptcha"></div>
        </div>
        
        <div class="example-col">
          <kButton :style="{ width: '100px' }" id="submit-btn">Submit Form</kButton>
        </div>
      </form>
    </card>
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
  margin-top: 10em;
  height: 100vh;
  width: auto;
}

.form-input {
  margin: 10px 15px;
  border-radius: 0px;
  padding: 10px 0px;
}

#submit-btn {
  margin: 10px 0px;
  padding: 10px 20px;
  background-color: lightcoral;
}

.card-section {
  background-color: white;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-family: "Belanosima", sans-serif;
  color: #1f2f76;
  font-size: 2em;
  margin-bottom: 1em;
}

.example-col {
  display: flex;
  justify-content: center;
}

.form-group {
  margin-bottom: 1em;
}

.k-button {
  background-color: lightcoral;
  color: white;
  border-radius: 4px;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}

.k-button:hover {
  background-color: #ff5a5f;
}
</style>
