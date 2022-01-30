import React from "react"

const people = [
  {
    name: 'Heather Murray',
    role: 'Owner and Senior Physiotherapist',
    imageUrl:
      'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio:
      '<p>As director of Physi-Go-Therapy, Heather aims to build a dynamic team of skilled, enthusiastic and passionate therapists to support people to work towards their goals and get the most out of day-to-day life.</p><p>Heather has worked in the disability sector since graduating from physiotherapy in 2014. Prior to that she worked as a support worker for children with various disabilities which provided valuable insight into the challenges families encounter when navigating the world of therapies and medical intervention.</p><p>Heather has experience working across the age span and with individuals with a variety of conditions and disabilities which has led her to develop a wide range of skills. Her passion is supporting families and their children from infancy to adolescence to maximise their participation at home, school and within the wider community. Heather provides mobile services north of the river.</p>'
  },
  {
    name: 'Monique Davies',
    role: 'Senior Physiotherapist',
    imageUrl:
      'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio:
      '<p>Monique is a skilled physiotherapist with experience in neurological rehabilitation across a wide variety of settings including hospitals (both in Australia and the UK), private clinics and community-based roles.</p><p>Monique is passionate about maintaining her understanding of current research and evidence-based practices so that she can continue to provide high-quality and effective therapy services to adults and adolescents. She participates in numerous courses each year to maintain her wide base of knowledge within the sector and in 2021 she completed a Graduate Certificate in Neurological Rehabilitation.</p><p>Monique’s professional interests include neurological rehabilitation, management and treatment of vestibular issues and dizziness and supporting adults and adolescents with physical disabilities to maximise their independence and inclusion in their local community. Monique provides mobile services south of the river, centred around Fremantle.</p>'
  },
]

const Team = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div class="mb-6">
          <h2 className="text-base font-semibold text-purple uppercase tracking-wide">Who we are</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">Meet our team</p>
        </div>
        <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                    </div>
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-light-green">{person.role}</p>
                    </div>
                    <div className="text-lg">
                      <div className="text-gray-500 flex flex-col gap-6" dangerouslySetInnerHTML={{ __html: person.bio }}></div>
                    </div>
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