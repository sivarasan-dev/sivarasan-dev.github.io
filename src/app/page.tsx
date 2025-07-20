"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">Ponnuthurai Sivarasan</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
              <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Senior Full Stack Developer</h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">React.js | Node.js | GraphQL | AWS | TypeScript</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  View My Work
                </button>
                <a 
                  href="/Sivarasan-CV.pdf" 
                  download="Sivarasan-Ponnuthurai-CV.pdf"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  Download CV
                </a>
              </div>
            </div>
          <div className="hidden lg:block">
              <div className="absolute top-0 w-1/2 h-full">
                <div className="relative w-full h-full">
                  <Image
                    src="/portfolio-photo.png"
                    alt="Ponnuthurai Sivarasan - Senior Full Stack Developer"
                    fill
                    className="object-contain"
                    priority
                    sizes="50vw"
                  />
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* About Me Section */}
        <section id="about" className="mb-12 mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 mt-2">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Experienced Full Stack Developer with 8+ years in frontend and backend development. 
                Proven expertise in JavaScript, TypeScript, GraphQL, Node.js, and full-stack frameworks 
                like React.js, Next.js, and React Native. Skilled in designing scalable applications 
                and working with both MongoDB and PostgreSQL databases. Adept at managing cloud deployments 
                on AWS, leading engineering teams, and delivering high-quality, user-centric applications.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-lg border border-blue-100 dark:border-gray-600 mt-2">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-800 dark:text-white font-medium">Singapore</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-gray-800 dark:text-white font-medium">+65 87137467</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600 dark:text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a href="mailto:rasanthurai1992@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">rasanthurai1992@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16 mt-3">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Frontend</h3>
              </div>
              <div className="space-y-3">
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">React</span>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Redux</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Backend</h3>
              </div>
              <div className="space-y-3">
                <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Express</span>
                <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">GraphQL</span>
                <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">REST</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">CI/CD Pipeline Automation</h3>
              </div>
              <div className="space-y-3">
                <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">AWS/ECS</span>
                <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Lambda</span>
                <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Docker</span>
                <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">CI/CD</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Projects</h2>
          <div className="space-y-8">
            {/* Koach */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Koach (E-learning Platform)</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Feb 2020 - Sep 2021</p>
                  <a href="https://ppis.knod.sg/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://ppis.knod.sg/</a>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Redux</span>
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">AWS</span>
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>
              </div>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>• Koach is a streaming platform purpose-built for remote learning, delivering online training and e-assessments with user experience as its core concern.</p>
                <p>• Multi-user system with Super Admin, Admin, Editor, Moderator, and Student roles. Super Admin manages groups, users, content, and access restrictions.</p>
                <p>• AWS Cognito and IAM for authentication, S3 for content storage, ECS for backend deployment, CloudFront for content distribution.</p>
                <p>• Technologies: React, React Hooks, Redux, AWS Amplify, S3, WebSocket, Java, MongoDB, CloudFront</p>
              </div>
            </div>

            {/* BookCabin */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">BookCabin (Flights Booking Platform)</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Jun 2020 - Jan 2021</p>
                  <a href="https://www.bookcabin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.bookcabin.com/</a>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                  <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Redux Saga</span>
                  <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Micro Frontend</span>
                  <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">C#</span>
                </div>
              </div>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>• Online flight and hotel booking platform with micro frontend architecture consisting of three applications: Flight Search, Hotel Search, and Checkout.</p>
                <p>• Flight Search: Search flights by departure/arrival, filter by price/stops/airline, view offers and deals.</p>
                <p>• Hotel Search: Search hotels, view rooms, filter by ratings/price/cancellation policy, book accommodations.</p>
                <p>• Checkout: Payment processing for flights and hotels using Midtrans payment gateway.</p>
                <p>• Technologies: React, Redux, React Hooks, Redux Saga, React Context API, C#, Midtrans</p>
              </div>
            </div>

            {/* KoachHub */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">KoachHub (iOS App)</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Mar 2020 - Jan 2021</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                  <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">React Native</span>
                  <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Redux</span>
                  <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">AWS Lambda</span>
                  <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Docker</span>
                </div>
              </div>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>• Mobile and tablet responsive iOS app for sports coaching and team management with customized themes for different clubs.</p>
                <p>• Three user types: Player, Coach, Head Coach. Head Coach manages users, teams, events, schedules training/matches, assigns players, tracks statistics.</p>
                <p>• Players can update profiles, view calendar events, accept/reject match invitations, view locations on Google Maps, receive push notifications.</p>
                <p>• Technologies: React Native, React Hooks, Redux, Redux Thunk, Java, AWS Lambda, S3, Amplify, Docker, ECS, CloudFront</p>
              </div>
            </div>

            {/* Kora */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Kora (Chef Booking Website)</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Jul 2019 - Feb 2020</p>
                  <a href="https://mykoralife.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://mykoralife.com/</a>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                  <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                  <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">Braintree</span>
                </div>
              </div>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>• Chef booking platform connecting hosts with chefs based on cuisine preferences, dietary restrictions, and location.</p>
                <p>• Hosts create profiles with cuisine preferences, diet restrictions, favorite dishes, allergies, and location. Book chefs, cancel bookings, rate chefs.</p>
                <p>• Chefs provide available slots, special dishes, ingredients information, and location. Can accept/reject booking requests.</p>
                <p>• Microservice architecture with Braintree payment integration, S3 and CloudFront for file storage, EC2 for hosting, Docker for deployment.</p>
                <p>• Technologies: React, Redux, Redux Thunk, React Hooks, Node.js, Express, PostgreSQL, Braintree, AWS S3, CloudFront</p>
              </div>
            </div>

            {/* SFRhub */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">SFRhub Advisors</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Nov 2018 - Jul 2019</p>
                  <a href="https://www.sfrhubblog.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.sfrhubblog.com/</a>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                  <span className="inline-block bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="inline-block bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">Redux</span>
                  <span className="inline-block bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="inline-block bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">PHP</span>
                </div>
              </div>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>• Online marketplace in USA for Single-Family-Rental (SFR) and Build-For-Rent (BFR) investment portfolio sellers and buyers.</p>
                <p>• Enables sellers to manage property listings and buyers to research, identify, underwrite and transact on investment portfolios.</p>
                <p>• Joined project mid-development, contributed to frontend and backend improvements, bug fixes, and client requirement implementations.</p>
                <p>• Technologies: React, Redux, Node.js, Express, PHP</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16 mt-3">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Experience</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Senior Lead Engineer</h3>
                <span className="text-blue-600 font-medium">12/2021 - Present</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Singapore Press Holdings | Singapore</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">React.js</span>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">CI/CD Pipeline</span>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">GraphQL</span>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">AWS</span>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Microservices</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Senior Software Engineer</h3>
                <span className="text-blue-600 font-medium">02/2020 - 11/2021</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Koach | Colombo, Sri Lanka</p>
              <div className="flex flex-wrap gap-2">
              <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">React.js</span>
              <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Node.js</span>
              <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Next.js</span>
              <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">React Native</span>
              <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">GraphQL</span>
              <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">AWS</span>
              <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Microservices</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Software Engineer</h3>
                <span className="text-blue-600 font-medium">10/2018 - 02/2020</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Auxenta | Colombo, Sri Lanka</p>
              <div className="flex flex-wrap gap-2">
              <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">React.js</span>
              <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Node.js</span>
              <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">AWS</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Software Engineer</h3>
                <span className="text-blue-600 font-medium">03/2017 - 10/2018</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Avonet Technologies | Colombo, Sri Lanka</p>
              <div className="flex flex-wrap gap-2">
              <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">React.js</span>
              <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">Node.js</span>
              <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">MongoDB</span>
                <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">React Native</span>
                <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">AWS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements & Certifications */}
        <section id="achievements" className="mb-16 mt-3">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
            <svg className="w-8 h-8 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14l9-5-9-5-9 5 9 5z"/>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
            </svg>
            Achievements & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Key Achievements</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Optimized AWS architecture, reducing infrastructure costs by 20%</li>
                <li>• Improved API performance, cutting response times by 30%</li>
                <li>• Mentored junior developers, leading to a 25% increase in team efficiency</li>
                <li>• Won SPH Tech Award for Most Collaborative Group</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Certifications</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Oracle Certified Associate, Java SE 7 Programmer</li>
                <li>• AWS Certified Developer Associate</li>
                <li>• BSc. (Hons) in Information Technology</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16 mt-3">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Contact</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Get In Touch</h3>
                                 <p className="text-gray-600 dark:text-gray-300 mb-6">
                   I&apos;m always interested in new opportunities and exciting projects. 
                   Feel free to reach out if you&apos;d like to discuss potential collaborations.
                 </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">#09-174, Blk Admiralty Drive, Singapore 750357</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">+65 87137467</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href="mailto:rasanthurai1992@gmail.com" className="text-blue-600 hover:underline">rasanthurai1992@gmail.com</a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Social Links</h3>
                <div className="space-y-3">
                  <a href="https://linkedin.com/in/sivarasan-ponnuthurai" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com/shivarasan" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">© 2025 Ponnuthurai Sivarasan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
