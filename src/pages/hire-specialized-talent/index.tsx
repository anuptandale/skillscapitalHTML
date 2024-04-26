import { HireDeveloperPageText, HireSpecializedTalentText, HomePageText } from '@/constants/texts'
import React, { useState } from 'react'
import hireDevStyles from "./../../styles/hireDevStyles.module.css";
import IconTextButton from '@/components/atoms/ButtonWithIcon';
import CustomButton2 from '@/components/atoms/CustomButton2';
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import Navbar from '@/components/molecules/navbar';
import Image from 'next/image';
import homePageStyle from "../../styles/homePageStyles.module.css";
import Link from 'next/link';
import commonStyle, { cardsStyling } from '@/constants/commonStyle';
import css from "../../styles/sapTalentStyle.module.css"
import HireDevSectionWithImageAndIcon from '@/components/molecules/HireDevSectionWithImageAndIcon';
import FotterComponent from '@/components/molecules/Fotter';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import LensIcon from '@mui/icons-material/Lens';
import CardComponent from '@/components/atoms/card';
import sapStyle from "../../styles/sapTalentStyle.module.css"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Opacity } from '@mui/icons-material';
import { useRouter } from "next/router";
import HomeCandidateProfile from '@/components/molecules/HomeCandidateProfile';
const HireSpecializedTalentPage = () => {
    const router = useRouter();
    const HireDeveloperClicked = () => {
        router.push("/sap-talent-pool");
    };
    const handleButtonExploreNow = () => {
        router.push("/hire-sap-talent");
      };
    const [selected, setSelected] = useState("AI-Vetted");
    const [selectedtwo, setSelectedtwo] = useState("AI-Vetted");
    const [muduleSelect, setModuleSelect] = useState("SAPModules");
    const handleButtonExplore = () => {
        router.push("/hire-sap-talent");
    };
    return (
        <div>
            <Navbar />
            <section id={homePageStyle.avideoContainer} >
                <div className={homePageStyle.flexCenter}>
                    <div className={homePageStyle.topContentSection}>
                        <h1 className={`${hireDevStyles.mainHeadingHireDev}`}>
                        {HireSpecializedTalentText.topSectionHeading}
                            {/* <div>{HomePageText.heading_4}</div> */}
                        </h1>

                        <h2 className={`${hireDevStyles.mainSubHeadingHireDev}`}>
                        {HireSpecializedTalentText.topSectionSubHeading}

                        </h2>



                        <br />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "start",
                                gap: "20px",
                                // margin: "0px 0px 0px 20px",
                            }}
                        >
                            <div>
                                <div className={`${hireDevStyles.hireDevNumberTitle}`}>
                                {HireSpecializedTalentText.topSectionNumbers[0]}
                                </div>
                                <span className={`${hireDevStyles.hireDevNumberContent}`}>
                                {HireSpecializedTalentText.topSectionNumbersContent[0]}
                                </span>
                            </div>
                            <div>
                                <div className={`${hireDevStyles.hireDevNumberTitle}`}>
                                {HireSpecializedTalentText.topSectionNumbers[1]}
                                </div>
                                <span className={`${hireDevStyles.hireDevNumberContent}`}>
                                {HireSpecializedTalentText.topSectionNumbersContent[1]}
                                </span>
                            </div>
                            <div>
                                <div className={`${hireDevStyles.hireDevNumberTitle}`}>
                                {HireSpecializedTalentText.topSectionNumbers[2]}
                                </div>
                                <span className={`${hireDevStyles.hireDevNumberContent}`}>
                                {HireSpecializedTalentText.topSectionNumbersContent[2]}
                                </span>
                            </div>

                            <br />
                        </div>

                    </div>

                    <div>
                        {/* <VideoComponent
                videoSrc={"/HomePageImages/HomePageVideo.mp4"}
                videoWidth={"500"}
                videoHeight={"600"} */}
                        <Image src="/HireDeveloperImages/hireSpecializedImage.jpeg" alt="" style={{borderRadius:"5px"}} height={400} width={400} />

                    </div>
                </div>
            </section>
            <section style={commonStyle.sectionMargin}>
                <div className={hireDevStyles.TrustedCompaniesSection}>
                    <div className={hireDevStyles.TrustedCompaniesContainer}>
                        {HireDeveloperPageText.BottomImagesHeading}
                    </div>
                    <div className={hireDevStyles.trusedCompanies}>

                        <Image
                            className={hireDevStyles.amazon}
                            src={`/HireDeveloperImages/company_4.jpeg`}
                            alt="Logo"
                            height={28}
                            width={60}
                        // style={{ borderRadius: "10px" }}
                        />
                        <Image
                            className={hireDevStyles.amazon}
                            src={`/HireDeveloperImages/company_5.jpg`}
                            alt="Logo"
                            height={20}
                            width={70}
                        // style={{ borderRadius: "10px" }}
                        />

                        <Image
                            className={hireDevStyles.amazon}
                            src={`/HireDeveloperImages/company_9.jpg`}
                            alt="Logo"
                            height={20}
                            width={75}
                        // style={{ borderRadius: "10px" }}
                        />
                        <Image
                            className={hireDevStyles.amazon}
                            src={`/HireDeveloperImages/company_11.jpg`}
                            alt="Logo"
                            height={30}
                            width={50}
                        // style={{ borderRadius: "10px" }}
                        />
                        <Image
                            className={hireDevStyles.amazon}
                            src={`/HireDeveloperImages/company_12.jpeg`}
                            alt="Logo"
                            height={25}
                            width={60}
                        // style={{ borderRadius: "10px" }}
                        />
                        <Image
                            className={hireDevStyles.amazon}
                            src={`/HireDeveloperImages/company_13.jpg`}
                            alt="Logo"
                            height={20}
                            width={75}
                        // style={{ borderRadius: "10px" }}
                        />
                        <Image
                            className={hireDevStyles.amazon}
                            src={`/HireDeveloperImages/company_10.jpeg`}
                            alt="Logo"
                            height={30}
                            width={50}
                        // style={{ borderRadius: "10px" }}
                        />
                    </div>
                </div>
            </section>
            <section id={homePageStyle.ourEliteNetwork} >
        <div
          style={{ background: "#F1F1F1", padding: "10px 100px 50px 100px" }}
        >
          <div style={commonStyle.textCenter}>
            <br />
            <br />
            <h2 style={cardsStyling.sapCloudLegacyMainHeading}>
            Specialized Talent to Transform the SAP and Non-SAP Ecosystem
            </h2>
            <br />
            <h3 style={cardsStyling.sapCloudLegacySubHeading}>Access a World-Class Pool of Specialized Tech Experts to Provide Comprehensive Solutions</h3>
            <br />
          </div>
          <div className="cards" style={commonStyle.dflex_1}>
            <CardComponent
                imageUrl={"/HomePageImages/cloudDevops.png"}
                imageHeight={150}
                imageWidth={250}
                headingNumber={HomePageText.SAP_number2}
                headingText={HomePageText.SAP_heading2}
                paragraphText={HomePageText.SAP_content2}
                buttonText="Explore Now"
                onButtonClick={handleButtonExploreNow}
                buttonEnabled={false}
              />
            <CardComponent
              imageUrl={"/HomePageImages/legacySoftware.png"}
              imageHeight={210}
              imageWidth={250}
              headingNumber={HomePageText.Cloud_number2}
              headingText={HomePageText.Cloud_heading2}
              paragraphText={HomePageText.Cloud_content2}
              buttonText="Explore Now"
              onButtonClick={handleButtonExploreNow}
              buttonEnabled={false}
            />
            <CardComponent
              imageUrl={"/HomePageImages/llm.jpg"}
              imageHeight={150}
              imageWidth={250}
              headingNumber={HomePageText.Legacy_number2}
              headingText={HomePageText.Legacy_heading2}
              paragraphText={HomePageText.Legacy_content2}
              buttonText="Explore Now"
              onButtonClick={handleButtonExploreNow}
              buttonEnabled={false}
            />
          </div>
        </div>
      </section>

            <main>
                <section id={hireDevStyles.wholeContainer}>
                    <section id={hireDevStyles.superchargeContainer} >
                        {/* <div style={{ width: "80vw", margin: "auto" }}> */}
                        <HireDevSectionWithImageAndIcon
                            imageUrl={"/HireDeveloperImages/hiringdev.jpg"}
                            altText={"WhySkillsCapitalDev"}
                            Imgheight={450}
                            Imgwidth={550}
                            order="imageRight"
                            pointsIcons={HireDeveloperPageText.superChargePointsIcons}
                            heading={HireSpecializedTalentText.superchargeHeading}
                            subHeading={HireSpecializedTalentText.superchargeSubHeading}
                            noOfPoints={3}
                            points={[
                                HireSpecializedTalentText.superchargePointsHeading[0],
                                HireSpecializedTalentText.superchargePointsHeading[1],
                                HireSpecializedTalentText.superchargePointsHeading[2],
                            ]}
                            paraPoints={[
                                HireSpecializedTalentText.superchargePointsContent[0],
                                HireSpecializedTalentText.superchargePointsContent[1],
                                HireSpecializedTalentText.superchargePointsContent[2]
                            ]}
                            noOflogoImages={3}
                            logoImagesUrl={[`1`, "2", "3"]}
                            buttonEnable={false}
                        />
                        {/* </div> */}
                    </section>
                    <section className={hireDevStyles.LaserFocusContainer}>
                        <HireDevSectionWithImageAndIcon
                            imageUrl={"/HireDeveloperImages/matchingSap.png"}
                            altText={"WhySkillsCapitalDev"}
                            Imgheight={500}
                            Imgwidth={550}
                            order="imageLeft"
                            pointsIcons={HireDeveloperPageText.perfectMatchPointsIcons}
                            heading={HireSpecializedTalentText.laserHeading}
                            subHeading={HireSpecializedTalentText.laserSubHeading}
                            noOfPoints={3}
                            points={[
                                HireSpecializedTalentText.laserPointsHeading[0],
                                HireSpecializedTalentText.laserPointsHeading[1],
                                HireSpecializedTalentText.laserPointsHeading[2],
                            ]}
                            paraPoints={[
                                HireSpecializedTalentText.laserPointsContent[0],
                                HireSpecializedTalentText.laserPointsContent[1],
                                HireSpecializedTalentText.laserPointsContent[2]
                            ]}
                            noOflogoImages={3}
                            logoImagesUrl={[`1`, "2", "3"]}
                            buttonEnable={false}
                        />
                    </section>
                </section>
            </main>
            <section id={homePageStyle.ourEliteNetwork} >
                <div
                    style={{ background: "#F1F1F1", padding: "10px 100px 50px 100px" }}
                >
                    <div style={commonStyle.textCenter}>
                        <br />
                        <br />
                        <h2 style={cardsStyling.sapCloudLegacyMainHeading}>
                        Tailored Solutions for Scalable Growth
                        </h2>
                        <br />
                        <h3 style={cardsStyling.sapCloudLegacySubHeading}>Flexibility and Scalability for Your Projects. We Offer Tailored Talent Solutions to Match Your Unique Business Needs, Project Size and Complexity</h3>
                        {/* <h5 style={{ opacity: "0.7" }}>Tailored Talent Solutions to Match Your Unique Business Needs, Project Size and Complexity</h5> */}
                        <br />
                    </div>
                    <div className="cards" style={commonStyle.dflex_1}>
                        <CardComponent
                            imageUrl={"/HireDevImages/team.png"}
                            imageHeight={210}
                            imageWidth={250}
                            headingNumber={""}
                            headingText={"Agile Team Composition"}
                            paragraphText={"Whether you're embarking on a small-scale tech implementation or a large-scale transformation, we offer flexible team compositions to suit your project scope. From solo consultants to cross-functional teams, we adapt to meet your needs."}
                            buttonText="Explore"
                            onButtonClick={HireDeveloperClicked}
                            buttonEnabled={false}
                        />
                        <CardComponent
                            imageUrl={"/HireDevImages/expertise.jpg"}
                            imageHeight={210}
                            imageWidth={250}
                            headingNumber={""}
                            headingText={"On-Demand Expertise"}
                            paragraphText={"Scale your tech initiatives dynamically with our on-demand talent pool. Need additional resources for a specific phase of your project? We've got you covered. Our flexible hiring model allows you to access expertise precisely when you need it."}
                            buttonText="Explore"
                            onButtonClick={HireDeveloperClicked}
                            buttonEnabled={false}
                        />
                        <CardComponent
                            imageUrl={"/HireDevImages/engagement.jpg"}
                            imageHeight={210}
                            imageWidth={250}
                            headingNumber={""}
                            headingText={"Customized Solutions"}
                            paragraphText={"Choose from range of engagement models that align with your project requirements and budget. Whether you prefer project-based engagements, dedicated resources, or outcome-driven model, we offer solutions to ensure project's success."}
                            buttonText="Explore"
                            onButtonClick={HireDeveloperClicked}
                            buttonEnabled={false}
                        />
                    </div>
                </div>
            </section>
            {/* <section id={hireDevStyles.fontpop}>
        <div style={{textAlign:"center"}}> 
          <div id={hireDevStyles.scalableGrowthHeading}>
            Flexibility and Scalability for Your SAP Projects
          </div>
          <div className={hireDevStyles.scalableSubheading}>Tailored Talent Solutions to Match Your Unique Business Needs, Project Size and Complexity</div>
        </div>
        <div id={hireDevStyles.scalableGrowth}>
          <div id={hireDevStyles.scalableGrowthInner}>
          </div>
          <div id={hireDevStyles.scalableGrowthInner2}>
            <div style={{ display: "flex", gap: "10px" }}>
              <div>
                <Image src="/HireDevImages/team.png" alt="" height={50} width={50} />
              </div>
              <div id={hireDevStyles.mosteinnerContainer}>
                <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div>
                <div className={hireDevStyles.scalableSubheading}>Whether you&apos;re embarking on a small-scale SAP implementation or a large-scale transformation, we offer flexible team compositions to suit your project scope. From solo consultants to cross-functional teams, we adapt to meet your needs.</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <div>
                <Image src="/HireDevImages/expertise.jpg" alt="" height={50} width={50} />
              </div>
              <div id={hireDevStyles.mosteinnerContainer}>
                <div id={hireDevStyles.scalableGrowthHeading}>On-Demand Expertise</div>
                <div className={hireDevStyles.scalableSubheading}>Scale your SAP initiatives dynamically with our on-demand talent pool. Need additional resources for a specific phase of your project? We&apos;ve got you covered. Our flexible hiring model allows you to access expertise precisely when you need it.</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <div>
                <Image src="/HireDevImages/engagement.jpg" alt="" height={50} width={50} />
              </div>
              <div id={hireDevStyles.mosteinnerContainer}>
                <div id={hireDevStyles.scalableGrowthHeading}>Customized Engagement Models</div>
                <div className={hireDevStyles.scalableSubheading}>Choose from range of engagement models that align with your project requirements and budget. Whether you prefer project-based engagements, dedicated resources, or outcome-driven model, we offer solutions to ensure project&apos;s success.</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
            {/* <section style={{paddingBottom:"50px"}}>
        <div className={hireDevStyles.onboardingOuter}>
          <div style={commonStyle.textCenter}>
            <br />
            <br />
            <h2 style={cardsStyling.sapCloudLegacyMainHeading}>
              Seamless Integration and Support
            </h2>
            <br />
            <h3 style={cardsStyling.sapCloudLegacySubHeading}>Smooth Onboarding and Ongoing Support for Hassle-Free Project Execution. Expert Guidance Every Step of the Way to Ensure Project Success</h3>
            
            <br />
          </div>
          <div className={hireDevStyles.onboarding}>
            <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
              <div style={{fontSize:"22px",fontWeight:"600"}}>Comprehensive Onboarding</div>
              <div>Benefit from a streamlined onboarding process that ensures our talent seamlessly integrates into your project environment. From initial setup to knowledge transfer, we handle all aspects to minimize disruptions and maximize productivity.</div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
              <div style={{fontSize:"22px",fontWeight:"600"}}>Continuous Collaboration</div>
              <div>Experience uninterrupted collaboration with our dedicated project managers and consultants. We maintain open communication channels to address any issues or concerns promptly and ensure alignment with your project goals.</div>
            </div>
          </div>
          <div className={hireDevStyles.onboarding2}>
            <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
              <div style={{fontSize:"22px",fontWeight:"600"}}>Proactive Support</div>
              <div>Stay ahead of challenges with proactive support and regular check-ins from our team. We proactively identify potential bottlenecks and offer proactive solutions to keep your project on track and within budget.</div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
              <div style={{fontSize:"22px",fontWeight:"600"}}>Knowledge Transfer</div>
              <div>Leverage our expertise not just for the duration of your project but for long-term knowledge transfer. We ensure that insights gained during the project are documented and shared with your internal team to foster ongoing learning and development.</div>
            </div>
          </div>
        </div>
      </section> */}
            <section>
                <div className={hireDevStyles.headingunleash} >
                    <br />
                    <br />
                    <h2 style={cardsStyling.sapCloudLegacyMainHeading}>
                    Unleashing the Power of Tech Talent Expertise
                    </h2>
                    <br />
                    <h3 style={cardsStyling.sapCloudLegacySubHeading}>Elevate Your Projects with Our Talent Experience, Versatility, and Collaboration at Your Service</h3>


                </div>
                <section id={hireDevStyles.fontpopBelow}>
                    <div id={hireDevStyles.selectbar}>
                        <div style={selected === "AI-Vetted" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("AI-Vetted")}>AI-Vetted</div>
                        </div>
                        <div style={selected === "Certified" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("Certified")}>Certified</div>
                        </div>
                        <div style={selected === "Accomplished" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("Accomplished")}>Accomplished</div>
                        </div>
                        <div style={selected === "On-Demand" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("On-Demand")}>On-Demand</div>
                        </div>
                        <div style={selected === "Versatile" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("Versatile")}>Versatile</div>
                        </div>
                        <div style={selected === "Future-Ready" ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid grey" }}>
                            <div style={{ padding: "30px" }} onClick={() => setSelected("Future-Ready")}>Future-Ready</div>
                        </div>
                    </div>
                </section>
            </section>
            {selected === "AI-Vetted" && <section id={hireDevStyles.fontpop2}>
                <div id={hireDevStyles.scalableGrowth2}>
                    <div id={hireDevStyles.scalableGrowthInner}>

                        <Image src="/HireDevImages/aivette.jpg" style={{ padding: "0px" }} alt="" height={300} width={350} />
                    </div>
                    <div id={hireDevStyles.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={hireDevStyles.scalableSubheading}>Our tech professionals undergo rigorous AI-driven vetting processes to ensure their technical proficiency and expertise.</div>
                            </div>
                        </div>
                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                    </div>
                </div>
            </section>}
            {selected === "Certified" && <section id={hireDevStyles.fontpop2}>
                <div id={hireDevStyles.scalableGrowth2}>
                    <div id={hireDevStyles.scalableGrowthInner}>
                        <Image src="/HireDevImages/collaburation.avif" style={{ padding: "0px" }} alt="" height={300} width={300} />
                    </div>
                    <div id={hireDevStyles.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={hireDevStyles.scalableSubheading}>Our talent holds relevant certifications from tech and other recognized institutions, validating their skill set and knowledge.</div>
                            </div>

                        </div>
                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                    </div>
                </div>
            </section>}
            {selected === "Accomplished" && <section id={hireDevStyles.fontpop2}>
                <div id={hireDevStyles.scalableGrowth2}>
                    <div id={hireDevStyles.scalableGrowthInner}>

                        <Image src="/HireDevImages/supportHire.jpg" style={{ padding: "0px" }} alt="" height={300} width={300} />
                    </div>
                    <div id={hireDevStyles.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={hireDevStyles.scalableSubheading}>With years of hands-on experience in tech implementation, customization, and support, our consultants bring invaluable expertise.</div>
                            </div>
                        </div>
                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>

                    </div>
                </div>
            </section>}
            {selected === "On-Demand" && <section id={hireDevStyles.fontpop2}>
                <div id={hireDevStyles.scalableGrowth2}>
                    <div id={hireDevStyles.scalableGrowthInner}>

                        <Image src="/HireDevImages/transfer.jpg" style={{ padding: "0px" }} alt="" height={300} width={300} />
                    </div>
                    <div id={hireDevStyles.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={hireDevStyles.scalableSubheading}>Our tech talent is readily available to meet your project needs, offering flexible engagement models and quick deployment.</div>
                            </div>
                        </div>

                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>
                    </div>
                </div>
            </section>}
            {selected === "Versatile" && <section id={hireDevStyles.fontpop2}>
                <div id={hireDevStyles.scalableGrowth2}>
                    <div id={hireDevStyles.scalableGrowthInner}>

                        <Image src="/HireDevImages/versatile.jpg" style={{ padding: "0px" }} alt="" height={300} width={300} />
                    </div>
                    <div id={hireDevStyles.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={hireDevStyles.scalableSubheading}>Equipped with a diverse skill set covering tech modules and technologies, our talent can adapt to different requirements seamlessly.</div>
                            </div>
                        </div>

                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>
                    </div>
                </div>
            </section>}
            {selected === "Future-Ready" && <section id={hireDevStyles.fontpop2}>
                <div id={hireDevStyles.scalableGrowth2}>
                    <div id={hireDevStyles.scalableGrowthInner}>

                        <Image src="/HireDevImages/futureready.png" style={{ padding: "0px" }} alt="" height={300} width={300} />
                    </div>
                    <div id={hireDevStyles.scalableGrowthInner2}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div id={hireDevStyles.mosteinnerContainer}>
                                {/* <div id={hireDevStyles.scalableGrowthHeading}>Agile Team Composition</div> */}
                                <div className={hireDevStyles.scalableSubheading}>Our talent stays updated with latest tech trends and innovations, ensuring they are equipped to handle evolving technology landscapes.</div>
                            </div>
                        </div>

                        <div style={{ padding: "40px", marginTop: "30px", display: "flex", alignContent: "center", gap: "5px" }}><AddCircleIcon sx={{ color: "darkorange" }} /> <span>Read More</span></div>
                    </div>
                </div>
            </section>}

            {/* <section id={hireDevStyles.insightsection}>
        <div style={{ fontSize: "23px", fontWeight: "600", marginBottom: "50px" }}>Attributes of Our Elite SAP Talent</div>
        <div id={css.insightOuter}>
          <div id={hireDevStyles.insight}>
            <div style={{ fontWeight: "600" }}>Expertise in SAP Modules</div>
            <div>Our talent possesses deep knowledge and hands-on experience in various SAP modules, including but not limited to SAP ECC, S/4HANA, SAP Business One, SAP CRM, SAP SCM, and SAP HR.</div>
          </div>
          <div id={hireDevStyles.insight}>
            <div style={{ fontWeight: "600" }}>Technical Proficiency</div>
            <div>Our SAP professionals are skilled in SAP technical areas such as ABAP development, SAP Basis, SAP Fiori/UI5, SAP BW/BI, SAP HANA, and more, ensuring smooth implementation and customization of SAP solutions.</div>
          </div>
          <div id={hireDevStyles.insight}>
            <div style={{ fontWeight: "600" }}>Functional Competence</div>
            <div>With expertise in functional areas like finance and controlling (FICO), materials management (MM), sales and distribution (SD), production planning (PP) etc., our talent can address diverse project requirements.</div>
          </div>

        </div>
        <div id={css.insightOuter}>
          <div id={hireDevStyles.insight}>
            <div style={{ fontWeight: "600" }}>Industry Knowledge</div>
            <div>Our SAP experts bring industry-specific knowledge and experience across sectors such as manufacturing, healthcare, retail, finance, and telecom, enabling tailored SAP solutions aligned with industry best practices.</div>
          </div>
          <div id={hireDevStyles.insight}>
            <div style={{ fontWeight: "600" }}>Role Types</div>
            <div>Our SAP talent encompasses wide range of roles, including developers, consultants, architects, project managers, and architects. Each role brings a unique set of skills and experience to cater to diverse project needs.</div>
          </div>
          <div id={hireDevStyles.insight}>
            <div style={{ fontWeight: "600" }}>Project Types</div>
            <div>Our professionals have hands-on experience in various types of SAP projects, including design, implementation, enhancements, migration, support etc., ensuring adaptability and proficiency to address varied requirements.</div>
          </div>

        </div>
      </section> */}
            {/* <section id={hireDevStyles.fontpop}>
        <div id={hireDevStyles.scalableGrowth3}>
          <div id={hireDevStyles.scalableGrowthInner2}>

            <div id={hireDevStyles.scalableGrowthHeading}>
              Ensuring Excellence: Assessing SAP Talent
            </div>
            <div className={hireDevStyles.scalableSubheading}>Meticulous assessment to ensure the proficiency, compatibility, and overall suitability of our SAP talent.</div>

          </div>
          <div >
            <div id={hireDevStyles.boxContainer}>
              <div id={hireDevStyles.boxes}>
                <Image src="/HireDevImages/transfer.jpg" style={{ padding: "80px" }} alt="" height={100} width={100} />
                <div>Technical Competency</div>
                <div>Thorough assessment of SAP skills and knowledge.</div>
              </div>
              <div id={hireDevStyles.boxes}>
                <Image src="/HireDevImages/transfer.jpg" style={{ padding: "80px" }} alt="" height={100} width={100} />
                <div>Professional Experience</div>
                <div>Verification of past work experience and project achievements.</div>
              </div>
              <div id={hireDevStyles.boxes}>
                <Image src="/HireDevImages/transfer.jpg" style={{ padding: "80px" }} alt="" height={100} width={100} />
                <div>Cultural Fit</div>
                <div>Evaluation of alignment with company values and team dynamics.</div>
              </div>
            </div>
            <div id={hireDevStyles.boxContainer}>
              <div id={hireDevStyles.boxes2}>
                <Image src="/HireDevImages/transfer.jpg" style={{ padding: "80px" }} alt="" height={100} width={100} />
                <div>Cultural Fit</div>
                <div>Evaluation of alignment with company values and team dynamics.</div>
              </div>
              <div id={hireDevStyles.boxes2}>
                <Image src="/HireDevImages/transfer.jpg" style={{ padding: "80px" }} alt="" height={100} width={100} />
                <div>Cultural Fit</div>
                <div>Evaluation of alignment with company values and team dynamics.</div>
              </div>
              <div id={hireDevStyles.boxes2}>
                <Image src="/HireDevImages/transfer.jpg" style={{ padding: "80px" }} alt="" height={100} width={100} />
                <div>Cultural Fit</div>
                <div>Evaluation of alignment with company values and team dynamics.</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
            {/* <section id={hireDevStyles.fontpop3}>

        <div id={hireDevStyles.OuterContainer}>
          <div id={hireDevStyles.boxSelector}>

            <section id={hireDevStyles.fontpopBelow}>
              <div id={hireDevStyles.selectbar}>
                <div className={hireDevStyles.eachbutton} >
                  <div style={{ padding: "30px" }} onClick={() => setSelectedtwo("AI-Vetted")}>AI-Vetted</div>
                  <LensIcon style={selectedtwo === "AI-Vetted" ? { color: "yellow" } : { color: "grey" }} />
                </div>
                <div className={hireDevStyles.eachbutton} >
                  <div style={{ padding: "30px" }} onClick={() => setSelectedtwo("Certified")}>Certified</div>
                  <LensIcon style={selectedtwo === "Certified" ? { color: "yellow" } : { color: "grey" }} />
                </div>
                <div className={hireDevStyles.eachbutton} >
                  <div style={{ padding: "30px" }} onClick={() => setSelectedtwo("Accomplished")}>Accomplished</div>
                  <LensIcon style={selectedtwo === "Accomplished" ? { color: "yellow" } : { color: "grey" }} />
                </div>
                <div className={hireDevStyles.eachbutton} >
                  <div style={{ padding: "30px" }} onClick={() => setSelectedtwo("On-Demand")}>On-Demand</div>
                  <LensIcon style={selectedtwo === "On-Demand" ? { color: "yellow" } : { color: "grey" }} />
                </div>
                <div className={hireDevStyles.eachbutton} >
                  <div style={{ padding: "30px" }} onClick={() => setSelectedtwo("Versatile")}>Versatile</div>
                  <LensIcon style={selectedtwo === "Versatile" ? { color: "yellow" } : { color: "grey" }} />
                </div>
                <div className={hireDevStyles.eachbutton} >
                  <div style={{ padding: "30px" }} onClick={() => setSelectedtwo("Future-Ready")}>Future-Ready</div>
                  <LensIcon style={selectedtwo === "Future-Ready" ? { color: "yellow" } : { color: "grey" }} />
                </div>
              </div>
            </section>
            {selectedtwo === "AI-Vetted" && <section id={hireDevStyles.selectboxContent}>
              <div>Our SAP professionals are meticulously vetted through advanced AI-driven processes. These procedures are designed to assess their technical proficiency with precision and thoroughness.</div>
              <div>We guarantee the expertise of our SAP professionals, ensuring they possess the requisite skills and knowledge to excel in their roles. Through AI-driven evaluations, we ascertain their proficiency and expertise, fostering confidence in their capabilities.</div>
            </section>}
            {selectedtwo === "Certified" && <section id={hireDevStyles.selectboxContent}>
              <div>Our talent possesses certifications from SAP, affirming their expertise and proficiency in the relevant domain.</div>
              <div>Additionally, they hold certifications from other reputable institutions, further substantiating their skill set and knowledge.</div>
            </section>}
            {selectedtwo === "Accomplished" && <section id={hireDevStyles.selectboxContent}>
              <div>Our consultants possess extensive practical knowledge gained through years of actively implementing, customizing, and supporting SAP systems, ensuring a deep understanding of the platform&apos;s nuances and capabilities.</div>
              <div>With their seasoned background, our consultants offer invaluable insights and solutions, leveraging their wealth of experience to tackle complex challenges and drive successful SAP implementations and support initiatives.</div>
            </section>}
            {selectedtwo === "On-Demand" && <section id={hireDevStyles.selectboxContent}>
              <div>Access our pool of SAP talent tailored to your project requirements. Whether you need short-term assistance or long-term collaboration, we offer customizable engagement models to suit your needs.</div>
              <div>Benefit from our swift deployment process. Our SAP experts are ready to integrate seamlessly into your project, ensuring timely delivery and efficient utilization of resources.</div>
            </section>}
            {selectedtwo === "Versatile" && <section id={hireDevStyles.selectboxContent}>
              <div>Our talent possesses a comprehensive range of skills encompassing various SAP modules and cutting-edge technologies, ensuring versatility in meeting diverse project needs effectively.</div>
              <div>With the ability to swiftly adapt to different requirements, our talent seamlessly integrates their expertise across various platforms and technologies, guaranteeing optimal performance and success in every endeavor.</div>
            </section>}
            {selectedtwo === "Future-Ready" && <section id={hireDevStyles.selectboxContent}>
              <div>Our team remains abreast of the latest SAP trends and innovations through ongoing education and training, ensuring they possess the skills necessary to navigate evolving technology landscapes effectively.</div>
              <div>By staying updated with emerging SAP trends and innovations, our talent cultivates the flexibility and proficiency needed to tackle dynamic technological environments, ensuring our readiness for future challenges.</div>
            </section>}

          </div>
        </div>
      </section> */}
            <section>
                <div className={sapStyle.leftbuttonSection}>
                    <div className={sapStyle.leftbuttonHeadingSection}>
                        <div style={{ fontSize: "43px", fontWeight: "600" }}>Elite Tech Talent for Specialized Tech</div>
                        <div style={{ fontSize: "20px", opacity: "0.8", textAlign: "center" }}>Harness the Power of AI to Connect and Deploy Top Talent Across Specialized Tech Domains</div>
                    </div>
                    <div className={sapStyle.buttonSection}>
                        <div style={{ marginTop: "50px" }}>
                            <div className={muduleSelect === "SAPModules" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPModules")}>Legacy Tech</div>
                            <div className={muduleSelect === "SAPSolutions" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPSolutions")}>Cloud & DevOps</div>
                            <div className={muduleSelect === "SAPFunctional" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPFunctional")}>AI/ML</div>
                            {/* <div className={muduleSelect === "SAPTechnical" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("SAPTechnical")}> SAP Technical Expertise</div>
                            <div className={muduleSelect === "ProjectType" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("ProjectType")}>SAP Project Types</div>
                            <div className={muduleSelect === "RoleType" ? sapStyle.singleButtonClicked : sapStyle.singleButton} onClick={() => setModuleSelect("RoleType")}>SAP Talent Roles</div> */}
                        </div>
                        {muduleSelect === "SAPModules" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600", color: "#2871FF" }}>Legacy Tech</div>
                            {/* <div style={{ fontSize: "19px", fontWeight: "600" }}>Explore Talent for a Diverse Array of 50+ SAP Modules and Sub-Modules</div> */}
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>Covering Every Aspect of SAP Expertise</div>
                            <div style={{ fontSize: "16px", color: "#3C3C3C" }}>50+</div> */}
                            <table className={sapStyle.tableClass}>
                            <tbody>
                                <tr >
                                    <td style={{ fontWeight: "600" }}>Mainframe Systems</td>
                                    <td style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                        <div className={sapStyle.moduletype2}>IBM zSeries</div>
                                        <div className={sapStyle.moduletype2}>IBM iSeries</div>
                                    </td>
                                </tr>
                                <tr >
                                    <td style={{ fontWeight: "600" }}>Database Management Systems</td>
                                    <td style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                        <div className={sapStyle.moduletype2}>IBM Db2</div>
                                        <div className={sapStyle.moduletype2}>Oracle Database</div>
                                        <div className={sapStyle.moduletype2}>Microsoft SQL Server</div>
                                    </td>
                                </tr>

                                <tr >
                                    <td style={{ fontWeight: "600" }}>Enterprise Resource Planning </td>
                                    <td style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                        <div className={sapStyle.moduletype2}>SAP ECC</div>
                                        <div className={sapStyle.moduletype2}>Oracle E-Business Suite</div>
                                        <div className={sapStyle.moduletype2}>JD Edwards</div>
                                    </td>
                                </tr>
                                <tr >
                                    <td style={{ fontWeight: "600" }}>Customer Relationship Management </td>
                                    <td style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                        <div className={sapStyle.moduletype2}>Salesforce</div>
                                        <div className={sapStyle.moduletype2}>Microsoft Dynamics</div>
                                        <div className={sapStyle.moduletype2}>SAP CRM</div>
                                    </td>
                                </tr>

                                <tr >

                                    <td style={{ fontWeight: "600" }}>Document Management Systems </td>
                                    <td style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                        <div className={sapStyle.moduletype2}>IBM FileNet</div>
                                        <div className={sapStyle.moduletype2}>OpenText Documentum</div>
                                        <div className={sapStyle.moduletype2}>Laserfiche</div>
                                    </td>


                                </tr>
                                </tbody>
                            </table>

                        </div>}
                        {muduleSelect === "SAPSolutions" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600", color: "#2871FF" }}>Cloud & DevOps</div>
                            {/* <div style={{ fontSize: "19px", fontWeight: "600" }}>Discover Consultants for a Wide Range of 30+ SAP Solutions and Specializations</div> */}
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>Tailored Solutions for Every Business Need</div>
                            <div style={{ fontSize: "16px", color: "#3C3C3C" }}>40+</div> */}
                            <table className={sapStyle.tableClass}>

                                <tr >
                                    <td style={{ fontWeight: "600" }}>Cloud Providers</td>
                                    <td style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                        <div className={sapStyle.moduletype2}>Amazon Web Services</div>
                                        <div className={sapStyle.moduletype2}>Microsoft Azure</div>
                                        <div className={sapStyle.moduletype2}>Google Cloud Platform</div>
                                        <div className={sapStyle.moduletype2}>IBM Cloud</div>
                                    </td>
                                </tr>
                                <tr >
                                    <td style={{ fontWeight: "600" }}>Containers & Orchestration</td>
                                    <td style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                        <div className={sapStyle.moduletype2}>Docker</div>
                                        <div className={sapStyle.moduletype2}>Kubernetes</div>
                                        <div className={sapStyle.moduletype2}>OpenShift</div>
                                        <div className={sapStyle.moduletype2}>Docker Swarm</div>
                                    </td>
                                </tr>

                                <tr >
                                    <td style={{ fontWeight: "600" }}>Continuous Integration/Continuous Deployment </td>
                                    <td style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                        <div className={sapStyle.moduletype2}>Jenkins</div>
                                        <div className={sapStyle.moduletype2}>GitLab CI/CD</div>
                                        <div className={sapStyle.moduletype2}>CircleCI</div>
                                        <div className={sapStyle.moduletype2}>Travis CI</div>
                                    </td>
                                </tr>
                                <tr >
                                    <td style={{ fontWeight: "600" }}>Infrastructure as Code </td>
                                    <td style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                        <div className={sapStyle.moduletype2}>Terraform</div>
                                        <div className={sapStyle.moduletype2}>AWS CloudFormation</div>
                                        <div className={sapStyle.moduletype2}>Ansible</div>
                                        <div className={sapStyle.moduletype2}>Puppet</div>
                                    </td>
                                </tr>

                                <tr >

                                    <td style={{ fontWeight: "600" }}>Monitoring & Logging </td>
                                    <td style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                        <div className={sapStyle.moduletype2}>Prometheus</div>
                                        <div className={sapStyle.moduletype2}>Grafana</div>
                                        <div className={sapStyle.moduletype2}>ELK Stack</div>
                                        <div className={sapStyle.moduletype2}>New Relic</div>
                                    </td>


                                </tr>
                            </table>

                        </div>}
                        {muduleSelect === "SAPFunctional" && <div className={sapStyle.buttonContent}>
                            <div style={{ fontSize: "25px", fontWeight: "600", color: "#2871FF" }}>AI/ML</div>
                            {/* <div style={{ fontSize: "19px", fontWeight: "600" }}>Figure out Our SAP Talent&apos;s Functional Proficiency Across 40+ Key Functional Areas</div> */}
                            {/* <div style={{ fontSize: "16px", color: "#3C3C3C" }}>Functional Expertise to Drive Business Processes</div>
                            <div style={{ fontSize: "16px", color: "#3C3C3C" }}>20+</div> */}
                            <table className={sapStyle.tableClass}>

                                <tr >
                                    <td style={{ fontWeight: "600" }}>Machine Learning Frameworks</td>
                                    <td style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                        <div className={sapStyle.moduletype2}>TensorFlow</div>
                                        <div className={sapStyle.moduletype2}>PyTorch</div>
                                        <div className={sapStyle.moduletype2}>scikit-learn</div>
                                        <div className={sapStyle.moduletype2}>Keras</div>
                                    </td>
                                </tr>
                                <tr >
                                    <td style={{ fontWeight: "600" }}>Natural Language Processing</td>
                                    <td style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                        <div className={sapStyle.moduletype2}>NLTK</div>
                                        <div className={sapStyle.moduletype2}>BERT</div>
                                        <div className={sapStyle.moduletype2}>GPT</div>
                                    </td>
                                </tr>

                                <tr >
                                    <td style={{ fontWeight: "600" }}>Computer Vision </td>
                                    <td style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                        <div className={sapStyle.moduletype2}>OpenCV</div>
                                        <div className={sapStyle.moduletype2}>TensorFlow Object Detection API</div>
                                        <div className={sapStyle.moduletype2}>YOLO</div>
                                        <div className={sapStyle.moduletype2}>ImageNet</div>
                                    </td>
                                </tr>
                                <tr >
                                    <td style={{ fontWeight: "600" }}>Reinforcement Learning </td>
                                    <td style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                        <div className={sapStyle.moduletype2}>OpenAI Gym</div>
                                        <div className={sapStyle.moduletype2}>RLlib</div>
                                        <div className={sapStyle.moduletype2}>Deep Q-Networks (DQN)</div>
                                    </td>
                                </tr>


                            </table>

                        </div>}

                    </div>
                </div>
            </section>
            <section id={sapStyle.secondsection}>
                <div style={{ fontSize: "32px", fontWeight: "600" }}>Ensuring Excellence: Assessing Specialized Tech Talent</div>
                <h3 style={{ opacity: "0.7" }}>Meticulous assessment to ensure the proficiency, compatibility, and overall suitability of our niche talent.</h3>
                <div id={sapStyle.threeimage}>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/HireDevImages/tech1.webp" height={130} width={190} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Technical Competency</div>
                        <div style={{ fontSize: "14px" }}>Thorough assessment of tech skills and knowledge</div>
                    </div>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/HireDevImages/proexp.avif" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Professional Experience</div>
                        <div style={{ fontSize: "14px" }}>Verification of past work experience and project achievements.</div>
                    </div>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/HireDevImages/tech2.jpg" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Cultural Fit</div>
                        <div style={{ fontSize: "14px" }}>Evaluation of alignment with company values and team dynamics.</div>
                    </div>

                </div>
                <br />
                <div id={sapStyle.threeimage}>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/HireDevImages/certification.jpg" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Certifications and Credentials</div>
                        <div style={{ fontSize: "14px" }}>Validation of relevant certifications and qualifications.</div>
                    </div>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/HireDevImages/tech3.png" height={130} width={130} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Background Check</div>
                        <div style={{ fontSize: "14px" }}>Verification of educational and employment backgrounds.</div>
                    </div>
                    <div id={sapStyle.threeimagesection}>
                        <div><Image src="/HireDevImages/softskill.jpg" height={130} width={190} alt="" /></div>
                        <div style={{ fontWeight: "600" }}>Soft Skills Assessment</div>
                        <div style={{ fontSize: "14px" }}>Evaluation of communication, teamwork, and adaptability.</div>
                    </div>

                </div>
            </section>



            <section style={{ marginBottom: "-80px" }}>
                <div className={homePageStyle.backGroundBlueHomePage}>
                    <div>
                        <h1 id={hireDevStyles.heading}>
                        Elite Talent for Top Legacy, Cloud and AI/ML Vendors
                        </h1>
                        <br />
                        <br />
                        <br />
                        {/* <p style={blueSection.para}>{HomePageText.topCompaniesPara}</p> */}
                        <br />
                        <br />

                        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>


                            <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px", height: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Image
                                    className={hireDevStyles.amazon}
                                    src={`/HireDeveloperImages/hireCompany1.png`}
                                    alt="Logo"
                                    height={100}
                                    width={260}
                                    style={{ marginTop: "0px", borderRadius: "10px" }}
                                />
                            </div>

                            <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px", height: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Image
                                    className={hireDevStyles.amazon}
                                    src={`/HireDeveloperImages/hireCompany2.jpg`}
                                    alt="Logo"
                                    height={150}
                                    width={250}
                                    style={{ marginTop: "0px", borderRadius: "10px" }}
                                />
                            </div>
                            <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px", height: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Image
                                    className={hireDevStyles.amazon}
                                    src={`/HireDeveloperImages/hireCompany3.webp`}
                                    alt="Logo"
                                    height={120}
                                    width={200}
                                    style={{ borderRadius: "10px" }}
                                />
                            </div>
                            <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px", height: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Image
                                    className={hireDevStyles.amazon}
                                    src={`/HireDeveloperImages/hireCompany4.png`}
                                    alt="Logo"
                                    height={90}
                                    width={180}
                                    style={{ borderRadius: "10px" }}
                                />
                            </div>

                            <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px", height: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Image
                                    className={hireDevStyles.amazon}
                                    src={`/HireDeveloperImages/hireCompany5.jpg`}
                                    alt="Logo"
                                    height={140}
                                    width={270}
                                    style={{ borderRadius: "10px" }}
                                />
                            </div>
                            <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px", height: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Image
                                    className={hireDevStyles.amazon}
                                    src={`/HireDeveloperImages/hireCompany6.png`}
                                    alt="Logo"
                                    height={140}
                                    width={260}
                                    style={{ borderRadius: "10px" }}
                                />
                            </div>
                            <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px", height: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Image
                                    className={hireDevStyles.amazon}
                                    src={`/HireDeveloperImages/hireCompany7.webp`}
                                    alt="Logo"
                                    height={140}
                                    width={230}
                                    style={{ borderRadius: "10px" }}
                                />
                            </div>
                            <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px", height: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Image
                                    className={hireDevStyles.amazon}
                                    src={`/HireDeveloperImages/salesfor.png`}
                                    alt="Logo"
                                    height={130}
                                    width={230}
                                    style={{ borderRadius: "10px" }}
                                />
                            </div>
                            <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px", height: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Image
                                    className={hireDevStyles.amazon}
                                    src={`/HireDeveloperImages/hireCompany8.png`}
                                    alt="Logo"
                                    height={80}
                                    width={230}
                                    style={{ borderRadius: "10px" }}
                                />
                            </div>

                            {/* <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px", height: "100px" }}>
                                <Image
                                    className={hireDevStyles.amazon}
                                    src={`/HireDeveloperImages/company_8.jpeg`}
                                    alt="Logo"
                                    height={70}
                                    width={250}
                                    style={{ borderRadius: "10px" }}
                                />
                            </div>
                            <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px", height: "100px" }}>
                                <Image
                                    className={hireDevStyles.amazon}
                                    src={`/HireDeveloperImages/company_9.jpg`}
                                    alt="Logo"
                                    height={50}
                                    width={230}
                                    style={{ marginTop: "27px" }}
                                />
                            </div>
                            <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px", height: "100px" }}>
                                <Image
                                    className={hireDevStyles.amazon}
                                    src={`/HireDeveloperImages/company_10.jpeg`}
                                    alt="Logo"
                                    height={80}
                                    width={150}
                                    style={{ borderRadius: "10px" }}
                                />
                            </div>
                            <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px", height: "100px" }}>
                                <Image
                                    className={hireDevStyles.amazon}
                                    src={`/HireDeveloperImages/company_11.jpg`}
                                    alt="Logo"
                                    height={80}
                                    width={150}
                                    style={{ borderRadius: "10px" }}
                                />
                            </div>

                            <div style={{ backgroundColor: "white", borderRadius: "10px", width: "300px", height: "100px" }}>
                                <Image
                                    className={hireDevStyles.amazon}
                                    src={`/HireDeveloperImages/company_13.jpg`}
                                    alt="Logo"
                                    height={50}
                                    width={240}
                                    style={{ marginTop: "30px", borderRadius: "10px" }}
                                />
                            </div> */}


                        </div>
                    </div>
                </div>
            </section>
            <section className={homePageStyle.carauselOutercontainer}>
          <HomeCandidateProfile/>
          </section>
            <FotterComponent />
        </div>
    )
}

export default HireSpecializedTalentPage
