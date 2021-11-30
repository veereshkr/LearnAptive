(function( $ ){
    var error = "red";
    var success = "green";
    var rega = 0;
    var regb = 0;
    var regc = 0;
    var regd = 0;
    var rege = 0;
    var regf = 0;
    var regg = 0;
    $.fn.nameValidation = function() {
        $('#text1').keyup(function () {
        	if (this.value.length <= 1) {
                $(this).css("border-color", error);
                rega = 0;
                if(rega && regb && regc && regd && rege && regf && regg === 1){
            $('input[value="Sign Up"]').removeAttr('disabled', 'disabled');
        }
        else{
            $('input[value="Sign Up"]').attr('disabled', 'disabled');
        }
            }
            else{
            	$(this).css("border-color", success);
                rega = 1;
                if(rega && regb && regc && regd && rege && regf && regg === 1){
            $('input[value="Sign Up"]').removeAttr('disabled', 'disabled');
        }
        else{
            $('input[value="Sign Up"]').attr('disabled', 'disabled');
        }
            }
        });
    };
    
    $.fn.emailVal = function(){
        var res = /^([^@\s+]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
     $('input[name="email"]').keyup(function(){
        if(res.test( $(this).val() )){  
            regb = 1;
            if(rega && regb && regc && regd && rege && regf && regg === 1){
            $('input[value="Sign Up"]').removeAttr('disabled', 'disabled');
        }
        else{
            $('input[value="Sign Up"]').attr('disabled', 'disabled');
        }
        }
        else{
            regb = 0;
            if(rega && regb && regc && regd && rege && regf && regg === 1){
            $('input[value="Sign Up"]').removeAttr('disabled', 'disabled');
        }
        else{
            $('input[value="Sign Up"]').attr('disabled', 'disabled');
        }
        }
     });
  };

    $.fn.pwdHelpChar = function() {
        $('#hints').keyup(function () {
        	if (this.value.length <= 7) {
                $(".char_val").css("border", "1px solid red");
                $(".char_val").css("background", "transparent");
                $(".char_text").css("color", "red");

                regc = 0;
                if(rega && regb && regc && regd && rege && regf && regg === 1){
            $('input[value="Sign Up"]').removeAttr('disabled', 'disabled');
        }
        else{
            $('input[value="Sign Up"]').attr('disabled', 'disabled');
        }
            }
            else{
            	$(".char_val").css("border", "1px solid green");
                $(".char_val").css("background", "green");
                $(".char_text").css("color", "green");

                regc = 1;
                if(rega && regb && regc && regd && rege && regf && regg === 1){
            $('input[value="Sign Up"]').removeAttr('disabled', 'disabled');
        }
        else{
            $('input[value="Sign Up"]').attr('disabled', 'disabled');
        }
            }
        });
    };


    $.fn.pwdHelpCap = function() {
        $('#hints').keyup(function () {
            var emailReg = /(?=.*[A-Z])/;

            if( !emailReg.test( $ (this).val() ) ) {
             $(".cap_val").css("border", "1px solid red");
             $(".cap_val").css("background", "transparent");
             $(".cap_text").css("color", "red");

             regd = 0;
             if(rega && regb && regc && regd && rege && regf && regg === 1){
            $('input[value="Sign Up"]').removeAttr('disabled', 'disabled');
        }
        else{
            $('input[value="Sign Up"]').attr('disabled', 'disabled');
        }
         }
         else{
            $(".cap_val").css("border", "1px solid green");
            $(".cap_val").css("background", "green");
            $(".cap_text").css("color", "green");

            regd = 1;
            if(rega && regb && regc && regd && rege && regf && regg === 1){
            $('input[value="Sign Up"]').removeAttr('disabled', 'disabled');
        }
        else{
            $('input[value="Sign Up"]').attr('disabled', 'disabled');
        }
        }
    });
    };

    $.fn.pwdHelpSm = function() {
        $('#hints').keyup(function () {
            var emailReg = /(?=.*[a-z])/;

            if( !emailReg.test( $ (this).val() ) ) {
             $(".sm_val").css("border", "1px solid red");
             $(".sm_val").css("background", "transparent");
             $(".sm_text").css("color", "red");

             rege = 0;
             if(rega && regb && regc && regd && rege && regf && regg === 1){
            $('input[value="Sign Up"]').removeAttr('disabled', 'disabled');
        }
        else{
            $('input[value="Sign Up"]').attr('disabled', 'disabled');
        }
         }
         else{
            $(".sm_val").css("border", "1px solid green");
            $(".sm_val").css("background", "green");
            $(".sm_text").css("color", "green");

           rege = 1;
           if(rega && regb && regc && regd && rege && regf && regg === 1){
            $('input[value="Sign Up"]').removeAttr('disabled', 'disabled');
        }
        else{
            $('input[value="Sign Up"]').attr('disabled', 'disabled');
        }
        }
    });
    };

    $.fn.pwdHelpNum = function() {
        $('#hints').keyup(function () {
            var emailReg = /(?=.*[0-9])/;

            if( !emailReg.test( $ (this).val() ) ) {
             $(".num_val").css("border", "1px solid red");
             $(".num_val").css("background", "transparent");
             $(".num_text").css("color", "red");

             regf = 0;
             if(rega && regb && regc && regd && rege && regf && regg === 1){
            $('input[value="Sign Up"]').removeAttr('disabled', 'disabled');
        }
        else{
            $('input[value="Sign Up"]').attr('disabled', 'disabled');
        }
         }
         else{
            $(".num_val").css("border", "1px solid green");
            $(".num_val").css("background", "green");
            $(".num_text").css("color", "green");

            regf = 1;
            if(rega && regb && regc && regd && rege && regf && regg === 1){
            $('input[value="Sign Up"]').removeAttr('disabled', 'disabled');
        }
        else{
            $('input[value="Sign Up"]').attr('disabled', 'disabled');
        }
        }
        
    });
    };

    $.fn.selectCat = function() {
        $('select[name="option"]').change(function () {
            if( $(this).val() === "NA" ){
              regg = 0;
             if(rega && regb && regc && regd && rege && regf && regg === 1){
            $('input[value="Sign Up"]').removeAttr('disabled', 'disabled');
        }
            else{
                $('input[value="Sign Up"]').attr('disabled', 'disabled');
            }  
            }
            else{
                regg = 1;
             if(rega && regb && regc && regd && rege && regf && regg === 1){
            $('input[value="Sign Up"]').removeAttr('disabled', 'disabled');
        }
            else{
                $('input[value="Sign Up"]').attr('disabled', 'disabled');
            } 
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

var countN = 7;
var countP = 7;
var border = 0;
$.fn.dayWeek = function(){
    countN = 7;
    countP = 7;
    border = 0;
    var dayM = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
    var dayN= ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    var someday = new Date();
  //var len = $('#weekday').children().length;
  //var mid = (len + 1)/2;
  //var midid = (($('#weekday').children())[mid-1]).id;
  $($('#weekday').children()).each(function(){
    var span = ($('#weekday').children()).index(this);
    var spanid = $(this).attr('id');    
    var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate());
    var curday = curdate.getDay();
    if (curday > span){
        s = curday - span;
        //alert(s);
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate()-s);
        $(this).html(dayN[span]+'<br>'+curdate.getDate()+' '+dayM[curdate.getMonth()]);
        $(this).css("border-bottom", "3px solid transparent");
        $(this).css("color", "#666666");
    }
    else if(curday == span){
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate());
        $(this).html(dayN[span]+'<br>'+curdate.getDate()+' '+dayM[curdate.getMonth()]);
        border = border + span;
        //alert(border);
        $(this).css("border-bottom", "3px solid red");
        $(this).css("color", "red");
    }
    else{
        s = span - curday;
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate()+s);
        $(this).html(dayN[span]+'<br>'+curdate.getDate()+' '+dayM[curdate.getMonth()]);
        $(this).css("border-bottom", "3px solid transparent");
        $(this).css("color", "#666666");
    }

    
});
};


$.fn.clickNext = function(){
    var dayM = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
    $("#next").click(function(){
        if (border < 6){
            border = border + 1;
            var spancur = ($('#weekday').children()).get(border);
            var spanBefore = ($('#weekday').children()).get(border-1);
    //alert($(spancur).attr('id'));
    $(spancur).css("border-bottom", "3px solid red");
    $(spancur).css("color", "red");
    $(spanBefore).css("border-bottom", "3px solid transparent");
    $(spanBefore).css("color", "#666666");  
}
else if (border == 6){
    var spanBefore = ($('#weekday').children()).get(border);
    border = 0;
    var spancur = ($('#weekday').children()).get(border);
    //alert($(spancur).attr('id'));
    $(spancur).css("border-bottom", "3px solid red");
    $(spancur).css("color", "red");
    $(spanBefore).css("border-bottom", "3px solid transparent");
    $(spanBefore).css("color", "#666666");

    var dayN= ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    var someday = new Date();
    $($('#weekday').children()).each(function(){
        var span = ($('#weekday').children()).index(this);    
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate());
        var curday = curdate.getDay();
        if (curday > span){
            s = curday - span;
        //alert(s);
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate()-s+countN);
        $(this).html(dayN[span]+'<br>'+curdate.getDate()+' '+dayM[curdate.getMonth()]);
    }
    else if(curday == span){
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate()+countN);
        $(this).html(dayN[span]+'<br>'+curdate.getDate()+' '+dayM[curdate.getMonth()]);
        
    }
    else{
        s = span - curday;
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate()+s+countN);
        $(this).html(dayN[span]+'<br>'+curdate.getDate()+' '+dayM[curdate.getMonth()]);
    }
});
    countN = countN + 7;
    countP = countP - 7;
}
else{
    alert("next error");
}

});
};

