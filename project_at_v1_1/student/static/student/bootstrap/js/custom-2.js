(function( $ ){
	$.fn.fetchTutors = function(){
			var j = $.get('/tutors', function(data){
				$('#tutor').html(data);
			}).fail(function(){
				alert("request failed");
			});
	};

	$.fn.navBottomTutor = function() {
$("ul.nav-tabs > li > a").on("shown.bs.tab", function (e) {
    $(window).resize();
        var id = $(e.target).attr("href").substr(1,1);        
        var list = $(e.target).parent().attr("id");
        $("#demo li").each(function(){
          if($(this).attr('id') == list){
            var listid = "#" + $(this).attr('id');
            $(listid).css('border-bottom', '4px solid #006699');
          }
          else{
            var listid = "#" + $(this).attr('id');
            $(listid).css('border-bottom', '4px solid transparent');
          }
        });
        window.location.hash = id;
    });

    // on load of the page: switch to the currently selected tab
    $('#nav5').css('border-bottom', '4px solid #006699');
    var hash = window.location.hash;
    if(hash == "#h"){
    var hash1 = hash + "ome";
    $('#nav5').css('border-bottom', '4px solid transparent');
    $('#demo a[href="' + hash1 + '"]').tab('show');
  }
  
  if(hash == "#a"){
    var hash1 = hash + "nalysis";
    $('#nav5').css('border-bottom', '4px solid transparent');
    $('#demo a[href="' + hash1 + '"]').tab('show');
  }
  if(hash == "#w"){
    var hash1 = hash + "iki";
    $('#nav5').css('border-bottom', '4px solid transparent');
    $('#demo a[href="' + hash1 + '"]').tab('show');
  
  }
  if(hash == "#f"){
    var hash1 = hash + "orum";
    $('#nav5').css('border-bottom', '4px solid transparent');
    $('#demo a[href="' + hash1 + '"]').tab('show');
  }
  if(hash == "#t"){
    var hash1 = hash + "utors";
    $('#nav5').css('border-bottom', '4px solid transparent');
    $('#demo a[href="' + hash1 + '"]').tab('show');
    
  }
};

}(jQuery));