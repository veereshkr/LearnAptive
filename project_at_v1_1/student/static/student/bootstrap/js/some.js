$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 800) {
        $('#effect1').css('display', 'block');
        $('#effect1').css('background-color', 'white');
    } else {
        $('#effect1').css('display', 'none');
    }

});


$(function() {

    var $el, leftPos, newWidth,
        $mainNav = $("#example-one");
    
    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");
    
    $magicLine
        .width($(".current_page_item").width())
        .css("left", $(".current_page_item a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
        
    $("#example-one > li").hover(function() {
        $el = $(this);

        leftPos = $el.position().left;
        newWidth = $el.width();
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    }
    );
});

$(function() {

    var $el, leftPos, newWidth,
        $mainNav = $("#example2");
    
    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");
    
    $magicLine
        .width($(".current_page_item1").width())
        .css("left", $(".current_page_item1 a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
        
    $("#example2 > li").click(function() {
        $el = $(this);

        leftPos = $el.position().left;
        newWidth = $el.width();
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth,
            speed: 'fast'
        });
    }
    );
});
