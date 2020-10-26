$(function () {
  //swiper
  var swiper = new Swiper('#banner', {
    preventClicks: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    lazy: {
      loadPrevNext: true,
    },
  });

  var swiper = new Swiper('.nav-wrap', {
    slidesPerView: 7,
    preventClicks: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        loopFillGroupWithBlank: true
      },
      414: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        loopFillGroupWithBlank: true
      }
    }
  });

  //搜尋
  $('select').select2()
  $('#s2-search,#mobile-search').on('select2:select', function (e) {
    window.open(e.target.value, '_blank')
  })

  $('#s2-search,#mobile-search').select2({
    placeholder: '搜尋',
    allowClear: true
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
  //隨機輪播
      $("#owl-demo").append($("#owl-demo").children().sort(function () {
      return Math.random() - 0.5;
  }));

  // let search = [
  //   {"url":"https://Rsapi.q8.bet","name":"111Q8娛樂城"}
  // ]
  // for (var i = 0;i < search.length; i++){
  //   alert(search[i].url)
  //   url = search[i].url
  //   let res = document.createElement('select')
  //   res.innerHTML = `<option value="${url}">${name}</option>`
  // }
});