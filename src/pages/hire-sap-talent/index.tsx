import commonStyle, {
  accordianStylingHomePage,
  cardsStyling,
  worldMap,
} from "@/constants/commonStyle";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";
// import { HomePageText } from "../../constants";
import Navbar from "@/components/molecules/navbar";
import VideoComponent from "@/components/atoms/video";
import CardComponent from "@/components/atoms/card";
import AccordionComponent from "@/components/atoms/accodion";
import ContentComponent from "@/components/molecules/sectionWithImageAndIcon";
import StructureCard from "@/components/atoms/card2";
import FotterComponent from "@/components/molecules/Fotter";
import SpecialCard from "@/components/atoms/SpecialCard";
import CustomButton2 from "@/components/atoms/CustomButton2";
import commonStyles from "./../styles/best.module.css";
import hireDevStyles from "../styles/hireDevStyles.module.css";
import HourglassEmptyRoundedIcon from "@mui/icons-material/HourglassEmptyRounded";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import tcImage from "../assets/images/17_tcImage.svg";
import forebsImage from "../assets/images/18_forebsImage.svg";
import I_icon from "../assets/images/19_IiconImage.svg";
import SpeedQualityCard from "@/components/atoms/Speed&Quality";
import theinfoImage from "../assets/images/20_theinformationImage.svg";
import fastCompanyImage from "../assets/images/21_fastCompanyImage.svg";
import Image from "next/image";
import HomeCandidateProfile from "@/components/molecules/HomeCandidateProfile";
import homePageStyle from "./../styles/homePageStyles.module.css";
import { useRouter } from "next/router";
import CompaniesCarausel from "@/components/molecules/CompaniesCarausel";
// import { GlobalContextProvider } from "../../context/store";
import aboutPageStyles from "../styles/aboutPageStyles.module.css"
import { useEffect, useState } from "react";
import Slider from "react-slick";
// import { DEV_PUBLIC_URL } from "../../configs/auth";
import axios from "axios";
import ProfileCorousel from "@/components/molecules/profileCarausel";
import { DEV_PUBLIC_URL } from "../../../configs/auth";
const apiUrl = `${DEV_PUBLIC_URL}form/candidates`;
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
  buttonText: string;
}
function truncateSentence(sentence: string, maxLength = 195) {
  if (sentence != undefined && sentence.length > maxLength) {
    return sentence.substring(0, maxLength) + "...";
  } else {
    return sentence;
  }
}
 const Hire=()=> {
  const router = useRouter();
  const HireDeveloperClicked = () => {
    router.push("/sap-talent-pool");
  };
  useEffect(() => {
    const loadScripts = async () => {

      const jqueryScript = document.createElement('script');
      jqueryScript.src = 'https://code.jquery.com/jquery-3.5.1.slim.min.js';
      jqueryScript.onload = loadSlickScript; // Load slick.min.js after jQuery is loaded
      document.body.appendChild(jqueryScript);

      // Load Popper.js
      const popperScript = document.createElement('script');
      popperScript.src = 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js';
      document.body.appendChild(popperScript);

      // Load Bootstrap
      const bootstrapScript = document.createElement('script');
      bootstrapScript.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js';
      document.body.appendChild(bootstrapScript);

      // // Load Slick
      // const slickScript = document.createElement('script');
      // slickScript.src = '/scripts/slick.min.js'; // Assuming slick.min.js is in the public/scripts directory
      // document.body.appendChild(slickScript);

      // Load main.js
      const mainScript = document.createElement('script');
      mainScript.src = '/scripts/main.js'; // Assuming main.js is in the public/scripts directory
      mainScript.async = true;
      document.body.appendChild(mainScript);
    };
    const loadSlickScript = () => {
      // Load slick.min.js after jQuery is loaded
      const slickScript = document.createElement('script');
      slickScript.src = '/scripts/slick.min.js'; // Assuming slick.min.js is in the public/scripts directory
      document.body.appendChild(slickScript);
    };
    loadScripts();

    // Clean up function to remove the dynamically added script tags
    // return () => {
    //   // Remove all script tags that were added
    //   document.querySelectorAll('script').forEach(script => {
    //     if (script.src.includes('/scripts/')) {
    //       script.remove();
    //     }
    //   });
    // };
  }, []);
  const [apiResponse, setApiResponse] = useState<Candidates[]>([]);
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState("TM")
  const fetchData = async (skills: string) => {
    try {
      console.log("Fetching data for skills:", skills);

      let resp = await axios.post(`${apiUrl}`, {
        profiles: { Skill_Set: "TM" }, pageNumber: Math.floor(Math.random() * 10) + 1
      });
      let candidates = resp.data.data.candidatesData;
      setApiResponse(candidates);
      console.log(candidates)
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  try {
    useEffect(() => {
      fetchData(skills);

    }, [skills]);
  } catch (error) {
    alert(error);
  }

  const setting = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    mobileFirst: true,
    // infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet" />
      <link href="css/fonts.css" rel="stylesheet" />
      <link href="css/reset.css" rel="stylesheet" />
      <link href="css/style.css" rel="stylesheet" />
      <link href="css/responsive.css" rel="stylesheet" />
      <Navbar/>

      <div className="wrapper hireSapTalent">
        <div className="capabilitiesSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-7">
                <div className="homesapExpertise" >
                  <h2>HIRE <span>ELITE</span> SAP TALENT ON-DEMAND</h2>

                  <p>AI-Vetted Expertise, Unmatched Quality for Your Project&apos;s Success Swiftly Connect with On-Demand, Top-Tier SAP Talent Tailored to Your Project&apos;s Urgent and Specific Needs</p>

                  <div className="hireSap"><a className="hire" href="/sap-talent-pool.html">Search SAP Talent</a><a className="hire" href="#">Explore Talent Pool</a></div>
                </div>
                <div className="row">
                  <div className="col-md-4 vettedCont">
                    <h2>14000+</h2>
                    <p>Deep Vetted SAP Talent</p>
                  </div>
                  <div className="col-md-4 vettedCont">
                    <h2>80+</h2>
                    <p>SAP Modules & Solutions</p>
                  </div>
                  <div className="col-md-4 vettedCont">
                    <h2>30+</h2>
                    <p>SAP Technical Expertise</p>
                  </div>
                </div>

              </div>
              <div className="col-md-5">
                <div className="bannerImg">
                  <img src="images/banner02.png" alt="ELEVATE YOUR TECH CAPABILITIES" className="img-fluid" />

                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="superchargeSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12 ">
                <div className="">
                  <h2><span>Supercharge</span> Your SAP Hiring</h2>
                  <h3>Accelerate Your Recruitment Process with Access to Our Premier Network of<br />AI-Vetted Developers,
                    Ready to Join Your Team and Drive Success.</h3>

                </div>
              </div>
              <div className="col-md-4 ">
                <div className="superchargeCont">
                  <span className="number">1</span>
                  <div className="superchargeHeading">Unlock Elite SAP<br />Talent Swiftly</div>
                  <div className="superchargeText">Hire deeply vetted SAP consultants for specialized SAP skills in just 4
                    hours, leveraging our AI-powered platform and global network expertise to accelerate your SAP hiring
                    process.</div>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="superchargeCont">
                  <span className="number">2</span>
                  <div className="superchargeHeading">Navigate SAP Skill<br />Scarcity Effortlessly</div>
                  <div className="superchargeText">Specializing in hard-to-find SAP expertise, we make the rare seem routine in
                    our expansive talent pool, ensuring you connect with right SAP talent to meet project requirements
                    effectively.</div>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="superchargeCont">
                  <span className="number">3</span>
                  <div className="superchargeHeading">Forge SAP Business<br />Resilience Seamlessly</div>
                  <div className="superchargeText">Adapt to changing SAP resource needs swiftly, ensuring resilience in face of
                    challenges with our SAP Talent Cloud. Achieve agility in SAP talent acquisition to keep your SAP
                    projects on track.</div>
                  <div className="clear"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="superchargeSection precisionSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12 ">
                <div className="">
                  <h2>Laser Precision in SAP Talent Matching</h2>
                  <h3>Accelerate Your Recruitment Process with Access to Our Premier Network of<br />AI-Vetted Developers,
                    Ready to Join Your Team and Drive Success</h3>

                </div>
              </div>
              <div className="col-md-4 ">
                <div className="superchargeCont">
                  <span className="number">AI</span>
                  <div className="superchargeHeading superchargeHeading1 ">AI Precision<br />for SAP Talent</div>
                  <div className="superchargeText">Elevate your hiring standards with our advanced AI assessment tailored for
                    SAP tech skills. Achieve a remarkably high accuracy rate in qualification filtering, ensuring swift and
                    precise matches for your SAP projects.</div>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="superchargeCont">
                  <span className="number">EI</span>
                  <div className="superchargeHeading superchargeHeading2">Expert Curation<br />for Success</div>
                  <div className="superchargeText">Drive SAP success by seamlessly integrating external intelligence from
                    platforms like HackerRank and custom assessments. Ensure meticulous candidate matches for your SAP
                    projects, expediting the path to top-tier SAP talent.</div>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="superchargeCont">
                  <span className="number">HI</span>
                  <div className="superchargeHeading superchargeHeading3">Holistic SAP Matches<br />for Best Fit</div>
                  <div className="superchargeText">Harness human insights to align business and culture through SAP talent
                    carefully scouted by expert interviewers. Ensure soft skills, effective communication, and cultural
                    alignment for a well-rounded organizational match in your SAP team.</div>
                  <div className="clear"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="sixthSection scalableSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                <h2>Tailored Solutions for <span>Scalable</span> Growth</h2>
                <h4>Flexibility and Scalability for Your SAP Projects. We Offer Tailored Talent Solutions<br />to Match Your
                  Unique Business Needs, Project Size and Complexity</h4>

              </div>

              <div className="col-md-4 Initiatives">
                <img src="images/icon08.png" alt="Agile Team Composition" className="img-fluid" /><br />
                <h5>Agile Team Composition</h5>
                <p>Whether you&apos;re embarking on a small-scale SAP implementation or a large-scale transformation, we offer
                  flexible team compositions to suit your project scope. From solo consultants to cross-functional teams, we
                  adapt to meet your needs.</p>
              </div>
              <div className="col-md-4 Initiatives">
                <img src="images/icon091.png" alt="On-Demand Expertise" className="img-fluid" /><br />
                <h5>On-Demand Expertise</h5>
                <p>Scale your SAP initiatives dynamically with our on-demand talent pool. Need additional resources for a
                  specific phase of your project? We&apos;ve got you covered. Our flexible hiring model allows you to access
                  expertise precisely when you need it.</p>
              </div>
              <div className="col-md-4 Initiatives">
                <img src="images/icon101.png" alt="Customized Solutions" className="img-fluid" /><br />
                <h5>Customized Solutions</h5>
                <p>SChoose from range of engagement models that align with your project requirements and budget. Whether you
                  prefer project-based engagements, dedicated resources, or outcome-driven model, we offer solutions to
                  ensure project&apos;s success.</p>
              </div>

            </div>
          </section>
        </div>
        <div className=" unleashingSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                <h2>Unleashing the Power<br />of SAP Expertise</h2>
                <h4>Elevate Your Projects with Our SAP Talent Experience,<br />Versatility, and Collaboration at Your Service
                </h4>

              </div>

              <div className="col-md-4 unleashing color01 ">
                <img src="images/icon11.png" alt="AI-Vetted" className="img-fluid" /><br />
                <h5>AI-Vetted</h5>
                <p>Our SAP professionals undergo rigorous AI-driven vetting processes to ensure their technical proficiency
                  and expertise.</p>
              </div>
              <div className="col-md-4 unleashing color02 ">
                <img src="images/icon12.png" alt="Certified" className="img-fluid" /><br />
                <h5>Certified</h5>
                <p>Our talent holds relevant certifications from SAP and other recognized institutions, validating their
                  skill set and knowledge.</p>
              </div>
              <div className="col-md-4 unleashing color03 ">
                <img src="images/icon13.png" alt="Accomplished" className="img-fluid" /><br />
                <h5>Accomplished</h5>
                <p>With years of hands-on experience in SAP implementation, customization, and support, our consultants
                  bring invaluable expertise.</p>
              </div>
              <div className="col-md-4 unleashing color04 ">
                <img src="images/icon14.png" alt="On-Demand" className="img-fluid" /><br />
                <h5>On-Demand</h5>
                <p>Our SAP talent is readily available to meet your project needs, offering flexible engagement models and
                  quick deployment.
                </p>
              </div>
              <div className="col-md-4 unleashing color05 ">
                <img src="images/icon15.png" alt="Versatile" className="img-fluid" /><br />
                <h5>Versatile</h5>
                <p>Equipped with a diverse skill set covering SAP modules and technologies, our talent can adapt to
                  different requirements seamlessly.</p>
              </div>
              <div className="col-md-4 unleashing color06 ">
                <img src="images/icon16.png" alt="Future-Ready" className="img-fluid" /><br />
                <h5>Future-Ready</h5>
                <p>Our talent stays updated with latest SAP trends and innovations, ensuring they are equipped to handle
                  evolving technology landscapes.</p>
              </div>

            </div>
          </section>
        </div>
        <div className="discoverSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                <h2>Discover the Depth and Diversity of Expertise<br />in Our SAP Talent Community</h2>
                <h4>We&apos;ve curated a premier SAP talent pool comprising top-tier professionals with diverse skills and
                  expertise.<br />Explore the wealth of talent waiting to elevate your SAP initiatives to new heights of
                  success.</h4>
              </div>
              <div className="col-md-3   ">
                <div className="discoverCont">
                  <h5>Exertise in<br />SAP Solutions</h5>
                  <ul>
                    <li>SAP S/4HANA</li>
                    <li>SAP ECC6</li>
                    <li>SAP Business One</li>
                    <li>SAP SuccessFactors</li>
                    <li>SAP Ariba</li>
                    <li>SAP CRM</li>
                    <li>SAP Analytics Cloud</li>
                    <li>SAP BW/4HANA</li>

                  </ul>
                </div>
              </div>

              <div className="col-md-3   ">
                <div className="discoverCont">
                  <h5>Proficiency in<br />Technology Stack</h5>
                  <ul>
                    <li>SAP ABAP</li>
                    <li>SAP Basis</li>
                    <li>SAP HANA</li>
                    <li>SAP Fiori/UI5</li>
                    <li>SAP BW/BI</li>
                    <li>SAP NetWeaver</li>
                    <li>SAP Cloud Platform</li>
                    <li>SAP Integration (PI/PO)</li>

                  </ul>
                </div>
              </div>

              <div className="col-md-3 discoverCont  ">
                <div className="discoverCont">
                  <h5>Competence in<br />Functional Modules</h5>
                  <ul>
                    <li>SAP S/SAP FI/CO</li>
                    <li>SAP TM</li>
                    <li>SAP MM</li>
                    <li>SAP SD</li>
                    <li>SAP PP/PS</li>
                    <li>SAP EWM</li>
                    <li>SAP GTS</li>
                    <li>SAP HCM</li>

                  </ul>
                </div>
              </div>

              <div className="col-md-3 discoverCont  ">
                <div className="discoverCont">
                  <h5>Knowledge in<br />Industry Domains</h5>
                  <ul>
                    <li>Manufacturing</li>
                    <li>Healthcare</li>
                    <li>inancial Services</li>
                    <li>Telecommunications</li>
                    <li>Utilities</li>
                    <li>Public Sector</li>
                    <li>Automotive</li>
                    <li>Pharmaceuticals</li>

                  </ul>
                </div>
              </div>


            </div>
          </section>
        </div>



        <div className="assessingSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                <h2>Ensuring Excellence:<br />Assessing SAP Talent</h2>
                <h4>Meticulous assessment to ensure the proficiency, compatibility, and overall suitability of our SAP
                  talent.</h4>
              </div>
              <div className="col-md-4">
                <div className="assessingCont">
                  <h5>Technical Competency</h5>
                  <img src="images/icon43.png" alt="Technical Competency" className="img-fluid" /><br />
                  <p>Thorough assessment of SAP skills and knowledge</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="assessingCont">
                  <h5>Professional Experience</h5>
                  <img src="images/icon44.png" alt="Professional Experience" className="img-fluid" /><br />
                  <p>Verification of past work experience and project achievements.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="assessingCont">
                  <h5>Cultural Fit</h5>
                  <img src="images/icon45.png" alt="Cultural Fit" className="img-fluid" /><br />
                  <p>Evaluation of alignment with company values and team dynamics.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="assessingCont">
                  <h5>Certifications and Credentials</h5>
                  <img src="images/icon46.png" alt="Certifications and Credentials" className="img-fluid" /><br />
                  <p>Validation of relevant certifications and qualifications.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="assessingCont">
                  <h5>Background Check</h5>
                  <img src="images/icon47.png" alt="Background Check" className="img-fluid" /><br />
                  <p>Verification of educational and employment backgrounds.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="assessingCont">
                  <h5>Soft Skills Assessment</h5>
                  <img src="images/icon48.png" alt="Soft Skills Assessment" className="img-fluid" /><br />
                  <p>Evaluation of communication, teamwork, and adaptability.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div >
      {/* <div className="searchSliderCont">
        <section className="container mt-4 ">
          <div className="row ">
            <div className="col-md-12   ">
              <h2>Best Developers</h2>
              <h4>They are some of the best developers we have and they have tested and worked with several client</h4>
              <Slider {...setting} className="searchSlider">
                {(apiResponse === undefined) ? ("loading...") : (apiResponse.map((item: any, index: any) => (
                  <div className="slide " key={index}>
                    <div className="slideCont">
                      <div className="SlideImg"><img src="images/sliderimg01.jpg" alt="name" /></div>
                      <div className="slideText">
                        <h3>{item.Name}</h3>
                        <p className="DepText">{truncateSentence(item.CandidateProfile)}</p>
                        <p className="salaryText">Salary <span>{item.Salary}</span></p>
                        <p className="timeText">Available: 6 month </p>
                        <p className="cityText">Location: {item.CurrentLocation}</p>
                        <p className="ratingText">rating</p>
                        <a href="#">Chat</a> <a href="#">hire</a>
                      </div>
                    </div>
                  </div>
                )))}
              </Slider>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
            <div className="hireSap"><a className="hire" href="hire-sap-talent.html">Explore Talent Pool</a><a className="hire"
                    href="hire-specialized-tech-talent.html">Hire Elite Talent</a></div>
            </div>
          </div>
        </section>
      </div> */}
      {/* <ProfileCorousel/> */}
      <FotterComponent/>
    </>
  );
}

export default Hire;