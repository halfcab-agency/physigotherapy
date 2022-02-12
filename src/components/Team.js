import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const people = [
  {
    name: 'Heather Murray',
    role: 'Owner and Senior Physiotherapist',
    imageUrl: '../images/heather.jpg',
    bio:
      '<p>Heather has experience working across the age span and with individuals with a variety of conditions and disabilities which has led her to develop a wide range of skills.</p><p>Her passion is supporting families and their children from infancy to adolescence to maximise their participation at home, school and within the wider community. Heather provides mobile services north of the river.</p>',
    link: '/about-heather'
  },
  {
    name: 'Monique Davies',
    role: 'Senior Physiotherapist',
    imageUrl: '../images/monique.jpg',
    bio:
      '<p>Monique is a highly skilled Senior Physiotherapist who has post-graduate qualifications in Neurological Rehabilitation.</p><p>Monique’s professional interests include neurological rehabilitation, management and treatment of vestibular issues and dizziness and supporting adults and adolescents with physical disabilities to maximise their independence and inclusion in their local community.</p><p>Monique provides mobile services south of the river, centred around Fremantle.</p>',
    link: '/about-monique'
  },
]

const Team = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div>
            <h2 className="text-base font-semibold text-purple uppercase tracking-wide">Who we are</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">Meet our team</p>
            <p className="mt-4 text-lg text-gray-500">
              Get to know the people who will help you set and fulfil goals tailored to your situation.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      {person.name === 'Heather Murray' ? <StaticImage objectPosition="top" className="shadow-lg rounded-lg" src={'../images/heather.jpg'} alt="Heather Murray, senior physiotherapist and owner" /> : <StaticImage objectPosition='top' className="shadow-lg rounded-lg" src={'../images/monique.jpg'} alt="Monique Davies, senior physiotherapist" />}
                    </div>
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-light-green">{person.role}</p>
                    </div>
                    <div className="text-lg text-gray-500 flex flex-col gap-4" dangerouslySetInnerHTML={{__html: person.bio}}></div>
                    <a className="text-gray-500 text-lg mt-4 underline inline-block" href={person.link}>More info</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team