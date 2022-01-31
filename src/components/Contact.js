import React from 'react'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

const Contact = () => {
  return (
    <div id="contact" className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              If you are looking to make an appointment or don't see a service that you require, please fill in the adjacent form and we will endeavour to help as best as we can.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">0466 556 973</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <a className="ml-3 hover:underline" href="mailto:admin@physigotherapy.com.au">admin@physigotherapy.com.au</a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form data-netlify="true" method="POST" name="contact" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name*
                </label>
                <input
                  required
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-light-green focus:border-light-green border-gray-300 rounded-md"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email*
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-light-green focus:border-light-green border-gray-300 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-light-green focus:border-light-green border-gray-300 rounded-md"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="service-location" className="sr-only">
                  Requested Service Location
                </label>
                <input
                  type="text"
                  name="service-location"
                  id="service-location"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-light-green focus:border-light-green border-gray-300 rounded-md"
                  placeholder="Requested service location"
                />
              </div>
              <div className="lg:col-span-2">
                <label htmlFor="funding" className="sr-only">
                  Funding*
                </label>
                <select
                  required
                  id="funding"
                  name="funding"
                  className="block w-full shadow-sm py-3 px-4 invalid:text-gray-500 placeholder-gray-500 focus:ring-light-green focus:border-light-green border border-gray-300 rounded-md"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="NDIS plan-managed">NDIS plan-managed</option>
                  <option value="NDIS self-managed">NDIS self-managed</option>
                  <option value="Private health insurance">Private health insurance</option>
                  <option value="Private fee paying">Private fee paying</option>
                  <option value="Other">Other </option>
                </select>
              </div>
              <div className="lg:col-span-2">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  rows={5}
                  id="message"
                  name="message"
                  className="block w-full shadow-sm py-3 px-4 invalid:text-gray-500 placeholder-gray-500 focus:ring-light-green focus:border-light-green border border-gray-300 rounded-md"
                  placeholder="If there's anything we should know, please enter it here."
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-fit flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-light-green hover:opacity-90 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 md:py-2 md:text-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact