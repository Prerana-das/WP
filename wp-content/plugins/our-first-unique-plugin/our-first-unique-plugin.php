<?php
/*

Plugin Name: Our test unique plugin 
Description : A truly amazing  plugin
Version :1.0
Author:Prerana

*/


add_filter('the_content', 'addToEndOfPost' );

function addToEndOfPost($content){
    // return '<p>Dynamic Test string here from our-first-unique-plugin</p>';  without dataa
    //return $content. '<p>Dynamic Test string here from our-first-unique-plugin</p>'; // in every  page


    // is_page() --show to page // is_single() --> show to blog post
    if(is_page() && is_main_query()){
        return $content. '<p>Dynamic Test string here from our-first-unique-plugin</p>'; 
    }
    
    return $content;
}
