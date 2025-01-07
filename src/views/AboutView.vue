<template>
  <v-container fluid class="about">
    <v-row justify="center">
      <v-col>
          <img src="../../public/photos/hello.gif" class="animation" />
          <div class="about-container">
            <p>
              <b>I'm Sophie!</b> 
              I like creating art and am currently based in Toronto, ON. 
              I do a lot of character design, sketching, and abstract art. 
              Lately, I’ve been loving digital art and animation! 
              <br />
            </p>
            <p>
              When I’m not making art, I’m busy coding. I love designing and building user interfaces for websites, and this site is one of my creations! 
            </p>
            <p>          
              You can contact me directly at: <br>
            <b><a href="mailto:sottvu@gmail.com">sottvu@gmail.com</a></b>
          </p>
        </div>

          <hr class="dotted">

          <div class="tools-container">
            <div class="column">
              <img src="../../public/photos/landing.jpg" class="doodle" />

            </div>

            <div class="column">
              <h1>TRADITIONAL TOOLS</h1>
              <p class="item">• Mont Marte Colour Pencils Premium</p>
              <p class="item">• Sketchbook Paper 8 1/2'' x 11'' (22cm x 28.5cm)</p> <br>
              <hr class="dotted" style="width:100%"> <br>
              <h1>DIGITAL TOOLS</h1>
              <p class="item">• Procreate Software</p>
              <p class="item">• Procreate Gesinki Ink Brush</p>
              <p class="item">• Procreate Eaglehawk Brush</p>
              <p class="item">• Procreate Soft Brush</p>
            </div>
          </div>

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
@font-face {
  font-family: 'Basteleur';
  src: url('../../public/Basteleur-Bold.otf') format('opentype');
  font-weight: normal; 
  font-style: normal; 
}

.about {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 25%;
}

.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin: 5% 0;
  padding: 0 25%;
  text-align: center;
  width: 100%;
}

.tools-container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-items: center;
  margin: 5% 0%;
  text-align: left;
  width: 100%;

  img {
    width: 25vw;
    margin-right: 10em;
  }

  h1 {
    font-family: 'Basteleur', sans-serif;
    font-size: 1.5rem;
    color: #5790f4;
  }

  .item {
    font-size: 1.2rem;
    color: black;
  }

  .column {
    width: 50%;
  }
}

p {
  font-size: 1.2rem;
  line-height: 1.8;
  font-family: "Roboto Mono", monospace;
  margin: 1% 0;
}

a {
  color: black;
  text-decoration: none;
}

.animation {

  width: 25vw;
}


hr.dotted {
  width: 100%;
  margin: 3% 0;
  border-top: 3px dotted #f35f71;
}

</style>
