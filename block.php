<?php
/**
 * Plugin Name:       Funky Headline
 * Description:       A funky headline block with an eye-catching look :)
 * Requires at least: 6.5
 * Requires PHP:      8.0
 * Version:           0.0.1
 * Author:            Marko Nikolaš
 * License:           GPL-2.0
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       funky-headline
 * Domain Path:       funky-headline
 *
 * @package funky-headline1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/vendor/autoload.php';

use FunkyHeadline\Block\BlockLoader;

define( 'BLOCK_DIR_PATH', plugin_dir_path( __FILE__ ) . 'build' );

new BlockLoader();
