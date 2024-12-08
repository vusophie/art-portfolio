<template>
  <CContainer fluid class="about">
    <CContainer fluid sm class="left">
      <div class="title">
        <img src="../../public/icons/star.svg" class="first-star"/>
        <div class="title-text">
          <h1>Hi. I'm Sophie.<br>
          A Developer. </h1>
        </div>
        
        <img src="../../public/icons/star.svg" class="second-star"/>
      </div>
      
      <div class="intro">
        <p>
          Welcome to my art portfolio website! <br>
          While I primarily work with traditional art, I’m also exploring digital art and animation.
        </p>
      </div>
    </CContainer>
  </CContainer>
</template>

<style>
.about {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
}

.title {
  margin-top: 10em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.first-star, .second-star {
  margin: 0;
  width: 3rem;
  height: auto;
}

.first-star {
  margin-top: 15em;
}

.second-star {
  margin-top: -15em;
}

.intro {
  margin-top: 2.5em;
  line-height: 2.5em;
  font-size: 1.1em;
  font-weight: 600;
}

.title-text h1 {
  line-height: 1em;
  font-size: 8rem;
  margin: 0;
  display: inline-block;
  vertical-align: middle;
}

</style>
