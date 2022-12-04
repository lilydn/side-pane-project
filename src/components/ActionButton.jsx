import React from 'react';
import { Grid, Typography, Button, Divider, MenuItem } from '@mui/material';
import { ReactComponent as IconExport } from '../assets/icons/iconExport.svg';

const styles = {
	general: {
		padding: '8px 12px',
		borderRadius: '4px',
		lineHeight: '15px',
		fontWeight: 600,
		textTransform: 'capitalize',
		fontSize: 'sizes.size3',
		boxShadow: 'none',
	},
	primary: {
		'backgroundColor': 'primaryButton.background',
		'color': 'primaryButton.text',
		'&:hover': {
			backgroundColor: 'text.description',
		},
	},
	secondary: {
		'backgroundColor': 'secondaryButton.background',
		'color': 'secondaryButton.text',
		'&:hover': {
			backgroundColor: 'scroll.track',
		},
	},
};

function ActionButton({ type, content }) {
	return (
		<Button
			variant="contained"
			type="inactive"
			fullWidth={true}
			disableRipple
			startIcon={content === 'Export' ? <IconExport /> : null}
			sx={[styles.general, styles[type]]}
		>
			{content}
		</Button>
	);
}

export default ActionButton;
