'use strict';
var instance = false;



function owlSliders() {
    function init() {


        alert('1');




    }
    return {
        init: init
    };
}

module.exports = (instance ? instance : instance = owlSliders());

