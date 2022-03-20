import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Container } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import { IconButton } from '@mui/material'
import { InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import BoltIcon from '@mui/icons-material/Bolt';
import { borderRadius } from '@mui/system'
import SettingsIcon from '@mui/icons-material/Settings';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Card } from '@mui/material'
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import { Divider } from '@mui/material';
import { CardContent } from '@mui/material';
import LaptopIcon from '@mui/icons-material/Laptop';

const useStyles = makeStyles((theme) => {
    return {
        gridContainer: {
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            borderRadius: '30px',
            backgroundColor:'white',
        },
        payment_section: {
            background: 'red'
        },
        navContainer: {
            display: 'flex'
        },
        logo: {
            flex: '1'
        },

        textField: {
            background: 'white',
            width: '500px',
            zIndex: '2'

        },
        boltIcon: {
            display: 'flex',
            marginLeft: '105px'
        },
        transform: {
            textTransform: 'none !important'
        },
        btnMargin: {
            marginLeft: '4px !important'
        },

        overLay: {
            position: 'absolute',
            top: '10px',
            left: '5px',
            color: 'black',
            // backgroundColor: 'rgba(255, 148, 135, 0.6)',
            backgroundColor:'rgba(237, 97, 34, 0.8)',
            height: '128%',
            width: '42%',
            marginLeft: '683px',
            borderRadius: '0 30px 30px 0'
        },

        card: {
            display: 'flex',
            padding: '50px'
        },
        mobile_con: {
            flex: '1',

        },
        SecondNav: {
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '20px'
        }

    }
})

