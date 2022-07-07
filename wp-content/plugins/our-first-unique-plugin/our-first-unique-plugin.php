<?php
/*

Plugin Name: Our test unique plugin 
Description : A truly amazing  plugin
Version :1.0
Author:Prerana

*/


// ============ Add any string to page/post ============
// add_filter('the_content', 'addToEndOfPost' );
// function addToEndOfPost($content){
//     // return '<p>Dynamic Test string here from our-first-unique-plugin</p>';  without dataa
//     //return $content. '<p>Dynamic Test string here from our-first-unique-plugin</p>'; // in every  page

//     // is_page() --show to page // is_single() --> show to blog post
//     if(is_page() && is_main_query()){
//         return $content. '<p>Dynamic Test string here from our-first-unique-plugin</p>'; 
//     }

//     return $content;
// }


class WordCountAndTimePlugin{
    function __construct(){
        add_action('admin_menu',array($this,'adminPage'));
    }
    // ============ Add a new page/link to wordpress admin settting menu ============
    
    function adminPage(){
        // top name, settings right menu, permission /rules, slug/short name(to be unique),function-> html content
        add_options_page('Word count settings','Custom page Word count','manage_options','word-count-settings-page',array($this,'ourHtml'));
    }

    function ourHtml(){
        ?>
            hello word from the new setting page

        <?php
    }

}
$wordCountAndTimePlugin= new WordCountAndTimePlugin();

