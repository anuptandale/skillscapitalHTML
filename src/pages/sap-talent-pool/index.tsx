import Navbar from '@/components/molecules/navbar'
import { HireDeveloperPageText, HomePageText } from '@/constants/texts'
import Image from 'next/image'
import React, { useState } from 'react'
import homePageStyle from "../../styles/homePageStyles.module.css";
import Link from 'next/link';
import CustomButton2 from '@/components/atoms/CustomButton2';
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HourglassEmptyRoundedIcon from "@mui/icons-material/HourglassEmptyRounded";
import hireDevStyles from "./../../styles/hireDevStyles.module.css";
import commonStyle, { accordianStylingHomePage, cardsStyling } from '@/constants/commonStyle';
import sapStyle from "../../styles/sapTalentStyle.module.css";
import FotterComponent from '@/components/molecules/Fotter';
import AccordionComponent from '@/components/atoms/accodion';
const SapTalentPool = () => {
    const launchCareerJourneyClicked = () => {

    }
    const [muduleSelect, setModuleSelect] = useState("SAPModules");
    return (
        <div>
            <Navbar />
            <section id={homePageStyle.avideoContainer} >
                <div className={homePageStyle.flexCenter}>
                    <div className={homePageStyle.topContentSection}>
                        <h1 className={homePageStyle.homePageMainHeading}>
                            <div>Unlock the Power of SAP Expertise</div>
                            {/* <div>{HomePageText.heading_2}</div>
                <div>{HomePageText.heading_3}</div> */}
                            {/* <div>{HomePageText.heading_4}</div> */}
                        </h1>

                        <h2 className={homePageStyle.homePageMainSubHeading}>
                            Discover Your Gateway to Elite SAP Talent
                            <br />
                        </h2>
                        <p className={homePageStyle.homePageMainHeadingPara}>
                            Welcome to our SAP Talent Pool, where you&apos;ll find a curated selection of top-tier professionals ready to elevate your SAP projects to new heights. Our talent pool is meticulously vetted and certified, ensuring that you have access to the best SAP expertise available
                        </p>
                        <br />
                        <div className={homePageStyle.topTwoButtons}>
                            <Link href="/hire-sap-talent">
                                <CustomButton2
                                    label={"Hire SAP Talent"}
                                    buttonStyle={{
                                        color: "white",
                                        borderRadius: "25px",
                                        background: "black",
                                        fontSize: "18px",
                                        padding: "10px 25px",
                                        fontFamily: "Poppins",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "10px",
                                        margin: "0px 30px 0px 30px",
                                        boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                                    }}
                                    hoverStyle={{
                                        color: "black",
                                        borderRadius: "25px",
                                        background: "white",
                                        fontSize: "18px",
                                        padding: "10px 25px",
                                        border: "1px solid black",
                                        boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "10px",
                                        margin: "0px 30px 0px 30px",
                                    }}
                                />
                            </Link>

                            {/* <CustomButton2
                                label={"Explore Specialized Talent"}
                                onClick={launchCareerJourneyClicked}
                                buttonStyle={{
                                    color: "#2871FF",
                                    borderRadius: "25px",
                                    background: "#FFF",
                                    fontSize: "18px",
                                    padding: "10px 25px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px",
                                    fontFamily: "Poppins",
                                    border: "1px solid #2871FF",
                                    margin: "0px 15px 0px 0px",
                                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                                }}
                                hoverStyle={{
                                    color: "#FFF",
                                    borderRadius: "25px",
                                    background: "#2871FF",
                                    fontSize: "18px",
                                    padding: "10px 25px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px",

                                    margin: "0px 15px 0px 0px",

                                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                                }}
                            /> */}
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                margin: "60px 30px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    paddingRight: "25px",
                                    color: "#000",
                                    fontFamily: "Poppins",
                                    fontSize: "20px",
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                    lineHeight: "normal",
                                }}
                            >
                                <HourglassEmptyRoundedIcon
                                    style={{
                                        fontSize: "32px",
                                        paddingRight: "5px",
                                    }}
                                />{" "}
                                <div style={{ fontWeight: "600" }}>{HomePageText.threeTagLine[0]}{" "}</div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    paddingRight: "25px",
                                    color: "#000",
                                    fontFamily: "Poppins",
                                    fontSize: "20px",
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                    lineHeight: "normal",
                                }}
                            >
                                <LeaderboardOutlinedIcon
                                    style={{ fontSize: "32px", paddingRight: "5px" }}
                                />
                                <div style={{ fontWeight: "600" }}>{HomePageText.threeTagLine[1]}</div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    paddingRight: "25px",
                                    color: "#000",
                                    fontFamily: "Poppins",
                                    fontSize: "20px",
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                    lineHeight: "normal",
                                }}
                            >
                                <GroupsOutlinedIcon
                                    style={{ fontSize: "42px", paddingRight: "10px" }}
                                />
                                <div style={{ fontWeight: "600" }}>{HomePageText.threeTagLine[2]}</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        {/* <VideoComponent
                videoSrc={"/HomePageImages/HomePageVideo.mp4"}
                videoWidth={"500"}
                videoHeight={"600"} */}
                        <Image src="/SaptalentImage/erp.webp" width={400} height={350} style={{ borderRadius: "5px" }} alt="" />

                    </div>
                </div>
            </section>
            <section>
                <div className={sapStyle.leftbuttonSection}>
                    <div className={sapStyle.leftbuttonHeadingSection}>
                        <div style={{ fontSize: "43px", fontWeight: "600" }}>Explore Specialized SAP Skills</div>
                        <div style={{ fontSize: "20px", opacity: "0.8", textAlign: "center" }}>Dive Into a Spectrum of SAP Expertise</div>
                    </div>
                    <div className={sapStyle.buttonSection}>
                        <div style={{marginTop:"50px"}}>
                            <div className={muduleSelect === "SAPModules" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPModules")}>SAP Modules / Sub Modules</div>
                            <div className={muduleSelect === "SAPSolutions" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPSolutions")}>SAP Solutions / Specializations</div>
                            <div className={muduleSelect === "SAPFunctional" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPFunctional")}>SAP Functional Areas</div>
                            <div className={muduleSelect === "SAPTechnical" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPTechnical")}> SAP Technical Expertise</div>
                            <div className={muduleSelect === "ProjectType" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("ProjectType")}>SAP Project Types</div>
                            <div className={muduleSelect === "RoleType" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("RoleType")}>SAP Talent Roles</div>
                        </div>
                        {muduleSelect === "SAPModules" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600" }}>SAP Modules Spectrum</div>
                            <div style={{ fontSize: "19px", fontWeight: "600" }}>Explore Talent for a Diverse Array of 50+ SAP Modules and Sub-Modules</div>
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>Covering Every Aspect of SAP Expertise</div>
                            <div style={{ fontSize: "16px", color: "#3C3C3C" }}>50+</div> */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                                <div className={sapStyle.moduletype}>SAP ECC (Enterprise Core Components)</div>
                                <div className={sapStyle.moduletype}>SAP S/4HANA (High-Performance Analytic Appliance)</div>
                                <div className={sapStyle.moduletype}>SAP BW (Business Warehouse)</div>
                                <div className={sapStyle.moduletype}>SAP CRM (Customer Relationship Management) </div>
                                <div className={sapStyle.moduletype}>SAP SCM (Supply Chain Management)</div>

                            </div>
                            <CustomButton2
                                label={"View All..."}
                                onClick={launchCareerJourneyClicked}
                                buttonStyle={{
                                    color: "white",
                                    borderRadius: "5px",
                                    background: "#007DB8",
                                    fontSize: "18px",
                                    padding: "10px 25px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px",
                                    margin: "0px 15px 0px 30px",
                                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                                }}
                                hoverStyle={{
                                    color: "black",
                                    borderRadius: "5px",
                                    background: "white",
                                    fontSize: "18px",
                                    padding: "10px 25px",
                                    border: "1px solid black",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px",
                                    margin: "0px 15px 0px 30px",
                                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                                }}
                            />
                        </div>}
                        {muduleSelect === "SAPSolutions" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600" }}>SAP Solutions Array</div>
                            <div style={{ fontSize: "19px", fontWeight: "600" }}>Discover Consultants for a Wide Range of 30+ SAP Solutions and Specializations</div>
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>Tailored Solutions for Every Business Need</div>
                            <div style={{ fontSize: "16px", color: "#3C3C3C" }}>40+</div> */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                                <div className={sapStyle.moduletype}>SAP Business One</div>
                                <div className={sapStyle.moduletype}>SAP Ariba (Procurement Solutions)</div>
                                <div className={sapStyle.moduletype}>SAP SuccessFactors (Human Capital Management)</div>
                                <div className={sapStyle.moduletype}>SAP Hybris (E-commerce Solutions) </div>
                                <div className={sapStyle.moduletype}>SAP Concur (Expense Management)</div>

                            </div>
                            <CustomButton2
                                label={"View All..."}
                                onClick={launchCareerJourneyClicked}
                                buttonStyle={{
                                    color: "white",
                                    borderRadius: "5px",
                                    background: "#007DB8",
                                    fontSize: "18px",
                                    padding: "10px 25px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px",
                                    margin: "0px 15px 0px 30px",
                                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                                }}
                                hoverStyle={{
                                    color: "black",
                                    borderRadius: "5px",
                                    background: "white",
                                    fontSize: "18px",
                                    padding: "10px 25px",
                                    border: "1px solid black",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px",
                                    margin: "0px 15px 0px 30px",
                                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                                }}
                            />
                        </div>}
                        {muduleSelect === "SAPFunctional" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600" }}>Functional Expertise</div>
                            <div style={{ fontSize: "19px", fontWeight: "600" }}>Figure out Our SAP Talent&apos;s Functional Proficiency Across 40+ Key Functional Areas</div>
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>Functional Expertise to Drive Business Processes</div>
                            <div style={{ fontSize: "16px", color: "#3C3C3C" }}>20+</div> */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                                <div className={sapStyle.moduletype}>SAP FI(Financial Accounting)</div>
                                <div className={sapStyle.moduletype}>SAP CO(Controlling)</div>
                                <div className={sapStyle.moduletype}>SAP SD(Sales and Distribution)</div>
                                <div className={sapStyle.moduletype}>SAP MM(Material Management) </div>
                                <div className={sapStyle.moduletype}>SAP HCM(Human Capital Management)</div>

                            </div>
                            <CustomButton2
                                label={"View All..."}
                                onClick={launchCareerJourneyClicked}
                                buttonStyle={{
                                    color: "white",
                                    borderRadius: "5px",
                                    background: "#007DB8",
                                    fontSize: "18px",
                                    padding: "10px 25px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px",
                                    margin: "0px 15px 0px 30px",
                                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                                }}
                                hoverStyle={{
                                    color: "black",
                                    borderRadius: "5px",
                                    background: "white",
                                    fontSize: "18px",
                                    padding: "10px 25px",
                                    border: "1px solid black",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px",
                                    margin: "0px 15px 0px 30px",
                                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                                }}
                            />
                        </div>}
                        {muduleSelect === "SAPTechnical" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600" }}>SAP Tech Mastery</div>
                            <div style={{ fontSize: "19px", fontWeight: "600" }}>Delve into our extensive 30+ SAP Technical Expertise, with our Elite SAP Developers</div>
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>Technical Skills to Optimize System Performance</div>
                            <div style={{ fontSize: "16px", color: "#3C3C3C" }}>30+</div> */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                                <div className={sapStyle.moduletype}>SAP ABAP (Advanced Business Application Programming)</div>
                                <div className={sapStyle.moduletype}>SAP BASIS (Business Application Systems Integrated Solutions) </div>
                                <div className={sapStyle.moduletype}>SAP BW/BI (Business Warehouse / Business Intelligence)</div>
                                <div className={sapStyle.moduletype}>SAP HANA (High-Performance Analytic Appliance) </div>
                                <div className={sapStyle.moduletype}>SAP Fiori (User Experience)</div>

                            </div>
                            <CustomButton2
                                label={"View All..."}
                                onClick={launchCareerJourneyClicked}
                                buttonStyle={{
                                    color: "white",
                                    borderRadius: "5px",
                                    background: "#007DB8",
                                    fontSize: "18px",
                                    padding: "10px 25px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px",
                                    margin: "0px 15px 0px 30px",
                                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                                }}
                                hoverStyle={{
                                    color: "black",
                                    borderRadius: "5px",
                                    background: "white",
                                    fontSize: "18px",
                                    padding: "10px 25px",
                                    border: "1px solid black",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px",
                                    margin: "0px 15px 0px 30px",
                                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                                }}
                            />
                        </div>}
                        {muduleSelect === "ProjectType" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600" }}>SAP Project Insights: </div>
                            <div style={{ fontSize: "19px", fontWeight: "600" }}>Navigate through 20+ SAP Project Type Specializations, empowering your project choices</div>
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>Our talent pool encompasses experts skilled in various project types. Whether you require assistance with launching a new project or optimizing existing systems, our professionals are equipped to handle diverse project requirements.</div> */}
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>40+</div> */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                                <div className={sapStyle.moduletype}>Design</div>
                                <div className={sapStyle.moduletype}>Implementation</div>
                                <div className={sapStyle.moduletype}>Enhancements</div>
                                <div className={sapStyle.moduletype}>Migration</div>
                                <div className={sapStyle.moduletype}>Support</div>
                                <div className={sapStyle.moduletype}>Application Management Services (AMS)</div>


                            </div>
                            <CustomButton2
                                label={"View All..."}
                                onClick={launchCareerJourneyClicked}
                                buttonStyle={{
                                    color: "white",
                                    borderRadius: "5px",
                                    background: "#007DB8",
                                    fontSize: "18px",
                                    padding: "10px 25px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px",
                                    margin: "0px 15px 0px 30px",
                                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                                }}
                                hoverStyle={{
                                    color: "black",
                                    borderRadius: "5px",
                                    background: "white",
                                    fontSize: "18px",
                                    padding: "10px 25px",
                                    border: "1px solid black",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px",
                                    margin: "0px 15px 0px 30px",
                                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                                }}
                            />
                        </div>}
                        {muduleSelect === "RoleType" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600" }}>Role Mastery</div>
                            <div style={{ fontSize: "19px", fontWeight: "600" }}>Discover 10+ Key Role Type Expertise, crafting specialized talent for every SAP need</div>
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>We offer a comprehensive range of role types for your specific project needs. Our talent pool is meticulously curated to ensure each role is filled by an experienced and qualified professional, enabling seamless project execution and delivery.</div> */}
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>40+</div> */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                                <div className={sapStyle.moduletype}>Functional Consultant</div>
                                <div className={sapStyle.moduletype}>Technical Architect</div>
                                <div className={sapStyle.moduletype}>Techno-Functional Expert</div>
                                <div className={sapStyle.moduletype}>Project Manager</div>
                                {/* <div className={sapStyle.moduletype}>SAP HCM(Human Capital Management)</div> */}

                            </div>
                            <CustomButton2
                                label={"View All..."}
                                onClick={launchCareerJourneyClicked}
                                buttonStyle={{
                                    color: "white",
                                    borderRadius: "5px",
                                    background: "#007DB8",
                                    fontSize: "18px",
                                    padding: "10px 25px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px",
                                    margin: "0px 15px 0px 30px",
                                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                                }}
                                hoverStyle={{
                                    color: "black",
                                    borderRadius: "5px",
                                    background: "white",
                                    fontSize: "18px",
                                    padding: "10px 25px",
                                    border: "1px solid black",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px",
                                    margin: "0px 15px 0px 30px",
                                    boxShadow: "5px 5px 35px 0px rgba(0, 0, 0, 0.25)",
                                }}
                            />
                        </div>}
                    </div>
                </div>
            </section>

            <section className={sapStyle.outerNumberSection}>
                <div style={commonStyle.textCenter}>
                    <br />
                    <br />
                    <h2 style={{fontSize:"38px"}}>
                        By the Numbers: Key Metrics of Our SAP Talent Pool
                    </h2>
                    <br />
                    <h3 style={{fontSize:"22px"}}>Discover the Magnitude of Our SAP Expertise in Numbers</h3>
                    <br />
                </div>
                <div>
                    <div className={sapStyle.numberSection}>
                        <div className={sapStyle.eachsection}>
                            <Image src="/SaptalentImage/sapexpert.png" style={{ borderRadius: "50px" }} alt="" height={100} width={100} />
                            <div style={{ fontSize: "35px", fontWeight: "600",color:"black" }}>14000+</div>
                            <div style={{ fontSize: "22px", width: "200px", textAlign: "center" }}>Pre-Vetted SAP Experts</div>
                        </div>
                        <div className={sapStyle.eachsection}>
                            <Image src="/SaptalentImage/sapcategory.jpg" style={{ borderRadius: "50px" }} alt="" height={100} width={100} />
                            <div style={{ fontSize: "35px", fontWeight: "600",color:"black" }}>1800+</div>
                            <div style={{ fontSize: "22px", width: "200px", textAlign: "center" }}>SAP Category Combinations</div>
                        </div>
                        <div className={sapStyle.eachsection}>
                            <Image src="/SaptalentImage/ready.jpg" style={{ borderRadius: "50px" }} alt="" height={100} width={100} />
                            <div style={{ fontSize: "35px", fontWeight: "600",color:"black" }}>600+</div>
                            <div style={{ fontSize: "22px", width: "200px", textAlign: "center" }}>Ready-to-Deploy Consultants</div>
                        </div>
                        <div className={sapStyle.eachsection}>
                            <Image src="/SaptalentImage/module.png" style={{ borderRadius: "50px" }} alt="" height={100} width={100} />
                            <div style={{ fontSize: "35px", fontWeight: "600",color:"black" }}>80+</div>
                            <div style={{ fontSize: "22px", width: "200px", textAlign: "center" }}>SAP Modules and Solutions</div>
                        </div>
                    </div>
                </div>
            </section>
            <main className={homePageStyle.onDemandStyle}>
                <section >
                    <div className="accodiaonHome">
                        <div className={homePageStyle.ondemandflex} >
                            <div >
                                <h2 style={accordianStylingHomePage.accordianStylingHeading}>
                                    Elevate Your SAP Projects with Industry-Specific Talent
                                </h2>
                                <h3 style={accordianStylingHomePage.accordianStylingSubHeading}>Unleashing the Power of SAP Specialists Tailored to Your Industry</h3>
                                {/* <h3 style={accordianStylingHomePage.accordianStylingSubHeading}>{HomePageText.thirdSubHeadingH2_2}</h3> */}

                                <p style={accordianStylingHomePage.accordianStylingPara}>
                                    {/* {HomePageText.thirdPara} */}
                                </p>
                                <br />
                                <br />
                                <AccordionComponent
                                    title="Diverse Industry Focus"
                                    content="Our SAP talent pool boasts experts with extensive experience across various industries, including manufacturing, healthcare, finance, retail, and more. Whatever your industry, we have the specialized expertise to drive your SAP projects forward."
                                />
                                <br />
                                <AccordionComponent
                                    title="Vertical Specializations"
                                    content="Within each industry, we have SAP professionals specializing in key verticals and sub-sectors, ensuring that you work with experts who have a comprehensive understanding of your industry's nuances and best practices."
                                />
                                <br />
                                <AccordionComponent
                                    title="Industry Insights"
                                    content="Gain access to professionals who understand the unique challenges and opportunities within your industry. Our experts bring valuable insights and best practices to the table, ensuring your SAP solutions are aligned with industry standards and requirements."
                                />
                                <br />
                                <AccordionComponent
                                    title="Customized Solutions"
                                    content="We tailor our SAP talent solutions to address the specific needs and nuances of your industry. Whether you require compliance expertise, industry-specific modules, or sector-specific optimizations, we deliver customized solutions that add value to your business."
                                />
                            </div>
                            <div>
                                <Image
                                    src={"/HomePageImages/sapProject.png"}
                                    alt="Accordian Image"
                                    width={502}
                                    height={460}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <section id={sapStyle.secondsection3}>
                <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>Accelerate Your SAP Initiatives with Data-Driven Insights</div>
                <div id={sapStyle.threeimage}>
                    <div id={sapStyle.threeimagesection}>
                        {/* <div style={{ fontWeight: "600" }}>CLASSICALLY TRAINED</div> */}
                        <div id={sapStyle.greenNumber2}>4-Hour</div>

                        <div style={{ fontSize: "16px",fontWeight:"600" }}>Turnaround Time</div>
                        <div style={{ fontSize: "14px",opacity: "0.8" }}>Respond swiftly to project requirements with our quick turnaround time, ensuring agility and responsiveness in resource allocation.</div>
                    </div>
                    <div id={sapStyle.threeimagesection}>
                        {/* <div style={{ fontWeight: "600" }}>PROVEN & HANDS-ON</div> */}
                        <div id={sapStyle.greenNumber2}>24/7</div>

                        <div style={{ fontSize: "16px",fontWeight:"600"}}>Access To Expertise</div>
                        <div style={{ fontSize: "14px" }}>Seamlessly access our SAP talent pool round-the-clock, enabling you to address project needs promptly and efficiently.</div>
                    </div>
                    <div id={sapStyle.threeimagesection}>
                        {/* <div style={{ fontWeight: "600" }}>EXECUTION-ORIENTED</div> */}
                        <div id={sapStyle.greenNumber2}>100%</div>

                        <div style={{ fontSize: "16px",fontWeight:"600"}}>Satisfaction Guarantee</div>
                        <div style={{ fontSize: "14px" }}>Rest assured of project success with our unwavering commitment to delivering high-quality, client-centric solutions that exceed expectations.</div>
                    </div>

                </div>
                {/* <div id={sapStyle.threeimage}>
                    <div id={sapStyle.threeimagesection}>
                        
                        <div id={sapStyle.greenNumber2}>4 Hour</div>

                        <div style={{ fontSize: "14px", opacity: "0.8" }}>Turnaround Time</div>
                        <div style={{ fontSize: "14px" }}>Respond swiftly to project requirements with our quick turnaround time, ensuring agility and responsiveness in resource allocation.</div>
                    </div>
                    <div id={sapStyle.threeimagesection}>
                        
                        <div id={sapStyle.greenNumber2}>100%</div>

                        <div style={{ fontSize: "14px", opacity: "0.8" }}>Satisfaction Guarantee</div>
                        <div style={{ fontSize: "14px" }}>Rest assured of project success with our unwavering commitment to delivering high-quality, client-centric solutions that exceed expectations.</div>
                    </div>
                </div> */}
            </section>
            <FotterComponent />
        </div>
    )
}

export default SapTalentPool
