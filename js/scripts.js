$(document).ready(function() {
    $('.hamburger-icon').click(function() {
        $('nav').toggleClass('active');
    })
    
    $('ul li').click(function() {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    })
      
    $('ul .submenu-list li a').click(function() {
        $('nav').toggleClass('active');
    })
    
    $('ul .menu-list').click(function() {
        $('nav').toggleClass('active');
    })
    
    }
)
    

