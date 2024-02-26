<?php 


add_filter( 'gform_submit_button', 'form_submit_button', 10, 2 );
function form_submit_button( $button, $form ) {
return "<button class='button gform_button' id='gform_submit_button_{$form['id']}'><span>Connect With Us</span></button>";
}

function my_theme_setup(){
    add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'my_theme_setup');

add_filter( 'gform_confirmation_anchor', '__return_true' );