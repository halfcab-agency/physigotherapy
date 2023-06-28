import React from 'react';
import InternalHeader from "../components/InternalHeader"
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Contact from "../components/Contact"
import BottomBar from "../components/BottomBar"

const AboutMonique = () => {
  return (
    <>
      <InternalHeader />
      <Layout>
        <div className='container max-w-7xl px-4 mx-auto py-12 lg:py-24 grid lg:grid-cols-2 gap-12'>
          <div>
            <a
              href="/"
              className="w-fit flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-light-green hover:opacity-90 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 md:py-1 md:text-lg md:px-6"
              >
              Back
            </a>
            <h1 className="mt-6 text-3xl font-bold">About Jan</h1>
            <div className='flex flex-col gap-4 mt-4 text-lg text-gray-600'>
            <p>Jan has joined our team after many years of experience working at Child Development Services (CDS) where she provided community-based physiotherapy, as part of a multidisciplinary team, to children with delayed gross motor skills and/or developmental concerns. </p>
            <p>Jan brings a wealth of knowledge and experience in early intervention to our team. She is passionate about providing fun, engaging and family-oriented services to children aged 0-6 years who require support with their development, mobility and/or gross motor skills. </p>
            <p>Jan provides sessions within the child's local community (home, daycare, school or local settings) as well as offering sessions from her home in North Perth and she is able to provide services on Saturdays from time to time to best accommodate families' schedules.</p>
            </div>
          </div>
          {/* <StaticImage objectPosition="top" className="shadow-lg rounded-lg self-start" src={'../images/monique.jpg'} alt="Monique Davies, senior physiotherapist" /> */}
        </div>
      </Layout>
      <Contact />
      <BottomBar />
    </>
  );
};

export default AboutMonique;
