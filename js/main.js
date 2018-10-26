window.onscroll = function() {
  stickyElements();
}

var element = document.querySelector('nav');
var sticky = element.offsetTop;

function stickyElements() {
  if(window.innerWidth > 1200) {
    if(window.pageYOffset >= sticky) {
      element.classList.add("sticky");
    } else {
      element.classList.remove("sticky");
    }
  }
}

$(document).ready(function() {

  $('a').click(function(event) {
    $.scrollTo($(this).attr('href'), 800);
  });

  // PROPERTIES NAVIGATION

  $('.navProp a').on('click', function(e) {
    // CURRENT CLASS ASSIGNAMENT
    e.preventDefault();
    $('.navProp li.current').removeClass('current');
    $(this).parent().addClass('current');
    // SET HEADING TEXT
    $('h3.heading').text($(this).text());
    // GET & FILTER LINK TEXT
    var category = $(this).text().toLowerCase().replace(' ','-');
    // REMOVE HIDDEN CLASS IF ALL PROPS SELECTED
    if(category == 'all-properties') {
      $('.images li:hidden').fadeIn('slow').removeClass('hidden');
    } else {
      $('.images li').each(function() {
        if(!$(this).hasClass(category)) {
          $(this).hide().addClass('hidden');
        } else {
          $(this).fadeIn('slow').removeClass('hidden');
        }
      })
    }
    return false;
  })

// Open property Info

  $('.images li').click(function(event) {
    var image = $(this).find('img').attr('src');
    var infoText = $(this).find('.infoText').contents();

    $('.propmodal').fadeIn(600, function() {
      $('.propmodal').css('display', 'block');
      $('.propmodalImage img').attr('src', image);
      $(infoText).clone().appendTo($('.propmodalText'));
    });
  });

  // Close Property Info

  $('.propmodalClose').click(function(event) {
    $('.propmodal').fadeOut(500, function() {
      $('.propmodal').css('display', 'none');
      $('.propmodalImage img').removeAttr('src');
      $('.propmodalText').html('');
    });
  });


// ArrowUp

  $(window).scroll(function()
    {
      if($(this).scrollTop()>250) {
         $('#arrowUp').fadeIn(600);
      } else {
      $('#arrowUp').fadeOut(600);
    }
  });

// HAMBURGER

  $('.icon').click(function(event) {
    $('.icon').toggleClass('active');
    $('nav ul').toggleClass('show');
  });

  $('nav a').click(function(event) {
    $('.icon').removeClass('active');
    $('nav ul').removeClass('show');
  });

});
