export interface JobListing {
id: number;
title: string;
company: string;
location: string;
salary: string;
description: string;
}

const joblistings: JobListing[] = [
    { 
      id: 1, 
      title: "Frontend Developer", 
      company: "Tech Corp", 
      location: "Remote", 
      salary: "₦400,000", 
      description: "We are looking for a skilled Frontend Developer to join our team. The ideal candidate should have experience with building responsive and scalable web applications using React, HTML, CSS, and JavaScript."
    },
    { 
      id: 2, 
      title: "Backend Engineer", 
      company: "Dev Solutions", 
      location: "Enugu", 
      salary: "₦300,000", 
      description: "We are seeking a highly skilled Backend Engineer with experience in developing scalable and secure web applications using Node.js, Express, and MongoDB."
    },
    { 
      id: 3, 
      title: "Full Stack Developer", 
      company: "Web Innovations", 
      location: "Lagos", 
      salary: "₦500,000", 
      description: "We are looking for a highly skilled Full Stack Developer with experience in developing web applications using React, Node.js, and MongoDB. The ideal candidate should have a strong understanding of front-end and back-end development."
    },
    { 
      id: 4, 
      title: "UX/UI Designer", 
      company: "Creative Minds", 
      location: "Abuja", 
      salary: "₦350,000", 
      description: "We are seeking a talented UX/UI Designer to join our team. The ideal candidate should have experience with designing user interfaces, user experience, and have a strong understanding of design principles."
    },
    { 
      id: 5, 
      title: "Data Scientist", 
      company: "Data Pros", 
      location: "Remote", 
      salary: "₦450,000", 
      description: "We are looking for a highly skilled Data Scientist with experience in data analysis, data visualization, and machine learning. The ideal candidate should have a strong understanding of statistics and computer programming."
    },
    { 
      id: 6, 
      title: "Mobile App Developer", 
      company: "AppSolutions", 
      location: "Port Harcourt", 
      salary: "₦400,000", 
      description: "We are seeking a skilled Mobile App Developer with experience in developing mobile applications for Android and iOS. The ideal candidate should have experience with Java, Swift, and React Native."
    },
    { 
      id: 7, 
      title: "DevOps Engineer", 
      company: "Cloud Services", 
      location: "Enugu", 
      salary: "₦400,000", 
      description: "We are looking for a skilled DevOps Engineer with experience in cloud computing, continuous integration, and continuous deployment. The ideal candidate should have experience with AWS, Azure, or Google Cloud."
    },
    { 
      id: 8, 
      title: "Product Manager", 
      company: "Tech Innovators", 
      location: "Remote", 
      salary: "₦600,000", 
      description: "We are seeking a highly skilled Product Manager to join our team. The ideal candidate should have experience with product development, product launch, and product marketing."
    },
    { 
      id: 9, 
      title: "Project Manager", 
      company: "Global Tech", 
      location: "Lagos", 
      salary: "₦550,000", 
      description: "We are looking for a skilled Project Manager with experience in managing projects, project planning, and project execution. The ideal candidate should have experience with Agile, Scrum, and Waterfall methodologies."
    },
    { 
      id: 10, 
      title: "QA Engineer", 
      company: "Quality Solutions", 
      location: "Remote", 
      salary: "₦350,000", 
      description: "We are seeking a skilled QA Engineer with experience in testing web applications, testing mobile applications, and automation testing. The ideal candidate should have experience with Selenium, Appium, and Postman."
    }
  ];

  export default joblistings