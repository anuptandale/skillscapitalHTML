import React, { useEffect, useState } from 'react'
import css from "../../styles/sapSearchStyle.module.css";
import CustomAutocompleteFromAPI from '@/components/molecules/AutoComplete';
import { Input, MenuItem, Select, TextField } from '@mui/material';
interface Profile {
    Skill_Set: string;
    Experience_in_Years: string;
    Current_Location: string;
    Current_Timezone: string | null;
    Skill_Name_Version: string;
    Certification: string;
    Preferred_Industry_Domain: string;
}
interface Form_Data {
    keyWord: string,
    primaryModule: string,
    secondaryModule: string,
    roleType: string,
    technicalSkills: string
}
const SapSearch = () => {
    const [profiles, setProfile] = useState<Profile>({
        Skill_Set: '',
        Experience_in_Years: '',
        Current_Location: '',
        Current_Timezone: '',
        Skill_Name_Version: '',
        Certification: '',
        Preferred_Industry_Domain: '',
    });

    const [touched, setTouched] = useState(false);
    

    const [formData, setFormData] = useState<Form_Data>({
        keyWord: "",
        primaryModule: "",
        secondaryModule: "",
        roleType: "",
        technicalSkills: ""
    })
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        console.log(value," " ,name)
        setFormData({
            ...formData,
            [name]: value
        });
    };
    useEffect(()=>{
        console.log(formData);
    },[formData])
    return (
        <div>
            <section id={css.mostOuter}>
                <div id={css.outerform}>
                    <div >
                        <div id={css.fieldname}>Key word</div>
                        <TextField
                            name='keyWord'
                            size="small"
                            id={css.longSearch}
                            value={formData.keyWord}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                            <div id={css.fieldname}>Primary Module</div>
                            <TextField name='primaryModule' size="small" id={css.smallSearch} value={formData.primaryModule} onChange={handleChange} />
                        </div>
                        <div>
                            <div id={css.fieldname}>Secondary Module</div>
                            <TextField name="secondaryModule" size="small" id={css.smallSearch} value={formData.secondaryModule} onChange={handleChange} />
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        {/* <div>
                            <div id={css.fieldname}>Role Type</div>
                            <TextField size="small" id={css.smallSearch} />
                        </div> */}
                        <div>
                            <div id={css.fieldname}>Role Type</div>
                            <select 
                                id={css.selectStyle}
                                value={formData.roleType}
                                name="roleType"
                                onChange={handleChange}
                            >
                                <option value="">Select an option</option>
                                <option value="Technical">Technical</option>
                                <option value="Functional">Functional</option>
                                <option value="Techno-Functional">Techno-Functional</option>

                            </select>
                        </div>
                        <div>
                            <div id={css.fieldname}>Technical Skills</div>
                            <TextField name="technicalSkills" size="small" id={css.smallSearch} value={formData.technicalSkills} onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div id={css.outerform}>

                    <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                            <div id={css.fieldname}>Functional Experties</div>
                            <TextField size="small" id={css.smallSearch} />
                        </div>
                        <div>
                            <div id={css.fieldname}>Integration Skills</div>
                            <TextField size="small" id={css.smallSearch} />
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                            <div id={css.fieldname}>SAP S/4HANA Experties</div>
                            <TextField size="small" id={css.smallSearch} />
                        </div>
                        <div>
                            <div id={css.fieldname}>Certifications</div>
                            <TextField size="small" id={css.smallSearch} />
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                            <div id={css.fieldname}>Version-Specific Experties</div>
                            <TextField size="small" id={css.smallSearch} />
                        </div>

                    </div>


                </div>
                <div id={css.outerform}>
                    <div style={{ display: "flex", gap: "20px" }}>
                        {/* <div>
                            <div id={css.fieldname}>Project Type</div>
                            <TextField size="small" id={css.smallSearch} />
                        </div> */}
                        <div>
                            <div id={css.fieldname}>Project Type</div>
                            <select value="" id={css.selectStyle}>
                                <option value="">Select an option</option>
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
                            <div id={css.fieldname}>Position Type</div>
                            <select value="" id={css.selectStyle}>
                                <option value="">Select an option</option>
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
                            <div id={css.fieldname}>Industry-Specific Solution</div>
                            <TextField size="small" id={css.smallSearch} />
                        </div>
                        <div>
                            <div id={css.fieldname}>Experience level</div>
                            <TextField size="small" id={css.smallSearch} />
                        </div>
                    </div>
                </div>
                <div id={css.outerform}>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                            <div id={css.fieldname}>Country</div>
                            <TextField size="small" id={css.smallSearch} />
                        </div>
                        <div>
                            <div id={css.fieldname}>State</div>
                            <TextField size="small" id={css.smallSearch} />
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                            <div id={css.fieldname}>City</div>
                            <TextField size="small" id={css.smallSearch} />
                        </div>
                        <div>
                            <div id={css.fieldname}>Availability</div>
                            <TextField size="small" id={css.smallSearch} />
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                            <div id={css.fieldname}>Employee Type</div>
                            <select value="" id={css.selectStyle}>
                                <option value="">Select an option</option>
                                <option value="fulltime">Full Time</option>
                                <option value="parttime">Part Time</option>
                                <option value="contract">Contract</option>
                            </select>
                        </div>
                        <div>
                            <div id={css.fieldname}>Sap project Type</div>
                            <TextField size="small" id={css.smallSearch} />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default SapSearch
