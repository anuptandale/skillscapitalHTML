import React, { ChangeEvent, useState } from 'react';
import Stepone from "../../components/subreq/step1";
import Steptwo from '../../components/subreq/step2';
import Stepthree from '../../components/subreq/step3';
import Stepfour from '../../components/subreq/step4';
import Thankyou from '../../components/subreq/thankyou';
import dayjs, { Dayjs } from 'dayjs';
import css1 from "../../styles/sapSearchStyle.module.css";
import Layout from '@/components/layout';
import { Button, Input, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import { DEV_PUBLIC_CALLURL } from '../../../configs/auth';
interface ClientInfo {
    // Skills:string[];
    Name: string;
    Email: string;
    Company_name: string;
    contact_number: string;
    Start_Date: string | null;
    Job_Description: string;
    Budget: string;
    Openings: string;
    Role_Title: string;
    Designation: string;
    Current_Timezone: string | null;
}
const SubreqPage = () => {
    // const {selectedId,setSelectedId} = useGlobalContext();
    const [ClientData, setClientData] = useState<ClientInfo>({
        // Skills:[],
        Name: "",
        Email: "",
        // workEmail:"",
        Company_name: "",
        contact_number: "",
        Current_Timezone: '',
        Start_Date: "",
        Job_Description: "",
        Budget: "",
        Openings: "",
        Role_Title: "",
        Designation: ""
    })
    const [errors, setErrors] = useState({
        workEmail: '',
        contact_number: '',
        Email: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setClientData({ ...ClientData, [name]: value });
        console.log("profiles->", ClientData);
        validateField(name, value);
    };
    const validateField = (fieldName: string, value: string) => {
        let errorMessage = '';

        switch (fieldName) {
            case 'workEmail':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                errorMessage = !value.match(emailRegex) ? 'Invalid email address' : '';
                break;
            case 'Email':
                const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                errorMessage = !value.match(emailRe) ? 'Invalid email address' : '';
                break;
            case 'contact_number':
                const phoneRegex = /^[0-9]{10}$/;
                errorMessage = !value.match(phoneRegex) ? 'Invalid phone number (10 digits)' : '';
                break;
            default:
                break;
        }

        setErrors({ ...errors, [fieldName]: errorMessage });
    };
    const handleTimeZone = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "none") {
            setClientData({ ...ClientData, Current_Timezone: "" });
        } else {
            setClientData({ ...ClientData, Current_Timezone: e.target.value });
        }
        console.log("profiles->", ClientData);
    }
    const [steps, setSteps] = useState(1);
    
    const handleNextStep = () => {
        setSteps((prevSteps) => prevSteps + 1);
    };
    // const handledateTime = (data: Dayjs) => {
    //     const currentDate: Dayjs = dayjs();
    //     const futureDate: Dayjs = currentDate.add(1, 'day');
    //     const formattedDate: string = futureDate.format('YYYY-MM-DDTHH:mm:ss');
    //     const newDate = `${formattedDate}+05:30`
    //     setClientData({ ...ClientData, meetingDate: newDate });
    //     console.log("profiles->", ClientData);
    // }
    // const handleRadioButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setClientData({ ...ClientData, workType: (event.target as HTMLInputElement).value });
    //     console.log("profiles->", ClientData);
    // }
    // const [yearofExpValue, setYearofExpValue] = useState<number>(0);
    // const handleYearofExp = (
    //     event: Event,
    //     newValue: number | number[],
    // ) => {
    //     setYearofExpValue(newValue as number);
    //     setClientData({ ...ClientData, yearOfExp: newValue as number | number[] });
    //     console.log("profiles->", ClientData);
    // }
    const handlesetClientData = (dataskill: string[]) => {
        setClientData((prevData) => ({
            ...prevData,
            Skills: dataskill,
        }));
    }
    const [thankyouPage, setThankyouPage] = useState<boolean>(false);
    const handleClick = async () => {
        const storedData = localStorage.getItem("selectedId");
        const parsedData = storedData ? JSON.parse(storedData) : null;
        const selectedId = parsedData ? parsedData.selectedId : null;
        console.log("id", selectedId);
        try {
            const resp = await axios.post(`${DEV_PUBLIC_CALLURL}call`, { ClientData, selectedId });
            // const candidates = resp.data.data.candidatesData;
            // if (candidates === 'Data not present') {
            //   setApiResponse([]);
            // } else if (candidates.length !== 0) {
            //   setApiResponse(candidates);
            // } else {
            //   setApiResponse([]);
            // }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <>
            {/* {steps === 1 && (
            <Stepone
                ClientData={ClientData}
                handlesetClientData={handlesetClientData}
                handleInputChange={handleInputChange}
                onNextStep={handleNextStep}
                errors={errors}
            />
            )}
         {steps===2 && <Steptwo  ClientData={ClientData} handledateTime={handledateTime} handleTimeZone={handleTimeZone}  onNextStep={handleNextStep} />}
         {steps===3 && <Stepthree ClientData={ClientData} errors={errors} handleInputChange={handleInputChange} handleRadioButton={handleRadioButton}  onNextStep={handleNextStep} />}
         {steps===4 && <Stepfour yearofExpValue={yearofExpValue}  ClientData={ClientData} handleYearofExp={handleYearofExp} onNextStep={handleNextStep}/>}
         {steps===5 && <Thankyou ClientData={ClientData} />} */}
            {!thankyouPage && <section id={css1.mostOuter}>
                <div id={css1.outerform}>
                    <div >
                        <div id={css1.fieldname}  >Name</div>
                        <TextField size="small" name="Name" onChange={handleInputChange} id={css1.longSearch} />
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                            <div id={css1.fieldname}>Email</div>
                            <TextField size="small" name="Email" onChange={handleInputChange} id={css1.smallSearch} />
                        </div>
                        <div>
                            <div id={css1.fieldname}>Phone</div>
                            <TextField size="small" name="contact_number" onChange={handleInputChange} id={css1.smallSearch} />
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        {/* <div>
                                    <div id={css1.fieldname}>Role Type</div>
                                    <TextField size="small" id={css1.smallSearch} />
                                </div> */}
                        <div>
                            <div id={css1.fieldname}>Company Name</div>
                            <TextField size="small" name="Company_name" onChange={handleInputChange} id={css1.smallSearch} />
                        </div>
                        <div>
                            <div id={css1.fieldname}>Designation / Title</div>
                            <TextField size="small" name="Designation" onChange={handleInputChange} id={css1.smallSearch} />
                        </div>
                    </div>
                </div>
                <div id={css1.outerform}>

                    <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                            <div id={css1.fieldname}>Role Title</div>
                            <TextField size="small" name="Role_Title" onChange={handleInputChange} id={css1.smallSearch} />
                        </div>
                        <div>
                            <div id={css1.fieldname}>Number of Openings</div>
                            <TextField size="small" name="Openings" onChange={handleInputChange} id={css1.smallSearch} />
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                            <div id={css1.fieldname}>Budget</div>
                            <TextField size="small" name="Budget" onChange={handleInputChange} id={css1.smallSearch} />
                        </div>
                        <div>
                            <div id={css1.fieldname}>Timezone</div>
                            <select name="Current_Timezone" onChange={handleTimeZone} id={css1.selectStyle}>
                                <option>Select an option</option>
                                <option value="IST">IST</option>
                                <option value="CET">CET</option>
                                <option value="ET">ET</option>
                                <option value="none">none</option>
                            </select>
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                            <div id={css1.fieldname}>Job Description</div>
                            <TextField size="small" name="Job_Description" onChange={handleInputChange} id={css1.smallSearch} />
                        </div>
                        <div>
                            <div id={css1.fieldname}>Start Date</div>
                            <TextField size="small" name="Start_Date" onChange={handleInputChange} type='date' id={css1.smallSearch} />
                        </div>

                    </div>


                </div>


                <div>
                    <Button onClick={()=>{setThankyouPage(true)}} >CLICK ME</Button>
                </div>
            </section>}
            {thankyouPage && <Thankyou/>}
        </>
    )
}

export default SubreqPage;
