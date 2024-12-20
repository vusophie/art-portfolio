<template>
  <CContainer fluid class="about">
    <div class="title">
      <img src="../../public/icons/star.svg" class="first-star" />
      <div class="title-text">
        <h1>Hi. I'm Sophie.<br />
        A Developer.</h1>
      </div>
      <img src="../../public/icons/star.svg" class="second-star" />
    </div>

    <div class="intro">
      <img src="../../public/photos/id.png" class="id" />
      <div class="intro-text">
        <h1>Welcome to my art portfolio website!</h1>
        <p>
          Over the years, I've explored many forms of art, from traditional to digital, abstract pieces,
          and character design. Lately, I'm really enjoying sketching and animation, which allow me to
          bring my ideas to life in fun ways. This website is a digital portfolio where I can share my
          passion for art and the journey I've been on. I’m excited to showcase my work and hope you enjoy it!
        </p>
      </div>
    </div>
  </CContainer>
</template>

<style>
.about {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.title {
  margin-top: 8em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  padding-top: 5em;
  line-height: 2.5em;
  font-size: 1.1em;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  flex-wrap: wrap;
  gap: 2em;
}

.intro-text {
  display: flex;
  flex-direction: column;
  width: 65%;
  text-align: start;
}

.intro-text h1 {
  font-family: "Belanosima", sans-serif;
  font-style: normal;
  color: #1f2f76;
  font-size: 3em;
  line-height: 1.1em;
  margin-bottom: 1em;
}

.title-text {
  font-family: "Belanosima", sans-serif;
  font-style: normal;
  color: #1f2f76;
  line-height: 2em;
  font-size: 4rem;
  margin: 0;
  display: inline-block;
  vertical-align: middle;
}

.id {
  height: 20em;
  border-radius: 15em 15em 0em 0em;
  width: auto;
  max-width: 100%;
}

/* Media Queries for Mobile Responsiveness */
@media (max-width: 768px) {
  .title-text h1 {
    font-size: 2.5em;
  }

  .intro {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .intro-text {
    width: 100%;
    text-align: center;
  }

  .intro-text h1 {
    font-size: 2.5em;
  }

  .id {
    height: 15em;
    margin-bottom: 2em;
  }

  .first-star, .second-star {
    width: 2rem;
  }

  .first-star {
    margin-top: 8em;
  }

  .second-star {
    margin-top: -8em;
  }
}

@media (max-width: 480px) {
  .title-text h1 {
    font-size: 2em;
  }

  .intro-text h1 {
    font-size: 2em;
  }

  .intro {
    padding-top: 2em;
  }

  .id {
    height: 12em;
  }

  .first-star, .second-star {
    width: 1.5rem;
  }
}
</style>
