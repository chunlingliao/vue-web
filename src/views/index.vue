<template>
  <div class="page">
      <header class="header">
          <div class="nav-wrapper">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <a class="navbar-brand" href="#"><img src="images/logo.svg" alt=""></a>
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
                                      <i class="iconfont icongerenzhongxin"></i>
                                    </div>
                                    <div v-if="selectButton==='信用版'" class="popular-manage-btn">
                                      <a :href="`${item.urlManage}`" target="_blank">
                                        <i class="iconfont iconindent"></i>
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
                                      src="images/e/bigad03.gif" alt=""></a>
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
                                  </div>
                              </div> -->
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
                                <li v-for="(item, i) in getData" :key="i" @click="selectGame(i)"
                                  :class="[{ active: i === num },'nav-item nav-link tabList']">
                                    {{ i }}xx
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <!-- 各大系統內容 -->
                              <div class="system-content">
                                <div v-if="currentTitle != ''">
                                  <div class="system-title">{{ currentTitle }}</div>
                                  <div v-for="(item, i) in currentData" :key="i" class="system-item">
                                    <a :href="`${item.url}`" target="_blank">
                                      {{ item.name }}
                                      <div v-if="selectButton==='現金版'|| selectButton==='信用版'" class="system-member-btn">
                                        <i class="iconfont icongerenzhongxin"></i>
                                      </div>
                                      <div v-if="selectButton==='信用版'" class="system-manage-btn">
                                          <a :href="`${item.urlManage}`" target="_blank">
                                            <i class="iconfont iconindent"></i>
                                          </a>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div v-else>
                                  <div v-for="(item, i) in currentAllData" :key="i" class="system-list">
                                    <div v-for="(itemj, j) in item" :key="j">
                                      <div class="system-title">{{ j }}</div>
                                        <div v-for="(itemk, k) in itemj" :key="k" class="system-item">
                                          <a :href="`${itemk.url}`" target="_blank">
                                            <div class="item-title">{{ itemk.name }}xxxx</div>
                                            <div v-if="selectButton==='現金版'|| selectButton==='信用版'" class="system-member-btn">
                                              <i class="iconfont icongerenzhongxin"></i>
                                            </div>
                                            <div v-if="selectButton==='信用版'" class="system-manage-btn">
                                                <a :href="`${itemk.urlManage}`" target="_blank">
                                                  <i class="iconfont iconindent"></i>
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
                  <div class="order-lg-2 order-0 col-lg-2 col-md-12">
                      <div class="e-ad-wrap ad display-none">
                          <div class="e-ad-item">
                              <a href="https://885.tx168tx.com/" target="_blank"><img
                                      src="images/e/bigad04.gif" alt=""></a>
                          </div>
                          <div class="e-ad-item">
                              <a href="http://fa1246.iwinbet.net/platform-computer/" target="_blank"><img
                                      src="images/e/bigad05.gif" alt=""></a>
                          </div>
                          <div class="e-ad-item">
                              <a href="https://rsapi.q8.bet/zh-Hant" target="_blank"><img
                                      src="images/e/bigad01.gif" alt=""></a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <footer class="footer pb-2 pt-2">
              <ul class="text-center pt-3">
                  <li>
                      <a href="http://sagame8.com/computer/index.html">現金版</a>
                  </li>
                  <li>
                      <a href="http://sagame8.com/phone/index.html">信用版</a>
                  </li>
                  <li>
                      <a href="http://sagame8.com/article.html">電腦週邊</a>
                  </li>
                  <li>
                      <a href="http://sagame8.com/race.html">數位影像</a>
                  </li>
                  <li>
                      <a href="http://sagame8.com/electrical.html">大家電</a>
                  </li>
                  <li>
                      <a href="http://sagame8.com/forum.html">報牌論壇</a>
                  </li>
                  <li>
                      <a href="http://sagame8.com/video.html">影視娛樂</a>
                  </li>
                  <!-- <li>
                      <a class="liveLink" href="javascript:void(0)">體育直播</a>
                  </li> -->
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
                  <li>
                      <img class="cutercounter" src="https://www.cutercounter.com/hits.php?id=hmxxkkqk&nd=6&style=16"
                          border="0" alt="免費網站計數器">
                  </li>
              </ul>
          </footer>
          <a href="#" class="toTop" title="GoTop" style="display: inline;"><span></span></a>
          <!-- <div class="sport-tv-mb">
              <a class="liveLink" id="tv" href="javascript:void(0)">
                  <img src="images/live.svg" alt="">
              </a>
          </div> -->
      </div>
  </div>
