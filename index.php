<?php
/**
 * Plugin Name: jQuery learning
 * Description: hello jquery
 * Version: 1.0
 * Author: Rupom
 * Text Domain: 
 * 
 */
define('JQ_URL',plugin_dir_url( __FILE__ ));
define('JQ_PATH',plugin_dir_path( __FILE__ ));
add_action( 'wp_enqueue_scripts', 'enqueue_script_callback');
function enqueue_script_callback(){
    wp_enqueue_style( 'jq_style_css', JQ_URL. '/assets/css/style.css');
    wp_enqueue_script( 'jq_main_js',JQ_URL . '/assets/js/main.js', array('jquery'), time(), true );
    wp_enqueue_script( 'script_js',JQ_URL . '/assets/js/script.js', array('jquery'), time(), true );
}
include JQ_PATH.'/shortcode.php';

