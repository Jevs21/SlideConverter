

$(document).ready(function() {

    // Check latest release of all artists
    $.ajax({
        type: 'get', 
        dataType: 'jsonp', 
        url: 'https://en.wikipedia.org/w/api.php',
        data: { 
            action: 'query', 
            list: 'search',
            srsearch: 'Travis Scott discography', 
            format: 'json' 
        },
        success: function (apiResult) {
            
        },
        fail: function(error) {
            
        }
    });

    
});
