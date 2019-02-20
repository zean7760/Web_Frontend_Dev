$( ".cta" ).click(function() {
    $( ".transition").toggleClass( "anim-trans" );
    $("#headerImg").css('width','40%');
    $("#headerImg").css('margin','0px auto 0px auto');
    $("#headerImg").hide( 2500 ).show( 2000 );
    $(".learnMore").show(2000);
    $("#NatBlock").show(2000).fadeIn( 1500 );
    $("#NatAv").show(2000).fadeIn( 1500 );
    $("#Protests").show(2000).fadeIn( 1500 );
    $("#why").css('display', 'none');
    $("#what").css('display', 'none');
    $(".cta").css('display', 'none');
    $("body").removeClass("has_overlay");
    $("#mapPop").show( 1500 ).fadeIn( 1500 );
  });


  $("path, circle").hover(function(e) {
    $('#info-box').css('display','block');
    $('#info-box').html($(this).data('info'));
  });

  $("path, circle").mouseleave(function(e) {
    $('#info-box').css('display','none');
  });

  $(document).mousemove(function(e) {
    $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
    $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
  }).mouseover();

  var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if(ios) {
    $('a').on('click touchend', function() {
      var link = $(this).attr('href');
      window.open(link,'_blank');
      return false;
    });
  }
  function boldString(str, find){
    var re = new RegExp(find, 'g');
    return str.replace(re, '<b>'+find+'</b>');
}


  $(document).ready(function(){

    var click = 0;
    var click2 = 0;
    var click3 = 0;

    $("body").removeClass("has_overlay");
    $("#NatAv").css('display', 'none');
    $("#Protests").css('display', 'none');

    $('#why').click(function(){
      if(click==0){
         $('#whyTxt').text("Across our country many teachers have had enough. They're"
          +" tired of working multiple jobs and want high salaries.")
        $('h4').css("color","#002868")
        $('p').css("color","#002868")
        $('#why').css("padding","35px 15px")
        $('#why').css("text-align","left")
        $('#why').css("width","300px")
        $('#why').css("margin-bottom","10px")
        $('#why').css("border","#002868 solid 2px")

        click++;
      }
      else{
        $('#whyTxt').text("")
        $('h4').css("color","#002868")
        $('#why').css("padding","80px 10px")
        $('#why').css("text-align","center")
        $('#why').css("width","90px")
        $('#why').css("border","#FFFFFF solid 2px")
        click=0;
      }
    });

    $('#what').click(function(){
      if(click2==0){
        $('#whatTxt').text("In 2018, the United States saw teachers from"
        +" six differnt states walk out, demanding the government make "
        +" changes to the broken system.")
        $('h4').css("color","#002868")
        $('p').css("color","#002868")
        $('#what').css("padding","35px 15px")
        $('#what').css("text-align","left")
        $('#what').css("width","350px")
        $('#what').css("border","#002868 solid 2px")

        click2++;
      }
      else{
        $('#whatTxt').text("")
        $('h4').css("color","#002868")
        $('#what').css("padding","70px 10px")
        $('#what').css("text-align","center")
        $('#what').css("width","90px")
        $('#what').css("border","#FFFFFF solid 2px")

        click2=0;
      }
    });

    $('#NatAv').click(function(){
      if(click2==0){
        var obj= $('#NatAvTxt').text("Starting Teacher Salary: $38,617\n"
        +" Average rent for 2 Bedroom: \n"
        +"national = $14,180\n"
        +"Boulder = $21,600")
        obj.html(obj.html().replace(/\n/g,'<br/>'));
        $('h4').css("color","#002868")
        $('p').css("color","#002868")
        $('#NatAv').css("padding","35px 15px")
        $('#NatAv').css("text-align","left")
        $('#NatAv').css("width","200px")
        $('#NatAv').css("border","#002868 solid 2px")
        $('NatBlock').css("margin-left", "-15%")
        click2++;
      }
      else{
        $('#NatAvTxt').text("")
        $('h4').css("color","#002868")
        $('#NatAv').css("padding","80px 10px")
        $('#NatAv').css("text-align","center")
        $('#NatAv').css("width","110px")
        $('#NatAv').css("border","#FFFFFF solid 2px")
        $('NatBlock').css("margin-left", "0%")
        click2=0;
      }
    });

    $('#Protests').click(function(){
      if(click3==0){
        var obj= $('#protestTxt').text("In Early 2018"
        +" teachers from Colorado, Oklahoma, Kentuky,"
        +" West Virgina, Arizona, and North Carolina walked out of"
        +" schools in protest of education bills cutting even more funding.")

        $('h4').css("color","#002868")
        $('p').css("color","#002868")
        $('#Protests').css("padding","35px 15px")
        $('#Protests').css("text-align","left")
        $('#Protests').css("width","200px")
        $('#Protests').css("border","#002868 solid 2px")
        click3++;
      }
      else{
        $('#protestTxt').text("")
        $('h4').css("color","#002868")
        $('#Protests').css("padding","70px 10px")
        $('#Protests').css("text-align","center")
        $('#Protests').css("width","110px")
        $('#Protests').css("border","#FFFFFF solid 2px")
        click3=0;
      }
    });
  });

  $("#AZ").click(function(){
    $(".changeimg").attr("src", "img/Arizona.jpg")
    $(".modal").show(700).fadeIn( 150 );
    $("body").addClass("has_overlay");
    $("#NatAv").hide(200);
    $("#Protests").hide(200);
    $("#usMapDiv").css("width","25%");
    $("#usMapDiv").css("margin-top","0px");
    $("#results").hide();
  });

  $("#WV").click(function(){
    $(".changeimg").attr("src", "img/westVirginia.jpg")
    $(".modal").show(700).fadeIn( 150 );
    $("body").addClass("has_overlay");
    $("#NatAv").hide(200);
    $("#Protests").hide(200);
    $("#usMapDiv").css("width","25%");
    $("#usMapDiv").css("margin-top","0px");
    $("#results").hide();
  });

  $("#NC").click(function(){
    $(".changeimg").attr("src", "img/NorthCarolina.jpg")
    $(".modal").show(700).fadeIn( 150 );
    $("body").addClass("has_overlay");
    $("#NatAv").hide(200);
    $("#Protests").hide(200);
    $("#usMapDiv").css("width","25%");
    $("#usMapDiv").css("margin-top","0px");
    $("#results").hide();
  });

  $("#CO").click(function(){
    $(".changeimg").attr("src", "img/colorado.jpg")
    $(".modal").show(700).fadeIn( 150 );
    $("body").addClass("has_overlay");
    $("#NatAv").hide(200);
    $("#Protests").hide(200);
    $("#usMapDiv").css("width","25%");
    $("#usMapDiv").css("margin-top","0px");
    $("#results").hide();
  });

  $("#OK").click(function(){
    $(".changeimg").attr("src", "img/oklahoma.jpg")
    $(".modal").show(700).fadeIn( 150 );
    $("body").addClass("has_overlay");
    $("#NatAv").hide(200);
    $("#Protests").hide(200);
    $("#usMapDiv").css("width","25%");
    $("#usMapDiv").css("margin-top","0px");
    $("#results").hide();
  });

  $("#KY").click(function(){
    $(".changeimg").attr("src", "img/Kentuky.jpg")
    $(".modal").show(700).fadeIn( 150 );
    $("body").addClass("has_overlay");
    $("#NatAv").hide(200);
    $("#Protests").hide(200);
    $("#usMapDiv").css("width","25%");
    $("#usMapDiv").css("margin-top","0px");
    $("#results").hide();
  });

  $(".js-close-modal").click(function(){
    $(".modal").hide(300);
    $("body").removeClass("has_overlay");
    $("#NatAv").show(1000).fadeIn( 150 );
    $("#Protests").show(1000).fadeIn( 150 );
    $("#usMapDiv").css("width","80%").fadeIn(150);
    $("#usMapDiv").css("margin-top","-450px");
    $("#results").hide();
  });

  $(document).click(function(event) {
    //if you click on anything except the modal itself or the "open modal" link, close the modal
    if (!$(event.target).closest(".modal,#AZ").length) {
      $("body").find(".modal").removeClass("visible");
    }
  });

  $( "#headerImg" ).click(function() {
    location.reload(true);
});
