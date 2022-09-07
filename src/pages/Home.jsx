import React from 'react'
import Announcements from '../components/Announcements';
import Categories from '../components/Categories';
import Navbar from "../components/Navbar";
import Slider from '../components/Slider';
import BooksList from '../components/BooksList';


export const Home = () => {
  return (
    <div>
      <Announcements/>
      <Navbar/>
      <Slider />
      <Categories />
      <BooksList />
    </div>
  );
};

export default Home;