<?php
/**
 * Main block loader.
 *
 * @package legendary-fiesta
 */

namespace FunkyHeadline\Block;

/**
 * BlockLoader class
 * Responsible for loading blocks as they
 * are added in the blocks directory.
 */
class BlockLoader {
	/**
	 * Holds block paths.
	 *
	 * @var array
	 */
	public array $blocks = [];

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'init', [ $this, 'find_blocks' ] );
		add_action( 'init', [ $this, 'load_blocks' ] );
	}

	/**
	 * Find the blocks.
	 *
	 * @return void
	 */
	public function find_blocks(): void {
		$block_dirs = array_diff( scandir( BLOCK_DIR_PATH . '/blocks/' ), [ '.', '..' ] );

		if ( empty( $block_dirs ) ) {
			return;
		}

		foreach ( $block_dirs as $value ) {
			$directory = BLOCK_DIR_PATH . '/blocks/' . $value;

			if ( file_exists( $directory ) ) {
				$this->blocks[] = $directory;
			}
		}
	}

	/**
	 * Determine if the folder is actually a block
	 * and register it.
	 *
	 * @return void
	 */
	public function load_blocks(): void {
		foreach ( $this->blocks as $value ) {
			$has_block_meta = array_search( 'block.json', array_diff( scandir( $value ), [ '.', '..' ] ), true );

			if ( $has_block_meta ) {
				register_block_type( $value );
			}
		}
	}
}
