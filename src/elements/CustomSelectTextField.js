import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const CustomSelectTextField = styled(TextField)(({ theme }) => ({
	'& .MuiInput-root': {
		color: theme.palette.text.menu,
		fontSize: theme.typography.sizes.size2,
		fontWeight: 700,
	},
	'& .MuiInput-root:before': {
		borderBottom: 'none',
	},
	'& .MuiInput-root:hover:not(.Mui-disabled):before': {
		borderBottom: 'none',
	},
	'& .MuiSelect-select': {
		padding: '4px 6px',
	},
	'& .MuiSelect-select.MuiInputBase-input': {
		paddingRight: '20px',
	},
	'& .MuiSvgIcon-root': {
		width: '15px',
		color: theme.palette.text.menu,
		top: 'calc(50% - 12px)',
		right: '5px',
	},
}));
