import './footer.css'
import logo from '../../img/logo.png'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const Footer = () => {
  return (
    <footer>
    <Box px={{xs:1, sm:2}} py={{xs:1, sm:2}}>
        <Container maxWidth="lg">
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                    <img className="fLogo"src={logo} alt=''/>
                    <p>
                        We are online marketplace for lodging, hotels, 
                        condos and vacation rentals. Explore new journeys, 
                        we will help you find the best destination.
                    </p>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}  paddingTop={5}>  Socials </Box>
                        <Box paddingTop={3}>
                            <Link href='#' color='inherit' className='socials' style={{ textDecoration: 'none' }}>
                            <LinkedInIcon className='icon 'style={{ fontSize: '12px' }}/> LinkedIn
                            </Link>
                        </Box>
                    <Box>
                        <Link href='#' color='inherit' className='socials' style={{ textDecoration: 'none' }}>
                        <FacebookIcon className='icon' style={{ fontSize: '12px' }}/> Facebook
                        </Link>
                    </Box>
                    <Box>
                        <Link href='#' color='inherit' className='socials' style={{ textDecoration: 'none' }}>
                        <TwitterIcon className='icon' style={{ fontSize: '12px' }}/> Twitter
                        </Link>
                    </Box>
                    <Box>
                        <Link href='#' color='inherit' className='socials' style={{ textDecoration: 'none' }}>
                        <YouTubeIcon className='icon' style={{ fontSize: '12px' }}/> Youtube
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                        <Box borderBottom={1} paddingTop={5}>Contact and Location</Box>
                            <Box paddingTop={3} style={{ fontSize: '12px' }} paddingBottom={1}>
                            <LocationOnIcon style={{ fontSize: '12px' }}/> 31st St cor 2nd Ave BGC, Taguig
                        </Box>  
                        <Box  style={{ fontSize: '12px' }} paddingBottom={1}>
                            <CallIcon style={{ fontSize: '12px' }}/> 08-123-4567
                        </Box>
                        <Box  style={{ fontSize: '12px' }} paddingBottom={1}>
                            <EmailIcon style={{ fontSize: '12px' }}/> inquire@outplace.com
                    </Box>
                    <Box  style={{ fontSize: '12px' }}>
                            <AccessTimeFilledIcon style={{ fontSize: '12px' }}/> Mon - Fri 8:00am - 5:00pm
                        </Box>
                </Grid>
            </Grid> 
                    <Box textAlign='center' pt={{xs:3, sm:5}} pb={{xs:2, sm:0}}>
                    OutPlace &reg; All Rights Reserved {new Date().getFullYear()}
                    </Box >
        </Container>
    </Box>
  </footer>
)
}

export default Footer