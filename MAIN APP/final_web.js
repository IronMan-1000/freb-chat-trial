$(document).ready(function() {
    var theme = 0 ;
    var themelist = ['text-divs-blue-theme', 'text-divs-red-theme', 'text-divs-green-theme', 'text-divs-yellow-theme', 'text-divs-purple-theme', 'text-divs-pink-theme'] ;
    let message_area = document.getElementById('message-area') ;
    let theme_areas_name = ['chat-area', 'writing-area', 'send-message', 'text-divs'] ;
    let color_names = ['-blue-theme', '-red-theme', '-green-theme', '-yellow-theme', '-purple-theme', '-pink-theme'] ;
    let  lb_icons_ids = ['#group-chats-icon', '#personal-chats-icon', '#favourites-icon', '#call-icon', '#settings-icon'] ;

    $('.text-divs').addClass('text-divs-blue-theme') ;
    $("#send-message").click(function() {
        if ($('#enter-message').val() != '') {
            let div = $("<div class = 'text-divs'></div>").text($("#enter-message").val()) ;
            div.addClass(themelist[theme]) ; 
            $("#message-area").append(div) ; 
            $("#enter-message").val("") ;
            message_area.scrollTop = message_area.scrollHeight ;
        }
    }) ; 
    $('#enter-message').keypress(function(event) {
        if (event.which == 13) {
            if ($('#enter-message').val() != '') {
                let div = $("<div class = 'text-divs'></div>").text($("#enter-message").val()) ;
                div.addClass(themelist[theme]) ; 
                $("#message-area").append(div) ; 
                $("#enter-message").val("") ;
                message_area.scrollTop = message_area.scrollHeight ;
            }
        }
    }) ; 
    // let theme_areas_ids = ['#chat-area', 'writing-area', '#send-message', '.text-divs'] ;
    $('#blue-color').click(function() {
        changeColorThemes('blue', 'blue', 0) ;
    }) ; 
    $('#red-color').click(function() {
        changeColorThemes('red', 'red', 1) ;
    }) ; 
    $('#green-color').click(function() {
        changeColorThemes('green', 'green', 2) ;
    }) ; 
    $('#yellow-color').click(function() {
        changeColorThemes('yellow', 'darkorange', 3) ;
    }) ; 
    $('#purple-color').click(function() {
        changeColorThemes('purple', 'purple', 4) ;
    }) ; 
    $('#pink-color').click(function() {
        changeColorThemes('pink', 'magenta', 5) ;
    }) ; 

    function removeColorThemeClasses() {
        for (var n = 0 ; n < theme_areas_name.length ; n++) {
            for (var m = 0 ; m < color_names.length ; m++) {
                $('.' + theme_areas_name[n]).removeClass(theme_areas_name[n] + color_names[m]) ;
            }
        }
    }
    function changeColorThemes(themecolor, bordercolor, themeno) {
        removeColorThemeClasses() ;
        for (i = 0 ; i < theme_areas_name.length ; i++) {
            $('.' + theme_areas_name[i]).addClass(theme_areas_name[i] + '-' + themecolor + '-theme') ;
        }
        for (i = 0 ; i < lb_icons_ids.length ; i++) {
            $(lb_icons_ids[i]).css('border', '5px solid ' + bordercolor) ;
        }
        theme = themeno ;
    }

    $('.toggle-group-chat').click(function() {
        $('.group-chat-area').slideToggle() ;
    }) ; 
    $('.group-chats-icon').click(function() {
        $('.right-bar').slideToggle() ;
    }) ; 
}) ;