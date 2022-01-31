import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Disability services & neurological rehabilitation',
    description: 'Supporting adults and children to achieve their goals via assessment, individual or group-based intervention and prescription of assistive technology to maximise their participation at home and in the community. Assistive technology includes, but is not limited to, standing frames, walkers, ambulatory aids, adaptive exercise equipment and modified bikes/trikes.',
  },
  { name: 'Aquatic Physiotherapy (aka Hydrotherapy)', description: 'Individualised activities and physiotherapy intervention applied in a heated pool to maximise outcomes and add an element of fun and variation.' },
  {
    name: 'Gait analysis and retraining',
    description: 'Assessment and analysis of one\'s followed by targeted, specific intervention aimed at maximising stability, safety and independence in regards to mobilising at home and within the community.',
  },
  { name: 'Spasticity management', description: 'Such as serial casting, assistance with selecting appropriate orthotics and/or bracing to address reduced range of motion, hypertonia and movement disorders.' },
]

const Services = () => {
  return (
    <div id="services" className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:pt-24 lg:pb-0 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div className='self-start'>
          <h2 className="text-base font-semibold text-purple uppercase tracking-wide">Our Services</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">Mobile physiotherapy within the Perth Metro Area</p>
          <p className="mt-4 text-lg text-gray-500">
            We provide support at home, work, school or elsewhere. 
          </p>
          <p className="mt-4 text-lg text-gray-500">Please do not hesitate to <a href="#contact" className="underline">get in touch</a> with us if you would like to know more about our services.</p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-light-green" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Services;