<template>
  <div id="main-content" class="main-content" :style="{marginTop:mainMarginTop + 'px'}">
    <div class="left-column p-3 pt-3 pl-3 pl-sm-4 border-right border-secondary" :style="{height:columnHeight}">
      <div class="left-column-select">
        <div class="w-80 ml-1 pt-1 mt-1" v-for="(item, index) in leftNavigation">
          <h5 class="text-center textOverflow finger border border-secondary rounded left-font-color py-1" :style="[((left_Hover.num >= left_Hover.compensate[index]) && (left_Hover.num < left_Hover.compensate[index+1])) ? {'background':'rgba(0, 0, 0, 0.82)','color':'white'} : '']" data-toggle="collapse" :href="'#collapseExample' + index">{{item.title}}</h5>
          <div class="collapse" :id="'collapseExample' + index">
            <h6 class="text-left pl-4 mt-2 textOverflow text-secondary left-font-bigger finger" :style="[left_Hover.num == (in_index + left_Hover.compensate[index]) ? {'background':'#ffc107','border-radius':'8px'} : '']" v-for="(in_item, in_index) in item.content" @click="moveToArticle(in_item)">{{in_index+1}}、{{in_item}}</h6>
          </div>
        </div>
      </div>
      <div class="w-80 ml-1" style="position:relative;bottom:30px;height:30%">
        <div style="position:absolute;bottom:0px;width:100%;">
          <h3 class="text-left font-weight-bold">{{introduce.name}}</h3>
          <h5 class="text-left">{{introduce.describe}}</h5>
        </div>
      </div>
      <div class="left-square" @click="LeftColumn_move()"><img :src="LeftRightPic" alt="左側欄進出"></div>
    </div>
    <div class="right-column" :style="{height:columnHeight, overflowY:'scroll'}">
      <div class="p-1 p-sm-3" style="width:100%;background-color:white">
        <div class="w-90 ml-0.5 border rounded mt-1 p-2 py-3 p-sm-3 rightContent" style="border-color:rgb(209, 224, 221)" v-for="(item, index) in rightContent">
          <h3 class="text-left pl-2">{{item.title}}</h3>
          <hr class="border-secondary" width="100%" align="left">
          <article class="right-article p-2 pl-sm-4" v-for="(item, index) in rightContent[index].content" :data-title="item.inTitle">
            <h3 class="text-left rounded"><span class="badge badge-secondary p-2 px-sm-4" style="font-weight:normal">{{item.inTitle}}</span></h3>
            <div class="w-90 ml-0.5 p-1 pl-sm-3 pr-sm-3 text-left border-left border-secondary" style="height:auto;">
              <span class="w-100 font-weight-bold articleFont-title">運用技術 :
                <span class="badge badge-pill badge-warning text-dark p-2 px-3 font-weight-bold mr-1" style="font-weight:normal" v-for="(item, index) in item.inSkill">{{item}}</span>
              </span>
              <br>
              <div class="w-100 font-weight-bold articleFont-title">功能說明 :</div>
              <div class="w-100 d-sm-flex">
                <div class="flexslider w-100 d-flex">
                  <ul class="slides m-auto fn_pic">
                    <li><img src="../assets/logo.png" alt="" width="350" height="250"></li>
                    <li><img src="../assets/logo.png" alt="" width="350" height="250"></li>
                    <li><img src="../assets/logo.png" alt="" width="350" height="250"></li>
                  </ul>
                </div>
                <div class="col-12 col-sm-8 articleFont-content fn_explain  px-0 px-sm-2" v-html="item.inContent"></div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    <div class="rounded backTop" @click="backToTop()"><img src="../assets/up-arrow.png" alt="至頂"></div>
  </div>