</template>
<script>
import $ from 'jquery'
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/swiper.scss'
import "vue-select/dist/vue-select.css"

export default {
  name: "",
  props: {},
  data: function() {
    // 資料
    return {
      src: "", //追蹤 store用
      //banner
      bannerItem: [
        {
          url: 'http://sagame8.com/assets/images/page/upgaming_vn.png',
          img: 'bn01.jpg'
        },
        {
          url: 'https://rsapi.q8.bet/',
          img: 'bn02.jpg'
        },
        {
          url: 'https://rsapi.q8.bet/',
          img: 'bn03.jpg'
        }
      ],
      // 搜尋的選單
      optionsList: [
        'Q8娛樂城',
        '金球娛樂城',
        '炫海娛樂城'
      ],
      selected: '', // 搜尋選擇的娛樂城
      // 選單的url
      itemsAll: {
        'Q8娛樂城': 'https://Rsapi.q8.bet',
        '金球娛樂城': 'https://NI0FE.tw886.cc'
      },

      adItem: [
      //ad1
        {
          url: 'http://sagame8.com/assets/images/page/upgaming_vn.png',
          img: 'ad01.gif'
        },
        //ad2
        {
          url: 'https://rsapi.q8.bet/zh-Hant',
          img: 'ad02.gif'
        },
        //ad3
        {
          url: 'http://tw.dwlott.com/',
          img: 'ad03.gif'
        },
        //ad4
        {
          url: 'https://www.jf68.net',
          img: 'ad04.gif'
        },
        //ad5
        {
          url: 'https://tawk.to/chat/5a5ece2fd7591465c706d1fd/default',
          img: 'ad00.gif',
          key: 'display'
        },
        //ad6
        {
          url: 'https://885.tx168tx.com/',
          img: 'ad06.gif',
          key: 'display'
        },
      ],
      //b區右側7~12小廣告圖
      adSubItem: [
        {
          url: 'https://tawk.to/chat/5a5ece2fd7591465c706d1fd/default',
          img: 'ad00.gif',
          key: 'display'
        },
        {
          url: 'https://885.tx168tx.com/',
          img: 'ad06.gif',
          key: 'display'
        },
        {
          url: 'https://gm1688.net/',
          img: 'ad07.gif'
        },
        {
          url: 'http://t.cn/EZaMCCD',
          img: 'ad08.gif'
        },
        {
          url: 'https://1sb1.ok6666.net',
          img: 'ad09.gif'
        },
        {
          url: 'http://a8168.net',
          img: 'ad10.gif'
        },
        {
          url: 'http://fafa88.sh1788.net/',
          img: 'ad11.gif'
        },
        {
          url: 'http://sagame8.com/upbet.html',
          img: 'ad12.gif'
        },
      ],
      computerPopular: [
        { "name": "Q8娛樂城", "url": "https://Rsapi.q8.bet" },
        { "name": "炫海娛樂城", "url": "http://fafa88.sh1788.net/" },
        { "name": "金球娛樂城", "url": "https://NI0FE.tw886.cc" },
        { "name": "博鑫娛樂城", "url": "http://www.bs688.net/index" },
        { "name": "金合發", "url": "https://www.jf68.net" },
        { "name": "WY City", "url": "http://fafa8.wynn168.cc/" },
        { "name": "永豐娛樂城", "url": "http://www.bsp168.com/" },
        { "name": "皇璽會", "url": "http://FA1246.iwinbet.net" },
        { "name": "任你博", "url": "http://sp1.123xc.net" },
        { "name": "贏家娛樂城", "url": "https://wz5113.win666.us/" }
      ],
      phonePopular: [
        { "name": "Super", "url": "http://www.super007.net/", "urlManage": "http://ag.sp5588.net" },
        { "name": "華納", "url": "http://www.wn666.net", "urlManage": "http://ag.wn666.net" },
        { "name": "緯來", "url": "http://www.888vl.cc", "urlManage": "http://ag.888vl.cc" },
        { "name": "KS168", "url": "http://www.ks1688.net", "urlManage": "http://ag.ks1688.net" },
        { "name": "太子", "url": "http://www.tz5858.net", "urlManage": "http://ag.tz5858.net" }
      ],
      nav: [
        { 'text': '現金版'},
        { 'text': '信用版'},
        { 'text': '電腦週邊'},
        { 'text': '數位影像'},
        { 'text': '大家電'},
        { 'text': '報牌論壇'},
        { 'text': '影視娛樂'}
      ],
      // 現金版
      computer_data:{
        "全部": [],
        "upg": {
          "upg系統": [
            { "name": "Q8娛樂城", "url": "https://Rsapi.q8.bet" },
            { "name": "金球娛樂城","url": "https://NI0FE.tw886.cc"}
          ],
        },
        "火箭": {
          "火箭系統": [
            { "name": "炫海娛樂城", "url": "http://fafa88.sh1788.net/" },
            { "name": "淘金娛樂城", "url": "http://dbi88.gr66.net/"},
          ],
        },
        "八方": {
          "八方系統": [
            { "name": "AMUNX娛樂城", "url": "https://ga888.tw" },
            { "name": "鑫勝娛樂城", "url": "http://cjf777.com/" },
          ],
        },
      },
      // 信用版
      phone_data: {
        "全部": [],
        "SUPER": {
          "SUPER系統": [
            { "name": "Super", "url": "http://www.super007.net/", "urlManage": "http://ag.sp5588.net" },
            { "name": "華納", "url": "http://www.wn666.net", "urlManage": "http://ag.wn666.net" },
          ]
        },
        "NUM_36588": {
            "36588系統": [
              { "name": "榮華會", "url": "http://rh99.net", "urlManage": "http://ab.rh99.net" },
              { "name": "寶盈", "url": "http://df888.net", "urlManage": "http://ab.df888.net" },
            ]
        },
        "新鑫寶": {
            "新鑫寶系統": [
              { "name": "皇京娛樂", "url": "http://ec899.net", "urlManage": "http://ag.ec899.net" },
              { "name": "禾康", "url": "http://hk957.net", "urlManage": "http://ag.hk957.net" },
            ]
        },
      },
      // 電腦週邊
      article_data: {
        "六合彩101": {
          "六合彩101": [
            { "name": "Super彩", "url": "http://www.super007.net/", "urlManage": "http://ag.sp5588.net" },
            { "name": "pp彩", "url": "http://www.wn666.net", "urlManage": "http://ag.wn666.net" },
          ],
        },
        "六合彩": {
          "六合彩": [
            { "name": "榮華會", "url": "http://rh99.net", "urlManage": "http://ab.rh99.net" },
            { "name": "寶盈", "url": "http://df888.net","urlManage": "http://ab.df888.net" },
          ],
        },
        "其他": {
          "其他": [{
              "name": "皇京娛樂",
              "url": "http://ec899.net",
              "urlManage": "http://ag.ec899.net"
          },
          {
              "name": "禾康",
              "url": "http://hk957.net",
              "urlManage": "http://ag.hk957.net"
          },
        ]
        }
      },
      // 數位影像
      canon_data: {
        "數位影像": {
          "數位影像": [
            { "name": "極速賽車", "url": "http://www.super007.net/" },
            { "name": "極速賽車(備)", "url": "http://www.wn666.net", "urlManage": "http://ag.wn666.net" },
            ],
          }
        },
      // 大家電
      electrical_data: {
        "棒球總合比分": {
          "棒球總合比分": [
            { "name": "極速賽車", "url": "http://www.super007.net/" },
            { "name": "極速賽車(備)", "url": "http://www.wn666.net" }
          ],
        },
        "棒球總合比分2": {
          "棒球總合比分": [
            { "name": "極速賽車", "url": "http://www.super007.net/" },
            { "name": "極速賽車(備)", "url": "http://www.wn666.net" },
          ],
        }
      },
      // 報牌論壇
      forum_data: {
        "報牌論壇": {
          "報牌論壇": [
            { "name": "玩運彩", "url": "https://www.playsport.cc" },
            { "name": "精準運動網", "url": "http://mlb998.com/" },
            { "name": "運彩貓", "url": "http://wwincat.com" },
            { "name": "運彩報馬仔", "url": "https://www.fengyuncai.com"}
          ],
        }
      },
      // 影視娛樂
      video_data: {
        "影視直播": {
          "影視直播": [
            { "name": "onlinetv", "url": "http://sp3video.sp5588.cc" },
            { "name": "卡卡洛普",  "url": "http://www.wn666.net" },
          ],
        },
        "AV線上直播": {
          "AV線上直播": [
            { "name": "59iav", "url": "http://rh99.net" },
            { "name": "情色倉庫", "url": "http://df888.net" },
          ],
        },
        "直播平台": {
          "直播平台": [
            { "name": "企鵝直播", "url": "http://ec899.net" },
            { "name": "pb+ tv", "url": "http://hk957.net" },
          ]
        }
      },

      num: '全部',
      AllData:{},
      currentData: [],
      currentTitle: '',
      currentAllData: [],
      getData: [], // 裡面的內容
      getPopular: [], // 熱門推薦的內容
      selectButton: ''
    }
  },
  watch: {
    //監聽值
    'selected' (value) {
      console.log('selected:', value, this.itemsAll[value])
      if (value) window.open(this.itemsAll[value]) // 開新頁面，帶入itemsAll設定的網址
      this.selected = ''
    }
  },
  computed: {
    //相依的資料改變時才做計算方法
    swiper() {
				return this.$refs.mySwiper.swiper
			}
  },
  methods: {
    toLink (url) {
      console.log('url:', url)
      window.open(url)
    },
    // 初始
    // 點擊選項
    selectGame(i){
      this.num = i // 加入active class
      this.initTab(this.getData, i)
      // this.currentData = []
      // for (var item in this.computer_data[i]) {
      //   console.log(item, this.computer_data[i][item])
      //   this.currentData = this.computer_data[i][item]
      //   this.currentTitle = item
      // }
      // console.log('debugger')
      // debugger;
      // console.log(i)
      if (i === '全部') {
          this.initAllData(this.getData)
        } else {
          this.initTab(this.getData,i)
          console.log('>>',this.getData,i)
        }
      },
    initTab (obj, i) {
      // console.log(obj)
      this.currentData = []
      for (var item in obj[i]) {
        // console.log(item, obj[i][item])
        this.currentData = obj[i][item]
        this.currentTitle = item
        console.log(this.currentTitle)
      }
    },
    initAllData(obj) {
      this.currentAllData = []
      this.currentTitle = ''
      for (var itemb in obj) {
        // console.log(itemb, obj[itemb])
        this.currentAllData.push(obj[itemb])
      }
    },
    selectTab(i) {
    // 點擊上方tab i傳入點擊的選項 ex.信用版
      this.selectButton = i
      console.log(i)
      let a ;
      let key = '' ;
      // let b = ["aa","bb","cc"]
      let bb = { "a":1,"b":2 }
      let c = {...bb} // 深拷貝用法
      // let d = b
      // let cc = c.shift()
      c["a"] = 5
      // let dd = d.shift()
      console.log(bb,c)
      // console.log(b,d,dd)
      switch (i) {
        case '現金版':
          this.getData = this.computer_data
          this.getPopular = this.computerPopular
          this.num = '全部'
          break;
        case '信用版':
          this.getData = this.phone_data
          this.getPopular = this.phonePopular
          this.num = '全部'
          break;
        case '電腦週邊':
          a = {...this.article_data}
          key = Object.keys(a).shift()
          this.getData = this.article_data
          // console.log(a)
          // console.log( key , this.getData , this.article_data)
          this.num = '六合彩101'
          break;
        case '數位影像':
          this.getData = this.canon_data
          this.num = '數位影像'
          break;
        case '大家電':
          this.getData = this.electrical_data
          this.num = '棒球總合比分'
          break;
        case '報牌論壇':
          this.getData = this.forum_data
          this.num = '報牌論壇'
          break;
        case '影視娛樂':
          this.getData = this.video_data
          this.num = '影視直播'
          break;
      }
      // 熱門推薦點擊判斷
      if( i !=='現金版' && i!=='信用版'){
        $('.popular-wrap').css('display','none')
      }else{
        $('.popular-wrap').css('display','block')
      }
      this.initAllData(this.getData)

      //判斷使否為全部
      if(key !== "" ) this.selectGame(key)
      console.log(this.getData)
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
    //觸發點擊第一個nav
    $('.nav-item .tab').first().trigger('click');
    $('.nav-item').first().addClass('selected')
    $('.nav-item').click(function(){
      $('.nav-item').removeClass('selected')
      $(this).addClass('selected')
    })

    $('.carousel').carousel({
      interval: 2000
    }),
    // this.getData = this.computer_data
    // this.getPopular = this.computerPopular
    // this.initAllData(this.computer_data)
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