$.fn.clickPrev = function(){
    var dayM = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
    $("#prev").click(function(){


     if (border <= 6 && border > 0){
        border = border - 1;
        var spancur = ($('#weekday').children()).get(border);
        var spanBefore = ($('#weekday').children()).get(border+1);
    //alert($(spancur).attr('id'));
    $(spancur).css("border-bottom", "3px solid red");
    $(spancur).css("color", "red");
    $(spanBefore).css("border-bottom", "3px solid transparent");
    $(spanBefore).css("color", "#666666");  
}
else if (border == 0){
    var spanBefore = ($('#weekday').children()).get(border);
    border = 6;
    var spancur = ($('#weekday').children()).get(border);
    //alert($(spancur).attr('id'));
    $(spancur).css("border-bottom", "3px solid red");
    $(spancur).css("color", "red");
    $(spanBefore).css("border-bottom", "3px solid transparent");
    $(spanBefore).css("color", "#666666");

    var dayN= ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    var someday = new Date();
    $($('#weekday').children()).each(function(){
        var span = ($('#weekday').children()).index(this);    
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate());
        var curday = curdate.getDay();
        if (curday > span){
            s = curday - span;
        //alert(s);
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate()-s-countP);
        $(this).html(dayN[span]+'<br>'+curdate.getDate()+' '+dayM[curdate.getMonth()]);
    }
    else if(curday == span){
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate()-countP);
        $(this).html(dayN[span]+'<br>'+curdate.getDate()+' '+dayM[curdate.getMonth()]);
        
    }
    else{
        s = span - curday;
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate()+s-countP);
        $(this).html(dayN[span]+'<br>'+curdate.getDate()+' '+dayM[curdate.getMonth()]);
    }
});
    countP = countP + 7;
    countN = countN - 7;
}
else{
    alert("previous error");
}

});
};

