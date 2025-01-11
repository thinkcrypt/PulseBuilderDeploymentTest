const fonts = [
	'Marcellus',
	'Roboto Mono',
	'Inter',
	'Playfair Display',
	'Montserrat',
	'Open Sans',
	'Lato',
	'Oswald',
	'Raleway',
	'Poppins',
	'Roboto',
	'Bebas Neue',
	'Anton',
	'Arimo',
	'Atma',
	'Barlow Condensed',
	'Barlow',
	'Caveat',
	'Comfortaa',
	'Cormorant Garamond',
	'Dosis',
	'EB Garamond',
	'Exo 2',
	'Libre Baskerville',
	'Lora',
	'Merriweather',
	'Michroma',
	'Mulish',
	'Noto Serif',
	'Orbitron',
	'Outfit',
	'PT Serif',
	'Quicksand',
	'Roboto Condensed',
	'Rubik',
	'Source Code Pro',
	'Space Grotesk',
	'Syncopate',
	'Tomorrow',
	'Work Sans',
	'Agdasima',
	'Bai Jamjuree',
	'Chakra Petch',
	'Electrolize',
	'Encode Sans Condensed',
	'Figtree',
	'Goldman',
	'Hind Siliguri',
	'Host Grotesk',
	'IBM Plex Serif',
	'Istok Web',
	'Libre Franklin',
	'Merriweather Sans',
	'Metrophobic',
	'Noto Sans Bengali',
	'Noto Serif Bengali',
	'Nova Square',
	'PT Sans',
	'Passions Conflict',
	'Playwrite IN',
	'Road Rage',
	'Roboto Flex',
	'Rowdies',
	'STIX Two Text',
	'Schibsted Grotesk',
	'Slabo 27px',
	'Telex',
	'Unna',
	'Wallpoet',
	'WindSong',
	'Abel',
	'Alegreya',
	'Amatic SC',
	'Antic Slab',
	'Assistant',
	'Audiowide',
	'Cantarell',
	'Cinzel',
	'Crimson Text',
	'Fira Sans',
	'Gruppo',
	'Heebo',
	'Indie Flower',
	'JetBrains Mono',
	'Josefin Slab',
	'Karla',
	'Khand',
	'Maven Pro',
	'Mrs Saint Delafield',
	'News Cycle',
	'PT Sans Caption',
	'PT Sans Narrow',
	'Public Sans',
	'Raleway',
	'Saira',
	'Shadows Into Light',
	'Sora',
	'Unbounded',
	'Urbanist',
	'Yanone Kaffeesatz',
];

const getOptions = () => {
	const sortedFonts = fonts.sort();
	return sortedFonts.map(font => ({
		label: font,
		value: font,
	}));
};

const returnOptions = getOptions();

export default returnOptions;
