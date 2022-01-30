import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'

const includedFeatures = [
  'Self-managed NDIS funding',
  'Plan-managed NDIS funding',
  'Private health insurance ',
  'Private fee paying (self-funded).'
]

const Pricing = () => {
  return (
    <div id="pricing" className="bg-gray-50">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Pricing</h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
            Travel is based on the geographical location of sessions and will be discussed at the time of enquiry or booking. <br />Our fees are in line with the NDIS price guide and meet the requirements set by the NDIS. 
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <p className="text-base text-gray-500">
                  Unfortunately, we are not able to provide services to participants whose NDIS funding is NDIA-managed at this time as we are not registered to do so.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h3 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-purple">
                      Our services can be accessed through:
                    </h3>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon className="h-5 w-5 text-light-green" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-medium text-gray-800">Price Per Hour <br />of Service</p>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                  <span>$190</span>
                </div>
                <div className="mt-6">
                  <div className="rounded-md">
                    <a
                      href="#contact"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple hover:opacity-90 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                    >
                      Find out more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing