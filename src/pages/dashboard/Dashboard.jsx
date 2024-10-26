import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Pagination from "./Pagination";
import LocalSearchBar from "./LocalSearchBar";
import VRCard from "./VRCard";
import { getAllVROptions } from "./api/getAllVROptions"; 
import "./Dashboard.css"; 
import Sidebar from "../../components/sidebar/Sidebar";
import Graph from "../../components/Graph/graph";
import Stepstrack from "../../components/steptrack/Steptrack";
import DailyActivity from "../../components/dailyactivity/Dailyactivity";

const VRDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [vrOptions, setVROptions] = useState([]);
  const [isNext, setIsNext] = useState(false);

  useEffect(() => {
    const fetchVROptions = async () => {
      const result = await getAllVROptions();
      
      setVROptions(result.vrOptions || []); 
      setIsNext(result.vrOptions.length > 0); 
    };
    fetchVROptions();
  }, [searchQuery, filter, page]);

  const handleSearch = (query) => setSearchQuery(query);
  const handleFilterChange = (newFilter) => setFilter(newFilter);
  const handlePageChange = (newPage) => setPage(newPage);


  return (
    <>
      <div className="dashboard-header">
        <Sidebar />
        <div className="right-row">
          <div className="dashboard-container">
            <h1 className="dashboard-title">VR Experiences</h1>

            <div className="dashboard-controls">
              <LocalSearchBar onSearch={handleSearch} placeholder="Search for VR options" />
              {/* <Filter selectedFilter={filter} onFilterChange={handleFilterChange} /> */}
            </div>  

            <div className="vr-options">
              {vrOptions.length > 0 ? (
                vrOptions.map((option) => <VRCard key={option.id} option={option} />)
              ) : (
                <div className="no-options">
                  <p>No VR options available</p>
                  <a href="/create-vr-option" className="create-link">Create your first VR experience!</a>
                </div>
              )}
            </div>

            <Pagination currentPage={page} isNext={isNext} onPageChange={handlePageChange} />
          </div>
          <div className="dashboard-graph">
            <div className="left">
              <DailyActivity />
            </div>
            <div className="right">
              <div className="upper"><Graph /></div>
              <div className="lower"><Stepstrack /></div>
            </div>
         
          </div>
        </div>
        
      </div>

      
    </>
  );
};

export default VRDashboard;
