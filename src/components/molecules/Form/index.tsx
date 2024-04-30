"use client";
import { useState, useEffect } from "react";
import {
  Autocomplete,
  Checkbox,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import { Box, Paper } from "@mui/material";
import { DEV_PUBLIC_URL } from "../../../../configs/auth";
import Image from "next/image";
import CustomAutocompleteFromAPI from "../AutoComplete";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import css from "../../../styles/search.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AskClient from "../../AskClient";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SmallAutocompleteFromAPI from "../smallAutoComplete";
import { useGlobalContext } from "../../../../context/store";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CloseIcon from '@mui/icons-material/Close';
interface Option {
  id: number;
  label: string;
}

interface RecentSearchItem {
  Skill_Set: string; 
  Experience_in_Years:string;
  minExp:string;
  maxExp:string;
}

interface Candidates {
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

interface Profile {
  Skill_Set: string;
  Experience_in_Years: string;
  Current_Location: string;
  Current_Timezone: string | null;
  Skill_Name_Version: string;
  Certification: string;
  Preferred_Industry_Domain: string;
  minExp:string;
  maxExp:string;
}
interface Skill_Info {
  skill_name: string;
  last_used: string;
}
function truncateSentence(sentence: string, maxLength = 215) {
  if (sentence != undefined && sentence.length > maxLength) {
    return sentence.substring(0, maxLength) + "...";
  } else {
    return sentence;
  }
}
const Form: React.FC = () => {
  const router = useRouter();
  const [profiles, setProfile] = useState<Profile>({
    Skill_Set: "",
    Experience_in_Years: "",
    minExp:"",
    maxExp:"",
    Current_Location: "",
    Current_Timezone: "",
    Skill_Name_Version: "",
    Certification: "",
    Preferred_Industry_Domain: "",
  });
  const [skillInfo, setSkillInfo] = useState<Skill_Info>({
    skill_name: "",
    last_used: "",
  });
  // const {selectedId,setSelectedId} = useGlobalContext();
  const [AllskillInfo, setAllSkillInfo] = useState<Skill_Info[]>([]);
  const [apiResponse, setApiResponse] = useState<Candidates[]>([]);
  const [apiDummyResponse, setApiDummyResponse] = useState<Candidates[]>([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setpageNumber] = useState(1);
  const [disablePrevButton, setDisablePrevButton] = useState(false);
  const [disableNextButton, setDisableNextButton] = useState(false);
  const [eliteButtonClicked, setEliteButtonClicked] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedId, setSelectedId] = useState<string[]>([]);
  const [getAllCandidate, setGetAllCandidate] = useState(false);
  const [youSelect, setYouSelect] = useState(false);
  const [showAskClient, setShowAskClient] = useState(false);
  const [pluseOpen, setPluseOpen] = useState(false);
  const [locationOption, setLocationOption] = useState("");
  const [expOption, setexpOption] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [filterOption, setFilterOption] = useState("");
  const [touched, setTouched] = useState(false);
  const [salary, setSalary] = useState<string>();
  const [recent,setRecent]=useState(false);
  const [recentSearch, setRecentSearch] = useState<RecentSearchItem[]>([]);
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRow = (index:any) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const handleMinExperienceChange=async(event:any)=>{
      console.log('Min expericene',event.target.value);
      setProfile({ ...profiles, minExp: event.target.value });
      
  }

  const handleMaxExperienceChange=async(event:any)=>{
    console.log('Max expericene',event.target.value);
    setProfile({ ...profiles, maxExp: event.target.value });
  }

  const handleSubmit = async (e:any)=> {
    setLoading(true);
    console.log("AAAA", profiles);
    if (profiles.Skill_Set) {
      setShowAskClient(true);
      setGetAllCandidate(true);
    }
    e.preventDefault();
    if (profiles.Skill_Set === "") {
      setTouched(true);
      return;
    }

    try {
      console.log("-------->", profiles, pageNumber);
      let localData=localStorage.getItem("RecentSearch");
      if(localData)localData=JSON.parse(localData);
      let jsonArr:any[]=[];
      if (typeof localData === 'object' && Array.isArray(localData)) {
        jsonArr = [profiles, ...localData]; // Concatenate localData array with profiles array
      } else {
          jsonArr.push(profiles); // Push profiles into jsonArr
      } 
      const jsonString = JSON.stringify(jsonArr);
      localStorage.setItem('RecentSearch',jsonString);
      setRecent(true);
      const resp = await axios.post(`${DEV_PUBLIC_URL}form/candidates`, {
        profiles,
        pageNumber,
      });
      const candidates = resp.data.data.candidatesData;
      let arr = [
        candidates[0],
        candidates[1],
        candidates[2],
        candidates[3],
        candidates[4],
        candidates[5],
        candidates[6],
        candidates[7],
        candidates[8],
        candidates[9]
      ];
      console.log("yoyo", candidates);
      setLoading(false);
      setEliteButtonClicked(true);
      if (candidates.length === 0) {
        setApiResponse([]);
        setApiDummyResponse([]);
      } else if (candidates.length !== 0) {
        setApiResponse(arr);
        setApiDummyResponse(arr);
      } else {
        setApiResponse([]);
        setApiDummyResponse([]);
      }
    } catch (error) {
      console.log("object");
      console.error("Error fetching data:", error);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setProfile({ ...profiles, [name]: value });
    console.log("profiles", profiles);
  };
  const handleExpChange = (e: SelectChangeEvent): void => {
    const { name, value } = e.target;
    setProfile({ ...profiles, Experience_in_Years: value });
    console.log("profiles", profiles);
  };
  useEffect(() => {
    console.log(selectedId);
  }, [selectedId]);
  const handlesalary = (e: SelectChangeEvent): void => {
    // const { name, value } = e.target;
    // setProfile({ ...profiles, Experience_in_Years: value });
    // console.log("profiles", profiles);
    setSalary(e.target.value);
  };

  const handleButtonClick = (profileId: string) => {
    router.push(`/talent/${profileId}`);
    setLoading(true);
  };

  const prevHandle = async () => {
    if (pageNumber === 1) {
      setDisablePrevButton(true);
    } else {
      setDisableNextButton(false);
      setDisablePrevButton(false);
      setpageNumber(pageNumber - 1);
      setLoading(true);
    }
  };
  const nextFun = async () => {
    setpageNumber(pageNumber + 1);
    setLoading(true);
    setSelectAll(false);
  };
  useEffect(() => {
    const nextHandle = async () => {
      console.log("object->", profiles.Skill_Set);
      if (profiles.Skill_Set === "") {
        return;
      }
      try {
        const resp = await axios.post(`${DEV_PUBLIC_URL}form/candidates`, {
          profiles,
          pageNumber,
        });
        const candidates = resp.data.data.candidatesData;
        setDisablePrevButton(false);
        setLoading(false);
        if (candidates === "Data not present") {
          setApiResponse([]);
          setApiDummyResponse([]);
          setDisableNextButton(true);
        } else if (candidates.length !== 0) {
          setApiResponse(candidates);
          setApiDummyResponse(candidates);
        } else {
          setApiResponse([]);
          setApiDummyResponse([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    nextHandle();
  }, [pageNumber]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleFilter = async (
    event: React.ChangeEvent<{}>,
    value: Option | null
  ) => {
    const key = filterOption;
    // const value = event.target.value;
    let prof = {};
    if (key === "searchLocation") {
      prof = { ...prof, Current_Location: `${value}` };
      setLocationOption(`${value}`);
    }
    try {
      const resp = await axios.post(`${DEV_PUBLIC_URL}filter/candidates`, {
        prof,
        pageNumber,
      });
      const candidates = resp.data.data.candidatesData;
      console.log("candidates1", candidates);
      setDisablePrevButton(false);
      setLoading(false);
      if (candidates === "Data not present") {
        setApiResponse([]);
        setApiDummyResponse([]);
        setDisableNextButton(true);
      } else if (candidates.length !== 0) {
        setApiResponse(candidates);
        setApiDummyResponse(candidates);
      } else {
        setApiResponse([]);
        setApiDummyResponse([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleFilterExperience = async (event: SelectChangeEvent) => {
    const key = filterOption;
    const value = event.target.value;
    let prof = {};
    const payload = { [key]: value };
    prof = { ...prof, ...payload };
    if (key === "searchLocation") {
      setLocationOption(value);
    } else if (key === "Current_Timezone") {
      setTimeZone(value);
    } else if (key === "Experience_in_Years") {
      setexpOption(value);
    }
    try {
      const resp = await axios.post(`${DEV_PUBLIC_URL}filter/candidates`, {
        prof,
        pageNumber,
      });
      const candidates = resp.data.data.candidatesData;
      console.log("candidates2", candidates);
      setDisablePrevButton(false);
      setLoading(false);
      if (candidates === "Data not present") {
        setApiResponse([]);
        setApiDummyResponse([]);
        setDisableNextButton(true);
      } else if (candidates.length !== 0) {
        setApiResponse(candidates);
        setApiDummyResponse(candidates);
      } else {
        setApiResponse([]);
        setApiDummyResponse([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleSort = async (event: SelectChangeEvent) => {
    const key = sortOption;
    const value = event.target.value;
    const payload = { [key]: value, pageNumber };

    try {
      const resp = await axios.post(
        `${DEV_PUBLIC_URL}sort/candidates`,
        payload
      );
      const candidates = resp.data.data.candidatesData;
      setDisablePrevButton(false);
      setLoading(false);
      if (candidates === "Data not present") {
        setApiResponse([]);
        setApiDummyResponse([]);
        setDisableNextButton(true);
      } else if (candidates.length !== 0) {
        setApiResponse(candidates);
        setApiDummyResponse(candidates);
      } else {
        setApiResponse([]);
        setApiDummyResponse([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleTimeZone = (
    event: React.ChangeEvent<{}>,
    value: string | null
  ) => {
    if (value === "none") {
      setProfile({ ...profiles, Current_Timezone: "" });
    } else {
      setProfile({ ...profiles, Current_Timezone: value });
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
  
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectAll(e.target.checked);
    const allIDs = apiResponse.map((item) => item.id);
    if (!selectAll) {
      setSelectedId((prevSelectedId) => {
        const uniqueIDs = new Set([...prevSelectedId, ...allIDs]);
        return Array.from(uniqueIDs);
      });
    } else {
      setSelectedId(selectedId.filter((item) => !allIDs.includes(item)));
    }
  };

  useEffect(() => {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',apiResponse);
    const allIDs = apiResponse.map((item) => item.id);
    const allNumbersPresent = allIDs.every((id) => selectedId.includes(id));
    if (allNumbersPresent) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [apiResponse, selectedId]);

  useEffect(() => {
    console.log("profiles--->", profiles);
  }, [profiles]);

  const handleMeetButton = () => {
    localStorage.setItem("selectedId", JSON.stringify({ selectedId }));
    router.push(`/subreq`);
  };
  const handleYouSelect = () => {
    setShowAskClient(false);
    setYouSelect(true);
  };
  const [sortOption, setSortOption] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSortOption(event.target.value);
    if (event.target.value === "salary") {
      const sortedProfiles = [...apiResponse].sort(
        (a, b) => parseFloat(a.Salary) - parseFloat(b.Salary)
      );
      setApiDummyResponse(sortedProfiles);
    } else if (event.target.value === "Exp") {
      const sortedProfiles = [...apiResponse].sort(
        (a, b) => parseFloat(a.Experience) - parseFloat(b.Experience)
      );
      setApiDummyResponse(sortedProfiles);
    } else if (event.target.value === "name") {
      const sortedProfiles = [...apiResponse].sort((a, b) =>
        a.Name.localeCompare(b.Name)
      );
      setApiDummyResponse(sortedProfiles);
    }
  };

  useEffect(() => {
    console.log("mymy", profiles);
  }, [profiles]);

  const handleChangefilter = async (event: SelectChangeEvent) => {
    setFilterOption(event.target.value);
    console.log("object", event.target.value);
    if (event.target.value === "None") {
      setpageNumber(2);
    }
  };
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSkillInfo({ ...skillInfo, last_used: e.target.value });
    setSelectedMonth(e.target.value);
  };
  const handleOk = () => {
    setPluseOpen(!pluseOpen);
    setAllSkillInfo((prevSkills) => [...prevSkills, skillInfo]);
    setSelectedMonth("");
  };
  useEffect(()=>{
    let data=localStorage.getItem("RecentSearch");
    if(data)
      {
        data=JSON.parse(data);
        typeof(data)==='object' && data && setRecentSearch(data);
      }
    console.log('Reached here',data);
  },[])

  const handleClickRecent=(search:any)=>{
    console.log('Inside function',search);
    let skillElem=document.getElementById("first")  as HTMLInputElement;
    let LocElem=document.getElementById("second")  as HTMLInputElement;
    let MinExpElem=document.getElementById("third")  as HTMLInputElement;
    let MaxExpElem=document.getElementById("fourth")  as HTMLInputElement;
    let TimeZoneElem=document.getElementById("fifth")  as HTMLInputElement;
    if(skillElem){
      skillElem.value=search.Skill_Set;
    }
    if(LocElem){
      if(search.Current_Location){
        LocElem.value=search.Current_Location;
      }
    }
    if(MinExpElem){
      if(search.minExp){
        MinExpElem.value=search.minExp;
      }
    }
    if(MaxExpElem){
      if(search.maxExp){
        MaxExpElem.value=search.maxExp;
      }
    }
    console.log('abcdefg',search,profiles);
    setProfile({...search})
    // if(TimeZoneElem){
    //   if(search.Current_Location.length>0){
    //     TimeZoneElem.value=search.Current_Location
    //   }
    // }
  }

  const handleClose = (index:any) => {
    console.log('hiii')
    let data = localStorage.getItem("RecentSearch");
    if (data) {
      data = JSON.parse(data);
      let arr = Array.isArray(data) ? data.filter((ele, idx) => idx !== index) : [];
      // Update local storage with the filtered data
      localStorage.setItem("RecentSearch", JSON.stringify(arr));
      setRecentSearch(arr);
    }
  }
  

  return (
    <>
      {!getAllCandidate && (
        <div>
          <h1 className={css.homeWrapper}>Search Elite Developers</h1>
          <div className={css.formStyle}>
            <div style={{width:'60%'}}>
              <CustomAutocompleteFromAPI
                setSelectedValue={setProfile}
                touched={touched}
              />
            </div>
            <div style={{width:'30%',height:'70vh',backgroundColor:'#f7f7f7',marginRight:'2%',padding:'1.2vw',overflow:'auto'}}>
              <div style={{fontWeight:'500',fontSize:'2rem'}}>RECENT SEARCHES</div>
                <div>
                  {
                    recentSearch.length>0 && recentSearch.map((ele,idx)=>(
                      <div style={{display:'flex',marginTop:'4vh'}}  key={idx}>
                        <div><CloseIcon style={{fontSize:'16',color:'grey',cursor:'pointer'}} onClick={()=>handleClose(idx)}/></div>
                        <div style={{marginTop:'2.5vh',backgroundColor:'#f7f7f7',fontSize:'1.5rem'}}>
                          <div>{ele.Skill_Set}</div>
                          <div style={{marginTop:'-0.4rem'}}>
                            <span onClick={(event)=>handleClickRecent(ele)} style={{fontSize:'0.9rem',cursor:'pointer',color:'blue',width:'auto'}}>Fill this Search</span>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
            </div>
          </div>
          <Button type="submit" variant="contained" color="primary" onClick={(e)=>handleSubmit(e)}>
            Get elite candidates now
          </Button>
        </div>
      )}
      
      {showAskClient && <AskClient handleYouSelect={handleYouSelect} />}
      {youSelect && (
        <div>
          <div className="mainProfileWrapper">
            {eliteButtonClicked && (
              <div className={css.outerOuterCheckbox}>
                <div className={css.outerCheckbox}>
                  <Checkbox
                    checked={selectAll}
                    onChange={handleSelectAll}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
                  />
                  <label htmlFor="selectall">: Select All </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "650px",
                    alignItems: "center",
                    flexWrap: "wrap",
                    flexDirection: "row-reverse",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel>Filter by:</InputLabel>
                      <Select
                        value={filterOption}
                        onChange={handleChangefilter}
                        displayEmpty
                        label="Filter by:"
                        inputProps={{ "aria-label": "Without label" }}
                        className={css.dropdown}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              borderRadius: "10px",
                            },
                          },
                        }}
                      >
                        <MenuItem value={"searchLocation"}>Location</MenuItem>
                        <MenuItem value={"Experience_in_Years"}>
                          Experience
                        </MenuItem>
                        <MenuItem value={"Current_Timezone"}>TimeZone</MenuItem>
                        <MenuItem value={"College"}>College</MenuItem>
                        <MenuItem value={"Company"}>Company</MenuItem>
                        <MenuItem value={"None"}>None</MenuItem>
                      </Select>
                    </FormControl>
                    {filterOption && filterOption === "searchLocation" && (
                      <SmallAutocompleteFromAPI
                        handleFilter={handleFilter}
                        setAllSkills={null}
                        setFinalTotalSkills={null}
                        widtha="200px"
                        name="location"
                        imageurl=""
                        fieldName="searchLocation"
                        setSelectedValue={setSkillInfo}
                        url={`${DEV_PUBLIC_URL}location/candidates`}
                      />
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
                    )}
                    {filterOption && filterOption === "Experience_in_Years" && (
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel>Experience</InputLabel>
                        <Select
                          value={expOption}
                          onChange={handleFilterExperience}
                          label="Experience"
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                          className={css.dropdown}
                          MenuProps={{
                            PaperProps: {
                              style: {
                                maxHeight: 200,
                              },
                            },
                          }}
                        >
                          {Array.from({ length: 19 }, (_, index) => (
                            // Your JSX code here, for example:
                            <MenuItem key={index} value={index + 2}>
                              {index + 2}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                    {filterOption && filterOption === "Current_Timezone" && (
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel>TimeZone</InputLabel>
                        <Select
                          value={timeZone}
                          onChange={handleFilterExperience}
                          label="TimeZone"
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                          className={css.dropdown}
                          MenuProps={{
                            PaperProps: {
                              style: {
                                borderRadius: "10px",
                              },
                            },
                          }}
                        >
                          <MenuItem value="IST">IST</MenuItem>
                          <MenuItem value="CET">CET</MenuItem>
                          <MenuItem value="ET">ET</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  </div>
                  <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel>Sort by:</InputLabel>
                      <Select
                        value={sortOption}
                        onChange={handleChange}
                        displayEmpty
                        label="Sort by:"
                        inputProps={{ "aria-label": "Without label" }}
                        className={css.dropdown}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              borderRadius: "10px",
                            },
                          },
                        }}
                      >
                        <MenuItem value={"salary"}>Salary</MenuItem>
                        <MenuItem value={"Experience_in_Years"}>
                          Experience
                        </MenuItem>
                        <MenuItem value={"name"}>Name</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            )}
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            ) : apiDummyResponse.length !== 0 ? (
              apiDummyResponse.map((profile, index) => (
                <div className={css.outerContainer} key={index}>
                  <div style={{ marginTop: "150px", marginLeft: "260px",backgroundColor:'greenyellow' }}>
                    <Checkbox
                      value={profile.id}
                      checked={selectedId.includes(profile.id)}
                      onChange={handleCheckBox}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 38 } }}
                    />
                  </div>
                  <Paper elevation={3} className={css.paperr}>
                    <div style={{height:'100%',width:'100%',backgroundColor:'green'}}>
                      <div>{profile.Name}</div>
                      <div style={{ display: "flex"}}>
                        <div className={css.icon_info_box}>
                          {/* icon box starts*/}
                          <div className={css.icons}>
                            <div style={{ display: "flex" }}>
                              <BusinessCenterIcon />
                              <div className={css.icontext}>
                                {profile.Experience} Years
                              </div>
                            </div>
                            <div style={{ display: "flex" }}>
                              <AttachMoneyIcon />
                              <div className={css.icontext}>{profile.Salary}</div>
                            </div>
                            <div style={{ display: "flex" }}>
                              <LocationOnOutlinedIcon />
                              <div className={css.icontext}>
                                {profile.CurrentLocation}
                              </div>
                            </div>
                          </div>
                          {/* icon box ends*/}
                          {/* info box starts*/}
                          <div className={css.infobox}>
                            <div>Current</div>
                            <div>{profile.CurrentRole}</div>

                            <div>Previous</div>
                            <div>{profile.PreviousRole}</div>

                            <div>Education</div>
                            <div>{profile.Education}</div>

                            <div>Key Skills</div>
                            <div>{profile.Skills}</div>

                            <div>May also know</div>
                            <div>{profile.MayAlsoKnow}</div>
                          </div>
                          {/* info box ends*/}
                        </div>
                        <div className={css.candidate_profile_box}>
                        <div>
                          <center>
                            <Image
                              src="/images/dummyPic.png"
                              width={50}
                              height={50}
                              alt="Profile Picture"
                            />
                          </center>
                          <div className={css.cp}>
                            {profile.CandidateProfile}
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </Paper>
                </div>
              ))
            ) : (
              "No candidate found"
            )}
          </div>
          <div>
            {disableNextButton && (
              <div className={css.nodata}>No more data</div>
            )}
          </div>
          {eliteButtonClicked && (
            <div className={css.meetButton}>
              <div>
                <Button
                  onClick={handleMeetButton}
                  variant="contained"
                  disabled={selectedId.length === 0}
                >
                  Schedule Meeting
                </Button>
              </div>
              <div className={css.nextButtonContainer}>
                <button
                  disabled={disablePrevButton}
                  onClick={prevHandle}
                  className={css.prevStyle}
                >
                  <ArrowBackIcon />
                </button>
                <div className={css.pageNumber}>{pageNumber}</div>
                <button
                  disabled={disableNextButton}
                  onClick={nextFun}
                  className={css.nextStyle}
                >
                  <ArrowForwardIcon />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Form;