$(document).ready(function() {
    $(document).on("contextmenu", function(e) {
        return false;
    });
});

$(document).on('click', '.maximize', function(){
    event.preventDefault();
    if($(this).parent().parent().parent().attr("maximizedstate") == "true"){
        $(this).parent().parent().parent().attr("maximizedstate", false);
        $(this).parent().parent().parent().css("transition", ".1s");
        $(this).parent().parent().parent().css('width' , '1000px')
        $(this).parent().parent().parent().css('height' , '500px')
        $(this).parent().parent().parent().css('border-radius' , '12px')
    }else{
        $(this).parent().parent().parent().css('width' , '100%')
        $(this).parent().parent().parent().css('height' , '100%')
        $(this).parent().parent().parent().css('position' , 'absolute')
        $(this).parent().parent().parent().css('left' , '50%')
        $(this).parent().parent().parent().css('top' , '50%')
        $(this).parent().parent().parent().css('transform' , 'translate(-50%, -50%)')
        $(this).parent().parent().parent().css('border-radius' , '0')
        $(this).parent().parent().parent().attr("maximizedstate", true);
        $(this).parent().parent().parent().css("transition", ".1s");
        $(this).parent().parent().parent().find(".close").css('border-radius' , '0px')
    }
})

$(document).on('click', '.close', function(){
    $(this).parent().parent().parent().remove()
})

var startmenustate = false;
var searchmenustate = false;

$(".startmenubutt").on('click', function(){
    if(startmenustate == false){
        $(".startmenu").css("animation-name", "startmenu")
        startmenustate = true;
        if(searchmenustate){
            searchmenustate = false;
            $(".searchmenu").css("animation-name", "startmenuflipped")
        }
    }else{
        startmenustate = false;
        $(".startmenu").css("animation-name", "startmenuflipped")
    }
}) 

$(".searchmenubutt").on('click', function(){
    if(searchmenustate == false){
        $(".searchmenu").css("animation-name", "startmenu")
        searchmenustate = true;
        if(startmenustate){
            startmenustate = false;
            $(".startmenu").css("animation-name", "startmenuflipped")
        }
    }else{
        searchmenustate = false;
        $(".searchmenu").css("animation-name", "startmenuflipped")
    }
}) 


var _elementToFind = ".window";
var _elementFound = false;
var _counter = 1;
$(document).bind("DOMSubtreeModified", function(evt) {
    if ($(_elementToFind).length > 0) {
        var windows = document.querySelectorAll(".window")
        var cIndex = 0;

        $(".header").on('mousedown', function () {
            $(this).parent().css("transition", "none");
        })

        windows.forEach(function (window) {
            dragElement(window);
            function dragElement(elmnt) {
                var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
                window.querySelector(".header").onmousedown = dragMouseDown;

                function dragMouseDown(e) {
                    if ($(this).parent().attr("maximizedstate") == "true") {
                        return;
                    }
                    e = e || window.event;
                    e.preventDefault();
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    document.onmouseup = closeDragElement;
                    document.onmousemove = elementDrag;
                }

                function elementDrag(e) {
                    if ($(this).parent().attr("maximizedstate") == "true") {
                        return;
                    }
                    e = e || window.event;
                    e.preventDefault();
                    pos1 = pos3 - e.clientX;
                    pos2 = pos4 - e.clientY;
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                }

                function closeDragElement() {
                    document.onmouseup = null;
                    document.onmousemove = null;
                    document.ondragend = null;
                }
            }
        })
    }
})
