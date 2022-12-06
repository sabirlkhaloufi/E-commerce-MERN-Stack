import React from 'react'

import Banner from '../components/banner/Banner'
import AboutCout from '../components/home/AboutCount'
import SpecialiteCategory from '../components/home/SpecialiteCategory'
import Breadcrumb from '../components/banner/CallToPublier';
import CallToPublier from '../components/banner/CallToPublier';

const Home = () => {
  return (
    <>
        <Banner/>
        <SpecialiteCategory />
        <CallToPublier />
        <AboutCout wrapperClass="edu-section-gapBottom"/>

    </>
  )
}

export default Home