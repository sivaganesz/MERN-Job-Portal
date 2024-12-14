import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../Sidebar/Sidebar';
import NewsLetter from '../components/NewsLetter';

const Home = () => {

  const [selectedCatagory, setSelectedCatagory] = useState(null);
  const [jobs, setJobs] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true)
    fetch("jobs.json").then(res => res.json()).then(data => {
      setJobs(data);
      setIsLoading(false);
    });
  }, [])

  //handlw input change
  const [query, setquery] = useState("");
  const handleInputChange = (event) => {
    setquery(event.target.value);
    // console.log(event.target.value);
  }

  //handle input filter change
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)

  //------ratio button------
  const handleChange = (event) => {
    setSelectedCatagory(event.target.value);
  }

  //------button based filtering------
  const handleClick = (event) => {
    setSelectedCatagory(event.target.value);
  }

  //------calculate the index range---------
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };


  //------function for next page---------
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  //------function for prev page---------
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  //main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    //filtering input
    if (query) {
      filteredJobs = filteredItems;
    }

    //category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({ jobLocation, employmentType,experienceLevel,salaryType, maxPrice,postingDate}) => 
        
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selected) ||
        postingDate >= selected ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase() ||
        experienceLevel.toLowerCase() === selected.toLowerCase()
    ) 
      // console.log(filteredJobs);
    }

    //slice the data based on current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex)
    return filteredJobs.map((data, i) => <Card key={i} data={data} />)
  }

  const result = filteredData(jobs, selectedCatagory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className='bg-gray-100 gap-8 md:grid grid-cols-4 lg:px-24 px-4 py-12'>

        {/* left side */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* jobs cards */}
        <div className="bg-white p-8 rounded-sm col-span-2">
          {
            isLoading ? (<p>Loading...</p>) : result.length > 0 ? (<Jobs result={result} />) : <>
              <p className='font-bold text-lg mb-2'>{result.length} Jobs</p>
              <h3>no data found!</h3></>
          }
          {/* {
            isLoading ? (<p>Loading...</p>) : result.length > 0 ? (<Jobs result={result} />) : (<h3>No jobs found!</h3>)
          } */}

          {/* pagination here */}
          {
            result.length > 0 ? (
              <div className="flex justify-center mt-4 space-x-8">
                <button onClick={prevPage} disabled={currentPage === 1} className='hover:underline'>Previous</button>
                <span>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)} className='hover:underline'>next</button>
              </div>
            ) : ""
          }
        </div>

        {/* right side */}
        <div className="bg-white  p-4 rounded">
          <NewsLetter/>
        </div>
      </div>
    </div>
  )
}

export default Home 