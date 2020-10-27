<template>
  <div class="page">
      <header class="header">
          <div class="nav-wrapper">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <a class="navbar-brand" href="#"><img src="images/logo.png" alt=""></a>
                  <ul class="nav mr-lg-auto">
                      <!-- <li class="navbar-item" id="sport-tv">
                          <a class="liveLink nav-link header-nav" href="javascript:void(0)">
                              <span class="iconfont icontvroom text-white"></span>
                              <span class="nav-item-active">體育直播</span>
                          </a>
                      </li> -->
                      <li class="navbar-item" id="service">
                          <a class="nav-link header-nav" href="https://tawk.to/chat/5a5ece2fd7591465c706d1fd/default"
                              target="_blank">
                              <span class="iconfont iconservice-o text-white"></span>
                              <span class="nav-item-active">聯絡我們</span>
                          </a>
                      </li>
                  </ul>
                  <!-- 搜尋 -->
                  <div>
                    <v-select :options="optionsList" label="name" v-model="selected"
                      placeholder="search" style="width:200px;background-color: #fff;border-radius: 4px;">
                    </v-select>
                  </div>
              </nav>
          </div>
      </header>
      <div class="wrap-container">
          <section class="banner-wrap container-fluid">
            <div class="row no-gutters">
                    <div class="order-lg-1 order-0 bnr-wrap col-lg-5">
                        <div id="carouselExampleControls" class="banner carousel slide" data-ride="carousel">
                          <div class="carousel-inner">
                            <!-- banner要預設第一張active -->
                            <div :class="['carousel-item', {'active': i === 0}]" v-for="(item, i) in bannerItem" :key="i">
                              <img class="d-block w-100" :src="`images/a/${item.img}`">
                            </div>
                          </div>
                          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                          </a>
                          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                          </a>
                        </div>
                    </div>
                    <div class="pulse-button d-lg-none">
                        <div class="collapse-ad">展開廣告</div>
                        <div class="arrow-2-x">
                            <span class="iconfont iconarrowdown chevron-down"></span>
                        </div>
                    </div>
                    <div class="order-lg-0 order-1 bnr-wrap ad col-lg display-none">
                        <div class="bnr-item-wrap row no-gutters firstAd">
                          <!-- b區1~6 小廣告圖 -->
                          <div v-for="(item, i) in adItem" :key="i" :class="['bnr-item col-md-4 col-3' ,`${item.key}` === 'display' ? 'd-none d-md-block' : '']">
                            <a :href="item.url" target="_blank">
                                <img :src="`images/b/${item.img}`" alt="">
                            </a>
                          </div>
                        </div>
                    </div>
                    <div class="order-lg-2 order-2 bnr-wrap ad col-lg display-none">
                        <div class="bnr-item-wrap row no-gutters subAd">
                            <!-- b區7~12 小廣告圖 -->
                            <div v-for="(item, i) in adSubItem" :key="i" :class="['bnr-item col-md-4 col-3', `${item.key}` === 'display' ? 'd-block d-md-none' : '' ]">
                              <a :href="item.url" target="_blank">
                                <img :src="`images/b/${item.img}`" alt="">
                              </a>
                            </div>
                        </div>
                    </div>
                </div>
          </section>
          <!-- 下方內容 -->
          <section class="content-wrap container">
              <div class="row no-gutters">
                  <div class="order-lg-0 order-1 col-lg-2 col-md-12 d-flex flex-column-reverse flex-lg-column">
                      <div class="popular-wrap">
                          <div class="popular-title">熱門推薦</div>
                          <div class="popular-list">
                              <!-- 熱門推薦列表 跑getPopular資料-->
                              <div class="popular-item" v-for="(item, i) in getPopular" :key="i">
                                <a :href="`${item.url}`" target="_blank">
                                  <div class="item-title">{{ item.name }}</div>
                                    <div class="popular-member-btn">
                                      <i class="iconfont icon-jushoucang"></i>
                                    </div>
                                    <div v-if="selectButton==='通訊手機'" class="popular-manage-btn">
                                      <a :href="`${item.urlManage}`" target="_blank">
                                        <i class="iconfont icon-liwu"></i>
                                      </a>
                                    </div>
                                </a>
                              </div>
                          </div>
                      </div>
                      <div class="e-ad-wrap ad display-none">
                          <div class="e-ad-item">
                              <a href="http://fa1246.iwinbet.net/platform-computer" target="_blank"><img
                                      src="images/e/bigad06.png" alt=""></a>
                          </div>
                          <div class="e-ad-item">
                              <a href="http://tb588.net/?p=GGMYI" target="_blank"><img
                                      src="images/e/bigad02.png" alt=""></a>
                          </div>
                          <div class="e-ad-item">
                              <a href="https://laaa.gs188.cc/" target="_blank"><img
                                      src="images/e/bigad03.png" alt=""></a>
                          </div>
                      </div>
                  </div>
                  <div class="order-lg-1 order-2 col-lg-8 col-md-12">
                      <div class="tab-wrap">
                          <div class="nav-wrap">
                              <!-- <div> -->
                                <!-- 上方Tab 點擊後selectTab(傳入點擊的選項)-->
                                  <!-- <div class="sa nav-item d-inline-block" v-for="(item, i) in nav" :key="i" @click="selectTab(item.text)">
                                      {{ item.text }}
                                  </div> -->
                              <!-- </div> -->
                              <!-- <div class="swiper-button-prev"></div>
                              <div class="swiper-button-next"></div> -->

                              <div class="swiper-content">
                                <template>
                                  <div v-for="(item, i) in nav" :key="i" class="sa nav-item d-inline-block nav-lines">
                                    <div class="tab" @click="selectTab(item.text)">
                                      <span>{{ item.text }}</span>
                                    </div>
                                  </div>
                                </template>
                              </div>
                          </div>
                          <div class="tab-item">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <!-- 各類別tab -->

                                <li v-for="(item, i) in getData" :key="i" @click="selectGame(item.name)"
                                  :class="[{ active: item.name === num },'nav-item nav-link tabList']">
                                    {{ item.name.replace("NUM_", "") }}
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <!-- 各大系統內容 -->
                              <div class="system-content">
                                <div v-if="currentTabName !== ''">
                                  <div v-for="(items, i) in currentData" :key="i">
                                    <div class="system-title">{{ items.name }}</div>
                                    <div v-for="(item, j) in items.list" :key="j" class="system-item">
                                      <a :href="`${item.url}`" target="_blank">
                                        {{ item.name }}
                                        <div v-if="selectButton==='個人電腦'|| selectButton==='通訊手機'" class="system-member-btn">
                                          <i class="iconfont icon-Cart"></i>
                                        </div>
                                        <div v-if="selectButton==='通訊手機'" class="system-manage-btn">
                                            <a :href="`${item.urlManage}`" target="_blank">
                                              <i class="iconfont icon-wodedingdan"></i>
                                            </a>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div v-else>
                                  <div v-for="(items, i) in currentAllData" :key="i" class="system-list">
                                    <div v-if="items.content.length > 0">
                                      <div v-for="(itemj, j) in items.content" :key="j">
                                        <div class="system-title">{{ itemj.name }}</div>
                                          <div v-for="(itemk, k) in itemj.list" :key="k" class="system-item">
                                            <a :href="`${itemk.url}`" target="_blank">
                                              <div class="item-title">{{ itemk.name }}</div>
                                              <div v-if="selectButton==='個人電腦'|| selectButton==='通訊手機'" class="system-member-btn">
                                                <i class="iconfont icon-Cart"></i>
                                              </div>
                                              <div v-if="selectButton==='通訊手機'" class="system-manage-btn">
                                                  <a :href="`${itemk.urlManage}`" target="_blank">
                                                    <i class="iconfont icon-wodedingdan"></i>
                                                  </a>
                                              </div>
                                            </a>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div class="order-lg-2 order-0 col-lg-2 col-md-12">
                      <div class="e-ad-wrap ad display-none">
                          <div class="e-ad-item">
                              <a href="https://885.tx168tx.com/" target="_blank"><img
                                      src="images/e/bigad01.png" alt=""></a>
                          </div>
                          <div class="e-ad-item">
                              <a href="http://fa1246.iwinbet.net/platform-computer/" target="_blank"><img
                                      src="images/e/bigad05.png" alt=""></a>
                          </div>
                          <div class="e-ad-item">
                              <a href="https://rsapi.q8.bet/zh-Hant" target="_blank"><img
                                      src="images/e/bigad04.png" alt=""></a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <footer class="footer pb-2 pt-2">
              <ul class="text-center pt-3">
                  <li>
                      <a href="#">個人電腦</a>
                  </li>
                  <li>
                      <a href="#">通訊手機</a>
                  </li>
                  <li>
                      <a href="#">電腦週邊</a>
                  </li>
                  <li>
                      <a href="#">數位影像</a>
                  </li>
                  <li>
                      <a href="#">大家電</a>
                  </li>
                  <li class="text-white" data-toggle="modal" data-target="#exampleModalCenter">
                      注意事項
                  </li>
                  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
                      aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered" role="document">
                          <div class="modal-content">
                              <div class="modal-body">
                                  <img src="images/warm.png" alt="">
                              </div>
                          </div>
                      </div>
                  </div>
                  <li>
                      <a href="https://tawk.to/chat/5a5ece2fd7591465c706d1fd/default" target="_blank">聯絡我們</a>
                  </li>
              </ul>
          </footer>
          <a href="#" class="toTop" title="GoTop" style="display: inline;"><span></span></a>
      </div>
  </div>
