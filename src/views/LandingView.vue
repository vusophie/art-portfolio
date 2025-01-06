<template>


    <CContainer fluid class="about">
      <div class="title">
        <div class="intro">
          <h1>{{ greeting }} This website is my art portfolio. I’m excited to showcase my art and hope you enjoy it as much as I’ve enjoyed creating it.</h1>
          <div>
            <RouterLink :to="'/about'">
              <v-btn height="48">
                Learn More About Me
              </v-btn>
            </RouterLink>
              

              <RouterLink :to="'/sketchbook'">
                <v-btn
                  class="flex-grow-1"
                  height="48"
                  variant="tonal"
                >
                  See My Recent Artwork
                </v-btn>
              </RouterLink>
              
          </div>
        </div>
            <img src="../../public/photos/landing.jpg" class="doodle" />
      </div>
      
  
      
  
      
    </CContainer>
  </template>
  
  <style scoped>
  
  .divider {
    display: flex;
    flex-direction: row;
  }
  
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
    width: 75%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 10% 5% 0% 2%;
    text-align: left;
  
    h1 {
      font-family: "Overpass", serif;
      font-size: 2em;
    }
  
    .doodle {
      width: 25vw;
      height: auto;
    }
  }
  
  .intro {
    display: flex;
    width: 60%;
    flex-direction: column;
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
      computed: {
        greeting() {
          const currentHour = new Date().getHours();
          if (currentHour >= 0 && currentHour < 12) {
            return "Good morning!";
          } else if (currentHour >= 12 && currentHour < 16) {
            return "Good afternoon!";
          } else {
            return "Good evening!";
          }
        },
      },
      data() {
        return {
          dialog: false,
          pdfPath: '../../public/docs/Resume_Sophie_Vu.pdf', 
        };
      },
    }
  </script>
  