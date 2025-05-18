import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
  const navigation=useNavigation()
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <h3>This is home page</h3>

        {
          navigation.status==='loadinng'?<p>Loading.....</p>:  <Outlet />
        }
      
      </main>
      <Footer />
    </div>
  );
};

export default Home;
