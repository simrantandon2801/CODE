import './App.css';
import LandingPage from './landingpage';
import ResponsiveAppBar from './components/menu'
import Services from './components/Services';
import About from './components/About';
import  Editing  from './Dashboard_author/Editing';
import Appl from './components/stepper';
import Contact from './components/contact';
import Home from './components/signup';
import Signin from './components/signin';
import Signup from './components/signup';
import { useEffect, useState } from "react";
import Blog from './components/Blog';
import Partnerus from './components/Partnerus';
import BookNewsFeed from './Dashboard_author/Newsfeed';
import { Route, Routes ,Navigate} from 'react-router-dom';
import Dashboard_au from './Dashboard_author/Dashboard_author';
import CoverDesigning from './Dashboard_author/CoverDesigning';
import Translation from './Dashboard_author/Translation';
import GhostWriting from './Dashboard_author/GhostWriting';
import AmazonAds from './Dashboard_author/AmazonAds';
import BookReviews from './Dashboard_author/BookReviews';
import BookTrailer from './Dashboard_author/BookTrailer';
import BookStore from './Dashboard_author/BookStore';
import Blog1 from './components/Blog1';
import Blog3 from './components/Blog3';
import Blog2 from './components/Blog2';
import Blog4 from './components/Blog4';
import Privacy from './components/privacy';
import Faq from './Dashboard_author/Faq';
import Setting from './Dashboard_author/Setting';
import  Explore  from './Dashboard_author/Explore';
import TermsandCondition from './components/Termsandcondition';
import ForgotPassword from './components/forgetPassword'
import Setting1 from './Dashboard_author/Setting1';
import Learnbest from './Masterclass/learnbest';
import Instructor from './Masterclass/Instructor';
import Playlist from './Masterclass/Playlist';
import Episode1 from './Masterclass/Episode1';
import Editing1 from './components/Editing';
import Coverdesign1 from './components/Coverdesign1';
import Translation1 from './components/Translation1';
import Ghostwriting1 from './components/Ghostwriting1';
import Ams from './components/Ams';
import Bookreviews1 from './components/Bookreviews1';
import Booktrailer1 from './components/Booktrailer1';
import Bookstore1 from './components/Bookstore1';
function App() {
	const user = localStorage.getItem("token");
	const google = localStorage.getItem('user');
	const [use, setUser] = useState(null);
	console.log(google, 'adada');
	
  return (
	  <div className="App">
		  <Routes>
			  {user && (<>
		  <Route path="/" exact element={user?<Explore />:<LandingPage/>} /> 
			   <Route path="Editing" element={<Editing />} />
			   <Route path="CoverDesigning" element={<CoverDesigning />} />
			   <Route path="Cover Designing" element={<CoverDesigning />} />
			   <Route path="Translation" element={<Translation />} />
			   <Route path="GhostWriting" element={<GhostWriting />} />
			   <Route path="Ghost Writing" element={<GhostWriting />} />
			   <Route path="AmazonAds" element={<AmazonAds />} />
			   <Route path="Amazon Ads" element={<AmazonAds />} />
			   <Route path="BookReviews" element={<BookReviews />} />
			   <Route path="Book Reviews" element={<BookReviews />} />
			   <Route path="BookTrailer" element={<BookTrailer />} />
			   <Route path="Book Trailer" element={<BookTrailer />} />
			   <Route path="Book Store" element={<BookStore />} />
			   <Route path="NewsFeed" element={<BookNewsFeed />} />
				  <Route path="BookStore" element={<BookStore />} />
				  <Route path='Explore' element={<Explore />} />
			  <Route path='Setting' element={<Setting1 />} />
			   </>  ) 
			  }
			  {google && (<>
			  <Route path="/" exact element={google ? <Explore /> : <LandingPage />} /> 
			 <Route path="Editing" element={<Editing />} />
			 <Route path="CoverDesigning" element={<CoverDesigning />} />
			 <Route path="Cover Designing" element={<CoverDesigning />} />
			 <Route path="Translation" element={<Translation />} />
			 <Route path="GhostWriting" element={<GhostWriting />} />
			 <Route path="Ghost Writing" element={<GhostWriting />} />
			 <Route path="AmazonAds" element={<AmazonAds />} />
			 <Route path="Amazon Ads" element={<AmazonAds />} />
			 <Route path="BookReviews" element={<BookReviews />} />
			 <Route path="Book Reviews" element={<BookReviews />} />
			 <Route path="BookTrailer" element={<BookTrailer />} />
			 <Route path="Book Trailer" element={<BookTrailer />} />
			 <Route path="Book Store" element={<BookStore />} />
			 <Route path="NewsFeed" element={<BookNewsFeed />} />
				<Route path="BookStore" element={<BookStore />} />
			
			<Route path='Setting' element={<Setting1 />} />
		</>	  )}
			  
			   {user && <Route path="/signin" exact element={<Signin />} /> 
			  }

			  
			  <Route path='/' element={<LandingPage />} />
			  <Route path='Home' element={<LandingPage />} />
			  <Route path='Services' element={<Services />} />
			  <Route path='Sign in' element={use?<Signin />:<Signin />} />
			  <Route path='Blog' element={<Blog />} />
			  <Route path='About' element={<About />} />
			  <Route path='Signup' element={<Signup />} />
			  <Route path='Contact' element={<Contact />} />
			  <Route path='Partnerus' element={<Partnerus />} />
			  <Route path='dashboard_au' element={<Dashboard_au />} />
			  <Route path='Explore' element={<Explore />} />
			  <Route path="blog1" element={<Blog1 />} />
			  <Route path="blog3" element={<Blog3 />} />
			  <Route path="blog2" element={<Blog2 />} />
			  <Route path="blog4" element={<Blog4 />} />
			  <Route path="Faq" element={<Faq />} />
			  <Route path='privacy' element={<Privacy />} />
			 
			  <Route path='termsandcondition' element={<TermsandCondition />} />
			  <Route path='forgotpassword' element={<ForgotPassword />} />
			  <Route path='Learnbest' element={<Learnbest />} />
			  <Route path='Instructor' element={<Instructor />} />
			  <Route path='Playlist' element={<Playlist />} />
			  <Route path='Episode1' element={<Episode1 />} />
			  <Route path='Editing1' element={<Editing1 />} />
			  <Route path='Coverdesign1' element={<Coverdesign1 />} />
			  <Route path='Translation1' element={<Translation1 />} />
			  <Route path='Ghostwriting1' element={<Ghostwriting1 />} />
			  <Route path='Ams' element={<Ams />} />
			  <Route path='Bookreviews1' element={<Bookreviews1 />} />
			  <Route path='Booktrailer1' element={<Booktrailer1 />} />
			  <Route path='Bookstore1' element={<Bookstore1 />} />
		</Routes> 
		  
		 
    </div>
  );
}

export default App;
