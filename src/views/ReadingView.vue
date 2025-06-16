<template>
  <div>
      <main>
        <div class="reading">
            <div class="single-card">
              <div class="single-card-title">
                <p>Single Card Reading</p>
              </div>
                <img src="/img/card_back_no_bg.png" 
                class="single-card-back" 
                @click="goToReadingSingleView">
            </div>
            
            <div class="three-card">
                <div class="three-card-title">
                    <p>Three Card Reading</p>
                </div>
                <img src="/img/card_back_no_bg.png"
                class="three-card-back-a"
                @click="goToReadingThreeView">
                <img src="/img/card_back_no_bg.png"
                class="three-card-back-b"
                @click="goToReadingThreeView">
                <img src="/img/card_back_no_bg.png"
                class="three-card-back-c"
                @click="goToReadingThreeView">                
            </div>
        </div>
      </main>
  </div>
  </template>

<script>
  export default {
      methods: {
      goToReadingSingleView() {
        this.$router.push(`/reading/single`);
      },

      goToReadingThreeView() {
        this.$router.push(`/reading/three`);
      },
    },
  };
</script>
  
  <style>
  .single-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
  .single-card-title, .three-card-title {
    font-size: 25px;
    text-align: center;
  }

  .single-card-back {
    max-width: 200px;
  }

 .three-card-back-a, .three-card-back-b, .three-card-back-c {
    max-width: 200px;
  }

  .single-card-back:hover, .three-card-back-a:hover, 
  .three-card-back-b:hover, .three-card-back-c:hover {
    cursor: pointer;
    transform: translateY(-4px);
  }


  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
    }
  }
  </style>