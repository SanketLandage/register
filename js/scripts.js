
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  /////validation

  $(document).ready(function () {
    $('.registration-form fieldset:first-child').fadeIn('slow');
    
    $('#name').on('focusout',function() {
      check_name();
    })
    $('#phone').on('focusout',function() {
      check_phone();
    })
    $('#email').on('focusout',function() {
      check_email();
    })
    $('#address').on('focusout',function() {
      check_address();
    })
    $('#statement').on('focusout',function() {
      check_statement();
    })
    $('#statement').on('focusout',function() {
      check_how();
    })

    $('#statement').on('focusout',function() {
      check_desc();
    })

    function check_name(){
      $('#name_error_msg').hide();
      var nameValue = $('#name').val();
      
      if(nameValue !== '' ){
        $('#name').css("border" ,"1px solid #34F458");
        $('#name_error_msg').hide();
      }
      else{
        $('#name_error_msg').html("Please Enter your Name!");
        $('#name_error_msg').show();
        $('#name').css("border" ,"1px solid #F90A0A");
        setTimeout(function(){
          $('#name_error_msg').hide();
        },10000);
      }
    }
    

    function check_phone(){
      $('#phone_error_msg').hide();
      var nameValue = $('#phone').val();
      
      if( nameValue !== '' && nameValue.length == 10 ){
        $('#phone').css("border" ,"1px solid #34F458");
        $('#phone_error_msg').hide();
      }
      else{
        $('#phone_error_msg').html("Please Enter valid Phone number!");
        $('#phone_error_msg').show();
        $('#phone').css("border" ,"1px solid #F90A0A");
        setTimeout(function(){
          $('#phone_error_msg').hide();
        },5000);
      }
    }

    function check_email(){
      $('#mail_error_msg').hide();
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      var mail = $('#email').val();
      if(reg.test(mail)== true && mail !== ''){
        $('#email').css("border" ,"1px solid #34F458");
        $('#mail_error_msg').hide();
      }
      else{
        $('#mail_error_msg').html("Please Enter valid Email id!");
        $('#mail_error_msg').show();
        $('#email').css("border" ,"1px solid #F90A0A");
        setTimeout(function(){
          $('#mail_error_msg').hide();
        },5000);
      }
    }

    function check_address(){
      $('#add_error_msg').hide();
      var nameValue = $('#address').val();
      
      if(nameValue !== ''){
        $('#address').css("border" ,"1px solid #34F458");
        $('#add_error_msg').hide();
      }
      else{
        $('#add_error_msg').html("Please Enter your Address!");
        $('#add_error_msg').show();
        $('#address').css("border" ,"1px solid #F90A0A");
        setTimeout(function(){
          $('#add_error_msg').hide();
        },5000);
      }
    }
    // next step
    $('.registration-form .btn-next').on('click', function () {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;

        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                $(this).next().fadeIn();
            });
        }

    });

    
    $('.registration-form .btn-previous').on('click', function () {
        $(this).parents('fieldset').fadeOut(400, function () {
            $(this).prev().fadeIn();
        });
    });

    
    $('#wrong').hide();
    $('#form_submit').click(function(){
      $('input').each(function() {
          if(!$(this).val()){
              $('#wrong').show();
              setTimeout(function(){
                $('#wrong').hide();
            },8000);
          }
      });
   });
  
  setTimeout(function(){
    $('.modal').modal({show:true});
  }, 4000);
  
  
});

})(jQuery); // End of use strict



