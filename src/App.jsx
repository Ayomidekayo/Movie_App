import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/footer'
import MobileNavigation from './components/MobileNavigation'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setBannerData,setImageURL } from './store/movieSlice'
import './App.css';

const App = () => {
  const dispatch=useDispatch();
  const fetchTrendingData=async () => {
    try {
const response =await axios.get('/trending/all/week')
    dispatch(setBannerData(response.data.results));
        // console.log("response", response);
         
    } catch (error) {
      console.log(error);
      
    }
  }
  // Fetch trending data when the component mounts
 const fetchConfiguration = async () => {
   try {
    const response = await axios.get('/configuration');
    dispatch(setImageURL(response.data.images.secure_base_url+"original"));
  
    
  } catch (error) {
    console.error("Error fetching trending data:", error);
    
  }
 }
useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
  }, []);
  return (
    <main className=''>
            <Header/>
         <div className='' >
          <Outlet/>
          </div>
          <Footer/>
          <MobileNavigation/>
      </main>
  )
}

export default App