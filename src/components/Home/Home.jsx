import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <h3>This is home page</h3>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
