
        $(document).ready(function() {
          setNbCatItems();
          tmCategoryCarousel1_2 = $('#block-category-1_2 > ul').bxSlider({
            responsive       : true,
            useCSS           : false,
            minSlides        : carousel_nb_new,
            maxSlides        : carousel_nb_new,
            slideWidth       : 430,
            slideMargin      : 0,
            infiniteLoop     : 1,
            hideControlOnEnd : 1,
            randomStart      : 0,
            moveSlides       : 1,
            pager            : 0,
            autoHover        : 1,
            auto             : 0,
            speed            : 500,
            pause            : 3000,
            controls         : 1,
            autoControls     : 0,
            startText        : '',
            stopText         : ''
          });
          var tm_cps_doit;
          $(window).resize(function() {
            clearTimeout(tm_cps_doit);
            tm_cps_doit = setTimeout(function() {
              resizedwtm_cps1_2();
            }, 201);
          });
        });
        function resizedwtm_cps1_2() {
          setNbCatItems();
          tmCategoryCarousel1_2.reloadSlider({
            responsive       : true,
            useCSS           : false,
            minSlides        : carousel_nb_new,
            maxSlides        : carousel_nb_new,
            slideWidth       : 430,
            slideMargin      : 0,
            infiniteLoop     : 1,
            hideControlOnEnd : 1,
            randomStart      : 0,
            moveSlides       : 1,
            pager            : 0,
            autoHover        : 1,
            auto             : 0,
            speed            : 500,
            pause            : 3000,
            controls         : 1,
            autoControls     : 0,
            startText        : '',
            stopText         : ''
          });
        }
        function setNbCatItems() {
          if ($('.category-block').width() < 400) {
            carousel_nb_new = 1;
          }
          if ($('.category-block').width() >= 400) {
            carousel_nb_new = 2;
          }
          if ($('.category-block').width() >= 995) {
            carousel_nb_new = 3;
          }
          if ($('.category-block').width() > 1500)
            carousel_nb_new = 4;
        }
