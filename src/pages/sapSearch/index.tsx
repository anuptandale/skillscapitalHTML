import React, { useState ,useEffect, ChangeEvent} from 'react'
import css1 from "../../styles/sapSearchStyle.module.css";
import css2 from "../../styles/search.module.css";
import CustomAutocompleteFromAPI from '@/components/molecules/AutoComplete';
import { Button, Input, MenuItem, Select, TextField } from '@mui/material';

import { Box, Paper } from "@mui/material";
import Image from "next/image";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CloseIcon from '@mui/icons-material/Close';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CircularProgress from '@mui/material/CircularProgress';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from 'axios';
import { DEV_PUBLIC_SAPURL } from '../../../configs/auth';
import Navbar from '@/components/molecules/navbar';

interface Profile {
    keyword: string;
    primary_module: string;
    secondary_module: string;
    role_type:string;
    technical_skills:string;
    country:string;
    experience:string;
}

interface Response {
    Name: string;
    Email: string;
    Skills: string;
    id: string;
    Experience: string;
    PreviousRole: string;
    CurrentRole: string;
    CandidateProfile: string;
    Salary: string;
    PrefferedLocation: string;
    CurrentLocation: string;
    MayAlsoKnow: string;
    Education:string;
  }
const SapSearch = () => {
    const [profiles, setProfile] = useState<Profile>({
        keyword:'',
        primary_module: '',
        secondary_module: '',
        role_type:'',
        technical_skills:'',
        country:'',
        experience:''
    });
    const [selectedId, setSelectedId] = useState<string[]>([]);
    const [candidates,setCandidates]=useState<Response[]>([]);
    const [loading,setLoading]=useState(false);
    const [zero,setZero]=useState(false);
    const [pageArr,setPageArr]=useState<Response[]>([]);
    const [pageNoDisplay,setPageNoDisplay]=useState(1);
    const [pageNoAxios,setPageNoAxios]=useState(1);
    const [disableForward,setDisableForward]=useState(false);
    const [disableBackward,setDisableBackward]=useState(true);
    const [arrLoad,setArrLoad]=useState(false);
    const [pageMap,setPageMap]=useState<{[key: number]:Response[]}>({});
    const [sortOption, setSortOption] = useState("");
    const handleChangeKeyword=(ele:any)=>{
        console.log(ele.target.value);
        setProfile({...profiles,keyword:ele.target.value});
    }
    const handleChangePrimary=(ele:any)=>{
        console.log(ele.target.value);
        setProfile({...profiles,primary_module:ele.target.value});
    }
    const handleChangeSecondary=(ele:any)=>{
        console.log(ele.target.value);
        setProfile({...profiles,secondary_module:ele.target.value});
    }
    const handleChangeRoleType=(ele:any)=>{
        console.log(ele.target.value);
        setProfile({...profiles,role_type:ele.target.value});
    }
    const handleChangeTechnical=(ele:any)=>{
        console.log(ele.target.value);
        setProfile({...profiles,technical_skills:ele.target.value});
    }
    const handleOption1=(ele:any)=>{
        console.log(ele);
        setProfile({...profiles,role_type:ele});
    }
    const handleCountry=(ele:any)=>{
        setProfile({...profiles,country:ele.target.value});
    }
    const handleExperience=(ele:any)=>{
        setProfile({...profiles,experience:ele.target.value});
    }
    const handleSubmit=async()=>{
        try{
            console.log(profiles);
            setArrLoad(true);
            let resp=await axios.post(`${DEV_PUBLIC_SAPURL}sap/candidates`,{profiles,pageNoAxios});
            let {finalCandidates}=resp.data.data;
            console.log('LENGTH OF DATA IS ',finalCandidates.length);
            if(finalCandidates.length<10){
                console.log('Length is less than 10');
                if(finalCandidates.length===0){
                    setZero(true);
                }else{
                    setCandidates([...finalCandidates]);
                }
                setDisableForward(true);
                setLoading(!loading);
                setArrLoad(false);
            }else{
                let ans: { [key: number]: Response[] } = {};
                let len=Math.ceil(finalCandidates.length/10);
                for(let i=0;i<len;i++){
                    let arr=finalCandidates.slice(10*i,10*i+10);
                    ans[i+1]=arr;
                }
                console.log('ANS:===>',ans);
                setPageMap({...ans});
                setLoading(!loading);
                setArrLoad(false);
            }
        }catch(err){
            console.log(err);
        }
    }
    const handleNextPage=async()=>{
        try{
            const len_of_next_page=pageMap[pageNoDisplay+1]?pageMap[pageNoDisplay+1].length:0;
            let obj=pageMap;
            if(len_of_next_page<10){
                const resp=await axios.post(`${DEV_PUBLIC_SAPURL}sap/candidates`,{profiles,pageNoAxios});
                const {finalCandidates}=resp.data.data;
            }else{
                setPageNoDisplay(pageNoDisplay+1);
                setDisableBackward(false);
            }
        }   
        catch(err){
            console.log('errrrr');
        } 
    }
    const handlePrevPage=async()=>{
        if(pageNoDisplay===2){
            setDisableBackward(true);    
        }
        setPageNoDisplay(pageNoDisplay-1);
    }
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        setSortOption(event.target.value);
        if (event.target.value === "salary") {
          const sortedProfiles = [...candidates].sort(
            (a, b) => parseFloat(a.Salary) - parseFloat(b.Salary)
          );
          setCandidates(sortedProfiles);
        } else if (event.target.value === "Exp") {
          const sortedProfiles = [...candidates].sort(
            (a, b) => parseFloat(a.Experience) - parseFloat(b.Experience)
          );
          setCandidates(sortedProfiles);
        } else if (event.target.value === "name") {
          const sortedProfiles = [...candidates].sort((a, b) =>
            a.Name.localeCompare(b.Name)
          );
          setCandidates(sortedProfiles);
        }
      };
      const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
    
        const valueData = e.target.value;
        setSelectedId(
          checked
            ? [...selectedId, e.target.value]
            : selectedId.filter((item) => item !== valueData)
        );
      };
      useEffect(()=>{
        console.log("sort", selectedId);
      },[selectedId])
    return (
        <>
            {
                arrLoad===false?
                <div>
                    {
                        !loading ? 
                        <section id={css1.mostOuter}>
                        <div id={css1.outerform}>
                            <div >
                                <div id={css1.fieldname}>Key word</div>
                                <TextField size="small" id={css1.longSearch} onChange={(ele:any)=>handleChangeKeyword(ele)}/>
                            </div>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div>
                                    <div id={css1.fieldname}>Primary Module</div>
                                    <TextField size="small" id={css1.smallSearch} onChange={(ele:any)=>handleChangePrimary(ele)} />
                                </div>
                                <div>
                                    <div id={css1.fieldname}>Secondary Module</div>
                                    <TextField size="small" id={css1.smallSearch} onChange={(ele:any)=>handleChangeSecondary(ele)} />
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "20px" }}>
                                {/* <div>
                                    <div id={css1.fieldname}>Role Type</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div> */}
                                <div>
                                    <div id={css1.fieldname}>Role Type</div>
                                    <select id={css1.selectStyle} onChange={(e) => handleOption1(e.target.value)}>
                                        <option>Select an option</option>
                                        <option value="Technical">Technical</option>
                                        <option value="Functional">Functional</option>
                                        <option value="Techno-Functional">Techno-Functional</option>
                                    </select>
                                </div>
                                <div>
                                    <div id={css1.fieldname}>Technical Skills</div>
                                    <TextField size="small" id={css1.smallSearch} onChange={(ele:any)=>handleChangeTechnical(ele)}/>
                                </div>
                            </div>
                        </div>
                        <div id={css1.outerform}>
        
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div>
                                    <div id={css1.fieldname}>Functional Experties</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
                                <div>
                                    <div id={css1.fieldname}>Integration Skills</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div>
                                    <div id={css1.fieldname}>SAP S/4HANA Experties</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
                                <div>
                                    <div id={css1.fieldname}>Certifications</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div>
                                    <div id={css1.fieldname}>Version-Specific Experties</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
        
                            </div>
        
        
                        </div>
                        <div id={css1.outerform}>
                            <div style={{ display: "flex", gap: "20px" }}>
                                {/* <div>
                                    <div id={css1.fieldname}>Project Type</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div> */}
                                <div>
                                    <div id={css1.fieldname}>Project Type</div>
                                    <select id={css1.selectStyle}>
                                    <option>Select an option</option>
                                        <option value="Implementation">Implementation</option>
                                        <option value="Enhancement">Enhancement</option>
                                        <option value="Migration">Migration</option>
                                        <option value="Upgrade">Upgrade</option>
                                        <option value="Support">Support</option>
                                        <option value="Testing">Testing</option>
                                        <option value="Hypercare">Hypercare</option>
                                        <option value="AMS">AMS</option>
                                    </select>
                                </div>
                                <div>
                                    <div id={css1.fieldname}>Position Type</div>
                                    <select id={css1.selectStyle}>
                                    <option>Select an option</option>
                                        <option value="Consultant">Consultant</option>
                                        <option value="Developer">Developer</option>
                                        <option value="Architect">Architect</option>
                                        <option value="Manager">Manager</option>
                                        <option value="Support">Support</option>
                                        <option value="Tester">Tester</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div>
                                    <div id={css1.fieldname}>Industry-Specific Solution</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
                                <div>
                                    <div id={css1.fieldname}>Experience level</div>
                                    <TextField size="small" id={css1.smallSearch} onChange={(e:any)=>handleExperience(e)} />
                                </div>
                            </div>
                        </div>
                        <div id={css1.outerform}>
                        <div style={{ display: "flex", gap: "20px" }}>
                                <div>
                                    <div id={css1.fieldname}>Country</div>
                                    <TextField size="small" id={css1.smallSearch} onChange={(e:any)=>handleCountry(e)}/>
                                </div>
                                <div>
                                    <div id={css1.fieldname}>State</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div>
                                    <div id={css1.fieldname}>City</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
                                <div>
                                    <div id={css1.fieldname}>Availability</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <div>
                                    <div id={css1.fieldname}>Employee Type</div>
                                    <select id={css1.selectStyle}>
                                    <option>Select an option</option>
                                        <option value="fulltime">Full Time</option>
                                        <option value="parttime">Part Time</option>
                                        <option value="contract">Contract</option>
                                    </select>
                                </div>
                                <div>
                                    <div id={css1.fieldname}>Sap project Type</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button onClick={handleSubmit}>CLICK ME</Button>
                        </div>
                        </section>:
                        <section>    
                            <Navbar/>
                            <div>
                                {
                                zero?<div>NO CANDIDATES FOUND</div>:
                                <div className="wrapper searchResult ">
            {/* <!-- welcome Section  --> */}
            <div className="searchResultSection ">
              <section className="container mt-4 ">
                <div className="row">
                  <div className="col-md-12">
                    <h2>Search Result</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 ">
                    <div className="filterBox">
                      <div className="filterBoxLeft">
                        <select id="sortby" name="" onChange={handleChange}>
                          <option value="volvo">Sort By</option>
                          <option value="salary">Salary</option>
                          <option value="Experience_in_Years">Experience</option>
                          <option value="name">Name</option>
                        </select>
                        <select
                          id="filterby"
                          name=""
                        //   value={filterOption}
                        //   onChange={handleChangefilter}
                        >
                          <option value="volvo">Filter By</option>
                          <option value="searchLocation">Location</option>
                          <option value="Current_Timezone">TimeZone</option>
                          <option value="College">College</option>
                          <option value="Company">Company</option>
                          <option value="None">None</option>
                        </select>
                        {/* {filterOption && filterOption === "searchLocation" && (
                          <select
                            id="filterby"
                            name=""
                            value={filterOption}
                            onChange={handleChangefilter}
                          >
                            <option value="volvo">Filter By</option>
                            <option value="searchLocation">Location</option>
                            <option value="Current_Timezone">TimeZone</option>
                            <option value="College">College</option>
                            <option value="Company">Company</option>
                            <option value="None">None</option>
                          </select>
                        )}
                        {filterOption && filterOption === "Company" && (
                          <SmallAutocompleteFromAPI
                            handleFilter={handleFilter}
                            setAllSkills={null}
                            setFinalTotalSkills={null}
                            widtha="200px"
                            name="Company Name"
                            imageurl=""
                            fieldName="CompanyName"
                            setSelectedValue={setSkillInfo}
                            url={`${DEV_PUBLIC_URL}searchbar/candidates`}
                          />
                        )}
                        {filterOption && filterOption === "College" && (
                          <SmallAutocompleteFromAPI
                            handleFilter={handleFilter}
                            setAllSkills={null}
                            setFinalTotalSkills={null}
                            widtha="200px"
                            name="College Name"
                            imageurl=""
                            fieldName="CollegeName"
                            setSelectedValue={setSkillInfo}
                            url={`${DEV_PUBLIC_URL}searchbar/candidates`}
                          />
                        )} */}

                      </div>
                      <div className="filterBoxRight">
                        <label htmlFor="selectall">Select All: </label>
                        <input
                          className=""
                          type="checkbox"
                        //   checked={selectAll}
                        //   onChange={handleSelectAll}
                        />

                      </div>
                      <div className="clear"></div>
                    </div>
                  </div>
                  <div className="col-md-12 ">
                    <div className="resultSection">
                      <div className="resultCont">
                        <ul>
                          { pageMap[pageNoDisplay].map((ele,idx)=>(
                              <li className="listingPanel" key={idx}>
                                <div className="listTopSection">
                                  <div className="selectOption">
                                    <input
                                      className=""
                                      type="checkbox"
                                      value={ele.id}
                                      checked={selectedId.includes(ele.id)}
                                      onChange={handleCheckBox}
                                    />

                                  </div>
                                  <div className="ListImg">
                                    <img src="images/avatar1.png" alt="avatar1" />
                                  </div>
                                  <div className="listDecs">
                                    <h3 className="listName">{ele.Name}</h3>
                                    <h4 className="currentLocation">{ele.CurrentLocation}</h4>
                                    <h5><span>Years of Exp : {ele.Experience}</span> <strong>| </strong> <span>Current Salary : {ele.Salary}</span></h5>
                                    <h6 className="listTitle"></h6>
                                  </div>
                                  <div className="otherDesc">
                                    <p>{ele.CandidateProfile}</p>
                                    <p><span>Current Position </span>{ele.CurrentRole}</p>
                                    <p><span>Current Company </span>Larsen &amp; Toubro InfoTech Limited</p>
                                    <p><span>Education </span>{ele.Education}</p>
                                    <p><span>Key Skills: </span>{ele.Skills}</p>
                                  </div>


                                </div>
                              </li>
                            ))
                          }


                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 ">
                    <div className="paginationSection">
                      <ul className="pagination">
                        <li className="page-item disabled">
                          <button
                            className="page-link"
                            onClick={handlePrevPage} disabled={disableBackward}
                          >
                            Previous
                          </button>
                        </li>
                        <li className="page-item active" aria-current="page">
                          <a className="page-link" href="#">{pageNoDisplay}</a>
                        </li>
                        {/* <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">5</a></li> */}
                        <li className="page-item">
                          <button className="page-link" onClick={handleNextPage} disabled={disableForward}>Next</button>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </section>

            </div>


          </div>
                                }
                            </div>
                            {/* <div style={{width:'50px',marginLeft:'auto',marginRight:'auto'}}>
                                {
                                    <div style={{width:'100px',display:'flex',justifyContent:'space-around'}}>
                                        <Button variant="contained" onClick={handlePrevPage} disabled={disableBackward} color="secondary">
                                            <ArrowBackIosNewIcon/>
                                        </Button>
                                        <div style={{fontWeight:800,color:'red',fontSize:'50px'}}>{pageNoDisplay}</div>
                                        <Button variant="contained" onClick={handleNextPage} disabled={disableForward} color="secondary">
                                            <ArrowForwardIosIcon/>
                                        </Button> 
                                    </div>
                                }
                            </div>         */}
                        </section>
                    }
                </div>:               
                <div style={{width:'50px',marginLeft:'auto',marginRight:'auto',marginTop:'30vh'}}>
                    <CircularProgress size={50} color="secondary"/>
                </div>
                
            }
        </>

    )
}

export default SapSearch