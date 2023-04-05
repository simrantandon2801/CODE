import { useState } from "react";
import axios from "axios";
import { Link,  useNavigate } from "react-router-dom";
import { baseurl } from "./helper";
import {TextField, useMediaQuery} from "@mui/material";
import { Grid } from "@mui/material";
import {Typography} from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from 'jwt-decode'
import {Button} from "@mui/material";
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
const Login = () => {
	const mobile = useMediaQuery('(max-width:600px)');
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
const devices=false
	
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	
	const responseGoogle = (response) => {
		
		var userObject = jwt_decode(response.credential);
		
		localStorage.setItem('user', response.credential);
		
		navigate('/Explore')
	}
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(`${baseurl}/signup/login`, data);
			
			localStorage.setItem("token", res.data);
			
			navigate("/rajiv") ;
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
		<div>
			<div style={{backgroundColor:'#080C15'}}>
			<Grid container lg={12} md={12} xs={12}>	
			<Grid container md={12} lg={12} xs={12} sx={{marginLeft:mobile?'0px':'0px', diplay:'flex', justifyContent:'center',marginTop:mobile?'36px':'102px'}}>
          <Typography  variant={ mobile?"h5":'h3'}sx={{ fontstyle: 'normal',fontsize: mobile?'4px':'36px',textAlign:'center',fontWeight:'600',lineheight: '48px',marginLeft: mobile? '120px':0,color:'#FFFFFF'}}>
            Sign in
										</Typography>
										
			</Grid>
			
			<Grid container md={12} lg={10} xs={12} sx={{mt:'10px',mb:'20px',diplay:'flex', justifyContent:'center',margin:'auto',}} >
			<Grid item md={4} lg={3.9} xs={12} sx={{margin:'auto',marginTop:'46px'}} >
			<Typography variant='h4' sx={{  fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial',color:'#FFFFFF' }}>Email</Typography>
			</Grid>
			<Grid item md={12}  lg={10} xs={12} sx={{margin:'auto'}} >
				
					
								<TextField
								inputProps={{ style: { fontFamily: 'Arial', color: 'white',border:'1px solid #FFFFFF'}}}
								style={{ flex: 1, margin: '0 20px 0 0', color: 'white'}}
					type="email"
					placeholder="Email"
					name="email"
					onChange={handleChange}
					value={data.email}
					required
					size='small'
					sx={{width:'400px',}}
				/>
				</Grid>
				</Grid>
				<Grid container lg={12} >
				<Grid container md={12} xs={12} lg={12} sx={{mt:'10px',mb:'0px',diplay:'flex', justifyContent:'center',margin:'auto'}}>
				<Grid item md={4} xs={12}  lg={3.3} sx={{margin:'auto',marginTop:'27px'}}>
					<Typography variant='h4' sx={{  fontSize: '18px', fontWeight: '600', fontStyle: 'normal',textAlign:'initial',color:'#FFFFFF'}}>Password</Typography>
				</Grid>
              <Grid item md={12} lg={12}  xs={12} sx={{margin:'auto'}}>
							<TextField
							inputProps={{ style: { fontFamily: 'Arial', color: 'white',border:'1px solid #FFFFFF'}}}
							style={{ flex: 1, margin: '0 20px 0 0', color: 'white'}}
							
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							size='small'

							sx={{width:'400px',}}
								/>
								</Grid>
								</Grid>
						{error && <div >{error}</div>}
						<Grid item md={12} lg={7.7} xs={12}>
			  <Grid container justifyContent="flex-end" md={12} xs={12}>
              <Grid item >
                <Link to="../forgotpassword" variant="body2" style={{textDecoration:'none',color: '#3A81F3'}}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
              </Grid>
			  <Grid item md={12} lg={12} xs={12} >
						<Button type="submit" onClick={handleSubmit}fullWidth
              variant="contained"
			sx={{width:'400px',height:'45px', background: '#3A81F3',marginTop:'20px',
			borderRadius: '8px',textTransform:'none',color:'#FFFFFF'}} >
							Sing In
						</Button>
						<Grid container md={12} xs={12} sx={{mt:'10px',mb:'0px'}}>
				<Grid item md={12}xs={12} >
					<Typography variant='h4' sx={{  fontSize: '18px', fontWeight: '600', fontStyle: 'normal',color:'#FFFFFF' }}>Or</Typography>
				</Grid>
              <Grid item md={12}xs={12}  lg={2}sx={{margin:'auto',marginTop:'15px'}} >
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
              <Grid item md={12} xs={12} sx={{marginTop:'24px'}}>
                <Typography href="#" variant="body2"style={{textAlign:'center',color:'#FFFFFF'}} >
				Don’t have an account? <Link to="/Sign up" variant="body2"style={{textDecoration:'none'}}>Sign up</Link> 
                </Typography>
              </Grid>
			</Grid>
						</Grid>
						</Grid>

						</Grid>
						</div>
						</div>
	
	);
};

export default Login;