$.fn.dayWeek1 = function(){
    countN = 7;
    countP = 7;
    border = 0;
    var dayN= ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    var dayM = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
    var someday = new Date();
  //var len = $('#weekday').children().length;
  //var mid = (len + 1)/2;
  //var midid = (($('#weekday').children())[mid-1]).id;
  $($('#weekday1').children()).each(function(){
    var span = ($('#weekday1').children()).index(this);
    var spanid = $(this).attr('id');    
    var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate());
    var curday = curdate.getDay();
    if (curday > span){
        s = curday - span;
        //alert(s);
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate()-s);
        $(this).html(dayN[span]+'<br>'+curdate.getDate()+' '+dayM[curdate.getMonth()]);
        $(this).css("border-bottom", "3px solid transparent");
        $(this).css("color", "#666666");
    }
    else if(curday == span){
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate());
        $(this).html(dayN[span]+'<br>'+curdate.getDate()+' '+dayM[curdate.getMonth()]);
        border = border + span;
        //alert(border);
        $(this).css("border-bottom", "3px solid red");
        $(this).css("color", "red");
    }
    else{
        s = span - curday;
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate()+s);
        $(this).html(dayN[span]+'<br>'+curdate.getDate()+' '+dayM[curdate.getMonth()]);
        $(this).css("border-bottom", "3px solid transparent");
        $(this).css("color", "#666666");
    }

    
});
};


