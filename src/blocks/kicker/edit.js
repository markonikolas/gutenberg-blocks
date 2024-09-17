import PropTypes from 'prop-types';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { kicker: text } = attributes;

	return (
		<RichText
			{ ...useBlockProps() }
			tagName="span"
			value={ text }
			placeholder={ __( 'Kicker…' ) }
			onChange={ ( kicker ) => setAttributes( { kicker } ) }
			allowedFormats={ [ 'core/bold', 'core/italic' ] }
		/>
	);
}

Edit.propTypes = {
	setAttributes: PropTypes.func,
	attributes: PropTypes.object,
	kicker: PropTypes.string,
	color: PropTypes.string,
	backgroundColor: PropTypes.string,
}
