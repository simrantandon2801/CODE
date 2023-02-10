import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Box } from '@mui/system';
import Dashboard_au from './Dashboard_author';
import { Paper,Grid } from '@mui/material';
// import DashboardFooter from './DashboardFooter';
import useMediaQuery from '@mui/material/useMediaQuery';
function Faq() {
	const [isTextVisible, setIsTextVisible] = useState(false);
	const [isTextViible, setIsTextViible] = useState(false);
	const [value, setValue] = React.useState(0);
	const mobile = useMediaQuery('(max-width:600px)');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
	const toggleText = () => {
		setIsTextVisible(!isTextVisible);
	};
	const toggleTxt = () => {
		setIsTextViible(!isTextViible);
	};
  return (
	  <>
		  <Dashboard_au />
		  <Box sx={{ background:'#F3F5F9',display:"flex",width:mobile?'375px':'1600px',height:mobile?'412px':'1300px'}}>
    <Paper component='form'  sx={{position: 'absolute',
width:mobile?'272px': '1152px',
height: mobile?'48px':'1148px',marginLeft:mobile?'24px':'240px',
top:mobile?'90px': '115px',
background: '#06b2bbcc',
				borderRadius: '12px'
			  }}>
				  <Typography sx={{textAlign:"initial",color:"#FFFFFF",marginLeft:"16px",marginTop:"12px"}}>FAQ</Typography> 
			  </Paper>
			  {isTextViible ? (
			  <>
<Paper  sx={{width: mobile?"272px":'1152px',height:mobile?"42px": '170px',marginTop: '164px',background:'#FFFFFF',marginLeft:"24px", borderRadius: '12px'
				  }}>
					  <Grid container md={12} xs={12}>
						  <Grid item md={8} xs={11}>
						  <Typography sx={{fontSize:'14px'}}>How can a professional editor help?</Typography>
							  </Grid>
							  <Grid item md={4} xs={1}>
					  <Button onClick={toggleTxt}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					 
					  </Grid> 
				  </Paper>
						  
			  </>
			    ) : (
				  <>
					 <Paper   sx={{
width: mobile?'272px':'1152px',
height: '176px',marginLeft:'240px',
marginTop: '164px',background:'#FFFFFF',marginLeft:"24px",
					  borderRadius: '12px'
				  }}>
					  <Grid container md={12}>
					  <Grid item md={8} xs={11}>
									  <Typography sx={{fontSize:'14px'}}>How can a professional editor help?</Typography>
								  </Grid>
								  <Grid item md={4} xs={1}>
					  <Button onClick={toggleTxt}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					  <Typography>There are different types of editing services available on Hubhawks. Here we define what is meant be “copy writing”, as they don’t always mean the same thing in the US as they do in the Uk and elsewhere. </Typography>
						  
						  
					 
					 
					  </Grid> 
                      
				  </Paper>
					
					
				  </>
				  
				  )}
			  {/* <DashboardFooter /> */}
			  </Box>
              <Box sx={{ background:'#F3F5F9',display:"flex",width:mobile?'375px':'1600px',height:mobile?'412px':'100px'}}>
    <Paper component='form'  sx={{position: 'absolute',
width:mobile?'272px': '1152px',
height: mobile?'48px':'1148px',marginLeft:mobile?'24px':'240px',
top:mobile?'90px': '115px',
background: '#06b2bbcc',
				borderRadius: '12px'
			  }}>
				 <Typography sx={{textAlign:"initial",color:"#FFFFFF",marginLeft:"16px",marginTop:"12px"}}> Author FAQ</Typography>
			  </Paper>
			  {isTextViible ? (
			  <>
<Paper  sx={{width: mobile?"272px":'1152px',height:mobile?"42px": '17px',marginTop: '164px',background:'#FFFFFF',marginLeft:"24px", borderRadius: '12px'
				  }}>
					  <Grid container md={12} xs={12}>
						  <Grid item md={8} xs={11}>
						  <Typography sx={{fontSize:'14px'}}>Who will be doing the work for me?</Typography>
							  </Grid>
							  <Grid item md={4} xs={1}>
					  <Button onClick={toggleTxt}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					 
					  </Grid> 
				  </Paper>
						  
			  </>
			    ) : (
				  <>
					 <Paper   sx={{
width: mobile?'272px':'1152px',
height: '176px',marginLeft:'240px',
marginTop: '90px',background:'#FFFFFF',marginLeft:"24px",
					  borderRadius: '12px'
				  }}>
					  <Grid container md={12}>
					  <Grid item md={8} xs={11}>
									  <Typography sx={{fontSize:'14px'}}>Who will be doing the work for me?</Typography>
								  </Grid>
								  <Grid item md={4} xs={1}>
					  <Button onClick={toggleTxt}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					  <Typography  md={10} xs={8} sx={{margin:'initial',fontSize:'14px'}}>A freelancer will be assigned to work on your project on the basis of the information you provide in the order form.

Service I am looking for is not available on the website.
You can connect with us on sales@hubhawks.com for any services that are not mentioned on the platform, our team will get in touch with you </Typography>
						  
						  
					 
					 
					  </Grid> 
                      
				  </Paper>
					
					
				  </>
				  
				  )}
			  {/* <DashboardFooter /> */}
			  </Box>
	  
              <Box sx={{ background:'#F3F5F9',display:"flex",width:mobile?'375px':'1600px',height:mobile?'412px':'100px'}}>
    <Paper component='form'  sx={{position: 'absolute',
width:mobile?'272px': '1152px',
height: mobile?'48px':'1148px',marginLeft:mobile?'24px':'240px',
top:mobile?'90px': '200px',
background: '#06b2bbcc',
				borderRadius: '12px'
			  }}>
				 
			  </Paper>
			  {isTextViible ? (
			  <>
<Paper  sx={{width: mobile?"272px":'1152px',height:mobile?"42px": '17px',marginTop: '164px',background:'#FFFFFF',marginLeft:"24px", borderRadius: '12px'
				  }}>
					  <Grid container md={12} xs={12}>
						  <Grid item md={8} xs={11}>
						  <Typography sx={{fontSize:'14px'}}>Can I get more than one service at a time?</Typography>
							  </Grid>
							  <Grid item md={4} xs={1}>
					  <Button onClick={toggleTxt}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					 
					  </Grid> 
				  </Paper>
						  
			  </>
			    ) : (
				  <>
					 <Paper   sx={{
width: mobile?'272px':'1152px',
height: '176px',marginLeft:'240px',
marginTop: '200px',background:'#FFFFFF',marginLeft:"24px",
					  borderRadius: '12px'
				  }}>
					  <Grid container md={12}>
					  <Grid item md={8} xs={11}>
									  <Typography sx={{fontSize:'14px'}}>Can I get more than one service at a time?</Typography>
								  </Grid>
								  <Grid item md={4} xs={1}>
					  <Button onClick={toggleTxt}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					  <Typography sx={{margin:'auto',fontSize:'14px'}}>Yes! We can create a custom order for you with all the services needed.
</Typography>
						  
						  
					 
					 
					  </Grid> 
                      
				  </Paper>
					
					
				  </>
				  
				  )}
			  {/* <DashboardFooter /> */}
			  </Box>   	
			  <Box sx={{ background:'#F3F5F9',display:"flex",width:mobile?'375px':'1600px',height:mobile?'412px':'150px'}}>
    <Paper component='form'  sx={{position: 'absolute',
width:mobile?'272px': '1152px',
height: mobile?'48px':'1148px',marginLeft:mobile?'24px':'240px',
top:mobile?'90px': '115px',
background: '#06b2bbcc',

				borderRadius: '12px'
			  }}>
				 <Typography sx={{textAlign:"initial",color:"#FFFFFF",marginLeft:"16px",marginTop:"12px"}}>Collaborators</Typography>
			  </Paper>
			  {isTextViible ? (
			  <>
<Paper  sx={{width: mobile?"272px":'100px',height:mobile?"42px": '17px',marginTop: '164px',background:'#FFFFFF',marginLeft:"24px", borderRadius: '12px'
				  }}>
					  <Grid container md={12} xs={12}>
						  <Grid item md={8} xs={11}>
						  <Typography sx={{fontSize:'14px'}}>How will work get assigned?</Typography>
							  </Grid>
							  <Grid item md={4} xs={1}>
					  <Button onClick={toggleTxt}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					 
					  </Grid> 
				  </Paper>
						  
			  </>
			    ) : (
				  <>
					 <Paper   sx={{
width: mobile?'272px':'1152px',
height: '176px',marginLeft:'240px',
marginTop: '300px',background:'#FFFFFF',marginLeft:"24px",
					  borderRadius: '12px'
				  }}>
					  <Grid container md={12}>
					  <Grid item md={8} xs={11}>
									  <Typography sx={{fontSize:'14px'}}>How will work get assigned?</Typography>
								  </Grid>
								  <Grid item md={4} xs={1}>
					  <Button onClick={toggleTxt}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					  <Typography sx={{margin:'auto',fontSize:'14px'}}>Projects will be assigned to you on the basis of the information you provide us in the onboarding form. </Typography>
						  
						  
					 
					 
					  </Grid> 
                      
				  </Paper>
					
					
				  </>
				  
				  )}
			  {/* <DashboardFooter /> */}
			  </Box>
              <Box sx={{ background:'#F3F5F9',display:"flex",width:mobile?'375px':'1600px',height:mobile?'412px':'130px'}}>
    <Paper component='form'  sx={{position: 'absolute',
width:mobile?'272px': '1152px',
height: mobile?'48px':'1148px',marginLeft:mobile?'24px':'240px',
top:mobile?'90px': '115px',
background: '#06b2bbcc',
				borderRadius: '12px'
			  }}>
				 
			  </Paper>
			  {isTextViible ? (
			  <>
<Paper  sx={{width: mobile?"272px":'1152px',height:mobile?"42px": '17px',marginTop: '164px',background:'#FFFFFF',marginLeft:"24px", borderRadius: '12px'
				  }}>
					  <Grid container md={12} xs={12}>
						  <Grid item md={8} xs={11}>
						  <Typography sx={{fontSize:'14px'}}>When will I get the payment?</Typography>
							  </Grid>
							  <Grid item md={4} xs={1}>
					  <Button onClick={toggleTxt}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					 
					  </Grid> 
				  </Paper>
						  
			  </>
			    ) : (
				  <>
					 <Paper   sx={{
width: mobile?'272px':'1152px',
height: '176px',marginLeft:'240px',
marginTop: '400px',background:'#FFFFFF',marginLeft:"24px",
					  borderRadius: '12px'
				  }}>
					  <Grid container md={12}>
					  <Grid item md={8} xs={11}>
									  <Typography sx={{fontSize:'14px'}}>When will I get the payment?</Typography>
								  </Grid>
								  <Grid item md={4} xs={1}>
					  <Button onClick={toggleTxt}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					  <Typography sx={{margin:'auto',fontSize:'14px'}}>The payment for the project will be credited in your wallet after the project completion is approved by the author. </Typography>
						  
						  
					 
					 
					  </Grid> 
                      
				  </Paper>
					
					
				  </>
				  
				  )}
			  {/* <DashboardFooter /> */}
			  </Box>
              <Box sx={{ background:'#F3F5F9',display:"flex",width:mobile?'375px':'1600px',height:mobile?'412px':'100px'}}>
    <Paper component='form'  sx={{position: 'absolute',
width:mobile?'272px': '1152px',
height: mobile?'48px':'1148px',marginLeft:mobile?'24px':'240px',
top:mobile?'90px': '115px',
background: '#06b2bbcc',
				borderRadius: '12px'
			  }}>
				 
			  </Paper>
			  {isTextViible ? (
			  <>
<Paper  sx={{width: mobile?"272px":'1152px',height:mobile?"42px": '17px',marginTop: '164px',background:'#FFFFFF',marginLeft:"24px", borderRadius: '12px'
				  }}>
					  <Grid container md={12} xs={12}>
						  <Grid item md={8} xs={11}>
						  <Typography sx={{fontSize:'14px'}}>What will be the payment structure?</Typography>
							  </Grid>
							  <Grid item md={4} xs={1}>
					  <Button onClick={toggleTxt}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					 
					  </Grid> 
				  </Paper>
						  
			  </>
			    ) : (
				  <>
					 <Paper   sx={{
width: mobile?'272px':'1152px',
height: '176px',marginLeft:'240px',
marginTop: '500px',background:'#FFFFFF',marginLeft:"24px",
					  borderRadius: '12px'
				  }}>
					  <Grid container md={12}>
					  <Grid item md={8} xs={11}>
									  <Typography sx={{fontSize:'14px'}}>What will be the payment structure?</Typography>
								  </Grid>
								  <Grid item md={4} xs={1}>
					  <Button onClick={toggleTxt}>	  
				  <KeyboardArrowDownOutlinedIcon/>
								  </Button>
								  </Grid>
					  <Typography sx={{margin:'auto',fontSize:'14px'}}>We have a standardised payment system, all creators in the same service genre will be paid the same rates. </Typography>
						  
						  
					 
					 
					  </Grid> 
                      
				  </Paper>
					
					
				  </>
				  
				  )}
			  {/* <DashboardFooter /> */}
			  </Box>
		  
	
	
	  </>
  )
}
export default Faq;
