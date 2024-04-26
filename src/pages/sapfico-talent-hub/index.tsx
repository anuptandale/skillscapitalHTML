import Navbar from '@/components/molecules/navbar';
import React, { useState } from 'react'
import sapficoStyle from "../../styles/sapficoTalentHubStyle.module.css";
import CustomButton2 from '@/components/atoms/CustomButton2';
import Image from 'next/image';
import FotterComponent from '@/components/molecules/Fotter';
import hireDevStyles from "./../../styles/hireDevStyles.module.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import sapStyle from "../../styles/sapTalentStyle.module.css"
import { cardsStyling } from '@/constants/commonStyle';
const SapficoTalentHubPage = () => {
    const [muduleSelect, setModuleSelect] = useState("SAPModules");
    const [selected, setSelected] = useState("AI-Vetted");
    return (

        <div>
            <Navbar />
            <section className={sapficoStyle.outerSectionMost} >
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className={sapficoStyle.topsection}>
                        <div style={{ fontSize: "38px", width: "400px", fontWeight: "600", lineHeight: "59px" }}>Welcome to the SAP FICO Talent Hub</div>
                        <div style={{ fontSize: "20px" }}>Your Central Resource for SAP Financials and Controlling Expertise</div>
                        <div>
                            <CustomButton2
                                label="FIND OVERVIEW"
                                // onClick={hirenowClick}
                                buttonStyle={{
                                    width: "272px",
                                    height: "51.6px",
                                    border: "1px solid #2871ff",
                                    color: "#fff",
                                    fontSize: "20px",
                                    backgroundColor: "#2871ff",
                                }}
                                hoverStyle={{
                                    backgroundColor: "lightblue",
                                    color: "#2871ff",
                                }}
                            />
                        </div>
                    </div>
                    <Image style={{ borderRadius: "10px" }} src="/TalentPoolImages/sapfico.png" height={330} width={330} alt="" />
                </div>
            </section>
            <section>
                <div className={sapficoStyle.aboutSection}>
                    <div>
                    <div style={{ fontSize: "38px", fontWeight: "600" }}>
                    About Us
                    </div>
                    </div>
                    <div style={{padding:" 30px 150px"}}>Learn about the purpose and mission of the SAP FICO Talent Hub, highlighting our commitment to providing valuable resources and expertise in the SAP FICO domain.</div>
                    <div>
                            <CustomButton2
                                label="Explore About Us"
                                // onClick={hirenowClick}
                                buttonStyle={{
                                    width: "272px",
                                    height: "51.6px",
                                    border: "1px solid #2871ff",
                                    color: "#fff",
                                    fontSize: "20px",
                                    backgroundColor: "#2871ff",
                                }}
                                hoverStyle={{
                                    backgroundColor: "lightblue",
                                    color: "#2871ff",
                                }}
                            />
                        </div>
                </div>
            </section>
            <section>
                <div className={sapficoStyle.whyusSection}>
                    <div>
                    <div style={{ fontSize: "38px", fontWeight: "600" }}>
                    Why Choose Us
                    </div>
                    </div>
                    <div style={{padding:" 30px 150px"}}> Explore the unique features and benefits of the SAP FICO Talent Hub, including our extensive talent pool, industry expertise, and customer-centric approach.
How It Works: Understand the process of engaging with the SAP FICO Talent Hub, from exploring talent profiles to project matchmaking and deployment.</div>
                    
                </div>
            </section>
            <section>
                <div className={sapficoStyle.headingunleash2} >
                    <div style={{ fontSize: "38px", fontWeight: "600" }}>
                        Meet Our SAP FICO Talent Pool
                    </div>
                    <div style={{ fontSize: "18px", fontWeight: "600" }}>
                        Quality-Assured Professionals for Your Projects
                    </div>
                </div>
                <section className={sapficoStyle.fontpopBelow}>
                    <div className={sapficoStyle.selectbar}>
                        <div style={selected === "AI-Vetted" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px 50px" }} onClick={() => setSelected("AI-Vetted")}>Talent Profiles</div>
                        </div>
                        <div style={selected === "Certified" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px 50px" }} onClick={() => setSelected("Certified")}>Vetting Process</div>
                        </div>
                        <div style={selected === "Accomplished" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px 50px" }} onClick={() => setSelected("Accomplished")}>Client Testimonials</div>
                        </div>
                        <div style={selected === "On-Demand" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px 50px" }} onClick={() => setSelected("On-Demand")}>Global Reach</div>
                        </div>


                    </div>
                </section>

            </section>
            {selected === "AI-Vetted" && <section className={sapficoStyle.fontpop2}>
                <div className={sapficoStyle.scalableGrowth2}>
                    <div className={sapficoStyle.scalableGrowthInner}>

                        <Image src="/HireDevImages/sapSolution.jpg" style={{ padding: "0px" }} alt="" height={300} width={300} />
                    </div>
                    <div className={sapficoStyle.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div className={sapficoStyle.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={sapficoStyle.scalableSubheading}>Explore profiles of certified SAP FICO professionals within our talent pool, showcasing their expertise, experience, and project successes.</div>
                            </div>
                        </div>
                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More - SAP consulting</span></div>

                    </div>
                </div>
            </section>}
            {selected === "Certified" && <section className={sapficoStyle.fontpop2}>
                <div className={sapficoStyle.scalableGrowth2}>
                    <div className={sapficoStyle.scalableGrowthInner}>

                        <Image src="/HireDevImages/migration.jpg" style={{ padding: "0px" }} alt="" height={300} width={350} />
                    </div>
                    <div className={sapficoStyle.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div className={sapficoStyle.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={sapficoStyle.scalableSubheading}>Understand our rigorous vetting process for SAP FICO talent, ensuring the quality and reliability of professionals available for project deployment.</div>
                            </div>
                        </div>
                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                    </div>
                </div>
            </section>}
            {selected === "Accomplished" && <section className={sapficoStyle.fontpop2}>
                <div className={sapficoStyle.scalableGrowth2}>
                    <div className={sapficoStyle.scalableGrowthInner}>

                        <Image src="/HireDevImages/industrySap.webp" style={{ padding: "0px" }} alt="" height={200} width={300} />
                    </div>
                    <div className={sapficoStyle.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div className={sapficoStyle.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={sapficoStyle.scalableSubheading}>Hear from satisfied clients who have benefited from the expertise of our SAP FICO professionals, highlighting successful project outcomes and value delivered.</div>
                            </div>
                        </div>
                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                    </div>
                </div>
            </section>}
            {selected === "On-Demand" && <section className={sapficoStyle.fontpop2}>
                <div className={sapficoStyle.scalableGrowth2}>
                    <div className={sapficoStyle.scalableGrowthInner}>

                        <Image src="/HireDevImages/integration.jpg" style={{ padding: "0px" }} alt="" height={300} width={300} />
                    </div>
                    <div className={sapficoStyle.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div className={sapficoStyle.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={sapficoStyle.scalableSubheading}>Discover how our SAP FICO talent pool spans across regions and industries, providing clients with access to diverse expertise and local market insights.</div>
                            </div>
                        </div>
                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                    </div>
                </div>
            </section>}

            <section>
                <div className={sapStyle.leftbuttonSection2}>
                    <div style={{ textAlign: "center", marginBottom: "30px" }} >
                        <div style={{ fontSize: "38px", fontWeight: "600" }}>
                            Innovating with SAP FICO
                        </div>
                        <div style={{ fontSize: "18px", fontWeight: "600" }}>
                            Trends, Strategies, and Success Stories
                        </div>
                    </div>
                    <div className={sapStyle.buttonSection}>
                        <div style={{ marginTop: "50px" }}>
                            <div className={muduleSelect === "SAPModules" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPModules")}>Emerging Trends</div>
                            <div className={muduleSelect === "SAPSolutions" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPSolutions")}>Optimization Strategies</div>
                            <div className={muduleSelect === "SAPFunctional" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPFunctional")}>Success Stories</div>
                            <div className={muduleSelect === "SAPTechnical" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPTechnical")}>Future Outlook</div>
                            {/* <div className={muduleSelect === "ProjectType" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("ProjectType")}>SAP Project Types</div>
                            <div className={muduleSelect === "RoleType" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("RoleType")}>SAP Talent Roles</div> */}
                        </div>
                        {muduleSelect === "SAPModules" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600", color: "#2871FF" }}>Emerging Trends</div>
                            {/* <div style={{ fontSize: "19px", fontWeight: "600" }}>Explore Talent for a Diverse Array of 50+ SAP Modules and Sub-Modules</div> */}
                            <div style={{ fontSize: "16px", color: "#3C3C3C" }}>Stay informed about the latest trends and innovations in SAP FICO, including intelligent automation, machine learning, and predictive analytics, and their implications for business transformation.</div>
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>50+</div> */}
                            {/* <div>sapfico-resource-hub</div> */}
                            <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More - sapfico-resource-hub</span></div>


                        </div>}
                        {muduleSelect === "SAPSolutions" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600", color: "#2871FF" }}>Optimization Strategies</div>
                            {/* <div style={{ fontSize: "19px", fontWeight: "600" }}>Discover Consultants for a Wide Range of 30+ SAP Solutions and Specializations</div> */}
                            <div style={{ fontSize: "16px", color: "#3C3C3C" }}>Discover strategies and best practices for optimizing SAP FICO performance, improving efficiency, and driving continuous improvement across financial processes.</div>
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>40+</div> */}
                            <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                        </div>}
                        {muduleSelect === "SAPFunctional" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600", color: "#2871FF" }}>Success Stories</div>
                            {/* <div style={{ fontSize: "19px", fontWeight: "600" }}>Figure out Our SAP Talent&apos;s Functional Proficiency Across 40+ Key Functional Areas</div> */}
                            <div style={{ fontSize: "16px", color: "#3C3C3C" }}>Learn from real-world success stories of organizations that have leveraged SAP FICO innovations to achieve business objectives, reduce costs, and enhance decision-making capabilities.</div>
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>20+</div> */}
                            <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                        </div>}
                        {muduleSelect === "SAPTechnical" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600", color: "#2871FF" }}>Future Outlook</div>
                            {/* <div style={{ fontSize: "19px", fontWeight: "600" }}>Figure out Our SAP Talent&apos;s Functional Proficiency Across 40+ Key Functional Areas</div> */}
                            <div style={{ fontSize: "16px", color: "#3C3C3C" }}> Explore the future outlook of SAP FICO, including upcoming technologies, market trends, and opportunities for growth and innovation.</div>
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>20+</div> */}
                            <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                        </div>}

                    </div>
                </div>
            </section>
            <section >
                {/* <div style={{ textAlign: "center" }}>
                    <div id={hireDevStyles.scalableGrowthHeading}>
                       Flexi bility and Scalability for Your SAP Projects
                    </div>
                    <div className={hireDevStyles.scalableSubheading}>Tailored Talent Solutions to Match Your Unique Business Needs, Project Size and Complexity</div>
                </div> */}
                <div className={sapficoStyle.scalableGrowth}>
                    <div className={sapficoStyle.scalableGrowthInner}>
                        <div className={sapficoStyle.scalableGrowthHeading}>Empowering SAP FICO Professionals</div>
                        <div> Training, Certifications, and Real-World Applications</div>
                        <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                    </div>
                    <div className={sapficoStyle.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            <div>
                                <Image src="/HireDevImages/skillset.png" alt="" height={50} width={50} />
                            </div>
                            <div className={sapficoStyle.mosteinnerContainer}>
                                <div className={sapficoStyle.scalableGrowthHeading}>Training and Certifications</div>
                                <div className={sapficoStyle.scalableSubheading}>Access resources and programs designed to enhance SAP FICO skills and knowledge, including certification paths, training courses, and learning materials.</div>
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            <div>
                                <Image src="/HireDevImages/certified_exp.webp" alt="" height={50} width={50} />
                            </div>
                            <div className={sapficoStyle.mosteinnerContainer}>
                                <div className={sapficoStyle.scalableGrowthHeading}>Real-World Applications</div>
                                <div className={sapficoStyle.scalableSubheading}>Explore case studies, success stories, and industry-specific use cases demonstrating the practical applications of SAP FICO solutions in diverse business environments. </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            <div>
                                <Image src="/HireDevImages/engagement.jpg" alt="" height={50} width={50} />
                            </div>
                            <div className={sapficoStyle.mosteinnerContainerLast}>
                                <div className={sapficoStyle.scalableGrowthHeading}>Knowledge Center</div>
                                <div className={sapficoStyle.scalableSubheading}> Access a comprehensive knowledge center with articles, whitepapers, and thought leadership content on SAP FICO trends, best practices, and innovations.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={sapficoStyle.attributeSection}>
                    <div className={sapficoStyle.headingunleash} >
                        <br />
                        <br />
                        <h2 style={cardsStyling.sapCloudLegacyMainHeading}>
                            Unveiling SAP FICO Talent Expertise
                        </h2>
                        <br />
                        <h3 style={{ opacity: "0.7" }}>Key Skills, Roles, and Industry Insights</h3>


                    </div>
                    <div className={sapficoStyle.innerattributeSection}>
                        <div className={sapficoStyle.eachblock}>
                            <div style={{ color: "#FFA107", fontWeight: "600" }}>Key Skills and Roles</div>
                            {/* <div style={{ fontWeight: "600" }}>SAP Solutions</div> */}
                            <div className={sapficoStyle.smallboxsection}>
                                <div style={{fontSize:"14px", padding: "0px 20px", textAlign: "center" }}>
                                    Explore the essential skills and roles within the SAP FICO domain, including functional consultants, technical developers, project managers, and solution architects.
                                </div>
                            </div>
                        </div>
                        <div className={sapficoStyle.eachblock}>
                            <div style={{ color: "#FFA107", fontWeight: "600" }}>Project Type and Stages</div>
                            {/* <div style={{ fontWeight: "600" }}>Technology Stack</div> */}
                            <div className={sapficoStyle.smallboxsection}>
                                <div style={{fontSize:"14px", padding: "0px 20px", textAlign: "center" }}>
                                    Explore the essential skills and roles within the SAP FICO domain, including functional consultants, technical developers, project managers, and solution architects.
                                </div>
                            </div>
                        </div>
                        <div className={sapficoStyle.eachblock}>
                            <div style={{ color: "#FFA107", fontWeight: "600" }}>Industry Insights</div>
                            {/* <div style={{ fontWeight: "600" }}>Functional Modules</div> */}
                            <div className={sapficoStyle.smallboxsection}>
                                <div style={{fontSize:"14px", padding: "0px 20px", textAlign: "center" }}>
                                    Gain valuable insights into industry trends, challenges, and opportunities shaping the SAP FICO landscape, supported by real-world examples and case studies.
                                </div>
                            </div>
                        </div>
                        <div className={sapficoStyle.eachblock}>
                            <div style={{ color: "#FFA107", fontWeight: "600" }}>Professional Development</div>
                            {/* <div style={{ fontWeight: "600" }}>Industry Domains</div> */}
                            <div className={sapficoStyle.smallboxsection}>
                                <div style={{fontSize:"14px", padding: "0px 20px", textAlign: "center" }}>
                                    Learn about professional development opportunities for SAP FICO professionals, including certifications, training programs, and career advancement paths.
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={sapficoStyle.transsection}>
                <div className={sapficoStyle.transsectionHeading}>
                    <div style={{ fontSize: "20px", marginBottom: "10px", fontWeight: "600" }}>Exploring the SAP FICO Landscape</div>
                    <div >Modules, Solutions, and Best Practices</div>
                    <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>
                </div>
                <div className={sapficoStyle.transsectionBoxOuter}>
                    <div className={sapficoStyle.transsectionBox}>
                        <div style={{ fontSize: "18px", marginBottom: "10px", fontWeight: "600" }}>Overview of SAP FICO</div>
                        <div style={{ fontSize: "12px" }}>Dive into the foundational concepts of SAP Financial Accounting and Controlling, including key modules, solutions, and integration points.</div>
                        <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>
                    </div>
                    <div className={sapficoStyle.transsectionBox}>
                        <div style={{ fontSize: "18px", marginBottom: "10px", fontWeight: "600" }}>Implementation Methodologies</div>
                        <div style={{ fontSize: "12px" }}>Explore common methodologies for SAP FICO implementation, such as SAP Activate, ASAP, and Agile, highlighting their key features and benefits.</div>
                        <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>
                    </div>
                    <div className={sapficoStyle.transsectionBox}>
                        <div style={{ fontSize: "18px", marginBottom: "10px", fontWeight: "600" }}>Best Practices</div>
                        <div style={{ fontSize: "12px" }}>Discover industry best practices for SAP FICO projects, including requirements gathering, configuration, testing, and post-implementation support.</div>
                        <div style={{ padding: "10px", marginTop: "10px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>
                    </div>
                </div>
            </section>
            <FotterComponent />
        </div>
    )
}

export default SapficoTalentHubPage;
