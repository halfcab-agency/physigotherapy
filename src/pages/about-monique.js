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
            <h1 className="mt-6 text-3xl font-bold">About Monique</h1>
            <div className='flex flex-col gap-4 mt-4 text-lg text-gray-600'>
            <p>Monique has been working as a Physiotherapist since graduating from Curtin University in 2014. She has gained extensive experience in hospitals in Australia and the UK, predominantly in neurological rehabilitation (both acute and sub-acute) and she has worked in community-based, multidisciplinary therapy services within the disability sector since 2018.</p>
            <p>Monique grew up in the country on a farm in the Great Southern Region of WA. She has been living in Perth for the past 12 years since studying her Bachelor of physiotherapy 2011-2014. In her spare time Monique enjoys singing, listening to music, gardening, or participating in fitness or team sports (such as football and netball).</p>
            <p>Monique is passionate about maintaining her understanding of current research and evidence-based practices so that she can continue to provide high-quality and effective therapy services to adults and adolescents. She participates in numerous courses each year to maintain her wide base of knowledge within the sector and in 2021 she completed a Graduate Certificate in Neurological Rehabilitation. Monique’s experience and expertise relates to older adolescent and adult populations, so she is best suited to participants of teenage and older.</p>
            </div>
          </div>
          <StaticImage objectPosition="top" className="shadow-lg rounded-lg self-start" src={'../images/monique.jpg'} alt="Monique Davies, senior physiotherapist" />
        </div>
        <div className='container max-w-7xl px-4 mx-auto flex flex-col gap-4 pb-12 lg:pb-24 text-lg text-gray-600'>
          <strong className='text-gray-900'>Below is a list (not exhaustive) of services Monique can provide to clients.</strong>
          <ul className='list-disc pl-6 flex flex-col gap-4'>
            <li>Neurological rehabilitation for conditions including stroke, traumatic brain injury, cerebral palsy, spinal cord injury etc</li>
            <li>Spasticity management including assessment and intervention including advice on Botox, serial casting (trained in both upper and lower limb casting), stretching and positioning</li>
            <li>Assessment and treatment of dizziness and vertigo (not limited to individuals with a disability)</li>
            <li>Manual techniques including taping, muscle release and dry needling</li>
            <li>Hydrotherapy (aka aquatic physiotherapy) including carer training and development of an individualised program </li>
            <li>Intensive goal-orientated rehabilitation which includes assessment, goal setting and 6-8 x weeks of 3 x sessions per week to reach the client's goal (followed by re-assessment). This is particularly effective for the sub-acute period post stroke in adults.</li>
            <li>Cardiorespiratory (chest) assessment and management including assistance with cough-assist machines</li>
            <li>Assessment and management of pain</li>
            <li>Assistance with NDIS applications for equipment needs relating to Physiotherapy goals (e.g. cough assist machines, walkers, modified bike/trike's, race-runners etc)</li>
          </ul>
        </div>
      </Layout>
      <Contact />
      <BottomBar />
    </>
  );
};

export default AboutMonique;
