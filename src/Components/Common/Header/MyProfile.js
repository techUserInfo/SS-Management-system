import React from 'react';
import AppHeader from "../Header/AppHeader";
import Menu from "../Header/Menu";
import Footer from "../Header/Footer"

const MyProfile = () => {
  return (
    <>
    <AppHeader />
    <Menu />
    <div>
      <h1>My Profile</h1>
      <p>This is the My Profile page</p>
    </div>
    <Footer />
    </>
  );
};

export default MyProfile;
