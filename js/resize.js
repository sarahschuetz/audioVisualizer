"use strict";

var width;
var height;
var canvas;
var ctx;

// used to resize canvas on document ready and window resize
var resize = function() {

    width = window.innerWidth;
    height = window.innerHeight;

    ctx.canvas.width  = width;
    ctx.canvas.height = height;
    canvas.css('width', width + 'px');
    canvas.css('height', height + 'px');

    canvas.trigger('draw');
};

var init = function() {

    canvas = $('canvas');
    ctx = canvas[0].getContext('2d');

    $(window).on('resize', resize);
    $(document).ready(resize);
};

init();
