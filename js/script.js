// Show the The POSITIVE_INFINITY Property
let x9 = 2583 / 0;
function showpositiveIP(){
    document.getElementById('posinpro').innerHTML = x9;
}
$(document).ready(function(){
    $('.but').on( 'click', function(){
        alert("welcome");
    });

    //show/hide and toggle button
    $('#show').on('click', function(){
        $('#sh_h3').show();
    });
    $('#hide').on('click', function(){
        $('#sh_h3').hide();
    });
    $('#togg').on('click', function(){
        $('#sh_h3').toggle();
    });

    //hide all part line by line
    $('#cl_hr').on('click', function(){
        $('.hid').on('click', function(){
            $(this).hide();
        });
    })

    //hide the text on fade system
    $('#trig').on('click', function(){
        $('#t_h3').fadeToggle();
    });
    
    //Click and show the answer
    $('#sname').on('click', function(){
        $('#showind').slideToggle();
    })
    $('#sfrom').on('click', function(){
        $('#que').slideToggle();
    })
    $('#shave').on('click', function(){
        $('#anse').slideToggle();
    })
    
    //Then just keep the mouse this value shows the alert
    $('#bon').on('click', function(){
        $('#m_h3').slideToggle();
    })
    $("#m_h3").mouseenter(function(){
        alert("Welcome our country!!");
    });

    //from focus/blur event
    $('#fbe').on('click', function(){
        $('.s_fr').slideToggle();
    })
    $('#sname, #sclass, #scounty').focus( function(){
        $(this).css('background-color', 'yellow')
    });
    $('#sname, #sclass, #scounty').blur( function(){
        $(this).css('background-color', 'green')
    });


    //color effect
    $('#t_ce').on('click', function(){
        $('.d_md').fadeToggle();
    });
    $(".d_md").on({
        mouseenter: function(){
          $(this).css("background-color", "lightgray");
        },  
        mouseleave: function(){
          $(this).css("background-color", "lightblue");
        }, 
        click: function(){
          $(this).css("background-color", "yellow");
        }  
      });


      //show animations
      $('#s_an').on('click', function(){
        $('.a_ma').animate({left: '250px'});
      });

      //show animation Bouns
      $('#s_af').on('click', function(){
        $('.a_mt').animate({
            left: '250px',
            padding: '50px',
            opacity: '0.5'
        });
      });

      //height toggle
      $('#s_au').on('click', function(){
        $('.a_my').animate({height: 'toggle'});
      });

      //show the round animation
      $("#r_an").on('click', function(){
        var div = $(".r_tio");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
      });

      //show the text big
      $("#s_ajk").on('click', function(){
        var div = $(".a_mop");
        div.animate({left: '50px'}, "slow");
        div.animate({fontSize: '1.5em'}, "slow");
      });


      //stop the layer
      $('#c_st').on('click', function(){
        $('#t_erw').slideDown(5000);
      })
      $('#l_yr').on('click', function(){
        $('#t_erw').stop();
      })


      //slide up/down
      $("#u_dn").on('click', function(){
        $(".u_pyr").css("color", "black").slideUp(2000).slideDown(2000);
      });


      //Show the hide text/html/input value
      $("#btn1").on('click', function(){
        $("#tex1").text("Allhamdulillah for everything");
      });
      $("#btn2").on('click', function(){
        $("#tex2").html("Allah is always with me");
      });
      $("#btn3").on('click', function(){
        $("#tex3").val ("absufian020@gmail.com");
      });


      //Text and list item unlimited
      $('#p_tett').on('click', function(){
        $('#h_aph').prepend("<b>Always thinking positive</b>.");
      });
      $('#p_lett').on('click', function(){
        $('ol').prepend("<b>Hello Bangladesh!!</b>.");
      });



      //Show the image size text unlimited on click
      $('#b_atwi').on('click', function(){
        $('img').before("<b>Before </b>");
      });
      $('#b_ntwi').on('click', function(){
        $('img').after("<b>After </b>");
      });

      //remove all Div elemant
      $('#r_taed').on('click', function(){
        $('.r_apro').remove();
      });

      //Empty the all value in Div
      $('#r_eaed').on('click', function(){
        $('.r_epro').empty();
      });

      //html css value in jequery
      $('#c_htfd').on('click', function(){
        $(".t_h2, .d_h3fb, .ht_p").addClass("blue");
        $(".hb_as").addClass("important");
      });


      //show the text toggle for change color
      $('#c_hmfd').on('click', function(){
        $(".hb_asio").toggleClass("greent");
      });


      //Show the multiple styles
      $('#m_btnqw').on('click', function(){
        $(".m_h21, .m_h22, .m_h23, .m_stle").css({"background-color": "red", "font-size": "400%"});
      });



    //show the value within divs will be visible
    $("#d_wbv").on("click", function(){
      var txt = "";
      txt += "Width of div: " + $("#div1").width() + "</br>";
      txt += "Height of div: " + $("#div1").height();
      $("#div1").html(txt);
    });


    //show the value within divs
    $("#d_wbv2").on('click', function(){
      var txt = "";
      txt += "Width of div: " + $("#div2").width() + "</br>";
      txt += "Height of div: " + $("#div2").height() + "</br>";
      txt += "Outer width of div: " + $("#div2").outerWidth() + "</br>";
      txt += "Outer height of div: " + $("#div2").outerHeight();
      $("#div2").html(txt);
    });


    //Show the full width
    $("#d_wbv3").on('click', function(){
      $("#div3").width(700).height(500);
    });


    //Show the div prants color css
    $('#g_raop').on('click', function(){
      $(".s_fhds").parents("ul").css({"color": "red", "border": "2px solid red"});
    });


    //Show the div parentsUntil
    $('#g_raop1').on('click', function(){
      $(".s_partyu").parentsUntil("div").css({"color": "red", "border": "2px solid red"});
    });


    //last div colore
    $("#g_raop3").on('click', function(){
      $(".w_tmh").last().css("background-color", "brown");
      $(".w_tmh").last().css("color", "white");
    });

    //Show the change Name filter
    $("#c_jfrj").on("click", function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });


    //Show the Search this item
    $("#myInput23").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myListfddf li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });


    //Show the trigger
    $( "#s_stt" )
       .on( "change", function() {
    var str = "";
    $( "#s_stt option:selected" ).each( function() {
      str += $( this ).text() + " ";
    } );
    $( ".t_stt" ).text( str );
  } )
  .trigger( "change" );

  //SHow the mousedown
  $('#m_thbtc').on('click', function(){
    $( "#m_hmd" )
  .on( "mouseup", function() {
    $( this ).append( "<span style='color:#f00;'>Mouse up.</span>" );
  } )
  .on( "mousedown", function() {
    $( this ).append( "<span style='color:#00f;'>Mouse down.</span>" );
  } );
  });

  //Show the fade
  $("#t_butre").on('click', function(){
    $("#t_div1").fadeTo("slow", 0.15);
    $("#t_div2").fadeTo("slow", 0.4);
    $("#t_div3").fadeTo("slow", 0.7);
  });
  
  //Show the fade toggle
  $("#t_bueu").on('click', function(){
    $("#t_di1").fadeToggle();
    $("#t_di2").fadeToggle("slow");
    $("#t_di3").fadeToggle(3000);
  });


  //Show the fadein toggle
  $("#t_butu").on('click', function(){
    $("#t_diu1").fadeIn();
    $("#t_diu2").fadeIn("slow");
    $("#t_diu3").fadeIn(3000);
  });


  //Show the div with a number of different properties.
  $( "#go" ).on( "click", function() {
    $( "#bloc" ).animate({
      width: "70%",
      opacity: 0.4,
      marginLeft: "0.6in",
      fontSize: "3em",
      borderWidth: "10px"
    }, 1500 );
  });


  //Show the ouble-click for the paragraph
  $( ".f_tdwa" ).bind( "click", function( event ) {
    var str = "( " + event.pageX + ", " + event.pageY + " )";
    $( ".h_cadc" ).text( "Click happened! " + str );
  });
  $( "p" ).bind( "dblclick", function() {
    $( ".h_cadc" ).text( "Double-click happened in " + this.nodeName );
  });
  $( ".f_tdwa" ).bind( "mouseenter mouseleave", function( event ) {
    $( this ).toggleClass( "hover" );
  });

  //show the delaying
  $( "#f_bfi" ).on( "click", function() {
    $( "div.first1" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
    $( "div.second1" ).slideUp( 300 ).fadeIn( 400 );
  });

  //show the pragrape
  $( ".c_yrey" ).delegate( "#d_peno", "click", function() {
    $( this ).after( "<p>Another paragraph!</p>" );
  });


//Show the sets their color property
$( ".hsh" ).on( "click", function() {
  $( ".hsh" ).each( function( i ) {
    if ( this.style.color !== "blue" ) {
      this.style.color = "blue";
    } else {
      this.style.color = "";
    }
  } );
} );

//Show div with index 2 blue
$( ".uisgfia" ).find( "Div#jfoiuh" ).eq( 2 ).addClass( "blue" );

//show the find text
$('#c_mcfghd').on('click', function(){
  $( ".h_tryt" ).find( "#adhdsfd" ).css( "color", "red" );
});


//Show the Highlight the first item
$('#h_tfiial').on('click', function(){
  $( ".h_ul li" ).first().addClass( "highlight" );
});


//Show the Highlight the last item
$('#h_tfil').on('click', function(){
  $( ".h_ulr li" ).last().addClass( "highlight" );
});


//show the custom (non-browser) events
$( ".erhu" ).on( "myCustomEvent", function( event, myName ) {
  $( this ).text( myName + ", hi there!" );
  $( ".jfdgnn" )
    .stop()
    .css( "opacity", 1 )
    .text( "myName = " + myName )
    .fadeIn( 30 )
    .fadeOut( 1000 );
});
$( "#jfiihihj" ).click(function () {
  $( ".erhu" ).trigger( "myCustomEvent", [ "John" ] );
});


//Show the checkbox
$( "#check1h" ).on( "change", function() {
  var $input = $( this );
  $( ".fhdujihf" ).html(
    ".attr( \"checked\" ): <b>" + $input.attr( "checked" ) + "</b><br>" +
    ".prop( \"checked\" ): <b>" + $input.prop( "checked" ) + "</b><br>" +
    ".is( \":checked\" ): <b>" + $input.is( ":checked" ) + "</b>" );
} ).trigger( "change" );



//Show the animations have ended
$( "#fkjhbjb" ).on( "click", function() {
  $( ".u_fsvk" ).append( "Started..." );
 
  $( ".fjnsjf" ).each(function( i ) {
    $( this ).fadeIn().fadeOut( 1000 * ( i + 1 ) );
  });
 
  $( ".fjnsjf" ).promise().done(function() {
    $( ".u_fsvk" ).append( " Finished! " );
  });
});

  

});