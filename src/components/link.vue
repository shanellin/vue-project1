<template lang="html">
  <section class="social_link_box d-flex">
    <div class="social_link">
      <hr/>
      <a :href="item.link" target="_blank" v-for="(item, index) in introduce_link"><img class="single_link pointer mx-3" :title="item.text" :src="item.pic"></a>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      introduce_link:[{text:'查看BlueNet LineBot', pic:require( '../assets/line.png'), link:'https://line.me/R/ti/p/%40rqz0882f'}, {text:'前往LinkedIn', pic:require( '../assets/linkedin.png'), link:'https://www.linkedin.com/in/%E8%A3%95%E8%BB%92-%E6%9E%97-a2b32215a/'},
                      {text:'前往github', pic:require( '../assets/git.jpg'), link:'https://github.com/shanellin/vue-project1'}, {text:'前往gmail', pic:require( '../assets/gmail.jpg'), link:'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=shane.sandy123@gmail.com'}]
    }
  }
}
</script>

<style media="screen" lang="sass">
  .social_link_box
    height: 200px
    .social_link
      hr
        width: 100%
        margin-top: 0em
        margin-bottom: 2em
      margin: auto
      .single_link
        height: 50px
        width: 50px
        border-radius: 25px
        border: 1px solid rgb(190, 168, 143)
        float: left
        padding: 3px
      .single_link:hover
        transform: scale(1.1,1.1)
        transition: all 0.2s ease-out
</style>
