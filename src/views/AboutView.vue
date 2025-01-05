<template>
  <v-container fluid class="about">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-6">
          <img src="../../public/photos/hello.gif" class="animation" />

<<<<<<< HEAD
=======
    <div class="intro">
      <div class="doodle-wrapper">
          <img src="../../public/photos/7.png" class="doodle" />
      </div>
      <div class="intro-wrapper">
        <h1>This website is my digital portfolio. I’m excited to showcase my work and hope you enjoy it as much as I’ve enjoyed creating it.</h1>
        <div class="doodle-wrapper">
            <img src="../../public/photos/1.png" class="doodle" />
        </div>
      </div>
      
      
    </div>

    <div class="scroll-line" id="scroll-line">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10">
        <path d="M 0 5 Q 25 0, 50 5 Q 75 10, 100 5" stroke="red" stroke-width="2" fill="transparent"/>
      </svg>
    </div>
    
    <div class="about-content">
      <div class="doodle-wrapper">
        <img src="../../public/photos/recent.png" class="doodle" />
      </div>
      <h1>Over the years, I've explored many forms of art.</h1>
      <p>
        My artistic journey includes character design and abstract work. Lately, I’ve been loving sketching and animation!
      </p>
      <RouterLink :to="{ name: 'sketchbook' }">
        <v-btn
          color="deep-purple-darken-2"
          size="large"
          elevation="2"
        >
          Recent Artwork
        </v-btn>
      </RouterLink>
    </div>

    <div class="scroll-line" id="scroll-line"></div>

    <div class="about-content">
      <div class="doodle-wrapper">
          <img src="../../public/photos/computer.png" class="doodle" />
      </div>
      <h1>Did I mention I’m a developer too?</h1>
      <p>
        When I’m not making art, I’m busy coding. 
        I love designing and building user interfaces for websites, 
        and this site is one of my creations! 
        If you’d like to see what else I’ve been up to, feel free to check out my resume.
      </p>
      <v-btn
        color="deep-purple-darken-2"
        size="large"
        elevation="2"
        @click="dialog = true"
      >
        View My Resume
      </v-btn>
      <v-dialog v-model="dialog" max-width="800">
        <v-card>
          <v-card-title>
            <span class="text-h6">My Resume</span>
            <v-spacer></v-spacer>
            <v-btn icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
>>>>>>> 562a4d8e3bc3e3d09ba76a45b38b0076d3303c0a
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
          <img src="../../public/photos/computer.png" class="doodle" />

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
<<<<<<< HEAD
=======
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  position: relative;
  display: flex;
  width: 90%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 15% 5% 0% 10%;
  text-align: left;

  h1 {
    font-family: "Overpass", serif;
    font-size: 5em;
    margin-right: 20%;
  }

  .doodle {
    width: 10em;
    height: auto;
  }
}

.intro {
  display: flex;
  width: 90%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0% 5% 0% 5%;

  h1 {
    font-family: "Overpass", serif;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    text-align: left;
    font-size: 2.7em;
  }

  .intro-wrapper {
    margin-left: 25%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

    .doodle-wrapper {
      margin-right: 30%;
    }

    .doodle {
      align-self: flex-end;
      width: 8em;
      height: auto;
    }
  }

  .doodle-wrapper {
    margin-left: 5%;
    z-index: 1;
  }

  .doodle {
    width: 8em;
    height: auto;
  }
}


.about-content {
  display: flex;
  flex-direction: column;
>>>>>>> 562a4d8e3bc3e3d09ba76a45b38b0076d3303c0a
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
