<?php
/**
 * SSR of the Funky Headline block
 *
 * @package funky-headline
 */

/**
 * Block content server-side rendered.
 * Re sanitization it through `wp_kses_post` causes
 * embed blocks to break and other core filters don't apply.
 * therefore no additional sanitization is done and it is being output as is
 *
 * @var string $content - Block content.
 */
?>

<section <?php echo esc_attr( get_block_wrapper_attributes() ); ?> >
	<?php echo $content; // @phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</section>
