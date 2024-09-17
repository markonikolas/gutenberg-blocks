import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	const blockProps = useBlockProps();
	const { children, ...combinedBlockProps } = useInnerBlocksProps(
		blockProps,
		{
			allowedBlocks: [
				'funky-headline/kicker',
				'funky-headline/headline',
				'funky-headline/subdeck',
			],
			template: [
				[ 'funky-headline/kicker' ],
				[ 'funky-headline/headline' ],
				[ 'funky-headline/subdeck' ],
			],
			templateLock: 'all'
		},
	)

	return (
		<section { ...combinedBlockProps }>
			{children}
		</section>
	);
}
