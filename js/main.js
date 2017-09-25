var cast = {
    "characters": [
        {
            "name": "text 1",
            "titleCode": "title 1",
            "description": "desc 1"
        },
        {
            "name": "text 2",
            "titleCode": "title 2",
            "description": "desc 2"
        },
        {
            "name": "text 3",
            "titleCode": "title 3",
            "description": "desc 3"
        }
    ]
}
$(document).ready(function () {
    // create referanxce to list template
    var charactersTemplate = $('#character-template').html();
    var compiledTemplate = Handlebars.compile(charactersTemplate);
    $('.character-list-container').html(compiledTemplate(cast))

    $('body').on('click', '.btn-hamburger--dark, .btn-hamburger--white', function () {

        $(this).toggleClass('collapsed', 1000);
        setTimeout(function () { $('.slide-menu').toggle() }, 500);

    })

    // var html = $("#template").html();
    // var template = Handlebars.compile(html);


    // $('.list').append(template({ item: item }));
});



