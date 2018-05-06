
$("#btn").click(function(){
    $.ajax({
        type: 'GET',
        url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699",
        async: false,
        jsonpCallback: 'jsonCallback',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(data)
        {     var myData = JSON.stringify(data);
            
            $("#titleDisplay").html(JSON.parse(myData).items[0].volumeInfo.title);
            $("#authorDisplay").html(JSON.parse(myData).items[0].volumeInfo.authors);
            $("#desriptionDisplay").html(JSON.parse(myData).items[0].volumeInfo.description);
    
        }
        
    });

});
