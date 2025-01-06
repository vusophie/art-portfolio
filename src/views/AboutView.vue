<template>
  <v-container fluid class="about">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-6">
          <img src="../../public/photos/hello.gif" class="animation" />

          <v-card-text>
            <p>
              I’m Sophie! I like creating art and am currently based in Toronto, ON. I do a lot of character design, sketching, and abstract art. Lately, I’ve been loving digital art and animation!
              <br /><br />
              When I’m not making art, I’m busy coding. I love designing and building user interfaces for websites, and this site is one of my creations!
              <br /><br />
              If you’d like to see what else I’ve been up to, feel free to check out my resume.
              <br />
              You can contact me directly at:
              <a href="mailto:sottvu@gmail.com">sottvu@gmail.com</a>
            </p>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              color="primary"
              dark
              target="_blank"
              rel="noopener noreferrer"
              elevation="2"
            >
              View My Resume
            </v-btn>
          </v-card-actions>
          <img src="../../public/photos/pc.jpg" class="doodle" />

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 10%;
}

p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 0;
}

a {
  color: #1976d2;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.animation {

  width: 25vw;
}
</style>