$.fn.clickNext1 = function(){
    var dayN= ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    var dayM = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
    $("#next1").click(function(){


      var someday = new Date();
      $($('#weekday1').children()).each(function(){
        var span = ($('#weekday1').children()).index(this);    
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate());
        var curday = curdate.getDay();
        if (curday > span){
            s = curday - span;
        //alert(s);
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate()-s+countN);
        $(this).html(dayN[span]+'<br>'+curdate.getDate()+' '+dayM[curdate.getMonth()]);
    }
    else if(curday == span){
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate()+countN);
        $(this).html(dayN[span]+'<br>'+curdate.getDate()+' '+dayM[curdate.getMonth()]);
        $(this).css("border-bottom", "3px solid transparent");
        $(this).css("color", "#666666");
        if(curdate.getFullYear() == someday.getFullYear() && curdate.getMonth() == someday.getMonth() && curdate.getDate() == someday.getDate()){
            $(this).css("border-bottom", "3px solid red");
            $(this).css("color", "red");
        }
    }
    else{
        s = span - curday;
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate()+s+countN);
        $(this).html(dayN[span]+'<br>'+curdate.getDate()+' '+dayM[curdate.getMonth()]);
    }
});
countN = countN + 7;
countP = countP - 7;


});
};

$.fn.clickPrev1 = function(){
    $("#prev1").click(function(){
     var dayN= ["SUN","MON","TUE","WED","THU","FRI","SAT"]; 
     var dayM = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
     "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];



     var someday = new Date();
     $($('#weekday1').children()).each(function(){
        var span = ($('#weekday1').children()).index(this);    
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate());
        var curday = curdate.getDay();
        if (curday > span){
            s = curday - span;
        //alert(s);
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate()-s-countP);
        $(this).html(dayN[span]+'<br>'+curdate.getDate()+' '+dayM[curdate.getMonth()]);
    }
    else if(curday == span){
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate()-countP);
        $(this).html(dayN[span]+'<br>'+curdate.getDate()+' '+dayM[curdate.getMonth()]);
        $(this).css("border-bottom", "3px solid transparent");
        $(this).css("color", "#666666");
        if(curdate.getFullYear() == someday.getFullYear() && curdate.getMonth() == someday.getMonth() && curdate.getDate() == someday.getDate()){
            $(this).css("border-bottom", "3px solid red");
            $(this).css("color", "red");
        }
    }
    else{
        s = span - curday;
        var curdate = new Date(someday.getFullYear(), someday.getMonth(), someday.getDate()+s-countP);
        $(this).html(dayN[span]+'<br>'+curdate.getDate()+' '+dayM[curdate.getMonth()]);
    }
});
countP = countP + 7;
countN = countN - 7;


});
};

