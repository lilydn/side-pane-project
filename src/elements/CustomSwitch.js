import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';

export const CustomSwitch = styled(Switch)(({ theme }) => ({
	'width': 36,
	'height': 18,
	'padding': 0,
	'display': 'flex',
	'&:active': {
		'& .MuiSwitch-switchBase.Mui-checked': {
			transform: 'translateX(9px)',
		},
	},
	'& .MuiSwitch-switchBase': {
		'padding': 2.5,
		'&.Mui-checked': {
			'transform': 'translateX(17px)',
			'color': '#fff',
			'& + .MuiSwitch-track': {
				opacity: 1,
				backgroundColor: theme.palette.active.icon,
			},
		},
	},
	'& .MuiSwitch-thumb': {
		width: 13.5,
		height: 13.5,
		borderRadius: 8,
		transform: 'translateX(1px)',

		transition: theme.transitions.create(['width'], {
			duration: 200,
		}),
	},
	'& .MuiSwitch-track': {
		borderRadius: 16 / 2,
		opacity: 1,
		backgroundColor: 'rgba(0,0,0)',
		boxSizing: 'border-box',
	},
}));
