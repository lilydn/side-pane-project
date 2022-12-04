import React from 'react';
import { Grid, Typography, Button, Divider, MenuItem } from '@mui/material';

const dayData = [
	'active',
	'active',
	'active',
	'active',
	'active',
	'active',
	'active',
	'inactive',
	null,
	null,
	null,
	'active',
	'active',
	'active',
	'active',
	'active',
	'active',
	'active',
	'inactive',
	'inactive',
	'inactive',
	'inactive',
	'inactive',
	'inactive',
	'active',
];
function StatusBar() {
	return (
		<Grid container sx={{ my: 2 }}>
			<Grid item xs={12}>
				<Grid container alignItems="center" justifyContent="space-between">
					{dayData.map((value, i) => (
						<Grid
							item
							key={i}
							sx={{
								height: '17px',
								width: '2px',
								backgroundColor:
									value === 'active'
										? '#58C86A'
										: value === 'inactive'
										? '#FF275B'
										: 'text.caption',
								borderRadius: '2px',
							}}
						></Grid>
					))}
				</Grid>
			</Grid>
			<Grid item xs={12} sx={{ mt: '2px' }}>
				<Grid
					container
					alignItems="center"
					justifyContent="space-between"
					sx={{ color: 'text.caption', fontSize: 'sizes.size1' }}
				>
					<span>01</span>
					<span>02</span>
					<span>03</span>
					<span>04</span>
					<span>05</span>
					<span>06</span>
					<span>07</span>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default StatusBar;
