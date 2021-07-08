$(function () {

  //Города

  $('.header__top-city').on('click', function(){
   $('.header__top-box-bg').toggleClass('activ--city');
     $('body').toggleClass('body--hid');
     $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".header__top-box-city"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      $('.header__top-box-bg').removeClass('activ--city');
    }
    });
  });

  $('#cabin__call').on('click', function(){
   $('.header__tel-box-bg').toggleClass('activ--city');
     $('body').toggleClass('body--hid');
  });

  // $('.header__top-box-bg').on('click', function(){
  //  $('.header__top-box-bg').removeClass('activ--city');
  //    $('body').removeClass('body--hid');
  // });


  $('.header__top-cabinet').on('click', function(){
   $('.header__top-cabit').toggleClass('activ--cabit');

    $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".header__tel-box"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      $('.header__tel-box-bg').removeClass('activ--city');
    }
    });

  });

 $('.slider__items').slick({
    dots: true,
    prevArrow:'<button class="slider__row slider__row-r"><svg width="7" height="16" viewBox="0 0 7 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="slider-fill" d="M0.401451 15.4251C0.221001 15.1808 0.221001 14.7858 0.401451 14.5414L5.15197 8.10838L0.401451 1.67539C0.221001 1.43103 0.221001 1.03603 0.401451 0.791669C0.581902 0.547309 0.873596 0.547309 1.05405 0.791669L6.13088 7.66654C6.22088 7.78841 6.26611 7.9484 6.26611 8.10841C6.26611 8.26843 6.22088 8.42842 6.13088 8.55029L1.05405 15.4252C0.873596 15.6695 0.581902 15.6695 0.401451 15.4251Z"/></svg></button>',
    nextArrow:'<button class="slider__row slider__row-l"><svg width="7" height="16" viewBox="0 0 7 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="slider-fill" d="M6.65311 0.346359C6.83356 0.590719 6.83356 0.985721 6.65311 1.23008L1.90259 7.6631L6.65311 14.0961C6.83356 14.3405 6.83356 14.7355 6.65311 14.9798C6.47266 15.2242 6.18097 15.2242 6.00052 14.9798L0.923687 8.10495C0.833689 7.98308 0.788452 7.82309 0.788452 7.66307C0.788452 7.50306 0.833689 7.34307 0.923687 7.2212L6.00052 0.34633C6.18097 0.101999 6.47266 0.101999 6.65311 0.346359Z"/></svg></button>',

  });








  });


