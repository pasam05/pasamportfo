import Link from 'next/link';

export default function ProjectDetail() {
  return (
    <section className="px-4 py-10 md:px-6 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Projects
          </Link>
        </div>

        {/* Project Title */}
        <h1 className="font-bold leading-tight tracking-tight text-slate-300 text-5xl md:text-7xl mb-4">
          Medi-Drone
        </h1>

        {/* Technologies */}
        <div className="flex gap-3 text-lg font-bold text-yellow-400 mb-8">
          <span>Node.js</span>
          <span>Express.js</span>
          <span>SVG Animation</span>
          <span>PostgreSQL</span>
        </div>

        {/* Project Image */}
        <div className="w-full h-80 md:h-[500px] rounded-lg overflow-hidden mb-8">
          <img
            src="https://res.cloudinary.com/dudiuujxv/image/upload/v1744565850/Screenshot_2025-01-25_113805_viagzt.png"
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Description */}
        <div className="prose prose-xl prose-invert mb-12">
          <div>
  <h2>MediDrone: Revolutionizing Disaster Relief with Drone-Based Medicine Delivery</h2>

  <h3>Overview</h3>
  <p>
    In disaster-prone areas, timely access to medical supplies can mean the difference between life and death. However, traditional delivery methods are often hindered by flooded roads, damaged infrastructure, and logistical challenges. MediDrone is an innovative web-based platform designed to streamline the delivery of essential medicines and supplies using drones, ensuring rapid and reliable assistance during emergencies.
  </p>

  <hr />

  <h3>The Problem</h3>
  <ul>
    <li>
      <strong>Delayed Medical Assistance:</strong> Natural disasters like floods, earthquakes, and hurricanes often block traditional supply routes, delaying critical medical aid.
    </li>
    <li>
      <strong>Manual Coordination:</strong> Current systems rely heavily on manual coordination, which is time-consuming and prone to errors.
    </li>
    <li>
      <strong>Limited Accessibility:</strong> Remote or hard-to-reach areas face significant delays in receiving medical supplies.
    </li>
  </ul>

  <hr />

  <h3>The Solution</h3>
  <p>
    MediDrone leverages drone technology and a user-friendly web application to deliver medical supplies efficiently and effectively. The platform allows users to request medicines, food, or water via a simple interface, while drones autonomously navigate to the specified location.
  </p>
  <p><strong>Key Features:</strong></p>
  <ul>
    <li>
      <strong>Web Application:</strong> Built using Express.js and PostgreSQL, the platform enables users to submit requests for medical supplies.
    </li>
    <li>
      <strong>Real-Time Feedback System:</strong> A dialpad interface allows users to specify their needs (1: Extra medicines, 2: Water, 3: Food).
    </li>
    <li>
      <strong>Autonomous Drone Navigation:</strong> Drones equipped with GPS and payload delivery mechanisms ensure precise and timely deliveries.
    </li>
    <li>
      <strong>Scalable Architecture:</strong> Designed to handle large-scale disasters, supporting up to 500+ deliveries per hour.
    </li>
  </ul>

  <hr />

  <h3>Technical Implementation</h3>
  <p><strong>Frontend & Backend Development:</strong></p>
  <ul>
    <li>
      <strong>Frontend:</strong> A responsive web interface built with HTML, CSS, and JavaScript for seamless user interaction.
    </li>
    <li>
      <strong>Backend:</strong> Developed using Express.js to handle API requests and process user inputs.
    </li>
    <li>
      <strong>Database:</strong> Utilized PostgreSQL for storing user requests, delivery statuses, and inventory data.
    </li>
  </ul>

  <p><strong>Drone Integration:</strong></p>
  <ul>
    <li>
      Integrated GPS modules for real-time location tracking and route optimization.
    </li>
    <li>
      Payload compartments designed to securely carry medicines, food, and water.
    </li>
  </ul>

  <p><strong>Feedback Mechanism:</strong></p>
  <ul>
    <li>
      Implemented a dialpad system where users can provide feedback on their needs via a keypad interface.
    </li>
    <li>
      Automated responses to confirm receipt of requests and estimated delivery times.
    </li>
  </ul>

  <p><strong>Testing & Optimization:</strong></p>
  <ul>
    <li>
      Conducted simulated disaster scenarios to test the system's efficiency.
    </li>
    <li>
      Achieved a 70% reduction in delivery time compared to traditional methods.
    </li>
  </ul>

  <hr />

  <h3>Impact</h3>
  <ul>
    <li>
      <strong>Lifesaving Deliveries:</strong> Successfully delivered critical supplies to disaster-affected populations during simulations, reducing response times significantly.
    </li>
    <li>
      <strong>Scalability:</strong> The system can handle up to 500+ users per hour, making it suitable for large-scale emergencies.
    </li>
    <li>
      <strong>User Satisfaction:</strong> Received positive feedback from testers for its ease of use and reliability.
    </li>
  </ul>

  <hr />

  <h3>Future Enhancements</h3>
  <p>
    While MediDrone has proven effective in simulations, several enhancements are planned to further improve its capabilities:
  </p>
  <ul>
    <li>
      <strong>AI-Powered Route Optimization:</strong> Incorporate machine learning algorithms to optimize drone routes dynamically based on weather and terrain conditions.
    </li>
    <li>
      <strong>Integration with IoT Sensors:</strong> Equip drones with IoT sensors to monitor environmental factors like temperature and humidity, ensuring the integrity of sensitive medical supplies.
    </li>
    <li>
      <strong>Mobile App Development:</strong> Expand the platform to include a mobile app for greater accessibility in remote areas.
    </li>
    <li>
      <strong>Partnerships with NGOs:</strong> Collaborate with disaster relief organizations to deploy MediDrone in real-world scenarios.
    </li>
  </ul>

  <hr />

  <h3>Conclusion</h3>
  <p>
    MediDrone represents a transformative step in disaster relief efforts, combining cutting-edge drone technology with a robust web platform to save lives. By addressing the critical gap in emergency medical supply delivery, this project demonstrates the power of innovation in solving real-world challenges.
  </p>

  <hr />

  <h3>Tools & Technologies</h3>
  <ul>
    <li>
      <strong>Frontend:</strong> HTML, CSS, JavaScript
    </li>
    <li>
      <strong>Backend:</strong> Express.js, Node.js
    </li>
    <li>
      <strong>Database:</strong> PostgreSQL
    </li>
    <li>
      <strong>Drone Technology:</strong> Autonomous Navigation
    </li>
    <li>
      <strong>Visualization:</strong> SVG Animation
    </li>
  </ul>
</div>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/ManjunadhaReddy04/flood-management-system"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-yellow-400 bg-transparent px-6 py-3 font-bold text-yellow-400 transition-colors hover:bg-yellow-400 hover:text-navy"
          >
            View Source
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/posts/venna-manjunadha-reddy-06b1a1309_webdevelopment-humanitariantech-droneinnovation-activity-7314640934544064513-lJPP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6EDRMBZ33smdTvzvckencHoNk_Vj_SdqE"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-slate-100 bg-transparent px-6 py-3 font-bold text-slate-100 transition-colors hover:bg-slate-100 hover:text-navy"
          >
            Video Demo
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
