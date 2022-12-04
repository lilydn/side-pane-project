import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const CustomButton = styled(Button)(({ theme, type }) => ({
	'borderRadius': 4,
	'padding': '2px 9px 2px 8px',
	'backgroundColor':
		type === 'active' ? theme.palette.active.background : theme.palette.inactive.background,
	'color': type === 'active' ? theme.palette.active.text : theme.palette.inactive.text,
	'fontSize': theme.typography.sizes.size2,
	'lineHeight': '13px',
	'fontWeight': 400,
	'textTransform': 'capitalize',
	'height': 18,
	'minWidth': 46,
	'boxShadow': 'none',
	'&:hover': {
		backgroundColor:
			type === 'active' ? theme.palette.active.background : theme.palette.inactive.background,
		boxShadow: 'none',
	},
}));
