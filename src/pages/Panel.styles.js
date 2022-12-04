import { styled } from '@mui/material/styles';

export const styles = {
	customGrid: {
		height: 768,
		width: 330,
		padding: '16px 7px 16px 16px',
		backgroundColor: 'primary.main',
		alignContent: 'flex-start',
	},
	title: {
		fontWeight: '700',
		lineHeight: '19px',
		color: 'text.main',
	},
	divider: {
		borderBottom: '1px solid #787878',
		opacity: 0.2,
		marginBlock: '15px',
		marginRight: '9px',
	},
	caption: {
		color: 'text.caption',
	},
	description: {
		color: 'text.description',
		fontSize: 'sizes.size3',
		fontWeight: '400',
		lineHeight: '15px',
	},
	numericData: {
		color: 'text.main',
		fontFamily: 'Rajdhani, sans-serif',
		fontWeight: '600',
		fontSize: 'sizes.size9',
		lineHeight: '15px',
	},
	size5: {
		fontSize: 'sizes.size5',
	},
	ellipsis: {
		width: '133px',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
		overflow: 'hidden',
	},
	scrollContainer: {
		height: '270px',
		overflow: 'auto',
	},
	paper: {
		backgroundColor: 'green',
	},
	menuItem: {
		color: 'text.menu',
		fontSize: 'sizes.size2',
		fontWeight: 700,
		padding: '3px 6px 3px 7px',
	},
};
