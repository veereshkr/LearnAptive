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


//N = '#nav0';
$.fn.navBottom = function() {
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
    $('#nav0').css('border-bottom', '4px solid #006699');
    var hash = window.location.hash;
    if(hash == "#h"){
    var hash1 = hash + "ome";
    $('#nav0').css('border-bottom', '4px solid transparent');
    $('#demo a[href="' + hash1 + '"]').tab('show');

  }

  if(hash == "#a"){
    var hash1 = hash + "nalysis";
    $('#nav0').css('border-bottom', '4px solid transparent');
    $('#demo a[href="' + hash1 + '"]').tab('show');
    //$("#graph1").highcharts().reflow();
  }
  if(hash == "#w"){
    var hash1 = hash + "iki";
    $('#nav0').css('border-bottom', '4px solid transparent');
    $('#demo a[href="' + hash1 + '"]').tab('show');


  }
  if(hash == "#f"){
    var hash1 = hash + "orum";
    $('#nav0').css('border-bottom', '8px solid transparent');
    $('#demo a[href="' + hash1 + '"]').tab('show');

  }
  if(hash == "#t"){
    var hash1 = hash + "utors";
    $('#nav0').css('border-bottom', '8px solid transparent');
    $('#demo a[href="' + hash1 + '"]').tab('show');

  }
};

$.fn.navBottomQbank = function() {
$("ul.nav-tabs > li > a").on("shown.bs.tab", function (e) {
    $(window).resize();
        var id = $(e.target).attr("href").substr(1,1);
        var list = $(e.target).parent().attr("id");
        $("#demo li").each(function(){
          if($(this).attr('id') == list){
            var listid = "#" + $(this).attr('id');
            $(listid).css('border-bottom', '8px solid #006699');
          }
          else{
            var listid = "#" + $(this).attr('id');
            $(listid).css('border-bottom', '8px solid transparent');
          }
        });
        window.location.hash = id;
    });

    // on load of the page: switch to the currently selected tab
    $('#nav4').css('border-bottom', '8px solid #006699');
    var hash = window.location.hash;
    if(hash == "#h"){
    var hash1 = hash + "ome";
    $('#nav4').css('border-bottom', '8px solid transparent');
    $('#demo a[href="' + hash1 + '"]').tab('show');
  }

  if(hash == "#a"){
    var hash1 = hash + "nalysis";
    $('#nav4').css('border-bottom', '8px solid transparent');
    $('#demo a[href="' + hash1 + '"]').tab('show');
  }
  if(hash == "#w"){
    var hash1 = hash + "iki";
    $('#nav4').css('border-bottom', '8px solid transparent');
    $('#demo a[href="' + hash1 + '"]').tab('show');

  }
  if(hash == "#f"){
    var hash1 = hash + "orum";
    $('#nav4').css('border-bottom', '8px solid transparent');
    $('#demo a[href="' + hash1 + '"]').tab('show');
  }
  if(hash == "#t"){
    var hash1 = hash + "utors";
    $('#nav4').css('border-bottom', '8px solid transparent');
    $('#demo a[href="' + hash1 + '"]').tab('show');

  }
};


