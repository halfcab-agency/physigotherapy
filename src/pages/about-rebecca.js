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
            <h1 className="mt-6 text-3xl font-bold">About Rebecca</h1>
            <div className='flex flex-col gap-4 mt-4 text-lg text-gray-600'>
            <p>Rebecca is passionate about assisting individuals with disabilities to achieve their goals. As a therapy assistant, she works alongside the therapy team to help implement the programs and recommendations provided and she brings a unique sense of fun and enthusiasm to her sessions.</p>
            <p>Rebecca has extensive experience, knowledge and skills that she has gathered over time from completing her Cert II in Disability and Aged Care, through multiple roles within the disability sector and through her own personal experience with disability, as she provides Legal Guardianship and informal support for an adult family member with a disability.</p>
            <p>Previously, Rebecca has worked in care work roles with a wide variety of age groups, from young infants to the elderly, across multiple organisations and settings. She has provided care to individuals in community-based settings, she has cared for children with cancer, children with eating disorders and children with disabilities at the children’s hospital here in Perth and has provided care in supported accommodation settings including a facility specifically designed for younger people with disabilities.</p>
            {/* <p>Later Rebecca went on to work alongside therapists at the rehabilitation unit of a transitional facility where she worked with individuals to progress towards their goals aimed at supporting their transition to either independent or assisted living. She found this work very rewarding and enjoyed seeing people progress through their programs, striving to reach their full potential and then being able to live as independently as possible. From there, her dedication and passion for helping others was recognised and she was offered a role as the Lifestyle Coordinator for the organisation. In this role she arranged and accompanied individuals with disabilities on social outings enabling them to reconnect with society and maintain meaningful involvement in the community around them following their transition to supporting living accommodation. Rebecca was also tasked with helping individuals style their rooms and she took pride and joy in being able to help bring out their unique style, ensuring their personalities and preferences were reflected in the efforts to make their accommodation feel more like their home.</p> */}
            <p>Rebecca and her family live very active lives and enjoy spending time outdoors and working on their physical skills. The family collectively have a keen interest in Ninja Warrior activities and even have their own Ninja Warrior set up at home. Rebecca also enjoys spending time with their animals (chickens, geese, ducks and dogs) as well as gardening or generally just being outdoors.</p>
            <p>Rebecca brings her passion for exercise and physical activity to all that she does and uses her enthusiasm to inspire and motivate people to achieve their full potential.</p>
            </div>
          </div>
          <StaticImage objectPosition="top" className="shadow-lg rounded-lg" src={'../images/rebecca.jpg'} alt="Rebecca Joyce, therapy assistant" />
        </div>
      </Layout>
      <Contact />
      <BottomBar />
    </>
  );
};

export default AboutHeather;
