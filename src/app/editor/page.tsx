'use client';

import { useGetSelfQuery } from '@/store/services/authApi';
import React, { useEffect, useState } from 'react';
import {
	Section,
	ColorPicker,
	SliderInput,
	QRStyle,
	SectionContainer,
	Header,
	Footer,
	Body,
	RightContainer,
	LeftContainer,
} from './_component';
import Qr from '@/components/library/qr/Qr';
import { useGetByIdQuery, usePostMutation } from '@/store/services/commonApi';
import { useCustomToast, useIsMobile } from '@/components/library';
import ColorMode from '@/components/color-mode/ColorMode';

type QrStyleType = 'squares' | 'dots' | 'fluid';

const QrEditor = () => {
	const { data, isFetching } = useGetSelfQuery({});

	const {
		data: qrData,
		isFetching: qrIsFetching,
		isSuccess: qrIsSuccess,
	} = useGetByIdQuery(
		{
			id: data?.restaurant?._id,
			path: 'qr',
		},
		{ skip: !data?.restaurant?._id }
	);

	const isMobile = useIsMobile();

	const [trigger, result] = usePostMutation();

	const [bgColor, setBgColor] = useState('#ffffff');
	const [fgColor, setFgColor] = useState('#000000');
	const [pixelColor, setPixelColor] = useState('#000000');

	const [innerEyeRadius, setInnerEyeRadius] = useState(4);
	const [outerEyeRadius, setOuterEyeRadius] = useState(4);

	const [quietZone, setQuiteZone] = useState(10);
	const [qrStyle, setQrStyle] = useState<QrStyleType>('squares');
	const [image, setImage] = useState();

	const styles: QrStyleType[] = ['squares', 'dots', 'fluid'];

	useEffect(() => {
		if (qrIsSuccess) {
			const { bgColor, fgColor, pixelColor, innerEyeRadius, outerEyeRadius, quietZone, qrStyle } =
				qrData;
			setBgColor(bgColor);
			setFgColor(fgColor);
			setPixelColor(pixelColor);
			setInnerEyeRadius(innerEyeRadius);
			setOuterEyeRadius(outerEyeRadius);
			setQuiteZone(quietZone);
			setQrStyle(qrStyle);
		}
	}, [qrIsFetching]);

	const colorPickers = [
		{ color: bgColor, setColor: setBgColor, title: 'Background' },
		{ color: fgColor, setColor: setFgColor, title: 'Pixels' },
		{ color: pixelColor, setColor: setPixelColor, title: 'Squares' },
	];

	const radiusPickers = [
		{ title: 'Outer Eye Radius', value: outerEyeRadius, setValue: setOuterEyeRadius, max: 16 },
		{ title: 'Inner Eye Radius', value: innerEyeRadius, setValue: setInnerEyeRadius, max: 8 },
	];

	const onSubmit = () => {
		trigger({
			path: 'qr',
			invalidate: 'self',
			body: {
				restaurant: data?.restaurant?._id,
				bgColor,
				fgColor,
				pixelColor,
				innerEyeRadius,
				outerEyeRadius,
				quietZone,
				qrStyle,
				logo: image,
			},
		});
	};

	useCustomToast({
		...result,
		successText: 'QR code updated successfully',
	});

	if (isFetching && !data) return null;
	return (
		<>
			<Header href='/settings'>Customize Qr Code</Header>
			<Body>
				<LeftContainer>
					<Section title='Pick Style'>
						<SectionContainer>
							{styles.map((style: QrStyleType) => (
								<QRStyle
									isSelected={qrStyle === style}
									key={style}
									style={style}
									onClick={() => setQrStyle(style)}
								/>
							))}
						</SectionContainer>
					</Section>
					<Section title='Pick Colors'>
						<SectionContainer
							gridTemplateColumns={{
								base: '1fr',
								md: '1fr 1fr 1fr',
							}}>
							{colorPickers.map(({ color, setColor, title }) => (
								<ColorPicker
									key={title}
									color={color}
									setColor={setColor}
									title={title}
								/>
							))}
						</SectionContainer>
					</Section>
					<Section title='Eye Radius'>
						<SectionContainer gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}>
							{radiusPickers.map(({ title, value, setValue, max }: any) => (
								<SliderInput
									key={title}
									title={title}
									value={value}
									setValue={setValue}
									max={max}
								/>
							))}
						</SectionContainer>
					</Section>
					<Section title='Outer Radius'>
						<SectionContainer gridTemplateColumns='1fr'>
							<SliderInput
								title='Outer Radius'
								value={quietZone}
								setValue={setQuiteZone}
								max={30}
							/>
						</SectionContainer>
					</Section>
				</LeftContainer>

				<RightContainer>
					<Qr
						isLoading={qrIsFetching}
						target={`https://qr-mint-seven.vercel.app/qr/${data?.restaurant?._id}`}
						outerEyeRadius={outerEyeRadius}
						innerEyeRadius={innerEyeRadius}
						quietZone={quietZone}
						qrStyle={qrStyle}
						bgColor={bgColor}
						fgColor={fgColor}
						pixelColor={pixelColor}
						size={isMobile ? 140 : 300}
					/>
				</RightContainer>
			</Body>
			<Footer
				isLoading={result.isLoading}
				onSubmit={onSubmit}
			/>
			<ColorMode />
		</>
	);
};

export default QrEditor;
