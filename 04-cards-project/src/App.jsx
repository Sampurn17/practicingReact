
import Card from './components/Cards'

const App = () => {
  const jobs = [
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCvLeTHwisItiq2ogbeAY_JJe5SBA38iLCA&s",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://i.pinimg.com/736x/68/aa/da/68aada71e3c8a4c244b62606039e9e2f.jpg",
    company: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHPyUgCEL64IDo5eElnEFljn7RYcMay4iMg&s",
    company: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: "$50/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s",
    company: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$55/hr",
    location: "Chennai, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZLFW9PjmQSTrcc-BfDZL_8ENLgsuz3Ov0g&s",
    company: "Netflix",
    datePosted: "4 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$65/hr",
    location: "Remote, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzVPe9i8aWio2GI-O-t5pHtKGKcxwsVEepKA&s",
    company: "Deloitte",
    datePosted: "1 week ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$40/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmxrqQsqi_ypmQiIQ7wNwnrXpkXqzoIZ-T5A&s",
    company: "PwC",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: "$38/hr",
    location: "Gurgaon, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLHEVJvr9Mdr3TbPwZELYGHSCYRXjduy5hsg&s",
    company: "KPMG",
    datePosted: "10 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$35/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_bVwP2vQqtt0C_-z-napj3sby1f9pbnA9A&s",
    company: "EY",
    datePosted: "3 days ago",
    post: "Cybersecurity Analyst",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$48/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fBOV3JAx59PZvBhf8ik4RucfpM1pNHFj3A&s",
    company: "Microsoft",
    datePosted: "2 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$52/hr",
    location: "Hyderabad, India"
  }
];
console.log(jobs)


  return (
    
    <div className='parent'>
      {jobs.map(function(elem){
        return <Card company={elem.company} post={elem.post} datePosted={elem.datePosted} tag1={elem.tag1}tag2={elem.tag2} pay={elem.payPerHour} location={elem.location} logo={elem.brandlogo}/>
      })}

    </div>
    
    
  )
}

export default App