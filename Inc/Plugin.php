<?php
/**
 * Main plugin file
 *
 * @package funky-headline
 */

namespace FunkyHeadline;

/**
 * Main plugin class
 */
class Plugin {

	/**
	 * Hooks into init.
	 *
	 * @return void
	 */
	public function init(): void {
		add_action( 'init', [ $this, 'register' ] );
	}

	/**
	 * Register block.
	 *
	 * @return void
	 */
	public function register(): void {
		register_block_type( plugin_dir_path( __DIR__ ) . '/build' );
	}
}
