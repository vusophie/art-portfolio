<template>
  <CContainer fluid class="about">
    <div class="title">
      
      <h1>Hi. I'm Sophie.</h1>
      <div class="doodle-wrapper">
          <img src="../../public/photos/id.png" class="doodle" />
      </div>
    </div>

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
      <button>Recent Artwork</button>
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
          <v-card-text>
            <iframe
              :src="pdfPath"
              width="100%"
              height="600px"
              style="border: none;"
            ></iframe>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>

    <div class="scroll-line" id="scroll-line"></div>

    <div class="about-content">
      <div class="doodle-wrapper">
        <img src="../../public/photos/2.png" class="doodle" id='doodleConnect'/>
      </div>
      <h1>Let's Connect!</h1>
      <p>
        I’d love to hear from you! You can email me at <code>@sottvu@gmail.com</code> or LinkedIn at <code>@vusophie</code>.
        Whether it’s to chat about art, coding, or anything in between, don’t hesitate to reach out!
      </p>
    </div>
  </CContainer>
</template>

<style scoped>

.about {
  min-height: 100vh;
  display: flex;
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
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 2em;
}

.about-content p {
  max-width: 60%;
}

.doodle-wrapper {
  transition: transform 100ms;
  will-change: transform;
}


.doodle:hover, .doodle:focus {
  transition: transform 100ms;
  transform: translateX(-10px);

}

.doodle {
  width: 25vw;
  height: auto;
  object-fit: cover;
  margin-bottom: 1em;
}

#doodleConnect {
  height: 15em;
  width: auto;
}


button {
  margin-top: 1em;
  padding: 0.5em 1.5em;
  font-size: 1em;
  cursor: pointer;
}

@media (max-width: 768px) {
  .title-text {
    font-size: 2.5em;
  }

  .intro {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .about-content {
    padding: 2em;
    width: 80%;
  }
}

@media (max-width: 480px) {
  .title-text {
    font-size: 2em;
  }

  .intro h1 {
    font-size: 1.8em;
  }

  .about-content {
    width: 90%;
  }
}
</style>

<script>
  export default {
    mounted() {
      const lines = document.querySelectorAll('.scroll-line');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            } else {
              entry.target.classList.remove('active');
            }
          });
        },
        {
          threshold: 0.5
        }
      );
    },
    data() {
      return {
        dialog: false,
        pdfPath: '../../public/docs/Resume_Sophie_Vu.pdf', // Adjust path if necessary
      };
    },
  }
</script>
