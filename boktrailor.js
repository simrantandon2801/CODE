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
function Booktrailer1  ()  {
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
        <Typography variant='h2' sx={{textAlign:'center',fontSize:mobile?'20px':'36px',lineHeight:mobile?'24px':'48px',fontWeight:mobile?'600':'600'}}>Book Trailer</Typography>
        </Grid>
<Grid container lg={10}  xs={10} sm={10} md={10} sx={{margin:'auto',marginTop:'36px'}} >

                <Grid container md={7} xs={11} lg={7} sm={7} >
       

        
        <Grid container md={12} xs={12} lg={10.5}>
        <Grid item lg={12} md={12} xs={12}   sx={{textAlign: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'26px':'56px'}}>A book trailer is a short video that serves as a book teaser. It increases a book's demand and worth among readers and gives it a better relevance. It shows the author's masterpiece work, sometimes equipped with a plot, characters, or a script, in the style of a cinematic movie trailer.</Typography>
        </Grid>
        <Grid item lg={12} md={12} xs={12}   sx={{textAlign: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'16px':'26px'}}> It draws readers in with a compelling visual, audio, and voice-over. It shows the eye-catching and captivating rear book cover art that enthrals readers and encourages them to purchase a book.</Typography>
        </Grid>
        <Grid item lg={11} md={12} xs={12}   sx={{textAlign: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',fontWeight:mobile?'400':'400',marginTop:mobile?'16px':'26px'}}>Our dedicated team at Hubhawks promotes your book in such a way that entices readers to buy it. If you’re looking to increase reader engagement and give your readers a visual for your book, then this is the perfect service for you.</Typography>
        </Grid>
        
        </Grid>
        </Grid>
        <Grid container md={5} xs={11} lg={4} sm={5} sx={{marginTop:mobile?'56px':'0px'}} >
        
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

export default Booktrailer1;
