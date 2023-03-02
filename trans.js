import React from 'react'

import Dashboard_au from '../Dashboard_author/Dashboard_author'
import { Box } from '@mui/system';
import {useMediaQuery} from '@mui/material';
import {Grid} from '@mui/material';
import {Button} from '@mui/material';
import { Autocomplete } from '@mui/material';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {TextField} from '@mui/material';
import {Image} from 'mui-image';
import ResponsiveAppBar from './menu';
import Footer from '../footer';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
function Translation1  ()  {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showGrid, setShowGrid] = useState(false);
  const mobile = useMediaQuery('(max-width:600px)');
    const ipad = useMediaQuery('(min-width: 768px) and (max-width: 1180px)');
    const handleChange11 = (event, value) => {
      setSelectedOptions(value);
      navigate(`../${value}`);
  }
  const navigate = useNavigate();
  const handleExplore =  (e) => {
  navigate('/Editing')
};
  const ServicesE = [
      
    ];
  return (
    <>
     
		  <ResponsiveAppBar/>
      <Grid item lg={10} md={12} xs={12}   sx={{textAlign: 'center',marginTop:"80px"}}>
        <Typography variant='h2' sx={{textAlign:'center',fontSize:mobile?'20px':'36px',lineHeight:mobile?'24px':'48px',fontWeight:mobile?'600':'600'}}>Translation</Typography>
        </Grid>

<Grid container lg={10} xs={10}  sm={10} md={10} sx={{margin:'auto',marginTop:'0px'}} >

                <Grid container md={7} xs={11} lg={7} sm={7} >
       
        
        <Grid container md={12} xs={12} lg={10.5}>
        <Grid item lg={12} md={12} xs={12}   sx={{textAlign: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'16px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'700':'400',marginTop:mobile?'26px':'56px'}}>Literary translation is much more than merely "translation." It is a form of art rather than just a skill since it involves transferring the same sentiments and feelings that your work stirs up into a new language.</Typography>
        </Grid>
        <Grid item lg={12} md={12} xs={12}   sx={{textAlign: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'16px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'700':'400',marginTop:mobile?'16px':'26px'}}>Hubhawks employs a team of certified native speakers who undergo ongoing evaluations to ensure the highest possible output quality.</Typography>
        </Grid>
        <Grid item lg={11} md={12} xs={12}   sx={{textAlign: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'16px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'700':'400',marginTop:mobile?'16px':'26px'}}>Editing and quality checks are included by default in our language workflows. Consistency is ensured throughout the process.</Typography>
        </Grid>
        <Grid item lg={11} md={12} xs={12}   sx={{textAlign: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'16px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'700':'400',marginTop:mobile?'16px':'26px'}}>Here are all the translation services we offer:

</Typography>
        </Grid>
        <Grid item lg={5} md={12} xs={12}  >
          
        <ul style ={{listStyle: 'disc'}}>
        <li>
          <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'16px':'2px'}}>English</Typography>
          </li>
          <li>
          <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'16px':'2px'}}>Hindi</Typography>
          </li>
          <li>
          <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'16px':'2px'}}>Marathi</Typography>
          </li>
          <li>
          <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'16px':'2px'}}> Bengali</Typography>
          </li>
          <li>
          <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'16px':'2px'}}>Tamil</Typography>
          </li>
          <li>
          <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'16px':'2px'}}> Malayalam</Typography>
          </li>
          </ul>

        </Grid>
        </Grid>
        </Grid>
        <Grid container md={5} xs={11} lg={4} sm={5} sx={{marginTop:'56px'}}>
        
        <Grid item lg={12} md={12} xs={12}   sx={{textAlign: 'center'}}>
        <CardMedia
					component="img"
					height="194"
					image="https://drive.google.com/uc?export=view&id=1JlhoJV-AJhEpbGWJDVi4qqfAxQPMwFER"
					alt="Paella dish" style={{
						justifyContent: 'space-around', width: mobile?'260px':ipad?"345px":'472px', height: mobile?'233px':ipad?"309px":'417px', position: 'absolute',borderRadius:"36px",
						marginLeft:mobile?'31px':ipad?"88px":'0px',marginTop:mobile?'-2px':ipad?"60px":'-18px'
					}}
      />
      <CardContent style={{justifyContent:'center',display:'flex'}}>
	  <CardMedia
		component="img"
					image="https://drive.google.com/uc?export=view&id=1W0eSX1BhePNNVho37DHzy0SQlV-Q2LBW"
					alt="Paella dish" style={{
						justifyContent: 'space-around', width:mobile?'272px':ipad?"358px":'472px', height:mobile?'auto': ipad?"394px":'417px',marginLeft:mobile?'-8px':ipad?"0px":'0px',borderRadius:"36px"
					}}
      />
      </CardContent>
        </Grid>
       
        </Grid>
        </Grid>
        <Grid container lg={10}>
        <Button
              variant="contained"
              color="primary"
				sx={{textTransform: 'none',fontWeight:'500',fontSize:mobile?'10px':'16px',borderRadius:'8px',
								  height: mobile ? '27px' : '40px',display:'flex',margin:'56px auto'
							  }}
							  onClick={handleExplore}
            >
              Explore now
					  </Button>
            </Grid>
    
     <Footer/>
    </>
  )
}

export default Translation1

