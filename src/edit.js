import PropTypes from 'prop-types';
import {
	InspectorControls,
	RichText,
	useBlockProps,
	PanelColorSettings
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const {
		kicker,
		kickerColor,
		kickerBackgroundColor,
		headline,
		headlineColor,
		subdeck,
		subdeckColor
	} = attributes;

	const colorSettings = [
		{
			value: kickerColor,
			onChange: ( newKickerColor ) => setAttributes( { kickerColor: newKickerColor } ),
			label: __( 'Kicker Text Color', 'funky-headline' ),
		},
		{
			value: kickerBackgroundColor,
			onChange: ( newKickerBackgroundColor ) => setAttributes( { kickerBackgroundColor: newKickerBackgroundColor } ),
			label: __( 'Kicker Background Color', 'funky-headline' ),
		},
		{
			value: headlineColor,
			onChange: ( newHeadlineColor ) => setAttributes( { headlineColor: newHeadlineColor } ),
			label: __( 'Headline Color', 'funky-headline' ),
		},
		{
			value: subdeckColor,
			onChange: ( newSubdeckColor ) => setAttributes( { subdeckColor: newSubdeckColor } ),
			label: __( 'Subdeck Color', 'funky-headline' ),
		},
	];

	return (
		<div { ...useBlockProps() } >

			<RichText
				tagName="span"
				value={ kicker }
				className={ 'wp-block__kicker' }
				placeholder={ __( 'Awesome Kicker…' ) }
				onChange={ ( value ) => setAttributes( { kicker: value } ) }
				style={ { color: kickerColor, backgroundColor: kickerBackgroundColor } }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
			/>

			<RichText
				tagName="h1"
				value={ headline }
				placeholder={ __( 'Awesome Headline…' ) }
				className={ 'wp-block__headline' }
				onChange={ ( value ) => setAttributes( { headline: value } ) }
				style={ { color: headlineColor } }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
			/>

			<RichText
				tagName="p"
				value={ subdeck }
				placeholder={ __( 'Awesome Subdeck…' ) }
				className={ 'wp-block__subdeck' }
				onChange={ ( value ) => setAttributes( { subdeck: value } ) }
				style={ { color: subdeckColor } }
			/>

			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Color Settings' ) }
					colorSettings={ colorSettings } />
			</InspectorControls>
		</div>
	);
}

Edit.propTypes = {
	attributes: PropTypes.object,
	setAttributes: PropTypes.func,
	kicker: PropTypes.string,
	headline: PropTypes.string,
	subdeck: PropTypes.string,
};
