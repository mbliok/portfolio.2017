function getProjectById(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\/\]]/g, "\\$&");
    console.log(name + url + '5555');
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ""));
}

Handlebars.registerHelper("formateName", function (prop1, prop2) { // (name and callback funk)
    // return "My custom helper" + prop1 + "and " + prop2
    return new Handlebars.SafeString(
        "My custom helper <strong>" + prop1 + "</strong>and<strong> " + prop2 + "</strong>"
        )
})

Handlebars.registerHelper("makeBold", function (options) {
    return new Handlebars.SafeString("<strong>" + options.fn(this) + "</strong>");
})

Handlebars.registerHelper("toUpper", function (options) {
    return options.fn(this).toUpperCase();
})

$(document).ready(function () {
    // create referanxce to list template
    var projectsTemplate = $('#project-template').html();
    var compiledTemplate = Handlebars.compile(projectsTemplate);
    var $projectsList = $('.project-list')
    var projectId = getProjectById("id");
    console.log(projectId + 'is the prj id')

    $.ajax('./data/projects.json').done(function (cast) {
        console.log(cast);
        if ($('body').hasClass('page-details')) {
            $projectsList.html(compiledTemplate(cast.projects[projectId]))
        } else {
            $projectsList.html(compiledTemplate(cast))
        }


    })





    $('body').on('click', '.btn-hamburger--dark, .btn-hamburger--white', function () {

        $(this).toggleClass('collapsed', 1000);
        setTimeout(function () { $('.slide-menu').toggle() }, 500);

    })


});



