import React from 'react';
import InternalHeader from "../components/InternalHeader"
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Contact from "../components/Contact"
import BottomBar from "../components/BottomBar"

const AboutHeather = () => {
  return (
    <>
      <InternalHeader />
      <Layout>
        <div className='container max-w-7xl px-4 mx-auto py-24 grid lg:grid-cols-2 gap-6'>
          <div>
            <a
              href="/"
              className="w-fit flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-light-green hover:opacity-90 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 md:py-1 md:text-lg md:px-6"
              >
              Back
            </a>
            <h1 className="mt-6 text-3xl font-bold">About Heather</h1>
            <div className='flex flex-col gap-4 mt-4 text-lg text-gray-600'>
              <p>Heather has worked as a physiotherapist in the disability sector since graduating from her bachelor of Physiotherapy in 2014. Prior to that she worked as a support worker for children with various disabilities which provided valuable insight into the challenges families encounter when navigating the world of therapy and medical intervention.</p>
              <p>Heather is passionate about supporting children and their families to achieve the best outcomes possible through the provision of evidence-based, wholistic and individualised therapy services.</p>
              <p>In addition to community-based physiotherapy services Heather also works at King Edward Memorial Hospital 1-2 x times per week supporting premature babies and their families through the preterm group and she occasionally works in outpatient physiotherapy services at Perth Children’s Hospital.</p>
              <p>As founder and director of Physi-Go-Therapy, Heather aims to build a dynamic team of skilled, enthusiastic and passionate therapists to support people to work towards their goals and get the most out of day-to-day life.</p>
            </div>
          </div>
          <StaticImage objectPosition="top" className="shadow-lg rounded-lg" src={'../images/heather.jpg'} alt="Heather Murray, senior physiotherapist and owner" />
        </div>
      </Layout>
      <Contact />
      <BottomBar />
    </>
  );
};

export default AboutHeather;
