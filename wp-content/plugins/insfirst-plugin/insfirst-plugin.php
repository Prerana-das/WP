<?php

/** 
* @package
*/
/*
Plugin Name:Insfirst-plugin
Plugin URI:http://wordpress.test/
Description: dummy
Version:idk
AUthor:Prerana
Author Uri://///
Text domain:
*/


// if(!defined('ABSPATH')){
//     die;
// }

defined('ABSPATH') or die('hey, you cant\t access this file,you silly human');

// if(!function_exists('add_action')){
//     echo "hey, you cant\t access this file,you silly human";
//     exit;
// }


class InsFirstPlugin{
    //puscle case InsFirstPlugin

    function __construct(){
        add_action('init',array($this,'custom_post_type'));
    }
    //construct methods
    // function __construct($string){
    //     echo $string;
    // }
    // function method1(){
    // }
    // function method2(){
    // }

    function register(){
        add_action('admin_enque_scripts',array($this,'enqueue'));
    }
    

    //when edit or update
    function activate(){
        // echo "The plugin is activatedddddddddddddddd";
        //generated a cpt

        $this->custom_post_type(); //only inside insfirstplugin
        //flush rewrite rules
        flush_rewrite_rules();
    }
    function deactivate(){
        //flush rewrite rules
        flush_rewrite_rules();
    }
    // function uninstall(){
    //     //delete cpt
    // }
    function custom_post_type(){
        register_post_type('book',['public'=>true,'label'=>'Books']);
    }

    function enqueue(){
        wp_enqueue_style('mypluginstyle',plugins_url('/assets/mystyle.css',__FILE__));
        wp_enqueue_script('mypluginscript',plugins_url('/assets/myscript.js',__FILE__));
    }
}
// $insfirstplugin= new InsFirstPlugin();

if(class_exists('InsFirstPlugin')){
    // $insfirstplugin= new InsFirstPlugin();
    $insfirstplugin= new InsFirstPlugin('Ins plugin initialied');  //__construct method rcv the parameter
    $insfirstplugin->register();
}

// function customFunction($arg){
//     echo $arg;
// }
// customFunction('this is my arg to echo');

//activation
register_activation_hook(__FILE__,array($insfirstplugin,'activate') );
register_deactivation_hook(__FILE__,array($insfirstplugin,'deactivate') );

// add_action('init','function_name')
//deactivation
//uninstall
