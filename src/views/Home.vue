<template>
  <div class="home">
      <div class="container-fluid noPadding">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div :class="['carousel-item', index == 0 ? 'active' : '']" v-for="(item, index) in carouselIMG" style="height:100%;">
              <div class="backgroundIMG" alt="First slide" :style="{height:'100%',backgroundImage: 'url(' + item + ')'}"></div>
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
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  data() {
    return {
      carouselIMG:['http://www.d852.com/uploads/tuku/87439/vwhmsdv5z4v.jpg',
       'https://50plus.cwgv.com.tw/public/upload/articles/39/9339/preview/9339.png',
       'http://img3.xiazaizhijia.com/walls/20151202/1440x900_4a7370efa9456ca.jpg']
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
    $('.carousel').carousel({
      interval: 3000
    })
  }
};
</script>
<style media="screen" lang="sass">
  @media (max-width: 465px)
    .carousel-inner
      height: 250px
  @media (min-width: 465px) and (max-width: 924px)
    .carousel-inner
      height: 450px
  @media (min-width: 924px)
    .carousel-inner
      height: 650px

  #carouselExampleIndicators
    top: 0px
  .backgroundIMG
    background-size: cover
    background-repeat: no-repeat
    background-position: '0px -160px'
</style>
