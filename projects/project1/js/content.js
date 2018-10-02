$( ".cta" ).click(function() {
    $( ".transition").toggleClass( "anim-trans" );
    $("#headerImg").css('width','40%');
    $("#headerImg").css('margin','0px auto 0px auto');
    $("#headerImg").hide( 2500 ).show( 2000 );
    $("#mapPop").show( 4000 ).fadeIn( 4000 );
    $("#why").css('display', 'none');
    $("#blocks").css('display', 'none');
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
			$('#why').css("padding","20px")
			$('#why').css("text-align","left")
			click++;
		}
		else{
			$('#whyTxt').text("")
			$('h4').css("color","#002868")
			$('#why').css("padding","90px 20px")
			$('#why').css("text-align","center")
			click=0;
		}
	});
  });
