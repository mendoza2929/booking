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
    <Box px={{xs:2, sm:3}} py={{xs:3, sm:5}}>
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
                    <Box borderBottom={1}  paddingTop={7}>  Socials</Box>
                        <Box paddingTop={3}>
                            <Link href='#' color='inherit' className='socials'>
                            <LinkedInIcon/> LinkedIn
                            </Link>
                        </Box>
                    <Box>
                        <Link href='#' color='inherit' className='socials'>
                        <FacebookIcon/> Facebook
                        </Link>
                    </Box>
                    <Box>
                        <Link href='#' color='inherit' className='socials'>
                        <TwitterIcon/> Twitter
                        </Link>
                    </Box>
                    <Box>
                        <Link href='#' color='inherit' className='socials'>
                        <YouTubeIcon/> Youtube
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                        <Box borderBottom={1} paddingTop={7}>Contact and Location</Box>
                            <Box paddingTop={3}>
                            <LocationOnIcon/> 31st St cor 2nd Ave BGC, Taguig
                        </Box>  
                        <Box>
                            <CallIcon/> 08-123-4567
                        </Box>
                        <Box>
                            <EmailIcon/> inquire@outplace.com
                    </Box>
                    <Box>
                            <AccessTimeFilledIcon/> Mon - Fri 8:00am - 5:00pm
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