import Cards from "../components/cards"

const App = () => {

  const jobOpenings = [
    {
      id: 1,
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      position: "Frontend Developer",
      type: "Full Time",
      level: "Junior",
      salary: "$32/hr",
      location: "Bengaluru, India",
      posted: "2 days ago"
    },
    {
      id: 2,
      company: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      position: "React Developer",
      type: "Full Time",
      level: "Mid Level",
      salary: "$36/hr",
      location: "Hyderabad, India",
      posted: "5 days ago"
    },
    {
      id: 3,
      company: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      position: "Software Engineer",
      type: "Full Time",
      level: "Junior",
      salary: "$35/hr",
      location: "Chennai, India",
      posted: "1 day ago"
    },
    {
      id: 4,
      company: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      position: "UI Engineer",
      type: "Part Time",
      level: "Senior",
      salary: "$55/hr",
      location: "Bengaluru, India",
      posted: "3 days ago"
    },
    {
      id: 5,
      company: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      position: "Frontend Engineer",
      type: "Full Time",
      level: "Mid Level",
      salary: "$42/hr",
      location: "Gurugram, India",
      posted: "Today"
    },
    {
      id: 6,
      company: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      position: "JavaScript Developer",
      type: "Remote",
      level: "Senior",
      salary: "$60/hr",
      location: "Mumbai, India",
      posted: "4 days ago"
    },
    {
      id: 7,
      company: "Adobe",
      logo: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
      position: "React UI Developer",
      type: "Full Time",
      level: "Junior",
      salary: "$30/hr",
      location: "Noida, India",
      posted: "6 days ago"
    },
    {
      id: 8,
      company: "Intel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%29.svg",
      position: "Software Developer",
      type: "Full Time",
      level: "Mid Level",
      salary: "$38/hr",
      location: "Bengaluru, India",
      posted: "Today"
    },
    {
      id: 9,
      company: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      position: "Cloud Developer",
      type: "Part Time",
      level: "Junior",
      salary: "$28/hr",
      location: "Pune, India",
      posted: "7 days ago"
    },
    {
      id: 10,
      company: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      position: "Backend Developer",
      type: "Full Time",
      level: "Senior",
      salary: "$48/hr",
      location: "Hyderabad, India",
      posted: "2 days ago"
    }
  ];

  console.log(jobOpenings);
  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        console.log(idx)
        
        return <div key={idx}> 
          <Cards company={elem.company} position={elem.position} level={elem.level} type={elem.type} location={elem.location} salary={elem.salary} logo={elem.logo} posted={elem.posted}/>
        </div>
      })}
    </div>
  )
}

export default App