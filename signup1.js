import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {useMediaQuery} from "@mui/material";
import Paper from '@mui/material/Paper';
import GoogleIcon from '@mui/icons-material/Google';
import { Grid ,Typography} from '@mui/material';
import jwt_decode from 'jwt-decode'
 import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



import { baseurl } from "./helper";
const theme = createTheme();
function Signup  ()  {
	const [data, setData] = useState({
		Name: "",
		//   lastName: "",
		email: "",
		password: "",
	});
	
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const mobile = useMediaQuery('(max-width:600px)');
	const ipad = useMediaQuery('(max-width:600px)');
	const devices=useMediaQuery('(max-width:1200px)')
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	const responseGoogle = (response) => {
		
		var userObject = jwt_decode(response.credential);
		
		localStorage.setItem('user', response.credential);
		
		navigate('/Explore')
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			
			const { data: res } = await axios.post(`${baseurl}/signup/signup`, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div >
			
			<div  style={{backgroundColor:'#080C15'}}>
				
				<Grid container lg={10} md={12} xs={12} sx={{margin:'auto',backgroundColor:'#080C15'
}}>	
			
				
			<Grid item  lg={12} md={12} xs={12}>	
			
			<ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
       
							
		<Grid container md={12} lg={12} xs={10} sx={{marginLeft:mobile?'0px':'0px',marginTop:mobile?'36px':'102px'}}>
								<Typography variant={ mobile?"h5":'h3'} sx={{ fontstyle: 'normal',fontSize: mobile?'24px':'36px',textAlign:'center',fontWeight:'600',lineheight: '48px',marginLeft: mobile? '50px':ipad?'-50px':0,margin:'auto',color:'#FFFFFF'}}>
								Sign up
          </Typography>
			</Grid>
		
            <Grid container >
			<Grid container md={12} xs={12} sx={{mt:'10px',mb:'20px'}} >
			<Grid item  md={4} xs={12}>
			<Typography variant='h4' sx={{  fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial',color:'#FFFFFF',marginTop:'25px'}}>Name</Typography>
			</Grid>
			<Grid item md={12} xs={12}>
                <TextField
				inputProps={{ style: { fontFamily: 'Arial', color: 'white',border:'1px solid #FFFFFF'}}}
				style={{ flex: 1, margin: '0 20px 0 0', color: 'white'}}
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
				  id="Name"
				  onChange={handleChange}
				  value={data.Name}
                  placeholder='Enter your name'
                  size='small'
				 
                />
              </Grid>
              </Grid>
			<Grid container md={12} xs={12} sx={{mt:'10px',mb:'20px'}} >
				<Grid item md={4} xs={12} spacing={2}>
					<Typography variant='h4' sx={{  fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial',color:'#FFFFFF' }}>Email</Typography>
				</Grid>
				<Grid item md={12} xs={12}>
				<TextField
				inputProps={{ style: { fontFamily: 'Arial', color: 'white',border:'1px solid #FFFFFF'}}}
				style={{ flex: 1, margin: '0 20px 0 0', color: 'white'}}
                  required
                  fullWidth
                  id="email"
                 placeholder='Enter your email'
				 name="email"
				 onChange={handleChange}
				  value={data.email}
				autoComplete="email"
				size='small'
				/>
				</Grid>
				</Grid>
				<Grid container md={12}xs={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item md={4}xs={12} >
					<Typography variant='h4' sx={{ fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial',color:'#FFFFFF' }}>Password</Typography>
				</Grid>
              <Grid item md={12} xs={12}>
                <TextField
				inputProps={{ style: { fontFamily: 'Arial', color: 'white',border:'1px solid #FFFFFF'}}}
				style={{ flex: 1, margin: '0 20px 0 0', color: 'white'}}
                  required
                  fullWidth
                  name="password"
                  placeholder='Enter your password'
                  type="password"
													id="password"
													onChange={handleChange}
				  value={data.password}
													autoComplete="new-password"
													size='small'
                />
				</Grid>
										</Grid>
										{error && <div >{error}</div>}
              <Grid item md={12} xs={12}>
			  <Grid container justifyContent="flex-end" md={12} xs={12}>
              <Grid item >
                <Link to="../forgotpassword" variant="body2" style={{textDecoration:'none',color: '#3A81F3'}}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
			sx={{
				mt: 3, mb: 2, background: '#3A81F3',
				borderRadius: '8px',textTransform:'none'}}
			>
			Sign Up
			</Button>	
            
			<Grid container md={12} xs={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item md={12}xs={12} >
					<Typography variant='h4' sx={{  fontSize: '18px', fontWeight: '600', fontStyle: 'normal',color:'#63636D' }}>Or</Typography>
				</Grid>
              <Grid item md={12}xs={12}sx={{marginLeft:mobile?'52px':"100px",marginBottom:"20px",marginTop:"20px"}} >
			  <GoogleOAuthProvider 
                clientId={`73790928133-suk88f55p624r77bnohl5iv3l6g3tjtm.apps.googleusercontent.com`}
                >
             <GoogleLogin style={{ width: "500px" }}	
              render={(renderProps) => (
                <button
                  type="button"
                  
                  onClick={renderProps.onClick}
					disabled={renderProps.disabled}
														
                >
															{/* <FcGoogle className="mr-4" /> */}
															Sign in with5 google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
            </GoogleOAuthProvider>
				</Grid>
				</Grid>
				<Grid container  md={12} xs={12}>
              <Grid item md={12} xs={12} >
                <Typography href="#" variant="body2"style={{textAlign:'center',color:'#FFFFFF'}} >
                  Already have an account?<Link to="/Sign in" variant="body2"style={{textDecoration:'none',color:'#3A81F3'}}>Sign in</Link> 
                </Typography>
              </Grid>
			</Grid>
									
         
        
		
		</Container>
					</ThemeProvider>
						
		</Grid>
		</Grid>
			</div>
		</div>
	);
};

export default Signup;
