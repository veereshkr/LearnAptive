(function( $ ){
    var error = "red";
    var success = "green";
    $.fn.nameValidation = function() {
        $(this).keyup(function () {
        	if (this.value.length <= 1) {
                $(this).css("border-color", error);
                return this;
            }
            else{
            	$(this).css("border-color", success);
            	return this;
            }
        });
    };

    $.fn.pwdHelpChar = function() {
        $(this).keyup(function () {
        	if (this.value.length <= 7) {
                $(".char_val").css("border", "1px solid red");
                $(".char_val").css("background", "transparent");
                $(".char_text").css("color", "red");

                return this;
            }
            else{
            	$(".char_val").css("border", "1px solid green");
                $(".char_val").css("background", "green");
                $(".char_text").css("color", "green");

            	return this;
            }
        });
    };


    $.fn.pwdHelpCap = function() {
        $(this).keyup(function () {
            var emailReg = /(?=.*[A-Z])/;
		
            if( !emailReg.test( $ (this).val() ) ) {
  	            $(".cap_val").css("border", "1px solid red");
                $(".cap_val").css("background", "transparent");
                $(".cap_text").css("color", "red");

                return this;
            }
            else{
                $(".cap_val").css("border", "1px solid green");
                $(".cap_val").css("background", "green");
                $(".cap_text").css("color", "green");

            	return this;
            }
        });
    };

    $.fn.pwdHelpSm = function() {
        $(this).keyup(function () {
            var emailReg = /(?=.*[a-z])/;
		
            if( !emailReg.test( $ (this).val() ) ) {
  	            $(".sm_val").css("border", "1px solid red");
                $(".sm_val").css("background", "transparent");
                $(".sm_text").css("color", "red");

                return this;
            }
            else{
                $(".sm_val").css("border", "1px solid green");
                $(".sm_val").css("background", "green");
                $(".sm_text").css("color", "green");

            	return this;
            }
        });
    };

    $.fn.pwdHelpNum = function() {
        $(this).keyup(function () {
            var emailReg = /(?=.*[0-9])/;
		
            if( !emailReg.test( $ (this).val() ) ) {
  	            $(".num_val").css("border", "1px solid red");
                $(".num_val").css("background", "transparent");
                $(".num_text").css("color", "red");

                return this;
            }
            else{
                $(".num_val").css("border", "1px solid green");
                $(".num_val").css("background", "green");
                $(".num_text").css("color", "green");

            	return this;
            }
        });
    };

    

    $.fn.autoHoverScroll = function() {
    	
    	$(document).scroll(function () {
        var y = $(this).scrollTop();
    	//alert(y);
            if (y > 800 && y < 1181) {
                $('#test1').click();
                $('#test2').css("font-weight", "normal");
                $('#test3').css("font-weight", "normal");
                $('#test4').css("font-weight", "normal");
                $('#test3').css("color", "gray");
                $('#test2').css("color", "gray");
                $('#test4').css("color", "gray");
                $('#test1').css("font-weight", "bold");
                $('#test1').css("color", "#006699");
            }
            else if (y > 1181 && y < 1450) {
                $('#test1').mouseleave();
                $('#test1').css("font-weight", "normal");
                $('#test3').css("font-weight", "normal");
                $('#test4').css("font-weight", "normal");
                $('#test1').css("color", "gray");
                $('#test3').css("color", "gray");
                $('#test4').css("color", "gray");
                $('#test2').click();
                $('#test2').css("font-weight", "bold");
                $('#test2').css("color", "#006699");
            }
            else if (y > 1450 && y < 1800) {
                $('#test2').mouseleave();
                $('#test1').css("font-weight", "normal");
                $('#test2').css("font-weight", "normal");
                $('#test4').css("font-weight", "normal");
                $('#test2').css("color", "gray");
                $('#test4').css("color", "gray");
                $('#test1').css("color", "gray");
                $('#test3').click();
                $('#test3').css("font-weight", "bold");
                $('#test3').css("color", "#006699");
            }
            else if (y > 1800 && y < 1950) {
                $('#test3').mouseleave();
                 $('#test3').css("font-weight", "normal");
                 $('#test1').css("font-weight", "normal");
                $('#test2').css("font-weight", "normal");
                $('#test1').css("color", "gray");
                 $('#test3').css("color", "gray");
                  $('#test2').css("color", "gray");
                //$('#test4').css("color", "gray");
                $('#test4').click();
                $('#test4').css("font-weight", "bold");
                $('#test4').css("color", "#006699");
            }
            else {
                $('#test4').mouseleave();
                 $('#test4').css("font-weight", "normal");
                 //$('#test2').css("color", "gray");
                $('#test4').css("color", "gray");
                $('#test1').click();
                $('#test1').css("font-weight", "bold");
                $('#test1').css("color", "#006699");
            }
        });
        
    };


    $.fn.navWithArrow = function() {
        $(this).click(function () {
            var el_id = $(this).attr('id');
            $('#nav0').css('background-color', 'transparent');
            $('.wrapper').remove();
           $('.arrow-up').remove();
           var par = $(this).parent();
           var par_id = $(par).attr('id');
           var li_tot = $("#demo li").length;
           $("#demo li").each(function(){
               //$(this).css('background-color', '#006699');
               if($(this).attr('id') == el_id){
                    var anc = $(this).find('a');
                    $(anc).css('background-color', '#006699');
               }
               else{
                var anc = $(this).find('a');
                $(anc).css('background-color', 'transparent');

               }
               
            });
           
        $(this).append('<div class="wrapper" align="center" style="background-color: #006699;"><div class="arrow-up"></div></div>');
    });
};

$.fn.reloadStay = function() {
    $('#nav0').css('background-color', '#006699');  
    $('#nav0').append('<div class="wrapper" align="center" style="background-color: #006699;"><div class="arrow-up"></div></div>');
};

$.fn.siteTour = function() {
    var tour = new Tour({
  steps: [
  {
    element: "#tour1",
    title: "Title of my step",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    placement: "bottom",
    template: "<div class='popover tour'><div class='arrow'></div>\
<button class='btn btn-default btn-end close' data-role='end'>&times;</button>\
<div class='popover-content'></div><nav class='popover-navigation'><div class='btn-group'>\
<button id='tourNextBtn' class='btn btn-default' data-role='next' style='background-color: #006699; color: #fff;'>Next</button>\
<div style='padding-top: 15px; float: right;'><div class='circle' style='float: right; border:2px solid #006699;' id='c1'></div>\
<div style='float: right;'>&nbsp;</div></div>\
<div style='padding-top: 15px; float: right;'><div class='circle' style='float: right; border:2px solid #006699;' id='c2'></div>\
<div style='float: right;'>&nbsp;</div></div>\
<div style='padding-top: 15px; float: right;'><div class='circle' style='float: right; border:2px solid #006699;' id='c3'></div>\
<div style='float: right;'>&nbsp;</div></div>\
<div style='padding-top: 15px; float: right;'><div class='circle' style='float: right; border:2px solid #006699; background-color:#006699;' id='c4'></div>\
<div style='float: right;'>&nbsp;</div></div></div></nav></div>"
  },
{
    element: "#tour2",
    title: "",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    placement: "top",
    template: "<div class='popover tour'><div class='arrow'></div>\
<button class='btn btn-default btn-end close' data-role='end'>&times;</button>\
<div class='popover-content'></div><nav class='popover-navigation'><div class='btn-group'>\
<button id='tourNextBtn' class='btn btn-default' data-role='next' style='background-color: #006699; color: #fff;'>Next</button>\
<div style='padding-top: 15px; float: right;'><div class='circle' style='float: right; border:2px solid #006699;' id='c1'></div>\
<div style='float: right;'>&nbsp;</div></div>\
<div style='padding-top: 15px; float: right;'><div class='circle' style='float: right; border:2px solid #006699;' id='c2'></div>\
<div style='float: right;'>&nbsp;</div></div>\
<div style='padding-top: 15px; float: right;'><div class='circle' style='float: right; border:2px solid #006699; background-color:#006699;' id='c3'></div>\
<div style='float: right;'>&nbsp;</div></div>\
<div style='padding-top: 15px; float: right;'><div class='circle' style='float: right; border:2px solid #006699;' id='c4'></div>\
<div style='float: right;'>&nbsp;</div></div></div></nav></div>"
  },
  {
    element: "#tour3",
    title: "",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    placement: "left",
    template: "<div class='popover tour'><div class='arrow'></div>\
<button class='btn btn-default btn-end close' data-role='end'>&times;</button>\
<div class='popover-content'></div><nav class='popover-navigation'><div class='btn-group'>\
<button id='tourNextBtn' class='btn btn-default' data-role='next' style='background-color: #006699; color: #fff;'>Next</button>\
<div style='padding-top: 15px; float: right;'><div class='circle' style='float: right; border:2px solid #006699;' id='c1'></div>\
<div style='float: right;'>&nbsp;</div></div>\
<div style='padding-top: 15px; float: right;'><div class='circle' style='float: right; border:2px solid #006699; background-color:#006699;' id='c2'></div>\
<div style='float: right;'>&nbsp;</div></div>\
<div style='padding-top: 15px; float: right;'><div class='circle' style='float: right; border:2px solid #006699;' id='c3'></div>\
<div style='float: right;'>&nbsp;</div></div>\
<div style='padding-top: 15px; float: right;'><div class='circle' style='float: right; border:2px solid #006699;' id='c4'></div>\
<div style='float: right;'>&nbsp;</div></div></div></nav></div>"
  },
  {
    element: "#tour4",
    title: "",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    placement: "left",
    template: "<div class='popover tour'><div class='arrow'></div>\
<button class='btn btn-default btn-end close' data-role='end'>&times;</button>\
<div class='popover-content'></div><nav class='popover-navigation'><div class='btn-group'>\
<button class='btn btn-default' data-role='end' style='background-color: #006699; color: #fff; float: left;'>Finish</button>\
<div style='padding-top: 15px; float: right;'><div class='circle' style='float: right; border:2px solid #006699; background-color:#006699;' id='c1'></div>\
<div style='float: right;'>&nbsp;</div></div>\
<div style='padding-top: 15px; float: right;'><div class='circle' style='float: right; border:2px solid #006699;' id='c2'></div>\
<div style='float: right;'>&nbsp;</div></div>\
<div style='padding-top: 15px; float: right;'><div class='circle' style='float: right; border:2px solid #006699;' id='c3'></div>\
<div style='float: right;'>&nbsp;</div></div>\
<div style='padding-top: 15px; float: right;'><div class='circle' style='float: right; border:2px solid #006699;' id='c4'></div>\
<div style='float: right;'>&nbsp;</div></div></div></nav></div>"
  }
],
storage: false,
backdrop: true
});

// Initialize the tour
tour.init();

// Start the tour
tour.start();
};

$.fn.smartReload = function(){
    
};

}( jQuery ));