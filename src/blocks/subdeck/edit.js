import PropTypes from 'prop-types';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { subdeck: text, color } = attributes;

	return (
		<RichText
			{ ...useBlockProps() }
			tagName="p"
			value={ text }
			placeholder={ __( 'Subdeck…' ) }
			onChange={ ( subdeck ) => setAttributes( { subdeck } ) }
			style={ { color } }
		/>
	);
}

Edit.propTypes = {
	setAttributes: PropTypes.func,
	attributes: PropTypes.object,
	subdeck: PropTypes.string,
	color: PropTypes.string,
}
