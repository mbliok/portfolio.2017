// Thank you https://stackoverflow.com/questions/4656843/jquery-get-querystring-from-url
//'use strict';

//var test = require('test');
////var owlSliders = require('./modules/owlSliders');
//var init = function () {
//    if (!window.console) console = { log: function () { } };


//    test.init();

//};

//$(document).ready(init);

function getProjectById(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\/\]]/g, "\\$&");
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

    $.ajax('./data/projects.json').done(function (data) {
        console.log(data);
        if ($('body').hasClass('page-details')) {
            $projectsList.html(compiledTemplate(data.projects[projectId]))

        } else {
            $projectsList.html(compiledTemplate(data))
        }

    })


    $('body').on('click', '.btn-hamburger--white', function () {
        $(this).toggleClass('collapsed', 1000);
        window.location = "/works.html"
    });



});



