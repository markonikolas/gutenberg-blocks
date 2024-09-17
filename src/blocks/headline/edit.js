import PropTypes from 'prop-types';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { headline: text } = attributes;

	return (
		<RichText
			{ ...useBlockProps() }
			tagName="h1"
			value={ text }
			placeholder={ __( 'Headline…' ) }
			onChange={ ( headline ) => setAttributes( { headline } ) }
			allowedFormats={ [ 'core/bold', 'core/italic' ] }
		/>
	);
}

Edit.propTypes = {
	setAttributes: PropTypes.func,
	attributes: PropTypes.object,
	headline: PropTypes.string,
	textColor: PropTypes.string,
}
