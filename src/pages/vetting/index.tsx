import FotterComponent from '@/components/molecules/Fotter'
import Navbar from '@/components/molecules/navbar'
import Image from 'next/image'
import React from 'react'
import style from "../../styles/vettingStyles.module.css";
import CardComponent from '@/components/atoms/card';
import commonStyle, { accordianStylingHomePage, cardsStyling } from '@/constants/commonStyle';
import { VettingPageText } from '@/constants/texts';
import homePageStyle from "../../styles/homePageStyles.module.css"
import hireDevStyles from "../../styles/hireDevStyles.module.css"
import CustomButton2 from '@/components/atoms/CustomButton2';
import HourglassEmptyRoundedIcon from "@mui/icons-material/HourglassEmptyRounded";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Link from 'next/link';
import { useRouter } from "next/router";
import AccordionComponent from '@/components/atoms/accodion';
import ContentComponent from '@/components/molecules/sectionWithImageAndIcon';

const Vetting = () => {
    const router = useRouter();
  const handleButtonExplore = () => {

  }
  const launchCareerJourneyClicked = () => {
    router.push("/sap-talent-pool");
  };
  return (
    <div className={style.font}>
      <section>
        <Navbar />
      </section>

      <section id={homePageStyle.avideoContainer} >
          <div className={homePageStyle.flexCenter}>
            <div className={homePageStyle.topContentSection}>
              <h1 className={homePageStyle.homePageMainHeading}>
                {/* <div>{VettingPageText.heading_1}</div>
                <div>{VettingPageText.heading_2}</div>
                <div>{VettingPageText.heading_3}</div> */}
                <div>{VettingPageText.heading_4}</div>
              </h1>

              <h2 className={homePageStyle.homePageMainSubHeading}>
                {VettingPageText.heading2}
                <br /> {VettingPageText.heading2b}
              </h2>
              <p className={homePageStyle.homePageMainHeadingPara}>
                {VettingPageText.heading3} <br /> {VettingPageText.heading3b} <br />
                {VettingPageText.heading3c}
              </p>

              <div className={homePageStyle.topTwoButtons}>
                <Link href="/hire-sap-talent">
                  <CustomButton2
                    label={"Hire Elite Talent"}
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

                <CustomButton2
                  label={"Explore Talent Pool"}
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
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "60px 0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingRight: "25px",
                    color: "#000",
                    fontFamily: "Poppins",
                    fontSize: "17px",
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
                  <div style={{ fontWeight: "600" }}>{VettingPageText.threeTagLine[0]}{" "}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingRight: "25px",
                    color: "#000",
                    fontFamily: "Poppins",
                    fontSize: "17px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                  }}
                >
                  <LeaderboardOutlinedIcon
                    style={{ fontSize: "32px", paddingRight: "5px" }}
                  />
                  <div style={{ fontWeight: "600" }}>{VettingPageText.threeTagLine[1]}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingRight: "25px",
                    color: "#000",
                    fontFamily: "Poppins",
                    fontSize: "17px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                  }}
                >
                  <GroupsOutlinedIcon
                    style={{ fontSize: "42px", paddingRight: "10px" }}
                  />
                  <div style={{ fontWeight: "600" }}>{VettingPageText.threeTagLine[2]}</div>
                </div>
              </div>
            </div>

            <div>
              {/* <VideoComponent
                videoSrc={"/HomePageImages/HomePageVideo.mp4"}
                videoWidth={"500"}
                videoHeight={"600"} */}
              <Image src="/VettingImages/vetting1.webp" width={400} height={350} style={{borderRadius:"5px"}} alt=""  />

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
            {VettingPageText.headingCard}
            </h2>
            <br />
            <br />
          </div>
          <div className="cards" style={commonStyle.dflex_1}>
          <CardComponent
              imageUrl={"/VettingImages/vetting2.avif"}
              imageHeight={210}
              imageWidth={250}
              headingNumber={VettingPageText.SAP_number}
              headingText={""}
              paragraphText={VettingPageText.SAP_content}
              buttonText="Explore"
              onButtonClick={handleButtonExplore}
              buttonEnabled={true}
            />

            <CardComponent
              imageUrl={"/VettingImages/vetting6.webp"}
              imageHeight={200}
              imageWidth={250}
              headingNumber={VettingPageText.Cloud_number}
              headingText={""}
              paragraphText={VettingPageText.Cloud_content}
              buttonText="Explore"
              onButtonClick={handleButtonExplore}
              buttonEnabled={true}
            />
            <CardComponent
              imageUrl={"/VettingImages/vetting8.jpg"}
              imageHeight={230}
              imageWidth={190}
              headingNumber={VettingPageText.Legacy_number}
              headingText={""}
              paragraphText={VettingPageText.Legacy_content}
              buttonText="Explore"
              onButtonClick={handleButtonExplore}
              buttonEnabled={true}
            />
          </div>
        </div>
      </section>

      
      
      <main className={homePageStyle.onDemandStyle} >
        <section >
          <div className="accodiaonHome">
            <div className={homePageStyle.ondemandflex} >
              <div >
                <h2 style={accordianStylingHomePage.accordianStylingHeading}>
                  {VettingPageText.thirdHeadingH1}
                </h2>

                <p style={accordianStylingHomePage.accordianStylingPara}>
                  {VettingPageText.thirdPara}
                </p>
                <br />
                <br />
                <AccordionComponent
                  title={VettingPageText.accodiaonHeading1}
                  content={VettingPageText.accordionContent1}
                />
                <br />
                <AccordionComponent
                  title={VettingPageText.accodiaonHeading2}
                  content={VettingPageText.accordionContent2}
                />
                <br />
                <AccordionComponent
                  title={VettingPageText.accodiaonHeading3}
                  content={VettingPageText.accordionContent3}
                />
              </div>
              <div>
                <Image
                  src={"/VettingImages/vetting9.png"}
                  alt="Accordian Image"
                  width={442}
                  height={350}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className={homePageStyle.chooseDeveloper} >
          <ContentComponent
            imageUrl={"/VettingImages/vetting10.avif"}
            altText={"WhySkillsCapitalDev"}
            Imgheight={400}
            Imgwidth={500}
            para={""}
            order="imageLeft"
            pointsIcons={VettingPageText.pointsIcons}
            heading={VettingPageText.whyOurDevelopersHeading}
            subHeading={VettingPageText.whyOurDevelopersPara}
            noOfPoints={3}
            points={[
              VettingPageText.whyOurDevelopersSubHeading1,
              VettingPageText.whyOurDevelopersSubHeading2,
              VettingPageText.whyOurDevelopersSubHeading3,
            ]}
            paraPoints={VettingPageText.paraPoints}
            noOflogoImages={3}
            logoImagesUrl={[`1`, "2", "3"]}
            buttonEnable={false}
          />
        </section>
        <main className={homePageStyle.onDemandStyle} >
        <section >
          <div className="accodiaonHome">
            <div className={homePageStyle.ondemandflex} >
              <div >
                <h2 style={accordianStylingHomePage.accordianStylingHeading}>
                  {VettingPageText.thirdHeadingH12}
                </h2>

                <p style={accordianStylingHomePage.accordianStylingPara}>
                  {VettingPageText.thirdPara2}
                </p>
                <br />
                <br />
                <AccordionComponent
                  title={VettingPageText.accodiaonHeading12}
                  content={VettingPageText.accordionContent12}
                />
                <br />
                <AccordionComponent
                  title={VettingPageText.accodiaonHeading22}
                  content={VettingPageText.accordionContent22}
                />
                <br />
                <AccordionComponent
                  title={VettingPageText.accodiaonHeading32}
                  content={VettingPageText.accordionContent32}
                />
              </div>
              <div>
                <Image
                  src={"/VettingImages/vetting11.jpg"}
                  alt="Accordian Image"
                  width={442}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className={hireDevStyles.outerhowitwork}>
          
            <div className={hireDevStyles.howitHeading}>How it works?</div>
            <div className={hireDevStyles.howitwork}>
              <div>
                <div className={hireDevStyles.steps}>Step 1</div>
                <div className={hireDevStyles.firstbox}>
                  <Image src="/VettingImages/vetting12.png" alt="" height={150} width={150} />
                  <div></div>
                  <div style={{ textAlign: "center" }}>Client Submits Job Requirements on Client
                    Portal or Shares with
                    their Account Manager</div>
                </div>
              </div>
              {/* <ArrowForwardIcon /> */}
              <div>
                <div className={hireDevStyles.steps2}>Step 2</div>
                <div className={hireDevStyles.secondbox}>
                  <Image src="/VettingImages/vetting13.avif" alt="" height={150} width={150} />
                  <div style={{ textAlign: "center" }}>Al Talent Cloud Shares
                    the Most Suitable Pre-
                    Vetted Matching Profiles
                    with the Client</div>
                </div>
              </div>
              {/* <ArrowForwardIcon/> */}
              <div>
                <div className={hireDevStyles.steps3}>Step 3</div>
                <div className={hireDevStyles.thirdbox}>
                  <Image src="/VettingImages/vetting14.avif" alt="" height={150} width={150} />
                  <div style={{ textAlign: "center" }}>Profiles
                    for Further &
                    Assessment and Selects
                    the Final Tarent/Team</div>
                </div>
              </div>
            
          </div>
          <CustomButton2
            label="Hire Now"
            // onClick={hirenowClick}
            buttonStyle={{
              width: "262px",
              height: "51.6px",
              border: "1px solid #2871ff",
              color: "#fff",
              backgroundColor: "#2871ff",
              fontSize: "20px"
            }}
            hoverStyle={{
              backgroundColor: "lightblue",
              color: "#2871ff",
            }}
          />
        </section>
      <section>
        <FotterComponent />
      </section>
    </div>
  )
}

export default Vetting
