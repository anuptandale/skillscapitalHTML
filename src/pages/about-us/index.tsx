import Navbar from "@/components/molecules/navbar";
import React from "react";
import aboutPageStyles from "./../../styles/aboutPageStyles.module.css";
import {
  AboutUsText,
  HomePageText,
} from "@/constants/texts";
import Image from "next/image";
import talentPoolStyles from "./../../styles/talentPoolStyles.module.css";
import HireDevSectionWithImageAndIcon from "@/components/molecules/HireDevSectionWithImageAndIcon";
import FotterComponent from "@/components/molecules/Fotter";
import leadershipimg from "../../assets/images/Leadership/Leaderimg.webp";
import hireDevStyles from "../../styles/hireDevStyles.module.css";
import homepage from "../../assets/images/About_us/Homepage.png";
import sapStyle from "../../styles/sapTalentStyle.module.css";
import commonStyle from "@/constants/commonStyle";
import homePageStyle from "../../styles/homePageStyles.module.css";
import css from "../../styles/leadershipPageStyle.module.css";
export default function About() {
  return (
    <>
      <Navbar />
      <section>
      <div className={aboutPageStyles.topheading}>
          <div>
            {AboutUsText.aboutusTopContent}
          </div>
          <Image src="/AboutPageImages/aboutImage.jpeg" alt="setting" height={300} width={500} style={{borderRadius:"5px"}} />
        </div>
      </section>
      <section className={aboutPageStyles.topsection} >
        <div className={aboutPageStyles.heading}>
          <p>
            Why SkillsCapital?
          </p>
        </div>
        <div className={aboutPageStyles.eachboxOuter} >
          <div style={{ display: "flex", gap: "20px" }}>
            <div className={aboutPageStyles.eachbox} >
              <Image src="/AboutPageImages/setting.png" alt="setting" height={50} width={50} />
              <div style={{ fontSize: "22px", textAlign: "center", padding: "0px 10px" }}>{AboutUsText.whyContent[0]}</div>
            </div>
            <div className={aboutPageStyles.eachbox}>
              <Image src="/AboutPageImages/expertteam.webp" alt="setting" height={50} width={50} />
              <div style={{ fontSize: "22px", textAlign: "center", padding: "0px 10px" }}>{AboutUsText.whyContent[1]}</div>
            </div>
            <div className={aboutPageStyles.eachbox}>
              <Image src="/AboutPageImages/ecosystem.jpg" alt="setting" height={80} width={80} />
              <div style={{ fontSize: "22px", textAlign: "center", padding: "0px 10px" }}>{AboutUsText.whyContent[2]}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <div className={aboutPageStyles.eachbox}>
              <Image src="/AboutPageImages/support2.jpg" alt="setting" height={50} width={50} />
              <div style={{ fontSize: "22px", textAlign: "center", padding: "0px 10px" }}>{AboutUsText.whyContent[3]}</div>
            </div>
            <div className={aboutPageStyles.eachbox}>
              <Image src="/AboutPageImages/settingCrop.jpg" alt="setting" height={50} width={50} />
              <div style={{ fontSize: "22px", textAlign: "center", padding: "0px 10px" }}>{AboutUsText.whyContent[4]}</div>
            </div>
            <div className={aboutPageStyles.eachbox}>
              <Image src="/AboutPageImages/growth.png" alt="setting" height={50} width={50} />
              <div style={{ fontSize: "22px", textAlign: "center", padding: "0px 10px" }}>{AboutUsText.whyContent[5]}</div>
            </div>
          </div>

        </div>
      </section>
      <section className={sapStyle.outerNumberSection}>
        <div style={commonStyle.textCenter}>
          <br />
          <br />
          <div className={aboutPageStyles.ourValuesHeading}>
            
              <div style={{ fontSize: "43px", fontWeight: "600" }}>{AboutUsText.excelQualityHeading}</div>
              <div style={{ fontSize: "20px", opacity: "0.8", textAlign: "center" }}>{AboutUsText.excelQualitySubHeading}</div>
            
            {/* <div style={{ fontSize: "20px", opacity: "0.8", textAlign: "center" }}>Empowering Your Vision with Unmatched Expertise and Dedicated Success</div> */}
          </div>
          {/* <br /> */}
          {/* <h3 style={{fontSize:"22px"}}>Discover the Magnitude of Our SAP Expertise in Numbers</h3> */}
          {/* <br /> */}
        </div>
        <div>
          <div className={sapStyle.numberSection}>
            <div className={sapStyle.eachsection}>
              <Image src="/SaptalentImage/sapexpert.png" style={{ borderRadius: "50px" }} alt="" height={100} width={100} />
              <div style={{ fontSize: "35px", fontWeight: "600", color: "black" }}>{AboutUsText.excelQualityNumbers[0]}</div>
              <div style={{ fontSize: "22px", width: "200px", textAlign: "center" }}>{AboutUsText.excelQualityNumbersContent[0]}</div>
            </div>
            <div className={sapStyle.eachsection}>
              <Image src="/SaptalentImage/sapcategory.jpg" style={{ borderRadius: "50px" }} alt="" height={100} width={100} />
              <div style={{ fontSize: "35px", fontWeight: "600", color: "black" }}>{AboutUsText.excelQualityNumbers[1]}</div>
              <div style={{ fontSize: "22px", width: "200px", textAlign: "center" }}>{AboutUsText.excelQualityNumbersContent[1]}</div>
            </div>
            <div className={sapStyle.eachsection}>
              <Image src="/SaptalentImage/ready.jpg" style={{ borderRadius: "50px" }} alt="" height={100} width={100} />
              <div style={{ fontSize: "35px", fontWeight: "600", color: "black" }}>{AboutUsText.excelQualityNumbers[2]}</div>
              <div style={{ fontSize: "22px", width: "200px", textAlign: "center" }}>{AboutUsText.excelQualityNumbersContent[2]}</div>
            </div>
            <div className={sapStyle.eachsection}>
              <Image src="/SaptalentImage/module.png" style={{ borderRadius: "50px" }} alt="" height={100} width={100} />
              <div style={{ fontSize: "35px", fontWeight: "600", color: "black" }}>{AboutUsText.excelQualityNumbers[3]}</div>
              <div style={{ fontSize: "22px", width: "200px", textAlign: "center" }}>{AboutUsText.excelQualityNumbersContent[3]}</div>
            </div>
          </div>
        </div>
      </section>
      <section>

      <div className={aboutPageStyles.ourValuesHeading}>
            
            <div style={{ fontSize: "43px", fontWeight: "600" }}>Our Values</div>
            {/* <div style={{ fontSize: "20px", opacity: "0.8", textAlign: "center" }}>Empowering Your Vision with Unmatched Expertise and Dedicated Success</div> */}
          
          {/* <div style={{ fontSize: "20px", opacity: "0.8", textAlign: "center" }}>Empowering Your Vision with Unmatched Expertise and Dedicated Success</div> */}
        </div>
        <div className={aboutPageStyles.sixBoxOuter} >
          <div className={aboutPageStyles.sixBox}>Our Values
            <p style={{ width: "250px", fontSize: "14px", opacity: "0.8" }}>{AboutUsText.ourValuesSubcontent}</p>
          </div>
          <div className={aboutPageStyles.outerOurValue}>
            <div className={aboutPageStyles.OurValue}>
              <div className={aboutPageStyles.eachOurValue}>
                <div style={{ fontSize: "22px" }}>{AboutUsText.ourValuespointsHeading[0]}</div>
                <div style={{ opacity: "0.8" }}>{AboutUsText.ourValuespointsContent[0]}</div>
              </div>
              <div className={aboutPageStyles.oddeachOurValue}>
                <div style={{ fontSize: "22px" }}>{AboutUsText.ourValuespointsHeading[1]}</div>
                <div style={{ opacity: "0.8" }}>{AboutUsText.ourValuespointsContent[1]}</div>

              </div>
              <div className={aboutPageStyles.eachOurValue}>
                <div style={{ fontSize: "22px" }}>{AboutUsText.ourValuespointsHeading[2]}</div>
                <div style={{ opacity: "0.8" }}>{AboutUsText.ourValuespointsContent[2]}</div>

              </div>
            </div>
            <div className={aboutPageStyles.OurValue}>
              <div className={aboutPageStyles.oddeachOurValue}>
                <div style={{ fontSize: "22px" }}>{AboutUsText.ourValuespointsHeading[3]}</div>
                <div style={{ opacity: "0.8" }}>{AboutUsText.ourValuespointsContent[3]}</div>

              </div>
              <div className={aboutPageStyles.eachOurValue}>
                <div style={{ fontSize: "22px" }}>{AboutUsText.ourValuespointsHeading[4]}</div>
                <div style={{ opacity: "0.8" }}>{AboutUsText.ourValuespointsContent[4]}</div>

              </div>
              <div className={aboutPageStyles.oddeachOurValue}>
                <div style={{ fontSize: "22px" }}>{AboutUsText.ourValuespointsHeading[5]}</div>
                <div style={{ opacity: "0.8" }}>{AboutUsText.ourValuespointsContent[5]}</div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={aboutPageStyles.backGroundBlueHomePage}>
          <div>
            <div style={{ fontSize: "38px", fontWeight: "600" }}>
              Our Leadership Clients
            </div>
            <br />
            <br />
            <br />


            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>


              <div style={{ backgroundColor: "white", borderRadius: "10px", border: "1px solid lightgrey", width: "300px", height: "100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_1.png`}
                  alt="Logo"
                  height={90}
                  width={260}
                  style={{ marginTop: "0px", borderRadius: "10px" }}
                />
              </div>

              <div style={{ backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "10px", width: "300px", height: "100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_2.jpg`}
                  alt="Logo"
                  height={90}
                  width={160}
                  style={{ marginTop: "0px", borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "10px", width: "300px", height: "100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_3.jpg`}
                  alt="Logo"
                  height={80}
                  width={160}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "10px", width: "300px", height: "100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_4.jpeg`}
                  alt="Logo"
                  height={90}
                  width={180}
                  style={{ borderRadius: "10px" }}
                />
              </div>

              <div style={{ backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "10px", width: "300px", height: "100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_5.jpg`}
                  alt="Logo"
                  height={80}
                  width={270}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "10px", width: "300px", height: "100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_6.png`}
                  alt="Logo"
                  height={60}
                  width={240}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "10px", width: "300px", height: "100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_7.jpg`}
                  alt="Logo"
                  height={80}
                  width={170}
                  style={{ borderRadius: "10px" }}
                />
              </div>

              <div style={{ backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "10px", width: "300px", height: "100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_8.jpeg`}
                  alt="Logo"
                  height={70}
                  width={250}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "10px", width: "300px", height: "100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_9.jpg`}
                  alt="Logo"
                  height={50}
                  width={230}
                  style={{ marginTop: "27px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "10px", width: "300px", height: "100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_10.jpeg`}
                  alt="Logo"
                  height={80}
                  width={150}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div style={{ backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "10px", width: "300px", height: "100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_11.jpg`}
                  alt="Logo"
                  height={80}
                  width={150}
                  style={{ borderRadius: "10px" }}
                />
              </div>

              <div style={{ backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "10px", width: "300px", height: "100px" }}>
                <Image
                  className={hireDevStyles.amazon}
                  src={`/HireDeveloperImages/company_13.jpg`}
                  alt="Logo"
                  height={50}
                  width={240}
                  style={{ marginTop: "30px", borderRadius: "10px" }}
                />
              </div>


            </div>
          </div>
        </div>
      </section>
      <FotterComponent />
      <style jsx>
        {`
                    .first{
                        width:20vw;
                        height:25vh;
                        background-color:#F2EFEA;
                        margin-bottom:1vw;
                        box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    }
                    .second{
                        width:20vw;
                        height:25vh;
                        background-color:#1E2866;
                        margin-bottom:1vw;
                        box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    }
                `}
      </style>
    </>
  )
}