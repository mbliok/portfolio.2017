//var cast = {
//    "characters": [
//        {
//            "name": "text 1",
//            "titleCode": "title 1",
//            "description": "desc 1"
//        },
//        {
//            "name": "text 2",
//            "titleCode": "title 2",
//            "description": "desc 2"
//        },
//        {
//            "name": "text 3",
//            "titleCode": "title 3",
//            "description": ""
//        }
//    ]
//}
$(document).ready(function () {
    // create referanxce to list template
    var charactersTemplate = $('#character-template').html();
    var compiledTemplate = Handlebars.compile(charactersTemplate);
    $.ajax('./data/cast.json').done(function (cast) {
        console.log(cast);
    })
   // $('.character-list-container').html(compiledTemplate(cast))





    $('body').on('click', '.btn-hamburger--dark, .btn-hamburger--white', function () {

        $(this).toggleClass('collapsed', 1000);
        setTimeout(function () { $('.slide-menu').toggle() }, 500);

    })


});



