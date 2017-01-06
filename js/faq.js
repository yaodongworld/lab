$(document).ready(function() {

    $('.questions li').each(function() {
    	$(this).html("<a>" + $(this).html() + "</a>");
    });

    var idStep = 0;

    $('.answers li').each(function() {
    	idStep = idStep + 1;
    	$(this).attr("id", idStep);
    });

    idStep = 0;

    $('.questions li > a').each(function() {
    	idStep = idStep + 1;
    	$(this).attr("href", "#" + idStep);
    });

    $('.questions li > a').click(function(){
      $.scrollTo( this.hash, 500, { offset: -15 });
      return false;
    });

});