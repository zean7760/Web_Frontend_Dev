$( ".cta" ).click(function() {
    $( ".transition").toggleClass( "anim-trans" );
    $("#headerImg").css('width','40%');
    $("#headerImg").css('margin','0px auto 0px auto');
    $("#headerImg").hide( 2500 ).show( 2000 );
    $("#NatBlock").show(2000).fadeIn( 1500 );
    $("#why").css('display', 'none');
    $("#what").css('display', 'none');
    $(".cta").css('display', 'none');
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


  $(document).ready(function(){

    var click = 0;
    var click2 = 0;



    $('#why').click(function(){
      if(click==0){
         $('#whyTxt').text("Across our country many teachers have had enough. They're"
          +" tired of working multiple jobs and want high salaries.")
        $('h4').css("color","#002868")
        $('p').css("color","#002868")
        $('#why').css("padding","45px 20px")
        $('#why').css("text-align","left")
        $('#why').css("width","250px")
        $('#why').css("margin-bottom","10px")
        $('#why').css("border","#002868 solid 2px")
        click++;
      }
      else{
        $('#whyTxt').text("")
        $('h4').css("color","#002868")
        $('#why').css("padding","90px 20px")
        $('#why').css("text-align","center")
        $('#why').css("width","100px")
        $('#why').css("border","#FFFFFF solid 2px")
        click=0;
      }
    });

    $('#what').click(function(){
      if(click==0){
        $('#whatTxt').text("In 2018, the United States saw teachers from"
        +" six differnt states walk out, demanding the government make "
        +" changes to the broken system.")
        $('h4').css("color","#002868")
        $('p').css("color","#002868")
        $('#what').css("padding","45px 20px")
        $('#what').css("text-align","left")
        $('#what').css("width","300px")
        $('#what').css("border","#002868 solid 2px")
        click++;
      }
      else{
        $('#whatTxt').text("")
        $('h4').css("color","#002868")
        $('#what').css("padding","90px 20px")
        $('#what').css("text-align","center")
        $('#what').css("width","70px")
        $('#what').css("border","#FFFFFF solid 2px")
        click=0;
      }
    });

    $('#NatAv').click(function(){
      if(click2==0){
        var obj= $('#NatAvTxt').text("Starting Teacher Salary: $38,617\n"
        +" Average rent for 1 Bedroom: $951\n"
        +" Average rent for 2 Bedroom: $1,180")
        obj.html(obj.html().replace(/\n/g,'<br/>'));
        $('h4').css("color","#002868")
        $('p').css("color","#002868")
        $('#NatAv').css("padding","45px 20px")
        $('#NatAv').css("text-align","left")
        $('#NatAv').css("width","400px")
        $('#NatAv').css("height","auto")
        $('#NatAv').css("margin-left","15%")
        $('#NatAv').css("border","#002868 solid 2px")
        click2++;
      }
      else{
        $('#NatAvTxt').text("")
        $('h4').css("color","#002868")
        $('#NatAv').css("padding","90px 20px")
        $('#NatAv').css("text-align","center")
        $('#NatAv').css("width","250px")
        $('#NatAv').css("margin-left","20%")
        $('#NatAv').css("border","#FFFFFF solid 2px")
        click2=0;
      }
    });
  });