</template>
<script>
//import HelloWorld from '@/components/HelloWorld.vue';
import { mapState } from 'vuex';
export default {
  data() {
    return {
      //公用
      mainMarginTop: 0,
      columnHeight:0,
      indexChinese:['一','二','三','四','五','六','七'],
      articleTop:[],
      left_Hover:{num:0, compensate:[0, 1, 7, 13]},
      //左側欄
      leftNavigation:[{title:'安排行程功能', content:['行事曆']},{title:'交通工具功能', content:['計程車','大眾運輸','公車','捷運','火車/高鐵','腳踏車']}
      ,{title:'資訊服務功能', content:['新聞','美食','景點','住宿','電視台']}],
      LeftRightPic:require( '../assets/arrow-right.png'),
      //右側欄
      rightContent:[{title:'安排行程功能', content:[{inTitle:'行事曆', inSkill:[], inContent:''}]},{title:'交通工具功能', content:[{inTitle:'計程車', inSkill:[], inContent:''},{inTitle:'大眾運輸', inSkill:[], inContent:''},{inTitle:'公車', inSkill:[], inContent:''},
                    {inTitle:'捷運', inSkill:[], inContent:''},{inTitle:'火車/高鐵', inSkill:[], inContent:''},{inTitle:'腳踏車', inSkill:[], inContent:''}]},{title:'資訊服務功能', content:[{inTitle:'新聞', inSkill:[], inContent:''},{inTitle:'美食', inSkill:[], inContent:''},{inTitle:'景點', inSkill:[], inContent:''},
                    {inTitle:'住宿', inSkill:[], inContent:''},{inTitle:'電視台', inSkill:[], inContent:''}]}]
    };
  },
  created: function () {
    const that = this;
    DocStyle('nav').backgroundColor = `rgba(${0}, ${0}, ${0}, ${0.82})`;
    $(() => {
      $('.right-column').scroll(() => {
        for (let index in that.articleTop) {
          if (~~that.articleTop[index] > ($('.right-column').scrollTop() - 50)) {
            that.left_Hover.num = parseInt(index);
            break;
          }
        }
      })
      that.mainMarginTop = ($('#navbarNavAltMarkup').css('display') == 'none' || $('#navbarNavAltMarkup').css('display') == 'flex') ? parseInt($('#nav').css('height').split('px')[0]) :
      parseInt($('#nav').css('height').split('px')[0]) - parseInt($('#navbarNavAltMarkup').css('height').split('px')[0]);
      that.columnHeight = `calc(100vh - ${that.mainMarginTop}px)`;
    })

  },
  watch:{
    'left_Hover.num': function(val){
      const that = this;
      if (that.left_Hover.num < that.left_Hover.compensate[1]) {
        $('#collapseExample0').addClass('show');
      }else if (that.left_Hover.num < that.left_Hover.compensate[2]) {
        $('#collapseExample1').addClass('show');
      }else {
        $('#collapseExample2').addClass('show');
      }
    }
  },
  methods: {
    moveToArticle(which){
      if (document.body.clientWidth < 465) {
        $('.left-column').animate({marginLeft: '-300px'}, 500);
      }
      for (let i=0; i < $('.right-article').length; i++) {
        if ($('.right-article').eq(i).data('title') == which) {
          $('.right-column').animate({scrollTop:(parseInt($('.right-article').eq(i).offset().top)-53+$('.right-column').scrollTop())}, '500');
        }
      }
    },
    backToTop(){
      $('.right-column').animate({scrollTop:0}, '500');
    },
    articleContent(which, data){
      switch (which) {
        case 'label':
          return `<div class="d-flex"><div>${data[0]}&nbsp;</div><div>${data[1]}</div></div>`
          break;
      }
    },
    LeftColumn_move(){
      if ($('.left-column').css('margin-left') == '0px') {
        $('.left-column').animate({marginLeft: '-300px'}, 500);
        this.LeftRightPic = require( '../assets/arrow-right.png');
      } else {
        $('.left-column').animate({marginLeft: '0px'}, 500);
        this.LeftRightPic = require( '../assets/arrow-left.png');
      }
    }
  },
  computed: {
    ...mapState(['introduce'])
  },
  mounted(){
    const that = this;
    //每篇文章的內容
    class PerArticle {
      constructor(content){
        this.content = content;
      }
      get mainContent(){
        return `功能主軸 :<br><div class="pl-4 py-1 py-sm-2">${this.contentMake()}</div>`;
      }
      get hardContent(){
        return `學習成果 :<br><div class="pl-4 py-2">${this.contentMake()}</div>`;
      }
      get finalContent(){
        return `感想 :<br><div class="pl-4 py-2">${this.contentMake()}</div>`;
      }
      contentMake(){
        let content = '', data_Transfer = '';
        for (let i in this.content) {
          data_Transfer = [`${parseInt(i)+1}.`, this.content[i].data];
          content += that.articleContent(this.content[i].which, data_Transfer);
        }
        return content;
      }
    }
    let header = '', harder = '', final = '';
    that.$store.dispatch('GetAPI', {url: 'https://jsonbin.org/me/blog', header: 'token 55c86832-71e5-476c-a9fd-98719984352f'}).then((res) => {//'/server/test'
      for (let i = 0; i < res.data.length; i++) {
        for (let j = 0; j < res.data[i].item.length; j++) {
          header = new PerArticle(res.data[i].item[j].header);
          harder = new PerArticle(res.data[i].item[j].harder);
          that.rightContent[i].content[j].inSkill = res.data[i].item[j].skill;
          that.rightContent[i].content[j].inContent = `${header.mainContent}${harder.hardContent}`;
        }
      }
      setTimeout(() => {
        $(".flexslider").flexslider({
          slideshowSpeed: 5000,
          animationSpeed: 500,
          touch: true
        });
        //計算每個article離top的高度
        $('.right-article').each((index) => {
          that.articleTop.push($('.right-article').eq(parseInt(index)).offset().top);
        })
      }, 500);
    }).catch((err) => {
      console.log(err);
    });
  }
};
</script>
<style media="screen" lang="sass">
  // @media (max-width: 465px)
  // @media (min-width: 465px) and (max-width: 924px)
  // @media (min-width: 924px)
  // .rightContent
  //   background: url("http://www.jituwang.com/uploads/allimg/130531/260202-1305310Q23651.jpg") fixed center
  .fn_explain
    margin: auto
  .fn_pic
    > li
      > img
        margin: auto
        max-width: 240px
  .flex-direction-nav a
    height: 55px !important
  .left-column-select
    height: 70%
    overflow-y: scroll
  .left-font-color:hover
    color: white
    background: rgba(0, 0, 0, 0.82)
    transition: 0.8s
  .left-font-bigger:hover, .left-hover
    font-size: 20px
  .article-carousel
    height: 150px
    > img
      margin: auto
  .backTop
    position: fixed
    right: 5%
    bottom: 5%
    width: 50px
    height: 50px
    z-index: 2
    background-color: transparent
  .flexslider
    z-index: 0
</style>
