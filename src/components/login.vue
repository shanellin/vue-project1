<template id="main">
    <div class="container-fluid">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div :class="['carousel-item', index == 0 ? 'active' : '']" v-for="(item, index) in carouselIMG">
            <img class="" alt="First slide" :style="{height:'500px',backgroundImage: 'url(' + item + ')'}">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        carouselIMG:['./warm1.jpg', './warm2.png', './warm3.jpg']
      };
    },
    created: function () {
      // `this` points to the vm instance
      console.log('a is: ' + this.a)
    },
    methods: {
      order() {
      }
    },
    mounted(){
      $('.carousel').carousel();
    }
  };
</script>
<style media="screen" lang="sass">
  .carousel-inner
    height: 500px
  #carouselExampleIndicators
    margin-top: 10px
</style>
