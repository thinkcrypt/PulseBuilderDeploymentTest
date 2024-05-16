import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
import QRCode from 'react-qr-code';
import { useClipboard } from '@chakra-ui/react';
import * as htmlToImage from 'html-to-image';

const QrComponent = ({ id }: { id: string }) => {
	const target = `${process.env.NEXT_PUBLIC_URL}/qr/${id}`;
	const { onCopy, value, setValue, hasCopied } = useClipboard(target);

	const downloadQRCode = () => {
		const node: any = document.getElementById('qrCode');
		htmlToImage
			.toPng(node)
			.then(dataUrl => {
				const link = document.createElement('a');
				link.download = 'my-image-name.png';
				link.href = dataUrl;
				link.click();
			})
			.catch(error => {
				console.error('oops, something went wrong!', error);
			});
	};

	return (
		<>
			<Flex
				p='8px'
				borderWidth={2}>
				<QRCode
					id='qrCode'
					bgColor='#111'
					fgColor='white'
					size={128}
					style={{ height: 'auto', maxWidth: '300px', width: '300px', borderRadius: '4px' }}
					value={target}
					viewBox={`0 0 256 256`}
				/>
			</Flex>
			<Flex
				gap={2}
				pb={8}>
				<Button
					size='sm'
					colorScheme='gray'
					onClick={() => {
						onCopy();
					}}>
					{hasCopied ? 'Copied' : 'Copy Link'}
				</Button>
				<Button
					onClick={downloadQRCode}
					size='sm'>
					Download Qr
				</Button>
			</Flex>
		</>
	);
};

export default QrComponent;