const Design = () => {
    const classes = useStyles();

    return (
        <Container>
            <Grid container className={classes.gridContainer}>
                <Grid item md={6} p={3} className={classes.firstGrid}>
                    <Box variant='div' className={classes.navContainer}>
                        <div className={classes.logo}>
                            <Typography style={{ color: 'orange', fontWeight: 'bolder' }} variant='h5'>Logo</Typography>
                        </div>

                        <div>
                            <Button variant='text'>Personal</Button>
                            <Button variant='text'>Bussiness</Button>
                        </div>
                    </Box>

                    <Box variant='div' marginTop={15} marginLeft={15} style={{ width: '50%' }}>
                        <Typography variant='h5' style={{ fontWeight: 'bolder' }} align='left'>Because payment should be <span style={{ color: 'green', textDecoration: 'underline' }}>easy</span></Typography>
                    </Box>

                    <Box variant='div' marginTop={18} marginRight={-25}>
                        <TextField variant='outlined'
                            label='Type the biller you want to pay here'
                            className={classes.textField}
                            InputProps={{
                                endAdornment:
                                    <InputAdornment position="end">
                                        <IconButton className='outLiner'>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>

                            }} />
                    </Box>

                    <Box variant='div' mt={4} className={classes.boltIcon} mb={2}>
                        <BoltIcon fontSize='small' />
                        <Typography fontSize='small'>Quicklinks</Typography>
                    </Box>
                    <Box width={400} ml={12}>
                        <Button size='small' variant='outlined' color='warning'>Buy JAMB FORM</Button>
                        <Button size='small' className={classes.btnMargin} variant='outlined' color='warning'>Buy Airtime</Button>
                        <Button size='small' className={classes.btnMargin} variant='outlined' color='warning'>Buy Electricity</Button>
                    </Box>

                    <Box width={400} ml={8.5} mt={1}>
                        <Button size='small' className={classes.transform} variant='outlined' color='secondary'>Setup Standing Order</Button>
                        <Button size='small' className={`${classes.transform} && ${classes.btnMargin}`} variant='outlined' color='secondary'>pay FGN and State TSA </Button>
                    </Box>


                    <Box width={400} ml={7} mt={1}>
                        <Button size='small' className={classes.transform} variant='outlined' color='secondary'>Pay an Invoice</Button>
                        <Button size='small' className={`${classes.transform} && ${classes.btnMargin}`} variant='outlined' color='secondary'>Re-Send A Reciept/Invoice</Button>
                    </Box>

                    <Box width={400} ml={10.2} mt={1}>
                        <Button size='small' className={classes.transform} variant='outlined' color='secondary'>Upload NHF Schedule</Button>
                        <Button size='small' className={`${classes.transform} && ${classes.btnMargin}`} variant='outlined' color='secondary'>Pay Family, Friends, Others</Button>
                    </Box>

                    <Box width={400} ml={0} mt={1}>
                        <Button size='small' className={classes.transform} variant='outlined' color='secondary'>Pay Salaries</Button>
                        <Button size='small' className={`${classes.transform} && ${classes.btnMargin}`} variant='outlined' color='secondary'>Pay Taxes</Button>
                    </Box>

                </Grid>

                <Grid item md={6} p={0} >
                    <div className={classes.overLay}></div>
                    <Box mt={3} className={classes.SecondNav}>
                        <Button size='small' variant='text' startIcon={<SettingsIcon />}>
                            integrate
                        </Button>

                        <Button className={classes.btnMargin} Style={{ color: 'white !important' }} size='small' variant='text'>About us</Button>
                        <Button className={classes.btnMargin} size='small' variant='outlined' startIcon={<LockOutlinedIcon />}>log in</Button>
                        <Button className={classes.btnMargin} size='small' variant='outlined' startIcon={<AddOutlinedIcon />}>sign up</Button>
                    </Box>

                    <Box mt={13} sx={{
                        marginLeft: '130px',
                        display: 'flex',
                        alignItems: 'center',
                        width: 'fit-content',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,
                        bgcolor: 'background.paper',
                        color: 'text.secondary',
                        '& svg': {
                            m: 1.5,
                        },
                        '& hr': {
                            mx: 0.5,
                        },
                    }}>

                        <Card className={classes.card} sx={{ maxWidth: 200, background: 'rgb(238, 100, 50)', color: 'white' }}>
                            <Box className={classes.mobile_con} mt={3}>
                                <MobileFriendlyIcon fontSize='large' />
                            </Box>

                            <Divider orientation="vertical" flexItem />
                            <CardContent>
                                <Typography textAlign='left'> view all your balalance, on one screen </Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    <Box mt={0} sx={{
                        marginLeft: '130px',
                        display: 'flex',
                        alignItems: 'center',
                        width: 'fit-content',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,
                        bgcolor: 'background.paper',
                        color: 'text.secondary',
                        '& svg': {
                            m: 1.5,
                        },
                        '& hr': {
                            mx: 0.5,
                        },
                    }}>

                        <Card className={classes.card} sx={{ maxWidth: 200, zIndex: 2 }}>
                            <Box className={classes.mobile_con} mt={3}>
                                <LaptopIcon fontSize='large' />
                            </Box>

                            <Divider orientation="vertical" flexItem />
                            <CardContent>
                                <Typography textAlign='left'> view all your balalance, on one screen </Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    <Box mt={0} sx={{
                        marginLeft: '130px',
                        display: 'flex',
                        alignItems: 'center',
                        width: 'fit-content',
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,
                        bgcolor: 'background.paper',
                        color: 'text.secondary',
                        '& svg': {
                            m: 1.5,
                        },
                        '& hr': {
                            mx: 0.5,
                        },
                    }}>

                        <Card className={classes.card} sx={{ maxWidth: 200, background: 'rgb(238, 100, 50)', color: 'white' }}>
                            <Box className={classes.mobile_con} mt={3}>
                                <MobileFriendlyIcon fontSize='large' />
                            </Box>

                            <Divider orientation="vertical" flexItem />
                            <CardContent>
                                <Typography textAlign='left'> easier payroll for all bussines </Typography>
                            </CardContent>
                        </Card>
                    </Box>

                </Grid>
            </Grid>
        </Container>
    )
}

export default Design