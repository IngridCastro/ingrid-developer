$(document).ready(function(){
		$('#text-desa').hide();
		$('#text-app').hide();
		$('#text-mant').hide();

	$('#desa-web').click(function(){
		$('#text-desa').slideToggle();
	})
	$('#app-web').click(function(){
		$('#text-app').slideToggle();
	})
	$('#mant-web').click(function(){
		$('#text-mant').slideToggle();
	})
})

$(document).ready(function() {
	$('#home1').click(function(){ //Id del elemento cliqueable
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
	$('#servicios1').click(function(){ //Id del elemento cliqueable
		$('html, body').animate({scrollTop:860}, 'slow');
		return false;
	});
	$('#works1').click(function(){ //Id del elemento cliqueable
		$('html, body').animate({scrollTop:1100}, 'slow');
		return false;
	});
	$('#contact1').click(function(){ //Id del elemento cliqueable
		$('html, body').animate({scrollTop:1740}, 'slow');
		return false;
	});
});

$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $("header").removeClass("menu").addClass("menu1");
        $("ul").removeClass("opcion").addClass("opcion1");
        $(".logo").removeClass("logo").addClass("logo1");
    } else{
        $("header").removeClass("menu1").addClass("menu");
        $("ul").removeClass("opcion1").addClass("opcion");
        $(".logo1").removeClass("logo1").addClass("logo");
    }
});

$(document).ready(function() {
  $('#fhome').click(function(){ //Id del elemento cliqueable
    $('html, body').animate({scrollTop:0}, 'slow');
    return false;
  });
  $('#fservices').click(function(){ //Id del elemento cliqueable
    $('html, body').animate({scrollTop:860}, 'slow');
    return false;
  });
  $('#fworks').click(function(){ //Id del elemento cliqueable
    $('html, body').animate({scrollTop:1100}, 'slow');
    return false;
  });
  $('#fcontact').click(function(){ //Id del elemento cliqueable
    $('html, body').animate({scrollTop:1740}, 'slow');
    return false;
  });
});

