Handlebars.registerHelper("formateName", function (prop1,prop2) { // (name and callback funk)
    // return "My custom helper" + prop1 + "and " + prop2
    return new Handlebars.SafeString(
        "My custom helper <strong>" + prop1 + "</strong>and<strong> " + prop2 + "</strong>"
        )
})

$(document).ready(function () {
    // create referanxce to list template
    var charactersTemplate = $('#character-template').html();
    var compiledTemplate = Handlebars.compile(charactersTemplate);
    $.ajax('./data/cast.json').done(function (cast) {
        console.log(cast);
        $('.character-list-container').html(compiledTemplate(cast))
    })





    $('body').on('click', '.btn-hamburger--dark, .btn-hamburger--white', function () {

        $(this).toggleClass('collapsed', 1000);
        setTimeout(function () { $('.slide-menu').toggle() }, 500);

    })


});



