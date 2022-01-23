import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Sports & Exercise Rehabilitation',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A id repudiandae iste.',
  },
  { name: 'Musculoskeletal Injuries ', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A id repudiandae iste.' },
  {
    name: 'Chronic Pain',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A id repudiandae iste.',
  },
  { name: 'Neurological Rehabilitation', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A id repudiandae iste.' },
  { name: 'Paediatric ', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A id repudiandae iste.' },
  { name: 'Pre and Post Natal Services', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A id repudiandae iste.' },
  { name: 'Disability Services', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A id repudiandae iste.' },
  { name: 'Hydrotherapy', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A id repudiandae iste.' },
]

const Services = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-purple uppercase tracking-wide">Our Services</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">Mobile & clinic-based</p>
          <p className="mt-4 text-lg text-gray-500">
            Whether you prefer your local clinic or the comfort of your own home, we'll be there for you.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
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