import commonStyle, {
  accordianStylingHomePage,
  cardsStyling,
  worldMap,
} from "@/constants/commonStyle";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";
import { HomePageText } from "../constants/texts";
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
import { GlobalContextProvider } from "../../context/store";
import aboutPageStyles from "../styles/aboutPageStyles.module.css"
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { DEV_PUBLIC_URL } from "../../configs/auth";
import axios from "axios";
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
export default function Home({ allData }: { allData: any }) {
  const router = useRouter();
  const launchCareerJourneyClicked = () => {
    router.push("/hire-specialized-talent");
  };
  const handleButtonExplore = () => {
    router.push("/hire-sap-talent");
  };
  const handleButtonExploreNow = () => {
    router.push("/hire-specialized-talent");
  };
  const HireDeveloperClicked = () => {
    // router.push("/search-developers");
  };
  const ApplyForJobsClicked = () => {
    window.open("https://talent.skillscapital.io/candidateportal?register=true", "_blank");
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
      <header className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          {/* <!-- Logo --> */}
          <a className="navbar-brand" href="index.html">
            <img src="/images/SkillsCapitalLogo.png" alt="skillCapital" />
          </a>

          {/* <!-- Menu Button (for mobile) --> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <!-- Menu Items --> */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              {/* <!-- <li className="nav-item active">
            <a className="nav-link" href="index.html">Home</a>
          </li>  --> */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" aria-haspopup="true" aria-expanded="false">Hire Elite Talent</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                  <a className="dropdown-item" href="hire-sap-talent.html">Hire SAP Talent</a>
                  <a className="dropdown-item" href="hire-specialized-tech-talent.html">Hire Specialized Talent</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Global Elastic Teams</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" aria-haspopup="true" aria-expanded="false">SAP Talent Solutions</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                  <a className="dropdown-item" href="hire-sap-talent.html">Hire Top SAP Talent</a>
                  <a className="dropdown-item" href="sap-talent-pool.html">SAP Talent Pool</a>
                  <a className="dropdown-item" href="#">SAP Custom Solutions</a>
                  <a className="dropdown-item" href="#">SAP Elite Consulting</a>
                  <a className="dropdown-item" href="sap-portal-hub.html">SAP Portal Hub</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" aria-haspopup="true" aria-expanded="false">Company</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                  <a className="dropdown-item" href="aboutus.html">About Us</a>
                  <a className="dropdown-item" href="leadership.html">Leadership Team</a>
                  <a className="dropdown-item" href="vetting-process.html">Vetting Process</a>
                  <a className="dropdown-item" href="#">Careers</a>
                  <a className="dropdown-item" href="contactus.html">Contact Us</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://talent.skillscapital.io/clientportal">Client Login</a>
              </li>
              {/* <!-- <li className="nav-item">
                <a className="nav-link" href="contact-us.html">Contact Us</a>
              </li> --> */}
            </ul>
          </div>
        </div>
      </header>

      <div className="wrapper">
        {/* <!-- capabilitiesSection --> */}
        <div className="capabilitiesSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-8">
                <div className="homesapExpertise">
                  <h2>ELEVATE YOUR <span>GLOBAL TECH CAPABILITIES</span> WITH TOP-TIER TALENT FROM INDIA</h2>
                  <h3>Deploy Elite, Pre-Vetted Talent 10X Faster and with 95% Precision Matched Across SAP and Specialized
                    Tech Domains
                  </h3>
                  <p> At SkillsCapital, we redefine elite talent acquisition with our AI-powered Talent Cloud. Connect
                    seamlessly with the deep-vetted SAP and specialized tech experts curated precisely for you, ensuring
                    your projects advance swiftly and execute with unmatched precision and quality.</p>

                  <div className="hireSap"><a className="hire" href="hire-sap-talent.html">Hire SAP Talent</a><a className="hire"
                    href="hire-specialized-tech-talent.html">Explore Specialized Talent</a></div>
                  <div className="deepVetted"><span><img src="/images/icon03.jpg" alt="Deep Vetted" />Deep Vetted</span><span><img
                    src="/images/icon02.jpg" alt="Culturally Fit" />Culturally Fit</span><span><img src="/images/icon01.jpg"
                      alt="Deploy Ready" />Deploy Ready</span></div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bannerImg">
                  <img src="/images/banner02.png" alt="ELEVATE YOUR TECH CAPABILITIES" className="img-fluid" />

                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- empowerSection  --> */}
        <div className="empowerSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                <h2>Empower Your SAP Initiatives with<br />Our Extensive Expert Network</h2>
                <h4>Access a World-className Pool of SAP Professionals, Ready to Drive Your Success</h4>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="preBoxExplore">

                  <h5>Pre-Vetted & Certified SAP Experts</h5>
                  <span className="number">14000+</span>
                  <p>Select from over 14,000 SAP experts who are certified and pre-vetted through rigorous evaluation. Our
                    commitment to quality means you collaborate with professionals who bring proven expertise to SAP
                    projects.</p>
                  <div><a href="hire-sap-talent.html">Explore</a> </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="preBoxExplore">

                  <h5>Specialized SAP Expertise Spectrum</h5>

                  <span className="number">1800+</span>
                  <p>Explore a diverse array of SAP skills with over 1800+ unique combinations spanning across SAP modules,
                    solutions, and specializations. From SAP FICO to SAP HANA, it encompasses a wide spectrum of SAP
                    expertise.</p>
                  <a href="/hire-sap-talent.html">Explore</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="preBoxExplore">

                  <h5>Ready to Deploy SAP Consultants</h5>

                  <span className="number">600+</span>
                  <p>Benefit from immediate access to 600 SAP consultants who are ready to deploy and integrate seamlessly
                    into your projects. Accelerate your SAP initiatives with experts who are prepared to hit the ground
                    running.</p>
                  <a href="/hire-sap-talent.html">Explore</a>
                </div>
              </div>

            </div>
          </section>
        </div>

        {/* <!-- fingertipsSection --> */}
        <div className="fingertipsSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-7">
                <div className="homesapProjects">
                  <h2>Specialized SAP Talent at Your Fingertips</h2>
                  <h3>Unlock the Full Potential of Your SAP Investments with Our Expert Talent Pool and Effortlessly Deploy
                    SAP Experts On Demand and Scale Your Projects with Confidence.</h3>
                  <ul>
                    <li>
                      <h4 data-toggle="collapse" data-target="#toggleDiv1" aria-expanded="false" aria-controls="toggleDiv">
                        Comprehensive SAP Expertise<span className="arrow-icon"></span>
                      </h4>
                      <div className="collapse homesapProjectsText" id="toggleDiv1">
                        Delve into our rich ecosystem of SAP talent,
                        where each consultant is a beacon of knowledge and experience. Our platform hosts a diverse array of
                        SAP experts, from functional and technical consultants to SAP project managers and solution
                        architects, each vetted to ensure they bring not only skills but also innovative solutions to your
                        SAP challenges.
                      </div>
                    </li>
                    <li>
                      <h4 data-toggle="collapse" data-target="#toggleDiv2" aria-expanded="false"
                        aria-controls="toggleDiv">On-Demand SAP Talent Deployment<span className="arrow-icon"></span></h4>
                      <div className="collapse homesapProjectsText" id="toggleDiv2">Access our extensive pool of SAP experts and
                        deploy them on demand to meet your project requirements promptly. Whether you need additional
                        resources for a short-term project or ongoing support, our platform makes it easy to find the right
                        talent when you need it. Access our global talent hub and tap into a diverse pool of SAP experts
                        across the globe.</div>
                    </li>
                    <li>
                      <h4 data-toggle="collapse" data-target="#toggleDiv3" aria-expanded="false"
                        aria-controls="toggleDiv">Customized SAP Solutions<span className="arrow-icon"></span></h4>
                      <div className="collapse homesapProjectsText" id="toggleDiv3">Whether you&apos;re implementing SAP S/4HANA,
                        optimizing SAP BW/4HANA processes, or seeking expertise in niche modules like SAP SuccessFactors or
                        SAP Ariba, our talent cloud is your go-to source. We provide precisely matched SAP professionals who
                        are adept at tailoring their approach to meet your unique business needs and project goals.</div>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="bannerImg">
                  <img src="/images/talent-img.png" alt="Specialized SAP Talent at Your Fingertips" className="img-fluid" />

                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <!-- empowerSection  --> */}
        <div className="empowerSection specializedCont">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                <h2>Specialized Talent to Transform<br />the SAP and Non-SAP Ecosystem</h2>
                <h4>Access a World-className Pool of Specialized Tech Experts to Provide Comprehensive Solutions</h4>
              </div>
            </div>
            <div className="row mt-4 ">
              <div className="col-md-4">
                <div className="preBoxExplore">

                  <h5>Cloud &amp; DevOps<br /> Excellence</h5>
                  <img src="/images/icon17.png" alt="Cloud & DevOps Excellence" className="img-fluid" />
                  <span className="number">6400+</span>
                  <p>Empower your Cloud &amp; DevOps with our elite experts (AWS, Azure, GCP etc.), driving innovation and
                    efficiency in your tech landscape.</p>
                  <div><a href="/hire-specialized-tech-talent.html">Explore Now</a> </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="preBoxExplore">

                  <h5>Legacy Modernization Specialists</h5>
                  <img src="/images/icon19.png" alt="Legacy Modernization Specialists" className="img-fluid" />
                  <span className="number">4600+</span>
                  <p>Revitalize and transform your legacy systems with our deep vetted talent, ensuring seamless
                    modernization and future-readiness.</p>
                  <a href="/hire-specialized-tech-talent.html">Explore Now</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="preBoxExplore">

                  <h5>AI/ML/LLM Powered Innovators</h5>
                  <img src="/images/icon18.png" alt="AI/ML/LLM Powered Innovators" className="img-fluid" />
                  <span className="number">400+</span>
                  <p>Leverage our elite team of AI/ML specialists to unlock the full potential of artificial intelligence
                    and GenAI in your organization</p>
                  <a href="/hire-specialized-tech-talent.html">Explore Now</a>
                </div>
              </div>

            </div>
          </section>
        </div>

        {/* <!-- demandSection  --> */}
        <div className="demandSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">


              </div>
              <div className="col-md-4">
                <h2>Deploy Deep Vetted Niche Tech Talent On Demand</h2>
                <p>Our elite developers stand out for their unparalleled expertise, dedication, and commitment to delivering
                  exceptional results. That&apos;s why businesses trust our consultants to drive their projects to success</p>
              </div>
              <div className="col-md-8">
                <ul className="demandInitiatives">
                  <li>
                    <span className="imgCont"><img src="/images/icon03.png" alt=" Unmatched Quality" /></span>
                    <h5>AI Vetting for Unmatched Quality</h5>
                    <p>Our developers undergo rigorous vetting processes powered by cutting-edge AI, ensuring only most
                      qualified and capable consultants are selected. By leveraging AI, we guarantee unmatched quality,
                      expertise and confidence in our Talent capabilities.</p>
                  </li>
                  <li>
                    <span className="imgCont"><img src="/images/icon04.png" alt=" Immediate Impact" /></span>
                    <h5>Fast Deployment for Immediate Impact</h5>
                    <p>With our agile and streamlined processes, our developers can be onboarded in record time. Whether you
                      need support for urgent initiatives or want to kickstart new implementation, you can harness expertise
                      of our developers precisely when you need it.</p>
                  </li>
                  <li>
                    <span className="imgCont"><img src="/images/icon05.png" alt="Comprehensive Solutions" /></span>
                    <h5>Versatile Skills for Comprehensive Solutions</h5>
                    <p>Our talent pool is primed to tackle a wide range of technical challenges. Whether you require
                      specialized SAP consulting, seamless integration of Cloud technologies, or modernization of legacy
                      systems, our developers bring the expertise and agility needed.</p>
                  </li>

                </ul>
              </div>

            </div>
          </section>
        </div>
        {/* <!-- elitesapSection  --> */}
        <div className="elitesapSection">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                <h2>25,400+ Elite SAP and Specialized Tech<br />Talent Comprise Our Skills Capital Talent Cloud</h2>
                <h4>Leveraging Our Strong Pool of Deep-Vetted Elite Talents to Empower<br />Clients and Drive Innovation
                  Across the Globe</h4>

              </div>
              <div className="col-md-3 eliteCont">
                <h2>25k+</h2>
                <p>Deep Vetted Developers</p>
              </div>
              <div className="col-md-3 eliteCont">
                <h2>100+</h2>
                <p>Specialized Skill Sets</p>
              </div>
              <div className="col-md-3 eliteCont">
                <h2>25+</h2>
                <p>AI Vetting Criteria</p>
              </div>
              <div className="col-md-12 hireTalent">
                <a href="/hire-sap-talent.html">Hire SAP Talent</a> <a
                  href="https://talent.skillscapital.io/candidateportal?register=true">Explore Specialized Talent</a>

              </div>
            </div>
          </section>
        </div>

        {/* <!-- fourth Section  --> */}
        <div className="WhyChooseUs">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                <h2>Why Choose Us?</h2>

              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-4 ">
                <div className="hometalentText">
                  <img src="/images/icon09.png" alt="Client-Centric Approach" className="img-fluid" />
                  <h5>Client-Centric Approach</h5>

                  <ul className="hometalentTextList">
                    <li>SAP &amp; Niche Tech Focus</li>
                    <li>AI-Powered Precision</li>
                    <li>Proven Track Record </li>
                    <li>24/7 Dedicated Support</li>

                  </ul>

                </div>
              </div>
              <div className="col-md-4 facilitates  ">

                <div className="hometalentText">
                  <h5>Our Talent Cloud Facilitates</h5>
                  <ul>
                    <li>Intellegent Vetting</li>
                    <li>Extensive Matching</li>
                    <li>Availability check</li>
                    <li>Quality Control</li>
                  </ul>
                  <a href="" className="work">See How It Works</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="hometalentText">
                  <img src="/images/icon10.png" alt="Focused on Your Success" className="img-fluid" />
                  <h5>Focused on Your Success</h5>

                  <ul className="hometalentTextList">
                    <li>On-Demand Deployment</li>
                    <li>Deep Vetted Talent Pool</li>
                    <li>Agility &amp; Scalability</li>
                    <li>Fast Outcome-Driven</li>

                  </ul>

                </div>
              </div>


            </div>
          </section>
        </div>

        <div className="TurnaroundSection">
          <section className="container mt-4 ">
            <div className="row ">
              <div className="col-md-6 turnacoundCont  ">
                <div className="turnheader">
                  <h2>Lightning-Fast Turnaround</h2>
                  <h4>10X</h4>
                  <h3> Faster Delivery</h3>
                </div>
                <div className="trunaroundText">
                  <img src="/images/fastHiring.png" alt="Lightning-Fast Turnaround" className="img-fluid" />


                  <p>Choose our developers for a deployment speed that&apos;s ten times faster than traditional channels,
                    ensuring you gain swift access to top-tier talent and can accelerate your project timelines effectively
                  </p>
                </div>
              </div>
              <div className="col-md-6 turnacoundCont  ">
                <div className="turnheader">
                  <h2>Uncompromised Quality</h2>
                  <h4>95% </h4>
                  <h3>Precision Match</h3>
                </div>
                <div className="trunaroundText">
                  <img src="/images/qulitywork.png" alt="Uncompromised Quality" className="img-fluid" />

                  <p>Our meticulous matching process ensures a 95% accuracy rate in aligning our elite developers with your
                    specific requirements, guaranteeing a quality of service that precisely meets your project&apos;s needs</p>
                </div>
              </div>
            </div>


          </section>
        </div>



        {/* <!-- client Section  --> */}
        <div className="clientCont mediaCont">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                <h2>Our Coverage by Leading Media</h2>
                <h4>SkillsCapital Revolutionizes SAP and Specialized Talent Landscape</h4>
              </div>

            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/media01.png" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/media02.png" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/media03.png" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/media04.png" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/media05.png" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/media06.png" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/media07.png" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/media08.png" alt="logo" className="img-fluid" />
                </div>
              </div>
            </div>
          </section>
        </div>





        {/* <!-- client Section  --> */}
        <div className="clientCont">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-12">
                <h2>Our Leadership&apos;s Client Work<br />A Chronicle of Success</h2>
              </div>

            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/logo01.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/logo02.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/logo03.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/logo04.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/logo05.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/logo06.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/logo07.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/logo08.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/logo09.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/logo10.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/logo11.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="logoCont">
                  <img src="/images/logo12.jpg" alt="logo" className="img-fluid" />
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
      <div className="searchSliderCont">
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
                {/* <div className="slide ">
                  <div className="slideCont">
                    <div className="SlideImg"><img src="images/sliderimg01.jpg" alt="name" /></div>
                    <div className="slideText">
                      <h3>Md Arshad Khan Assoc CIPD</h3>
                      <p className="DepText">S/4 HANA Sales Certified consultant looking for a job and can join immediately, having hands-on on experience in Support and Implementation projects</p>
                      <p className="salaryText">Salary <span>2345.60</span></p>
                      <p className="timeText">Available: 6 month </p>
                      <p className="cityText">New Delhi</p>
                      <p className="ratingText">rating</p>
                      <a href="#">Chat</a> <a href="#">hire</a>
                    </div>
                  </div>
                </div>
                <div className="slide ">
                  <div className="slideCont">
                    <div className="SlideImg"><img src="images/sliderimg01.jpg" alt="name" /></div>
                    <div className="slideText">
                      <h3>Md Arshad Khan Assoc CIPD</h3>
                      <p className="DepText">S/4 HANA Sales Certified consultant looking for a job and can join immediately, having hands-on on experience in Support and Implementation projects</p>
                      <p className="salaryText">Salary <span>2345.60</span></p>
                      <p className="timeText">Available: 6 month </p>
                      <p className="cityText">New Delhi</p>
                      <p className="ratingText">rating</p>
                      <a href="#">Chat</a> <a href="#">hire</a>
                    </div>
                  </div>
                </div>
                <div className="slide ">
                  <div className="slideCont">
                    <div className="SlideImg"><img src="images/sliderimg01.jpg" alt="name" /></div>
                    <div className="slideText">
                      <h3>Md Arshad Khan Assoc CIPD</h3>
                      <p className="DepText">S/4 HANA Sales Certified consultant looking for a job and can join immediately, having hands-on on experience in Support and Implementation projects</p>
                      <p className="salaryText">Salary <span>2345.60</span></p>
                      <p className="timeText">Available: 6 month </p>
                      <p className="cityText">New Delhi</p>
                      <p className="ratingText">rating</p>
                      <a href="#">Chat</a> <a href="#">hire</a>
                    </div>
                  </div>
                </div>
                <div className="slide ">
                  <div className="slideCont">
                    <div className="SlideImg"><img src="images/sliderimg01.jpg" alt="name" /></div>
                    <div className="slideText">
                      <h3>Md Arshad Khan Assoc CIPD</h3>
                      <p className="DepText">S/4 HANA Sales Certified consultant looking for a job and can join immediately, having hands-on on experience in Support and Implementation projects</p>
                      <p className="salaryText">Salary <span>2345.60</span></p>
                      <p className="timeText">Available: 6 month </p>
                      <p className="cityText">New Delhi</p>
                      <p className="ratingText">rating</p>
                      <a href="#">Chat</a> <a href="#">hire</a>
                    </div>
                  </div>
                </div>
                <div className="slide ">
                  <div className="slideCont">
                    <div className="SlideImg"><img src="images/sliderimg01.jpg" alt="name" /></div>
                    <div className="slideText">
                      <h3>Md Arshad Khan Assoc CIPD</h3>
                      <p className="DepText">S/4 HANA Sales Certified consultant looking for a job and can join immediately, having hands-on on experience in Support and Implementation projects</p>
                      <p className="salaryText">Salary <span>2345.60</span></p>
                      <p className="timeText">Available: 6 month </p>
                      <p className="cityText">New Delhi</p>
                      <p className="ratingText">rating</p>
                      <a href="#">Chat</a> <a href="#">hire</a>
                    </div>
                  </div>
                </div> */}
                  
              </Slider>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footerheader">
              <h5>Pages</h5>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="hire-sap-talent.html">Hire SAP Talent</a></li>
                <li><a href="hire-specialized-tech-talent.html">Explore Specialized Talent</a></li>
                <li><a href="#">Global Elastic Teams</a></li>
                <li><a href="vetting-process.html">Vetting Process</a></li>
                <li><a href="leadership.html">Leadership Team</a></li>
                <li><a href="contactus.html">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-4 footerheader">
              <h5>Tech Specialties</h5>
              <ul>
                <li><a href="">Tech Specialties</a></li>
                <li><a href="">SAP</a></li>
                <li><a href="">Cloud &amp; DevOps</a></li>
                <li><a href="">Legacy Tech</a></li>
                <li><a href="">AI &amp; ML</a></li>

              </ul>
            </div>
            <div className="col-md-4 footerheader">
              <h5>Contact</h5>
              <ul>
                <li><a href="">Email: contact@skillscapital.io</a></li>
                <li>Address:<br />B1/H3, NH-19, Block B,<br />Mohan Cooperative Industrial<br /> Estate, New Delhi,
                  110044,<br />India</li>

              </ul>
            </div>
            <div className="col-md-4">

            </div>
            <div className="col-md-12 copyright">
              <p>&copy; 2024 skills Capital. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