$.fn.navWithArrow1 = function() {
    $(this).click(function () {
        var el_id = $(this).attr('id');
        $('#nav10').css('background-color', 'transparent');
        $('.wrapper').remove();
        $('.arrow-up').remove();
        var par = $(this).parent();
        var par_id = $(par).attr('id');
        var li_tot = $("#demo2 li").length;
        $("#demo2 li").each(function(){
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

$.fn.reloadStay1 = function() {
    $('#nav10').css('background-color', '#006699');
    $('#nav10').append('<div class="wrapper" align="center" style="background-color: #006699;"><div class="arrow-up"></div></div>');
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


$.fn.clickDayBtn = function(){
    $('#daybtn').click(function(){
        $("#monbtn").removeClass('active');
        $("#weekbtn").removeClass('active');
        $("#daybtn").addClass('active');
        $("#weekdisplay").css('display', 'none');
        $("#daydisplay").css('display', 'block');
        $("#monthdisplay").css('display', 'none');
    });
};

$.fn.clickWeekBtn = function(){
    $('#weekbtn').click(function(){
        $("#daybtn").removeClass('active');
        $("#monbtn").removeClass('active');
        $("#weekbtn").addClass('active');
        $("#daydisplay").css('display', 'none');
        $("#weekdisplay").css('display', 'block');
        $("#monthdisplay").css('display', 'none');
    });
};

$.fn.clickMonBtn = function(){
    $('#monbtn').click(function(){
        $("#daybtn").removeClass('active');
        $("#weekbtn").removeClass('active');
        $("#monbtn").addClass('active');
        $("#daydisplay").css('display', 'none');
        $("#monthdisplay").css('display', 'block');
        $("#weekdisplay").css('display', 'none');
    });
};


$.fn.diagnose = function(){

    $("#diagnose").click(function(){
        //window.location.href = "/personality";
    $('#form').submit();
    });
};

$.fn.circleColor = function(){
    $('head').append("<style>.parent:before { background-color: #CDA500; border: 1px solid #CDA500; }</style>");
};

$.fn.clickQuant = function(){
    $('#qbtn').click(function(){
        $('head').append("<style>.parent:before { background-color: green; border: 1px solid green; }</style>");
        $('head').append("<style>.child { background-color: #CDA500; border: 1px solid #CDA500; }</style>");
    });
};


$.fn.studentsiteTour = function() {
    var temp = "<div class='popover tour'><div class='arrow'></div>\
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
        <div style='float: right;'>&nbsp;</div></div></div></nav></div>";
    var tour = new Tour({
      steps: [
      {
        element: "#stour1",
        title: "",
        content: "<div><b style='color: #666666;'>Diagnostic Test</b></div><div style='color: #666666;'>Start using Adaptube by going\
         through our diagnostic test first. We will carefully craft a study plan\
         for you based on your profile\
         and potential.</div>",
        placement: "top",
        template: temp
    },
    {
        element: "#stour2",
        title: "",
        content: "<div><b style='color: #666666;'>Summary Panel</b></div><div style='color: #666666;'>You can constantly monitor your performance\
         on dashboard. A detailed analysis will be displayed\
         which will help you\
         perform better.</div>",
        placement: "bottom",
        template: temp
    },
    {
        element: "#stour3",
        title: "",
        content: "<div><b style='color: #666666;'>Study Plan</b></div><div style='color: #666666;'>Based on your performance and needs\
         we will carefully design a study plan which will have maximum\
         positive impact on your\
         overall score.</div>",
        placement: "top",
        template: temp
    },
    {
        element: "#stour4",
        title: "",
        content: "<div><b style='color: #666666;'>Wiki</b></div><div style='color: #666666;'>We have a repository of all that you may need\
         to prepare for your exam. You can be more aware of your\
         business surroundings and keep a track of\
         upcoming events.</div>",
        placement: "top",
        template: temp
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


$.fn.bindSort = function(){
$('.sortable').sortable().bind('sortupdate', function() {
    window.setTimeout(function(){
        $($('#modifymodal').find( ".modal-title" )).html("Are you sure you want to modify?"),
        $($('#modifymodal').find( ".modal-body" )).html("<div align='center' style='color: #666666;'>Modifying the plan may reduce your score goal.\
            We suggest you follow\
            the recommended plan as it has been carefully designed keeping in mind your aptitude"),
        $('#footer').css('display', 'block')}, 700);
});
};

$.fn.modifyClick = function(){
	var loadjax = '<div id="loading">\
  <p><img src="/static/student/images/ajax-loader.gif" /> Please Wait</p>\
</div>';
    $('#modify').click(function() {
        $('#cancel').attr('disabled', 'disabled');
        $('#modifymodal').css('pointer-events', 'none');
        $($('#modifymodal').find( ".modal-content" )).html(loadjax);
        $(this).ajaxStart(function(){
        $('#loading').show();
        }).ajaxStop(function(){
         $('#loading').hide();
        });
    var jqxhr = $.get( "/planlist", function(data){
        $($('#modifymodal').find( ".modal-content" )).html( data );
        //$($('#modifymodal').find( ".modal-content" )).css('padding-bottom', '620px');
    })
    .fail(function(){
        alert('request failed');
        $('#cancel').removeAttr('disabled', 'disabled');
    })
    .always(function(){
        $('#modifymodal').css('pointer-events', 'auto');
        $('#cancel').removeAttr('disabled', 'disabled');
});
});
};

$.fn.incDec = function(){
    $('input[name="session-time"]').val("10");
        var p = parseInt($('input[name="session-time"]').val(), 10);
        if(p == 10){
           $('.dec1').css('pointer-events', 'none');
        }
        else{
            $('.dec1').css('pointer-events', 'auto');
        }
    $(".inc1").click(function(){
        var p = parseInt($('input[name="session-time"]').val(), 10);
        if(p <= 20){
        p = p + 10;
        $('input[name="session-time"]').val(p);
    }
    else {
        p = p + 30;
        if(p == 90){
           $('.inc1').css('pointer-events', 'none');
        }
        $('input[name="session-time"]').val(p);
    }

        $('.dec1').css('pointer-events', 'auto');
        //alert($('input[name="timeweekday"]').val());
    });
    $(".dec1").click(function(){
        var p = parseInt($('input[name="session-time"]').val(), 10);
        if(p <= 30){
        p = p - 10;
        if(p == 10){
           $('.dec1').css('pointer-events', 'none');
        }
        $('input[name="session-time"]').val(p);
    }
    else {
        p = p - 30;

        $('input[name="session-time"]').val(p);
    }

        $('.inc1').css('pointer-events', 'auto');
    });
};


$.fn.incDecPro = function(){
    var p = parseFloat($('input[name="timeweekend1"]').val(), 10);
        if(p == 0){
           $('.dec2').css('pointer-events', 'none');
        }
        else{
            $('.dec2').css('pointer-events', 'auto');
        }
        var p = parseFloat($('input[name="timeweekday1"]').val(), 10);
        if(p == 0){
           $('.dec1').css('pointer-events', 'none');
        }
        else{
            $('.dec1').css('pointer-events', 'auto');
        }
    $(".inc1").click(function(){
        var p = parseFloat($('input[name="timeweekday1"]').val(), 10);
        p = p + 0.5;
        $('input[name="timeweekday1"]').val(p);
        $('.dec1').css('pointer-events', 'auto');
        //alert($('input[name="timeweekday"]').val());
    });
    $(".inc2").click(function(){
        var p = parseFloat($('input[name="timeweekend1"]').val(), 10);
        p = p + 0.5;
        $('input[name="timeweekend1"]').val(p);
        $('.dec2').css('pointer-events', 'auto');
        //alert($('input[name="timeweekday"]').val());
    });
    $(".dec1").click(function(){
        var p = parseFloat($('input[name="timeweekday1"]').val(), 10);
        p = p - 0.5;
        if(p == 0){
           $('.dec1').css('pointer-events', 'none');
        }
        else{
            $('.dec1').css('pointer-events', 'auto');
        }
        $('input[name="timeweekday1"]').val(p);
        //alert($('input[name="timeweekday"]').val());
    });
    $(".dec2").click(function(){
        var p = parseFloat($('input[name="timeweekend1"]').val(), 10);
        p = p - 0.5;
        if(p == 0){
           $('.dec2').css('pointer-events', 'none');
        }
        else{
            $('.dec2').css('pointer-events', 'auto');
        }
        $('input[name="timeweekend1"]').val(p);
        //alert($('input[name="timeweekday"]').val());
    });
};

$.fn.incDecMod = function(){
    var p = parseFloat($('input[name="timeweekend2"]').val(), 10);
        if(p == 0){
           $('.dec2').css('pointer-events', 'none');
        }
        else{
            $('.dec2').css('pointer-events', 'auto');
        }
        var p = parseFloat($('input[name="timeweekday2"]').val(), 10);
        if(p == 0){
           $('.dec1').css('pointer-events', 'none');
        }
        else{
            $('.dec1').css('pointer-events', 'auto');
        }
    $(".inc1").click(function(){
        var p = parseFloat($('input[name="timeweekday2"]').val(), 10);
        p = p + 0.5;
        $('input[name="timeweekday2"]').val(p);
        $('.dec1').css('pointer-events', 'auto');
        //alert($('input[name="timeweekday"]').val());
    });
    $(".inc2").click(function(){
        var p = parseFloat($('input[name="timeweekend2"]').val(), 10);
        p = p + 0.5;
        $('input[name="timeweekend2"]').val(p);
        $('.dec2').css('pointer-events', 'auto');
        //alert($('input[name="timeweekday"]').val());
    });
    $(".dec1").click(function(){
        var p = parseFloat($('input[name="timeweekday2"]').val(), 10);
        p = p - 0.5;
        if(p == 0){
           $('.dec1').css('pointer-events', 'none');
        }
        else{
            $('.dec1').css('pointer-events', 'auto');
        }
        $('input[name="timeweekday2"]').val(p);
        //alert($('input[name="timeweekday"]').val());
    });
    $(".dec2").click(function(){
        var p = parseFloat($('input[name="timeweekend2"]').val(), 10);
        p = p - 0.5;
        if(p == 0){
           $('.dec2').css('pointer-events', 'none');
        }
        else{
            $('.dec2').css('pointer-events', 'auto');
        }
        $('input[name="timeweekend2"]').val(p);
        //alert($('input[name="timeweekday"]').val());
    });
};

$.fn.sf = function(){
    $(this).click(function(){
        if($(this).text() == "show future"){
        $('.incircle').empty();
        $('.incircle').text('hide future');
        $('.join').show();
        $('.sf').show();
    }
    else{
       $('.incircle').empty();
        $('.incircle').text('show future');
        $('.join').hide();
        $('.sf').hide();
    }
    });
};

$.fn.subTopic = function(){
var t = '<div class="topic">\
          <div class="col-md-5 tn" style="padding-top: 20px; padding-bottom: 10px;" align="center"></div>\
          <div class="col-md-7" style="padding-top: 10px; padding-bottom: 10px;">\
          <div class="progress" style="margin-bottom: 0px;">\
      <div class="progress-bar progress-bar-success" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 20%">\
    <span>20%</span>\
  </div>\
  <div class="progress-bar progress-bar-info" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 40%">\
    <span>40%</span>\
  </div>\
      </div>\
    </div>\
    </div>\
    </div>';

var k=0;
var j=0;
var l=0;
var m=0;
var a = ['Properties of Integers','Arithmetic word problems',
'Number lines','Squares and square roots','Fractions and rational numbers',
'Elementary number theory','Ratios, proportions and percents',
'Sequences','Sets','Counting problems','Logical reasoning'];

var b = ['Operations on algebraic expressions',
'Factoring',
'Exponents',
'Evaluating expressions with exponents and roots',
'Solving equations',
'Absolute value',
'Direct translation into mathematical expressions',
'Inequalities',
'Systems of linear equations and inequalities',
'Solving quadratic equations by factoring',
'Rational equations and inequalities',
'Direct and inverse variation',
'Word problems',
'Functions'];

var c = ['Geometric notation',
'Points and lines',
'Angles in the plane',
'Triangles',
'Quadrilaterals',
'Areas and Perimeters',
'Other polygons',
'Circles',
'Solid geometry',
'Geometric perception',
'Coordinate geometry',
'Transformations'];

var d = ['Data interpretation',
'Statistics',
'Elementary probability',
'Geometric Probability'];
for(var i=0; i<a.length; i++){
    $('.subtopics1').append(t);
}
for(var i=0; i<b.length; i++){
    $('.subtopics2').append(t);
}
for(var i=0; i<c.length; i++){
    $('.subtopics3').append(t);
}
for(var i=0; i<d.length; i++){
    $('.subtopics4').append(t);
}
$($('.subtopics1').children()).each(function(){
    $($(this).find('.tn')).text(a[k]);
    k = k+1;
});
$($('.subtopics2').children()).each(function(){
    $($(this).find('.tn')).text(b[j]);
    j = j+1;
});
$($('.subtopics3').children()).each(function(){
    $($(this).find('.tn')).text(c[l]);
    l = l+1;
});
$($('.subtopics4').children()).each(function(){
    $($(this).find('.tn')).text(d[m]);
    m = m+1;
});
};

var click1 = 0;
var click2 = 0;
var click3 = 0;
var click4 = 0;
$.fn.angle = function(){
    $('#angle4').click(function(){
    if(click4 == 0){
    $(this).removeClass('fa-angle-down');
    $(this).addClass('fa-angle-up');
    $('.subtopics4').show();
    click4 = click4 + 1;
}
else{
  //$(this).removeClass('fa-angle-up');
  $(this).addClass('fa-angle-down');
  $('.subtopics4').hide();
    click4 = click4 - 1;
  }
  });
  $('#angle1').click(function(){
    if(click1 == 0){
    $(this).removeClass('fa-angle-down');
    $(this).addClass('fa-angle-up');
    $('.subtopics1').show();
    click1 = click1 + 1;
}
else{
    $(this).addClass('fa-angle-down');
    $('.subtopics1').hide();
    click1 = click1 - 1;
  }
  });
  $('#angle2').click(function(){
    if(click2 == 0){
    $(this).removeClass('fa-angle-down');
    $(this).addClass('fa-angle-up');
    $('.subtopics2').show();
    click2 = click2 + 1;
}
else{
    $(this).addClass('fa-angle-down');
    $('.subtopics2').hide();
    click2 = click2 - 1;
  }
  });
  $('#angle3').click(function(){
    if(click3 == 0){
    $(this).removeClass('fa-angle-down');
    $(this).addClass('fa-angle-up');
    $('.subtopics3').show();
    click3 = click3 + 1;
}
else{
    $(this).addClass('fa-angle-down');
    $('.subtopics3').hide();
    click3 = click3 - 1;
  }
  });

  $.fn.displayst = function(){
    var p = parseInt($('input[name="session-time"]').val(), 10);
    $('.stime').html(p);
  };
};
var x = -1;
var gid = 1;
var count = 1;
$.fn.firstInter = function(){
    var bno = "<div class='col-md-12 col-xs-12' style='padding-bottom: 10px; padding-right: 100px;  padding-left: 100px;'>\
    <button type='button' class='btn btn-default form-control' data-toggle='button'\
     aria-pressed='false' autocomplete='off' style='height: 50px; border: 1px solid gray;'>\
    </button></div>";
    var tno = "<div class='col-md-12 col-xs-12' style='padding-bottom: 10px;'>\
    <input type='text' name='studentresponse' class='form-control input-box' placeholder='Enter your answer...'>\
    <p class='txt'></p>\
    <button class='btn btn-primary pull-right ssr'>submit</button>\
    </div>";
    var tarea = "<div class='col-md-12 col-xs-12' style='padding-bottom: 10px; padding-right: 50px;  padding-left: 50px;'>\
    <textarea cols='10' rows='6' placeholder='write your message...' name='studentmessage' class='form-control input-area'></textarea>\
    <div align='center' style='padding-top: 15px;'>\
    <button class='btn btn-primary tutreco' value='tutor' disabled='disabled'>message</button>\
    </div></div>";
    var mcq = "<div class='col-md-12 col-xs-12 mcm' style='padding-bottom: 10px; padding-right: 100px;  padding-left: 100px;'>\
    <button type='button' class='btn btn-default form-control' data-toggle='button'\
     aria-pressed='false' autocomplete='off' style='height: 50px; border: 1px solid gray;'>\
</button></div>";
    var add = '<div><div class="col-md-12 col-xs-12" style="background: #fff; padding-bottom: 20px;">\
        <div class="col-md-1 col-sm-2 pull-left" style="padding-top: 20px;">\
        <img src="/static/user_register/images/genie.png" class="img-responsive gpic" alt="genies pic" style="height: 40px; width: 40px;">\
        </div><div class="col-md-10 col-xs-10 pull-left chat-panel gs">\
            </div>\
          </div>\
          <div class="col-md-12 col-xs-12" style="background: #fff; padding-bottom: 30px;">\
          <div class="col-md-1 col-sm-2 pull-right" style="padding-top: 20px;">\
           <img src="/static/user_register/images/max.jpg" class="img-responsive userpic" alt="genies pic" style="height: 40px; width: 40px;">\
        </div>\
          <div class="col-md-10 col-xs-10 chat-panel pull-right ss"></div>\
          </div></div>';
    $("#sessionbtn").click(function(){
        var m = 0;
        var c = {};
        var d = {};
        var token = $('input[name="csrfmiddlewaretoken"]').prop('value');
        var p = parseInt($('input[name="session-time"]').val(), 10);
        timeouttime = p * 60 * 1000;
        setTimeout(function(){
            count = 0;
        }, timeouttime);
        c['timeout'] = count;
        if($('#sessionbtn').text() === "resume session"){
            c['resume_session'] = "resume";
        }
        if(x<0){
            x = m;
        $('.master').append(add);
        if(photourl != ''){
        $($($('.master').children().eq(m)).find('.userpic')).attr('src', photourl);
    }
    }
    if(x >= m){
        m = x;
    }
    c['uid'] = uid;
    d['uid'] = uid;
    $(document).ajaxStart(function(){
                    	$('.footer').html('<img src="/static/student/images/ajax-loader.gif" />Loading next question');
                    }).ajaxStop(function(){
                    	$('.footer').text('Done.');
                    });
        var jx = $.ajax({type: "POST", url: "/gd/", headers: {"X-CSRFToken": token}, data: c}).done(function(data){
            $($($('.master').children().eq(m)).find('.gs')).html(data);
            var qx = $.ajax({type: "POST", url: "/sd/", headers: {"X-CSRFToken": token}, data: d}).done(function(data){

            $($($('.master').children().eq(m)).find('.ss')).html(data);
            //alert(i);
            if(m>0){
            MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
        }
            var quesid = 'ques' + String(m);
            var qid = '#ques' + String(m);
            $($($($('.master').children().eq(m)).find('.ss')).find('.ques')).attr('id', quesid);
            if(t=="MC1"){
            for(var k=0; k<noptions; k++){
                $(qid).append(bno);
            }
           }
           if(t=='mcmo'){
            for(var l=0; l<noptions; l++){
                $(qid).append(mcq);
            }
            $(qid).append('<div class="col-md-12 col-xs-12 mcq" style="padding-right: 100px; padding-left: 100px;"><button class="btn btn-primary">submit</button></div>');
        }
            if(t=='TUT'){
                $(qid).append(tarea);
            }
            if(t=="SR1"){
            if(textstr != ''){
            $(qid).append(tno);
            $($($(qid).children()).find('.input-box')).css('display', 'none');
            var rep = '<input type="text" class="inptxt">';
            newtxt = textstr.replace(/-TX-/g, rep);
            $($(qid).find('.txt')).html(newtxt);
        }
        else{
            $(qid).append(tno);
            $($($(qid).children()).find('.input-box')).css('display', 'block');
        }
            }
           // $('.master').animate({scrollTop: $('.master').prop('scrollHeight')}, 300);
            var c = {};
            var d = {};
            g(m, qid, c, d, token);

        })
        .fail(function(){
        alert('request failed');
        //$('#cancel').removeAttr('disabled', 'disabled');
    });
        })
        .fail(function(){
        alert('request failed');
        //$('#cancel').removeAttr('disabled', 'disabled');
    });
    });

    function g(m, qid, c, d, token){
        var start_time;
        function start() {
            start_time = new Date();
        }
        function end() {
            var now = new Date();
            stop = (now-start_time)/1000;
            c['sec'] = stop;
            // alert(stop);
        }
        // if($('#sessionbtn').text() === "resume session"){
        //     c['resume'] = "resume";
        // }
        c['uid'] = uid;
        d['uid'] = uid;
        start();
        if(t=="MC1"){
            var i = 0;
            $($($(qid).children()).children()).each(function(){
                $(this).val(String(i));
                //alert(divdata[i]);
                $(this).html(divdata[i]);
                i = i+1;
                //alert(i);
            });
        }
        if(t=="mcmo"){
            var n = 0;
            $($($(qid).find('.mcm')).children()).each(function(){
                $(this).text(divdata[n]);
                $(this).attr('id', String(n));
                $(this).val(String(n));
                var click = 0;
                $(this).click(function(){
                    var thisid = $(this).attr('id');
                    $(this).button('toggle');
                    click = click + 1;
                    if(click%2 == 0){
                        delete c['option'+thisid]
                        //$(this).css('background', '#fff');
                    }
                    else{
                        c['option'+thisid] = $(this).val();
                        //$(this).css('background', '#999999');
                    }
                });
                n = n + 1;
                c['tnumber'] = n;
                //alert(c['tnumber']);
            });

//            $.each(c, function (index, value) {
//     alert( index + ' : ' + value );
// });

        }
        if(t=="TUT"){
            $($($('.master').children().eq(m)).find('.gpic')).attr('src', '/static/user_register/images/photo.jpg');
            $($($(qid).children()).find('.input-area')).keyup(function(){
            var areaval = $(this).val();
            if(areaval == ''){
                $($($(qid).children()).find('.tutreco')).attr('disabled', 'disabled');
            }
            else{
                $($($(qid).children()).find('.tutreco')).removeAttr('disabled', 'disabled');
            }
        });
        }
        if(t=="SR1"){
                if(textstr != ''){
                            var inputval = $($($(qid).find('.txt')).find('.inptxt')).val("textbox");
                        }
                        else{
                            var inputval = $($($(qid).children()).find('.input-box')).val('');
                        }
        }

                //alert($($(this).children()).attr('id'));
                //alert(sttime);
                var btnvar = '';
                if(t=="MC1"){
                    btnvar = $($(qid).children()).children();
                }
                if(t=='mcmo'){
                    btnvar = $($(qid).find('.mcq')).children();
                }
                if(t=="SR1"){
                    btnvar = $($(qid).children()).find('.ssr');
                }
                if(t=="TUT"){
                    btnvar = $($(qid).children()).find('.tutreco');
                }
                $(btnvar).click(function(){
                    //alert(c['tnumber']);
                    end();
                    //alert(stop);
                    $(document).ajaxStart(function(){
                    	$('.footer').html('<img src="/static/student/images/ajax-loader.gif" />Loading next question');
                    }).ajaxStop(function(){
                    	$('.footer').text('Done.');
                    });
                    if(t=='mcmo'){
                    $($($(qid).find('.mcq')).children()).attr('disabled', 'disabled');
                }
                if(t=="TUT"){
            c['answer'] = $($($(qid).children()).find('.tutreco')).val();
            c['msg'] = $($($(qid).children()).find('.input-area')).val();
            $($($(qid).children()).find('.tutreco')).attr('disabled', 'disabled');
            $($($(qid).children()).find('.input-area')).attr('disabled', 'disabled');
        }
                    if(t=='MC1'){
                        c['answer'] = $(this).val();
                        for(var j=0; j<noptions; j++){
                            $(this).css('background', '#999999');
                $($($(qid).children()).children()).attr('disabled', 'disabled');
                //$('#sessionmodal').animate({scrollTop: $("#g"+String(gid)).offset().top}, 2000);
            }
                    }
                    if(t=='SR1'){
                        if(textstr != ''){
                            c['answer'] = $($($(qid).find('.txt')).find('.inptxt')).val();
                            $($($(qid).children()).find('.ssr')).attr('disabled', 'disabled');
                        }
                        else{
                            c['answer'] = $($($(qid).children()).find('.input-box')).val();
                            $($($(qid).children()).find('.ssr')).attr('disabled', 'disabled');
                        }
                    }
                    //alert(c);
                    //alert($(this).attr('id'));
                $('.master').append(add);
                m = m + 1;
                if(photourl != ''){
                $($($('.master').children().eq(m)).find('.userpic')).attr('src', photourl);
        }
                x = m;
                c['timeout'] = count;
                //alert(prevheight);
            //alert(m);
            //var boxid = 'gs'+String(m);
            //var bid = '#gs'+String(m);
            //$($('.master').children().eq(m)).find('.gs');
            //alert($($('.master').children().eq(m)).attr('id'));

            var jx = $.ajax({type: "POST", url: "/gd/", headers:{"X-CSRFToken": token}, data: c}).done(function(data){
            $($($('.master').children().eq(m)).find('.gs')).html(data);
            MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
            var qx = $.ajax({type: "POST", url: "/sd/", headers:{"X-CSRFToken": token}, data: d}).done(function(data){

            $($($('.master').children().eq(m)).find('.ss')).html(data);
            //alert(i);
            //alert(gheight);
            var quesid = 'ques' + String(m);
            var qid = '#ques' + String(m);
            $($($($('.master').children().eq(m)).find('.ss')).find('.ques')).attr('id', quesid);
            // if(m == 2){
            //     t = 'SR1';
            // }
            if(t=='TUT'){
                $(qid).append(tarea);
            }
            if(t=="MC1"){
            for(var k=0; k<noptions; k++){
                $(qid).append(bno);
            }
           }
           if(t=='mcmo'){
            for(var l=0; l<noptions; l++){
                $(qid).append(mcq);
            }
            $(qid).append('<div class="col-md-12 col-xs-12 mcq" style="padding-right: 100px; padding-left: 100px;"><button class="btn btn-primary">submit</button></div>');
        }
            if(t=="SR1"){
            if(textstr != ''){
            $(qid).append(tno);
            $($($(qid).children()).find('.input-box')).css('display', 'none');
            var rep = '<input type="text" class="inptxt">';
            newtxt = textstr.replace(/-TX-/g, rep);
            $($(qid).find('.txt')).html(newtxt);
        }
        else{
            $(qid).append(tno);
            $($($(qid).children()).find('.input-box')).css('display', 'block');
        }
            }
            $('.master').animate({scrollTop: $('.master').prop('scrollHeight')}, 300);
            var c = {};
            var d = {};
            g(m, qid, c, d, token);
            MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
        })
        .fail(function(){
        alert('request failed');
        //$('#cancel').removeAttr('disabled', 'disabled');
    });
        })
        .fail(function(){
        alert('request failed');
        //$('#cancel').removeAttr('disabled', 'disabled');
    });

            });


    }
};

$.fn.diffPage = function(){
    $("#yes").click(function(){
        alert("yes");
    });
};


}( jQuery ));
