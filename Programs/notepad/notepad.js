function notepad(){
    element = this
    var id = guidGenerator();
    console.log(id)
    var head = document.getElementsByTagName('HEAD')[0];
    var link = document.createElement('link');
 
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'Programs/notepad/notepad.css';

    head.appendChild(link);

    $(document.body).append(`<div class="window" id="notepad" processid="${id}"> <div class="header"><img src="Assets/icons8-notepad-96.png" class="icon"> <p class="windowtitle">Untitled - Notepad</p> <div class="headerbuttons"> <input type="button" value="−" class="minimize"> <input type="button" value="▢" class="maximize"> <input type="button" value="X" class="close"> </div><br> <div class="altbuttons"> <input type="button" value="File"> <input type="button" value="Edit"> <input type="button" value="Format"> <input type="button" value="View"> <input type="button" value="Help"> </div> </div> <div class="container"> <p contenteditable="true" spellcheck="false">${$(this).attr('notepadtext')}</p> </div> </div>`)
    $(".taskbar").find('.icons').append(`<img src="Assets/icons8-notepad-96.png" alt="icon" id="${id}icon">`)
    
    $(`[processid=${id}]`).on("remove", function () {
        $(element).attr('notepadtext', $(`[processid=${id}] .container p`).html())
        console.log($(`[processid=${id}] .container p`).html().replace("<div>", "").replace("</div>", ""))
        $("#"+id+"icon").remove()
    })
}

function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
