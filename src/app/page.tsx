import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">SIVARASAN PONNUTHURAI</h1>
            <p className="text-xl md:text-2xl opacity-90">Senior Full Stack Developer</p>
            <p className="text-lg opacity-80 mt-2">React.js | Next.js | Node.js | GraphQL | TypeScript</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Contact Information */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <a href="https://linkedin.com/in/sivarasan-ponnuthurai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/sivarasan-ponnuthurai</a>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              <a href="https://github.com/shivarasan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/shivarasan</a>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Professional Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Experienced Full Stack Developer with 8+ years in frontend and backend development. 
            Proven expertise in JavaScript, TypeScript, GraphQL, Node.js, and full-stack frameworks 
            like React.js, Next.js, and React Native. Skilled in designing scalable applications 
            and working with both MongoDB and PostgreSQL databases. Adept at managing cloud deployments 
            on AWS, leading engineering teams, and delivering high-quality, user-centric applications.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Languages & Frameworks</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• JavaScript, TypeScript</li>
                <li>• Node.js, Express.js</li>
                <li>• GraphQL, RESTful APIs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Frontend</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• React.js, Next.js</li>
                <li>• React Native</li>
                <li>• Redux, HTML, CSS</li>
                <li>• jQuery</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Databases</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• MongoDB</li>
                <li>• PostgreSQL</li>
                <li>• MySQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Cloud & DevOps</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• AWS (EC2, ECS, RDS, S3)</li>
                <li>• IAM, Cognito, Amplify</li>
                <li>• Lambda, Docker</li>
                <li>• CI/CD Pipelines</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Version Control</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• GitHub</li>
                <li>• Bitbucket</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Other Tools</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Solr, Redux Saga</li>
                <li>• Socket.io, JSON</li>
                <li>• Axios</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Work Experience</h2>
          
          <div className="space-y-8">
            {/* Senior Lead Engineer */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Senior Lead Engineer</h3>
                <span className="text-blue-600 font-medium">12/2021 - Present</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Singapore Press Holdings | Singapore</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Developed and deployed RESTful and GraphQL APIs using Node.js and Express.js</li>
                <li>• Designed scalable frontends with React.js and integrated complex UIs using TypeScript and Redux</li>
                <li>• Integrated PostgreSQL and MongoDB for storing structured and semi-structured data</li>
                <li>• Enhanced user experience and performance for multiple publication platforms</li>
                <li>• Led cloud deployments using AWS ECS and Lambda</li>
              </ul>
            </div>

            {/* Senior Software Engineer */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Senior Software Engineer</h3>
                <span className="text-blue-600 font-medium">02/2020 - 11/2021</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Koach | Colombo, Sri Lanka</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Built dynamic, mobile-responsive UIs using React.js and Next.js</li>
                <li>• Developed backend APIs with Node.js and integrated GraphQL for flexible querying</li>
                <li>• Setup CI/CD pipelines for seamless deployment processes</li>
                <li>• Managed MongoDB databases for application storage</li>
              </ul>
            </div>

            {/* Software Engineer */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Software Engineer</h3>
                <span className="text-blue-600 font-medium">10/2018 - 02/2020</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Auxenta | Colombo, Sri Lanka</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Published mobile applications using React Native for iOS and Android platforms</li>
                <li>• Integrated API endpoints and real-time data flows using Node.js</li>
                <li>• Delivered solutions in Linux/CentOS environments</li>
              </ul>
            </div>

            {/* Software Engineer - Avonet */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Software Engineer</h3>
                <span className="text-blue-600 font-medium">03/2017 - 10/2018</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Avonet Technologies | Colombo, Sri Lanka</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Created REST APIs using Node.js</li>
                <li>• Integrated Google APIs and handled client requirements for scalable solutions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Key Achievements</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>• Optimized AWS architecture, reducing infrastructure costs by 20%</li>
            <li>• Improved API performance, cutting response times by 30%</li>
            <li>• Mentored junior developers, leading to a 25% increase in overall team efficiency</li>
            <li>• Developed automated scripts, reducing manual intervention for data migration</li>
            <li>• Won SPH Tech Award for Most Collaborative Group, recognized for enhancing content delivery systems</li>
          </ul>
        </section>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Education</h2>
            <div>
              <h3 className="text-lg font-semibold text-blue-600">BSc. (Hons) in Information Technology</h3>
              <p className="text-gray-600 dark:text-gray-400">Sri Lankan Institute of Information Technology</p>
              <p className="text-gray-500 dark:text-gray-500">12/2012 - 11/2016</p>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Certifications</h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Oracle Certified Associate, Java SE 7 Programmer</li>
              <li>• AWS Certified Developer Associate</li>
            </ul>
          </section>
        </div>

        {/* Personal Information & References */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Personal Information</h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Date of Birth: 23rd April 1992</li>
              <li>• Gender: Male</li>
              <li>• Nationality: Sri Lankan</li>
              <li>• Marital Status: Married</li>
            </ul>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Languages</h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• English - Advanced</li>
              <li>• Tamil - Native</li>
            </ul>
          </section>
        </div>

        {/* References */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">References</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-600">Mr. Manoj Sugatadasa</h3>
              <p className="text-gray-600 dark:text-gray-400">Solution Architect, Consolidated Travel Group, Australia</p>
              <p className="text-gray-700 dark:text-gray-300">mlssugatadasa@gmail.com | +61 431532557</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600">Mr. Gurutharshan Nadarajah</h3>
              <p className="text-gray-600 dark:text-gray-400">Software Consultant, BCS Information Systems, Singapore</p>
              <p className="text-gray-700 dark:text-gray-300">gurutharshan@gmail.com | +65 85984925</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">© 2024 Sivarasan Ponnuthurai. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://linkedin.com/in/sivarasan-ponnuthurai" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              LinkedIn
            </a>
            <a href="https://github.com/shivarasan" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              GitHub
            </a>
            <a href="mailto:rasanthurai1992@gmail.com" className="text-blue-400 hover:text-blue-300">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
