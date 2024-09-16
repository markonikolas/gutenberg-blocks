import PropTypes from 'prop-types';
import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { Content: RichTextContent } = RichText;
	const {
		kicker,
		kickerColor,
		kickerBackgroundColor,
		headline,
		headlineColor,
		subdeck,
		subdeckColor
	} = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<RichTextContent
				tagName="span"
				value={ kicker }
				className={ 'wp-block__kicker' }
				style={ { color: kickerColor, backgroundColor: kickerBackgroundColor } }
			/>
			<RichTextContent
				tagName="h1"
				value={ headline }
				className={ 'wp-block__headline' }
				style={ { color: headlineColor } }
			/>
			<RichTextContent
				tagName="p"
				value={ subdeck }
				className={ 'wp-block__subdeck' }
				style={ { color: subdeckColor } }
			/>
		</div>
	);
}

Save.propTypes = {
	attributes: PropTypes.object,
	kicker: PropTypes.string,
	headline: PropTypes.string,
	subdeck: PropTypes.string,
}
