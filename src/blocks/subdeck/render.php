<?php
/**
 * SSR of the Funky Headline Subdeck Block.
 *
 * @package funky-headline
 */

/**
 * Block content server-side rendered.
 * Re sanitization it through `wp_kses_post` causes
 * embed blocks to break and other core filters don't apply.
 * therefore no additional sanitization is done and it is being output as is
 *
 * @var string $attributes - Block attributes.
 */

[
	'subdeck' => $subdeck,
] = $attributes;

$block_attributes = get_block_wrapper_attributes();

?>

<span
	<?php
	echo $block_attributes; // @phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	?>
>
	<?php
	echo esc_html( $subdeck );
	?>
</span>