countMonN = 1;
countMonP = 1;
$.fn.dayWeek3 = function(){
    countMonN = 1;
    countMonP = 1;
    var dayN= ["SUN","MON","TUE","WED","THU","FRI","SAT"]; 
    var dayM = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
    var monthFullNames = [ "January", "Febuary", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    var today = new Date();
    var firstdate = new Date(today.getFullYear(), today.getMonth(), today.getDate()-(today.getDate()-1));

    var curday = firstdate.getDay();
    
    $($('#week1').children()).each(function(){
        var span = ($('#week1').children()).index(this);
        if(span < curday){
            s = curday - span;
            var curdate = new Date(today.getFullYear(), today.getMonth(), today.getDate()-(today.getDate()-1)-s);
            $(this).html(curdate.getDate());
            $(this).css('color', '#CCCCCC');
            
        }
        if(span == curday){
            var curdate = new Date(today.getFullYear(), today.getMonth(), today.getDate()-(today.getDate()-1));
            $(this).html(curdate.getDate());
            $(this).css('color', '#666666');
        }
        if(span > curday){
            s = span - curday;
            var curdate = new Date(today.getFullYear(), today.getMonth(), today.getDate()-(today.getDate()-1)+s);
            $(this).html(curdate.getDate());
            $(this).css('color', '#666666');
            var thisdate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            if(thisdate.getDate() == curdate.getDate() && thisdate.getMonth() == curdate.getMonth() && thisdate.getFullYear() == curdate.getFullYear()){
                $(this).css('color', 'red');
            }
            var lastdate = new Date(today.getFullYear(), today.getMonth(), today.getDate()-(today.getDate()-1)+30);

            if(curdate.getMonth() > firstdate.getMonth()){
                $(this).css('color', '#CCCCCC');

            }
            if(curdate.getFullYear() > firstdate.getFullYear() || curdate.getFullYear() < firstdate.getFullYear()){
                $(this).css('color', '#CCCCCC');

            }

            $('.Dmonth').html(monthFullNames[firstdate.getMonth()]+' '+firstdate.getFullYear());
        }
    });

};

$.fn.clickNext3 = function(){
    $('#next3').click(function(){
        var dayN= ["SUN","MON","TUE","WED","THU","FRI","SAT"]; 
        var dayM = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
        var monthFullNames = [ "January", "Febuary", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        var today = new Date();
        var firstdate = new Date(today.getFullYear(), today.getMonth()+countMonN, today.getDate()-(today.getDate()-1));
    //var lastdate = new Date(today.getFullYear(), today.getMonth()-1, today.getDate()-(today.getDate()-1)+30);
    var curday = firstdate.getDay();
    
    $($('#week1').children()).each(function(){
        var span = ($('#week1').children()).index(this);
        if(span < curday){
            s = curday - span;
            var curdate = new Date(today.getFullYear(), today.getMonth()+countMonN, today.getDate()-(today.getDate()-1)-s);
            $(this).html(curdate.getDate());
            $(this).css('color', '#CCCCCC');
            
        }
        if(span == curday){
            var curdate = new Date(today.getFullYear(), today.getMonth()+countMonN, today.getDate()-(today.getDate()-1));
            $(this).html(curdate.getDate());
            $(this).css('color', '#666666');
        }
        if(span > curday){
            s = span - curday;
            var curdate = new Date(today.getFullYear(), today.getMonth()+countMonN, today.getDate()-(today.getDate()-1)+s);
            $(this).html(curdate.getDate());
            $(this).css('color', '#666666');
            var thisdate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            if(thisdate.getDate() == curdate.getDate() && thisdate.getMonth() == curdate.getMonth() && thisdate.getFullYear() == curdate.getFullYear()){
                $(this).css('color', 'red');
            }
            if(curdate.getMonth() > firstdate.getMonth()){
                $(this).css('color', '#CCCCCC');

            }
            if(curdate.getFullYear() > firstdate.getFullYear() || curdate.getFullYear() < firstdate.getFullYear()){
                $(this).css('color', '#CCCCCC');

            }
            
        }
        
    });
$('.Dmonth').html(monthFullNames[firstdate.getMonth()]+' '+firstdate.getFullYear());
countMonN = countMonN + 1;
countMonP = countMonP - 1;
});

};

$.fn.clickPrev3 = function(){
    $('#prev3').click(function(){
        var dayN= ["SUN","MON","TUE","WED","THU","FRI","SAT"]; 
        var dayM = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
        var monthFullNames = [ "January", "Febuary", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        var today = new Date();
        var firstdate = new Date(today.getFullYear(), today.getMonth()-countMonP, today.getDate()-(today.getDate()-1));
    //var lastdate = new Date(today.getFullYear(), today.getMonth()-1, today.getDate()-(today.getDate()-1)+30);

    var curday = firstdate.getDay();
    
    $($('#week1').children()).each(function(){
        var span = ($('#week1').children()).index(this);
        if(span < curday){
            s = curday - span;
            var curdate = new Date(today.getFullYear(), today.getMonth()-countMonP, today.getDate()-(today.getDate()-1)-s);
            $(this).html(curdate.getDate());
            $(this).css('color', '#CCCCCC');
            
        }
        if(span == curday){
            var curdate = new Date(today.getFullYear(), today.getMonth()-countMonP, today.getDate()-(today.getDate()-1));
            $(this).html(curdate.getDate());
            $(this).css('color', '#666666');
        }
        if(span > curday){
            s = span - curday;
            var curdate = new Date(today.getFullYear(), today.getMonth()-countMonP, today.getDate()-(today.getDate()-1)+s);
            $(this).html(curdate.getDate());
            $(this).css('color', '#666666');
            var thisdate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            if(thisdate.getDate() == curdate.getDate() && thisdate.getMonth() == curdate.getMonth() && thisdate.getFullYear() == curdate.getFullYear()){
                $(this).css('color', 'red');
            }
            if(curdate.getMonth() > firstdate.getMonth()){
                $(this).css('color', '#CCCCCC');

            }
            if(curdate.getFullYear() > firstdate.getFullYear() || curdate.getFullYear() < firstdate.getFullYear()){
                $(this).css('color', '#CCCCCC');
            }
            
        }
        
    });
$('.Dmonth').html(monthFullNames[firstdate.getMonth()]+' '+firstdate.getFullYear());
countMonP = countMonP + 1;
countMonN = countMonN - 1;

});

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


$.fn.dayWeek2 = function(){
    countWeekN = 35;
    countWeekP = 35;
    var dayN= ["SUN","MON","TUE","WED","THU","FRI","SAT"]; 
    var dayM = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
    var monthFullNames = [ "January", "Febuary", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
    var WeekP = 7;
    var WeekN = 7;
    var today = new Date();
    $($('#week').children()).each(function(){
        var span = ($('#week').children()).index(this);
        var onejan = new Date(today.getFullYear(), today.getMonth(), 1);
        //var sixjan = new Date(today.getFullYear(), today.getMonth(), 16);
        var curdate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var weeknum = Math.ceil((((today.getTime() - onejan.getTime()) / 86400000) + onejan.getDay()+1) / 7);
    //var weeknum1 = Math.ceil((((sixjan.getTime() - onejan.getTime()) / 86400000) + onejan.getDay()+1) / 7);
    //alert(weeknum);
    var curday = curdate.getDay();
    if(curday == 6){
        weeknum = weeknum - 1;
        //alert(weeknum);
    }
    if(weeknum-1 == span){

        var curdatefrom = new Date(today.getFullYear(), today.getMonth(), today.getDate()-curday);
        var curdateto = new Date(today.getFullYear(), today.getMonth(), today.getDate()+(6-curday));
        $(this).html(dayM[curdatefrom.getMonth()]+' '+curdatefrom.getDate()+'-'+dayM[curdateto.getMonth()]+' '+curdateto.getDate());
        $(this).css('color', 'red');
        $(this).css('border-bottom', '3px solid red');
        $('#date2').html('This Week, '+dayM[curdatefrom.getMonth()]+' '+curdatefrom.getDate()+'-'+dayM[curdateto.getMonth()]+' '+curdateto.getDate());

    }
    else if(weeknum-1 < span){
        var s = span - (weeknum-1);
        //var weeknum = Math.ceil((((today.getTime() - onejan.getTime()) / 86400000) + onejan.getDay()+(6-curday)+countWeekN) / 7);
        var curdatefrom = new Date(today.getFullYear(), today.getMonth(), (today.getDate()-curday)+(WeekN*s));
        var curdateto = new Date(today.getFullYear(), today.getMonth(), (today.getDate()+(6-curday))+(WeekN*s));
        
        $(this).html(dayM[curdatefrom.getMonth()]+' '+curdatefrom.getDate()+'-'+dayM[curdateto.getMonth()]+' '+curdateto.getDate());
        //WeekN = WeekN + 7;
    }
    else{
        var s = (weeknum-1) - span;
        var curdatefrom = new Date(today.getFullYear(), today.getMonth(), (today.getDate()-curday)-(WeekP*s));
        var curdateto = new Date(today.getFullYear(), today.getMonth(), (today.getDate()+(6-curday))-(WeekP*s));
        $(this).html(dayM[curdatefrom.getMonth()]+' '+curdatefrom.getDate()+'-'+dayM[curdateto.getMonth()]+' '+curdateto.getDate());
        //WeekP = WeekP + 7;
    }
    
});
};

var countWeekN = 35;
var countWeekP = 35;
$.fn.clickNext2 = function(){
    $("#next2").click(function(){
        var dayN= ["SUN","MON","TUE","WED","THU","FRI","SAT"]; 
        var dayM = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
        var monthFullNames = [ "January", "Febuary", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];
        var WeekP = 7;
        var WeekN = 7;
        var today = new Date();
        $($('#week').children()).each(function(){
            var span = ($('#week').children()).index(this);
            var onejan = new Date(today.getFullYear(), today.getMonth(), 1);

            var curdate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            var weeknum = Math.ceil((((today.getTime() - onejan.getTime()) / 86400000) + onejan.getDay()+1) / 7);
    //alert(weeknum);
    var curday = curdate.getDay();
    if(weeknum-1 == span){
        var curdate1 = new Date(today.getFullYear(), today.getMonth(), today.getDate()+countWeekN);
        var curdatefrom = new Date(today.getFullYear(), today.getMonth(), today.getDate()-curday+countWeekN);
        var curdateto = new Date(today.getFullYear(), today.getMonth(), today.getDate()+(6-curday)+countWeekN);
        $(this).html(dayM[curdatefrom.getMonth()]+' '+curdatefrom.getDate()+'-'+dayM[curdateto.getMonth()]+' '+curdateto.getDate());
        $(this).css('color', '#666666');
        $(this).css('border-bottom', '3px solid transparent');
        if(curdate1.getFullYear() == today.getFullYear() && curdate1.getMonth() == today.getMonth() && curdate1.getDate() == today.getDate()){
            $(this).css("border-bottom", "3px solid red");
            $(this).css("color", "red");
        }
    }
    else if(weeknum-1 < span){
        var s = span - (weeknum-1);
        
        //var weeknum = Math.ceil((((today.getTime() - onejan.getTime()) / 86400000) + onejan.getDay()+(6-curday)+countWeekN) / 7);
        var curdatefrom = new Date(today.getFullYear(), today.getMonth(), (today.getDate()-curday)+(WeekN*s)+countWeekN);
        var curdateto = new Date(today.getFullYear(), today.getMonth(), (today.getDate()+(6-curday))+(WeekN*s)+countWeekN);
        
        $(this).html(dayM[curdatefrom.getMonth()]+' '+curdatefrom.getDate()+'-'+dayM[curdateto.getMonth()]+' '+curdateto.getDate());
    //countWeekN = countWeekN + 7;
    
}
else{
    var s = (weeknum-1) - span;
    var curdatefrom = new Date(today.getFullYear(), today.getMonth(), (today.getDate()-curday)-(WeekP*s)+countWeekN);
    var curdateto = new Date(today.getFullYear(), today.getMonth(), (today.getDate()+(6-curday))-(WeekP*s)+countWeekN);
    $(this).html(dayM[curdatefrom.getMonth()]+' '+curdatefrom.getDate()+'-'+dayM[curdateto.getMonth()]+' '+curdateto.getDate());
    
}

});
countWeekN = countWeekN + 35;
countWeekP = countWeekP - 35;
});
};

$.fn.clickPrev2 = function(){
    $("#prev2").click(function(){
        var dayN= ["SUN","MON","TUE","WED","THU","FRI","SAT"]; 
        var dayM = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
        var monthFullNames = [ "January", "Febuary", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];
        var WeekP = 7;
        var WeekN = 7;
        var today = new Date();
        $($('#week').children()).each(function(){
            var span = ($('#week').children()).index(this);
            var onejan = new Date(today.getFullYear(), today.getMonth(), 1);

            var curdate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            var weeknum = Math.ceil((((today.getTime() - onejan.getTime()) / 86400000) + onejan.getDay()+1) / 7);
    //alert(weeknum);
    var curday = curdate.getDay();
    if(weeknum-1 == span){
        var curdate1 = new Date(today.getFullYear(), today.getMonth(), today.getDate()-countWeekP);
        var curdatefrom = new Date(today.getFullYear(), today.getMonth(), today.getDate()-curday-countWeekP);
        var curdateto = new Date(today.getFullYear(), today.getMonth(), today.getDate()+(6-curday)-countWeekP);
        $(this).html(dayM[curdatefrom.getMonth()]+' '+curdatefrom.getDate()+'-'+dayM[curdateto.getMonth()]+' '+curdateto.getDate());
        $(this).css('color', '#666666');
        $(this).css('border-bottom', '3px solid transparent'); 
        if(curdate1.getFullYear() == today.getFullYear() && curdate1.getMonth() == today.getMonth() && curdate1.getDate() == today.getDate()){
            $(this).css("border-bottom", "3px solid red");
            $(this).css("color", "red");
        }
    }
    else if(weeknum-1 < span){
        var s = span - (weeknum-1);
        
        //var weeknum = Math.ceil((((today.getTime() - onejan.getTime()) / 86400000) + onejan.getDay()+(6-curday)+countWeekN) / 7);
        var curdatefrom = new Date(today.getFullYear(), today.getMonth(), (today.getDate()-curday)+(WeekN*s)-countWeekP);
        var curdateto = new Date(today.getFullYear(), today.getMonth(), (today.getDate()+(6-curday))+(WeekN*s)-countWeekP);
        
        $(this).html(dayM[curdatefrom.getMonth()]+' '+curdatefrom.getDate()+'-'+dayM[curdateto.getMonth()]+' '+curdateto.getDate());
    //countWeekN = countWeekN + 7;
    
}
else{
    var s = (weeknum-1) - span;
    var curdatefrom = new Date(today.getFullYear(), today.getMonth(), (today.getDate()-curday)-(WeekP*s)-countWeekP);
    var curdateto = new Date(today.getFullYear(), today.getMonth(), (today.getDate()+(6-curday))-(WeekP*s)-countWeekP);
    $(this).html(dayM[curdatefrom.getMonth()]+' '+curdatefrom.getDate()+'-'+dayM[curdateto.getMonth()]+' '+curdateto.getDate());
    
}

});
countWeekN = countWeekN - 35;
countWeekP = countWeekP + 35;
});
};

var countWeekN1 = 35;
var countWeekP1 = 35;
$.fn.dayWeek4 = function(){
var countWeekN1 = 35;
var countWeekP1 = 35;
    var dayN= ["SUN","MON","TUE","WED","THU","FRI","SAT"]; 
    var dayM = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
    var monthFullNames = [ "January", "Febuary", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
    //var WeekP = 0;
    var WeekN = 7;
    var today = new Date();
    $($('#week2').children()).each(function(){
        var span = ($('#week2').children()).index(this);
        var curdate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var curday = curdate.getDay();

        var curdatefrom = new Date(today.getFullYear(), today.getMonth(), (today.getDate()-curday)+(WeekN*span));
        var curdateto = new Date(today.getFullYear(), today.getMonth(), (today.getDate()+(6-curday))+(WeekN*span));
        $(this).html(dayM[curdatefrom.getMonth()]+' '+curdatefrom.getDate()+'-'+dayM[curdateto.getMonth()]+' '+curdateto.getDate());
        if(span == 0){
        $(this).css('color', 'red');
        $(this).css('border-bottom', '3px solid red');
    }
    else{
        $(this).css('color', '#666666');
        $(this).css('border-bottom', '3px solid transparent');
        //$('#date2').html('This Week, '+dayM[curdatefrom.getMonth()]+' '+curdatefrom.getDate()+'-'+dayM[curdateto.getMonth()]+' '+curdateto.getDate());
    }
    //WeekN = WeekN + 7;

});
};

$.fn.clickNext4 = function(){
$("#next4").click(function(){
    var dayN= ["SUN","MON","TUE","WED","THU","FRI","SAT"]; 
    var dayM = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
    var monthFullNames = [ "January", "Febuary", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
    //var WeekP = 0;
    var WeekN = 7;
    var today = new Date();
    $($('#week2').children()).each(function(){
        var span = ($('#week2').children()).index(this);
        var curdate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var curday = curdate.getDay();

        var curdatefrom = new Date(today.getFullYear(), today.getMonth(), (today.getDate()-curday)+(WeekN*span)+countWeekN1);
        var curdateto = new Date(today.getFullYear(), today.getMonth(), (today.getDate()+(6-curday))+(WeekN*span)+countWeekN1);
        $(this).html(dayM[curdatefrom.getMonth()]+' '+curdatefrom.getDate()+'-'+dayM[curdateto.getMonth()]+' '+curdateto.getDate());
        if(span == 0){
        $(this).css('color', 'red');
        $(this).css('border-bottom', '3px solid red');
    }
    else{
        $(this).css('color', '#666666');
        $(this).css('border-bottom', '3px solid transparent');
        //$('#date2').html('This Week, '+dayM[curdatefrom.getMonth()]+' '+curdatefrom.getDate()+'-'+dayM[curdateto.getMonth()]+' '+curdateto.getDate());
    }
    //WeekN = WeekN + 7;

});
countWeekN1 = countWeekN1 + 35;
countWeekP1 = countWeekP1 - 35;
});
};

$.fn.clickPrev4 = function(){
$('#prev4').click(function(){
    var dayN= ["SUN","MON","TUE","WED","THU","FRI","SAT"]; 
    var dayM = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
    var monthFullNames = [ "January", "Febuary", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
    //var WeekP = 0;
    var WeekN = 7;
    var today = new Date();
    $($('#week2').children()).each(function(){
        var span = ($('#week2').children()).index(this);
        var curdate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var curday = curdate.getDay();

        var curdatefrom = new Date(today.getFullYear(), today.getMonth(), (today.getDate()-curday)+(WeekN*span)-countWeekP1);
        var curdateto = new Date(today.getFullYear(), today.getMonth(), (today.getDate()+(6-curday))+(WeekN*span)-countWeekP1);
        $(this).html(dayM[curdatefrom.getMonth()]+' '+curdatefrom.getDate()+'-'+dayM[curdateto.getMonth()]+' '+curdateto.getDate());
        if(span == 0){
        $(this).css('color', 'red');
        $(this).css('border-bottom', '3px solid red');
    }
    else{
        $(this).css('color', '#666666');
        $(this).css('border-bottom', '3px solid transparent');
        //$('#date2').html('This Week, '+dayM[curdatefrom.getMonth()]+' '+curdatefrom.getDate()+'-'+dayM[curdateto.getMonth()]+' '+curdateto.getDate());
    }
    //WeekN = WeekN + 7;

});
countWeekN1 = countWeekN1 - 35;
countWeekP1 = countWeekP1 + 35;
});
};


}( jQuery ));