</template>
<script>
import $ from 'jquery'
import "vue-select/dist/vue-select.css"
// import imagesJson from '@/assets/json/images.json' //直接匯入json資料

export default {
  name: "",
  props: {},
  data: function() {
    // 資料
    return {
      src: "", //追蹤 store用
      // 搜尋的選單
      optionsList: [
        // '冰河藍14吋',
        // 'iMac 27',
        // 'MacBook Pro13 灰色',
        // '★17小時續航',
        // '輕薄創作者'
      ],
      selected: '', // 搜尋選擇的娛樂城
      // 選單的url
      search:[],
      // itemsAll: {
      //   '冰河藍14吋': 'https://24h.pchome.com.tw/prod/DHAX95-1900AQIVR?q=/S/DHAX9',
      //   'iMac 27': 'https://24h.pchome.com.tw/prod/DYAJFC-A900ASXMF?fq=/S/DYAJFD',
      //   'MacBook Pro13 灰色': 'https://24h.pchome.com.tw/prod/DYAJCS-1900AQM6T',
      //   '★17小時續航': 'https://24h.pchome.com.tw/prod/DHAFJ8-A900ABR5Q',
      //   '輕薄創作者': 'https://24h.pchome.com.tw/prod/DHAK8A-A900AW63L?fq=/S/DHAK82/'
      // },
      //中間banner(@用ajax資料會有非同步問題吃不到swiper套件功能@)
      bannerItem: [],
      //banner左方1~6小廣告圖
      adItem: [],
      //banner右方7~12小廣告圖
      adSubItem: [],
      // 熱門推薦的內容
      getPopular: [],
      nav: [
        { 'text': '個人電腦'},
        { 'text': '通訊手機'},
        { 'text': '電腦週邊'},
        { 'text': '數位影像'},
        { 'text': '大家電'}
      ],
      // 裡面的內容
      getData: [],
      num: '全部',
      AllData:{},
      currentData: [],
      currentTabName: '', // 只有[全部]不會設定該值
      currentAllData: [],
      selectButton: ''
    }
  },
  watch: {
    //監聽值
    'selected' (val) {
      console.log(val,this.search)
      // handler (val) {
        // console.log(this.getSearchItem(),value,this.itemsAll)
        for (let i in this.search){
          if (val === this.search[i].text) window.open(this.search[i].url)
        }
        // this.selected = ''
      // }
    },
    'getData' (items) {
      // 清除Tab資料
      this.clearTabData()
      if (this.selectButton === '個人電腦' || this.selectButton === '通訊手機') {
        this.currentAllData = items
      } else {
        this.initTab(items, this.num)
      }
    }
  },
  computed: {
    //相依的資料改變時才做計算方法
  },
  methods: {
    toLink (url) {
      window.open(url)
    },
    // 初始
    // 點擊選項
    selectGame (name) {
      this.num = name // 加入active class
      // 清除Tab資料
      this.clearTabData()
      if (name === '全部') this.currentAllData = this.getData
      else this.initTab(this.getData, name)
      // console.log('this.currentAllData',this.currentAllData)
    },
    initTab (obj, name) {
      // 清除Tab資料
      this.clearTabData()
      for (var i in obj) {
        if (obj[i].name === name) {
          this.currentData = obj[i].content
        }
      }
      this.currentTabName = name
    },
    // 清除Tab資料
    clearTabData () {
      this.currentData = []
      this.currentAllData = []
      this.currentTabName = ''
    },
    selectTab(i) {
    // 點擊上方tab i傳入點擊的選項 ex.通訊手機
      this.selectButton = i
      switch (i) {
        case '個人電腦':
          this.getDataItem('computer')
          this.getPopularItem('computer')
          this.num = '全部'
          break;
        case '通訊手機':
          this.getDataItem('phone')
          this.getPopularItem('phone')
          this.num = '全部'
          break;
        case '電腦週邊':
          this.getDataItem('article')
          this.num = '電腦架'
          break;
        case '數位影像':
          this.getDataItem('canon')
          this.num = 'Canon'
          break;
        case '大家電':
          this.getDataItem('electrical')
          this.num = '洗衣機'
          break;
      }
      // 熱門推薦點擊判斷
      if ( i !=='個人電腦' && i!=='通訊手機') {
        $('.popular-wrap').css('display','none')
      }else{
        $('.popular-wrap').css('display','block')
      }
    },
    // 取得搜尋內容
    getSearchItem () {
      let self = this
      this.ajaxSend('search')
        .then(function(res) {
          console.log('search:',res)
          if (res) {
            // console.log('取得熱門推薦內容(success):', res)
            if (res.items) self.search = res.items
            for(let i in res.items) {
              self.optionsList.push(res.items[i].text)
            }
          }
        })
        .catch(function (error) {
          console.log('取得搜尋內容(error):', error)
        })
    },
    // 取得上方Banner廣告圖
    getBannerItem () {
      let self = this
      this.ajaxSend('images')
        .then(function(res) {
          if (res) {
            // console.log('取得上方Banner廣告圖(success):', res)
            // 中間banner
            self.bannerItem = res.bannerItem
            // 取得banner左方1~6小廣告圖
            self.adItem = res.adItem
            // 取得banner右方1~6小廣告圖
            self.adSubItem = res.adSubItem
          }
        })
        .catch(function (error) {
          console.log('取得上方Banner廣告圖(error):', error)
        })
    },
    // 取得熱門推薦內容
    getPopularItem (type) {
      let self = this
      this.ajaxSend(type)
        .then(function(res) {
          if (res) {
            // console.log('取得熱門推薦內容(success):', res)
            if (res.computer_popular) self.getPopular = res.computer_popular
            if (res.phone_popular) self.getPopular = res.phone_popular
          }
        })
        .catch(function (error) {
          console.log('取得熱門推薦內容(error):', error)
        })
    },
    // 取得中間分頁內容
    getDataItem (type) {
      let self = this
      this.ajaxSend(type)
        .then(function(res) {
          if (res) {
            // console.log('取得中間分頁內容(success):', res)
            if (res.computer_data) self.getData = res.computer_data
            if (res.phone_data) self.getData = res.phone_data
            if (res.article_data) self.getData = res.article_data
            if (res.canon_data) self.getData = res.canon_data
            if (res.electrical_data) self.getData = res.electrical_data
            if (res.forum_data) self.getData = res.forum_data
            if (res.video_data) self.getData = res.video_data
          }
        })
        .catch(function (error) {
          console.log('取得中間分頁內容(error):', error)
        })
    },
    // Ajax
    ajaxSend (fileName) {
      return $.ajax({
        url: `/json/${fileName}.json`,
        type: 'GET',
        dataType: 'json' //返回資料格式為json
      });
    }
  },
  //BEGIN--生命週期
  beforeCreate: function() {
    //實體初始化
  },
  created: function() {
    //實體建立完成。資料 $data 已可取得，但 $el 屬性還未被建立。
    this.src = this.$options.__file ;
  },
  beforeMount: function() {
    //執行元素掛載之前。
  },
  mounted: function() {
    // 取得上方Banner廣告圖
    this.getBannerItem()
    this.getSearchItem()

    //觸發點擊第一個nav
    $('.nav-item .tab').first().trigger('click');
    $('.nav-item').first().addClass('selected')
    $('.nav-item').click(function(){
      $('.nav-item').removeClass('selected')
      $(this).addClass('selected')
    })

    $('.carousel').carousel({
      interval: 2000
    })

    //gotop
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.toTop').fadeIn()
      } else {
        $('.toTop').fadeOut()
      }
    })
    $('.toTop').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 800)
      return false
    })

    //手機版收合廣告
    $('.pulse-button').click(function () {
      $(".ad").slideToggle("slow");
      if ($(".arrow-2-x").hasClass('x-ready')) {
        $(".collapse-ad").text("展開廣告");
        $(".arrow-2-x").removeClass("x-ready");
        $(".iconarrowdown").removeClass("chevron-on").addClass("chevron-down");
      } else {
        $(".collapse-ad").text("收合廣告");
        $(".arrow-2-x").addClass("x-ready");
        $(".iconarrowdown").removeClass("chevron-down").addClass("chevron-on");
      }
    })
  },
  beforeUpdate: function() {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  updated: function() {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  beforeDestroy: function() {
    //實體還可使用。
  },
  destroyed: function() {
    //實體銷毀。
  }
  //END--生命週期
}
</script>

<style lang="scss" scoped>

</style>
