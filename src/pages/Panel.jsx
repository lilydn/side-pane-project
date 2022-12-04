import React, { useEffect } from 'react';
import { Grid, Typography, Button, Divider, MenuItem } from '@mui/material';
import { styles } from './Panel.styles';
import { ReactComponent as IconAgents } from '../assets/icons/iconAgents.svg';
import { ReactComponent as IconMenu } from '../assets/icons/iconMenu.svg';
import { ReactComponent as IconRedirect } from '../assets/icons/iconRedirect.svg';
import { CustomButton } from '../elements/CustomButton';
import { CustomSwitch } from '../elements/CustomSwitch';
import { CustomSelectTextField } from '../elements/CustomSelectTextField';
import StatusBar from '../components/StatusBar';
import ActionButton from '../components/ActionButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { formatString } from '../utils/helperFunctions';

import { useSelector, useDispatch } from 'react-redux';
import * as dataSlice from '../redux/dataSlice';

function Panel(type) {
	// const classes = useStyles();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(dataSlice.fetchAgentDescription());
	}, [dispatch]);

	return (
		<Grid container sx={styles.customGrid}>
			<Grid item xs={12} id="header_section" sx={{ pt: '5px' }}>
				<Grid container justifyContent="space-between" alignItems="center">
					<Grid item>
						<Grid container alignItems="center">
							<IconAgents />
							<Typography variant="h4" sx={{ ...styles.title, mx: '6px' }}>
								Agent Details
							</Typography>
						</Grid>
					</Grid>
					<Grid item>
						<Grid container alignItems="center">
							<CustomButton variant="contained" type="active" disableRipple>
								Active
							</CustomButton>
							<CustomSwitch defaultChecked sx={{ mx: 1 }} />
							<IconMenu style={{ cursor: 'pointer' }} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<Grid item xs={12} id="divider" sx={styles.divider}></Grid>

			<Grid item xs={12} id="alerts_section">
				<Grid container>
					<Typography variant="h5" sx={styles.title}>
						Associated Alerts
					</Typography>
				</Grid>
				<Grid container sx={{ mt: '12px' }}>
					<Grid item xs={4}>
						<Typography variant="subtitle1" sx={styles.caption}>
							Total Alerts
						</Typography>
						<Grid container alignItems="center">
							<Typography sx={styles.numericData}>23</Typography>
							<ArrowDropDownIcon sx={{ color: 'active.icon' }} />
						</Grid>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="subtitle1" sx={styles.caption}>
							Total Events
						</Typography>
						<Grid container alignItems="center">
							<Typography sx={styles.numericData}>322</Typography>
							<ArrowDropUpIcon sx={{ color: 'inactive.icon' }} />
						</Grid>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="subtitle1" sx={styles.caption}>
							Installed endpoints
						</Typography>
						<Grid container alignItems="center">
							<Typography sx={styles.numericData}>3k</Typography>
							<ArrowDropUpIcon sx={{ visibility: 'hidden' }} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<Grid item xs={12} id="divider" sx={styles.divider}></Grid>

			<Grid item xs={12}>
				<Grid container alignItems="center">
					<Typography variant="subtitle1" sx={[styles.caption, styles.ellipsis]}>
						Assigned policy group
					</Typography>
					<Typography sx={[styles.description, styles.ellipsis]}>Default</Typography>
				</Grid>
			</Grid>

			<Grid item xs={12} id="divider" sx={styles.divider}></Grid>

			<Grid item xs={12} id="meta_data_section" sx={{ pr: '8px' }}>
				<Typography variant="h5" sx={styles.title}>
					Meta data
				</Typography>
				<Grid container alignItems="center" sx={{ ...styles.scrollContainer, pt: '4px' }}>
					{Object.entries([]).map(([key, value], i) => (
						<Grid item xs={12} key={i}>
							<Grid container sx={{ py: '4.5px' }}>
								<Typography variant="subtitle1" sx={[styles.caption, styles.ellipsis]}>
									{formatString(key)}
								</Typography>
								<Typography sx={[styles.description, styles.ellipsis]}>{value}</Typography>
							</Grid>
						</Grid>
					))}
				</Grid>
			</Grid>

			<Grid item xs={12} id="divider" sx={styles.divider}></Grid>

			<Grid item xs={12} id="status_section" sx={{ pr: '9px' }}>
				<Grid container justifyContent="space-between">
					<Typography variant="h5" sx={styles.title}>
						Status
					</Typography>
					<Grid item>
						<Grid container alignItems="center">
							<Typography variant="subtitle1" sx={styles.caption}>
								Sort By
							</Typography>

							<CustomSelectTextField
								value={'day'}
								variant="standard"
								// onChange={(e) => handleChange(e.target.name, e.target.value)}
								select
								SelectProps={{
									IconComponent: (props) => <ExpandMoreIcon {...props} />,
									MenuProps,
								}}
							>
								<MenuItem value={'day'} sx={styles.menuItem}>
									Day
								</MenuItem>
								<MenuItem value={'week'} sx={styles.menuItem}>
									Week
								</MenuItem>
								<MenuItem value={'month'} sx={styles.menuItem}>
									Month
								</MenuItem>
							</CustomSelectTextField>

							<IconRedirect />
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={12} sx={{ pt: '9px' }}>
					<Grid container alignItems="center" justifyContent="space-between">
						<Typography sx={[styles.numericData, styles.size5]}>37.21%</Typography>
						<Grid item>
							<CustomButton variant="contained" type="active" disableRipple sx={{ mx: 1 }}>
								Active
							</CustomButton>
							<CustomButton
								variant="contained"
								type="inactive"
								disableRipple
								sx={{ width: '51px' }}
							>
								Inactive
							</CustomButton>
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={12}>
					<StatusBar />
				</Grid>
			</Grid>

			<Grid item xs={12} sx={{ pr: '9px', pt: '16px' }} id="action_button_primary">
				<ActionButton type="primary" content="Export" />
			</Grid>

			<Grid item xs={12} sx={{ pr: '9px', pt: '12px' }} id="action_button_secondary">
				<ActionButton type="secondary" content="Go to single agent" />
			</Grid>
		</Grid>
	);
}

export default Panel;

const MenuProps = {
	anchorOrigin: {
		vertical: 'bottom',
		horizontal: 'left',
	},
	transformOrigin: {
		vertical: 'top',
		horizontal: 'left',
	},
	PaperProps: {
		sx: {
			'backgroundColor': '#4C4C4D',
			'& .MuiList-root': {
				paddingTop: '4px',
				paddingBottom: '4px',
			},
		},
	},
};
