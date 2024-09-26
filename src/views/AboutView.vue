<template>
  <CContainer fluid class="about">
    <CContainer fluid sm class="left">
      <h3>SOPHIE / Visual artist</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Proin vehicula ornare elit, in vestibulum neque dignissim nec. 
        Praesent tincidunt imperdiet neque sit amet porttitor. 
        Curabitur auctor facilisis est nec accumsan. Praesent consectetur 
        sem nisi, in tincidunt enim venenatis varius. Aenean vel dictum 
        nibh, vitae rutrum est. In cursus ac lectus at auctor. Nunc 
        sollicitudin diam iaculis arcu convallis, rutrum gravida 
        purus pulvinar. In facilisis facilisis euismod.

        <hr>

        Pellentesque vitae maximus magna, non laoreet leo. 
        Morbi erat sapien, pharetra in massa eu, laoreet hendrerit 
        enim. Curabitur suscipit molestie malesuada. Nam at nunc dui. 
        Nunc sed ultricies lacus. Nulla id aliquet dolor, molestie 
        sagittis nisi. In vel turpis a dui tincidunt vulputate ut sit 
        amet metus. Etiam tempor urna justo, ut vehicula risus placerat 
        id. Ut vel neque at dui maximus placerat. Sed molestie porttitor 
        dolor, porttitor dapibus mauris bibendum ac. Pellentesque vitae 
        luctus dolor. Pellentesque hendrerit, diam imperdiet cursus congue, 
        felis nulla hendrerit odio, vitae fermentum risus massa posuere mi. 
        Sed dapibus consequat libero, vel sodales lacus ornare non. Nulla 
        eleifend nulla sit amet aliquam placerat.


      </p>
    </CContainer>
    <CContainer fluid lg class="right">
      <div class="contact-info">
        <p><strong>Sophie Illustration</strong></p>
        <p class="contact"><strong>CONTACT</strong></p>
        <p><a href="https://www.linkedin.com/in/vu-sophie/" target="_blank">LinkedIn</a></p>
        <p><a href="https://www.instagram.com/soupvu" target="_blank">Instagram</a></p>
      </div>
    </CContainer>
  </CContainer>
</template>

<style>
.about {
  margin-top: 21vh;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: left;
  padding: 20px;
  margin-top: 60vh;
  text-align: left;
}

.left {
  flex-basis: 60%;
  padding: 40px;
}

.right {
  flex-basis: 30%;
  padding: 40px;
}

.contact-info {
  display: flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;
  align-content: center;
}

.contact {
  font-size: 20px;
  margin-bottom: 20px;
}

</style>
