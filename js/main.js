$(document).ready(function(){

   // add & Remove class
   $(".btn-cmn").click(function () {
    if(!$(this).hasClass('active-btn'))
    {    
        $(".btn-cmn.active-btn").removeClass("active-btn");
         $(".btn-cmn.active-btn").css("transition","all .4s ease-in-out");
        $(this).addClass("active-btn");  
        $(this).css("transition","all .4s ease-in-out");      
    }
  });
    // add & Remove class
    $(".Ft").click(function () {
        if(!$(this).hasClass('Featur-active'))
        {    
            $(".Ft.Featur-active").removeClass("Featur-active");
             $(".Ft.Featur-active").css("transition","all .4s ease-in-out");
            $(this).addClass("Featur-active");  
            $(this).css("transition","all .4s ease-in-out");      
        }
      });
        // add & Remove class
    $(".auct").click(function () {
      if(!$(this).hasClass('auction-active'))
      {    
          $(".auct.auction-active").removeClass("auction-active");
           $(".auct.auction-active").css("transition","all .4s ease-in-out");
          $(this).addClass("auction-active");  
          $(this).css("transition","all .4s ease-in-out");      
      }
    });

        // add & Remove class
        $(".Spec-btn-cmn").click(function () {
          if(!$(this).hasClass('Spec-active'))
          {    
              $(".Spec-btn-cmn.Spec-active").removeClass("Spec-active");
               $(".Spec-btn-cmn.Spec-active").css("transition","all .4s ease-in-out");
              $(this).addClass("Spec-active");  
              $(this).css("transition","all .4s ease-in-out");      
          }
        });

//   $(".checkbox").click(function(){
//        $(".b1").fadeToggle("");
//   })
// 
 
  
//-----------heart------//

  $(".Rcmn .fa-star,.review .fa-star").click(function( ){ 
       $(this).toggleClass("active-star"); 
  })
//   $(".Rcmn ").click(function( ){  
//        $(".active-star").css("color","yellow"); 
// })
  $(".Fill-heart .fa-heart").click(function( ){ 
    $(this).toggleClass("active-heart");
})

// ---Collapse-1---
$(".collap-head1").click(function(){
  $(".Clp-toggle1").slideToggle("");
  $(this).toggleClass("collape-active");
})

// ---Collapse-2---
$(".collap-head2").click(function(){
  $(".Clp-toggle2").slideToggle("");
  $(this).toggleClass("collape-active2");
})
// ---Collapse---end---here

// ---Collapse-3---
$(".collap-head3").click(function(){
  $(".Clp-toggle3").slideToggle("");
  $(this).toggleClass("collape-active3");
})
// ---Collapse3333---end---here


// ---Collapse-4444---
$(".collap-head4").click(function(){
  $(".Clp-toggle4").slideToggle("");
  $(this).toggleClass("collape-active4");
})
// ---Collapse4444---end---here

// ---Collapse-555---
$(".collap-head5").click(function(){
  $(".Clp-toggle5").slideToggle("");
  $(this).toggleClass("collape-active5");
})
// ---Collapse5555---end---here
// ---Collapse-6666---
$(".collap-head6").click(function(){
  $(".Clp-toggle6").slideToggle("");
  $(this).toggleClass("collape-active6");
})
// ---Collapse66665---end---here

// ---Collapse-7777----
$(".collap-head7").click(function(){
  $(".Clp-toggle7").slideToggle("");
  $(this).toggleClass("collape-active7");
})
// ---Collapse7777-----end---here

// ---Collapse-8888----
$(".collap-head8").click(function(){
  $(".Clp-toggle8").slideToggle("");
  $(this).toggleClass("collape-active8");
})
// ---Collapse8888-----end---here

// ---Collapse-9999----
$(".collap-head9").click(function(){
  $(".Clp-toggle9").slideToggle("");
  $(this).toggleClass("collape-active9");
})
// ---Collapse9999-----end---here
// ---Expand---img----
$(".Expand").click(function(){ 
  $(".Ft-Fig").toggleClass("expand-wrp");
})
// ---Expand---img-----end---here

      // ------slider1--
  $('.slider1').owlCarousel({
    loop: false,
    margin: 0,
    autoplay: true,
    // nav: true,
    autoplayTimeout: 4000,
    smartSpeed: 1500,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
  });
  
       // ------slider2--
       $('.slider2').owlCarousel({
        loop: true,
        margin: 0,
        // autoplay: true,
         nav: true,
        autoplayTimeout: 4000,
        smartSpeed: 1500,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
      });

       // ------slider3--
       $('.slider3').owlCarousel({
        loop: false,
        margin: 0,
        // autoplay: true,
         nav: true,
        autoplayTimeout: 4000,
        smartSpeed: 1500,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
      });
       // ------slider4--
       $('.slider4').owlCarousel({
        loop: false,
        margin: 0,
        // autoplay: true,
         nav: true,
        autoplayTimeout: 4000,
        smartSpeed: 1500,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
      });
   // ------slider4--
   $('.slider5').owlCarousel({
    loop: false,
    margin: 0,
    // autoplay: true,
    //  nav: true,
    autoplayTimeout: 4000,
    smartSpeed: 1500,
    animateOut: 'fadeOut',
    items:1, 
    onInitialized  : counter,
    onTranslated : counter,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
  });




      function counter(event) {
        var element   = event.target;         
         var items     = event.item.count;     
         var item      = event.item.index + 1;     
       
       // it loop is true then reset counter from 1
       if(item > items) {
         item = item - items
       }
       $('#counter').html("item "+item+" of "+items)
     }
})
 

//---formmm---active--
function openList(ListName) {
    var i;
    var x = document.getElementsByClassName("Form_wrp-cmn");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(ListName).style.display = "block";  
  }

  ///forme---endd
  //---Features---active--

function openFeature(ListName) {
    var i;
    var x = document.getElementsByClassName("vehical-item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(ListName).style.display = "block";  
  }

  ///forme---endd
  //--popular-Features---active--

  function openPopFeature(ListName) {
    var i;
    var x = document.getElementsByClassName("Popular-item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(ListName).style.display = "block";  
  }

  ///forme---endd
  //--popular-bike-----

  function openBikeItem(ListName) {
    var i;
    var x = document.getElementsByClassName("Bike-item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(ListName).style.display = "block";  
  }


  ///forme---endd

///forme---endd
  //--popular-bike-----

  function openSpecs(ListName) {
    var i;
    var x = document.getElementsByClassName("Sf-Right");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(ListName).style.display = "block";  
  }



//--bottom--to--top--- and------stickyyy---on----header---//
var navbar = document.getElementById("navbar"); 
window.onscroll = function() {
    matrixFunction()  
};
function matrixFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navbar.classList.add("sticky")
    } else { 
        navbar.classList.remove("sticky");
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
//end--here--//


// -----timer------cuuurrrrnent---
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds(); 

  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();



// 
    

   
//--bottom--to--top--- and------stickyyy---on----header---//
// var mybutton = document.querySelector(".BT-top"); 
// //var sticky = navbar.offsetTop;
// window.onscroll = function() {
//     BtTop()  
// };
// function BtTop() {
//     if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
//         mybutton.style.display = "block"; 
//     } else {
//         mybutton.style.display = "none"; 
//     }
// } 

// function bottomTop() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// };
// //end--here--//