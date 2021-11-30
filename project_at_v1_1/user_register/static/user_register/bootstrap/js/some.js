(function($){

    $.fn.scrollHov = function(){
        $(this).scroll(function(){
            var y = $(this).scrollTop();
            if(y >= $("#home").position().top - 1 && y < $("#adaptube").position().top - 1){
                $("#hbor").css("border-bottom", "3px solid #006699");
                $($("#hbor").children()).css({"color": "#006699", "font-weight": "bold"});
            }
            else{
               $("#hbor").css("border-bottom", "3px solid transparent");
               $($("#hbor").children()).css({"color": "#ffffff", "font-weight": "normal"}); 
            }
            if(y >= $("#adaptube").position().top -1 && y < $("#how").position().top - 1){
                $("#abor").css("border-bottom", "3px solid #006699");
                $($("#abor").children()).css({"color": "#006699", "font-weight": "bold"});
            }
            else{
               $("#abor").css("border-bottom", "3px solid transparent");
               $($("#abor").children()).css({"color": "#ffffff", "font-weight": "normal"}); 
            }
            if(y >= $("#how").position().top -1 && y < $("#faqs").position().top - 1){
                $("#hobor").css("border-bottom", "3px solid #006699");
                $($("#hobor").children()).css({"color": "#006699", "font-weight": "bold"});
            }
            else{
               $("#hobor").css("border-bottom", "3px solid transparent");
               $($("#hobor").children()).css({"color": "#ffffff", "font-weight": "normal"}); 
            }
            if(y >= $("#faqs").position().top -1 && y < $("#contact").position().top - 1){
                $("#fbor").css("border-bottom", "3px solid #006699");
                $($("#fbor").children()).css({"color": "#006699", "font-weight": "bold"});
            }
            else{
               $("#fbor").css("border-bottom", "3px solid transparent");
               $($("#fbor").children()).css({"color": "#ffffff", "font-weight": "normal"}); 
            }
        });
        //alert($("#home").position().top);
    };

    $.fn.scrollHov1 = function(){
        $(this).scroll(function(){
            var y = $(this).scrollTop();
            if(y >= $("#home").position().top - 1 && y < $("#how").position().top - 1){
                $("#hbor").css("border-bottom", "3px solid #000");
                $($("#hbor").children()).css({"color": "#000"});
            }
            else{
               $("#hbor").css("border-bottom", "3px solid transparent");
               $($("#hbor").children()).css({"color": "#ffffff"}); 
            }
            
            if(y >= $("#how").position().top -1 && y < $("#faqs").position().top - 1){
                $("#hobor").css("border-bottom", "3px solid #000");
                $($("#hobor").children()).css({"color": " #000"});
            }
            else{
               $("#hobor").css("border-bottom", "3px solid transparent");
               $($("#hobor").children()).css({"color": "#ffffff"}); 
            }
            if(y >= $("#faqs").position().top -1 && y < $("#contact").position().top - 1){
                $("#fbor").css("border-bottom", "3px solid #000");
                $($("#fbor").children()).css({"color": " #000"});
            }
            else{
               $("#fbor").css("border-bottom", "3px solid transparent");
               $($("#fbor").children()).css({"color": "#ffffff"}); 
            }
            if(y >= $("#contact").position().top -1){
                $("#cbor").css("border-bottom", "3px solid #000");
                $($("#cbor").children()).css({"color": " #000"});
            }
            else{
               $("#cbor").css("border-bottom", "3px solid transparent");
               $($("#cbor").children()).css({"color": "#ffffff"}); 
            }
        });
        //alert($("#home").position().top);
    };

}(jQuery));
