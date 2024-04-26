import axios from 'axios';
import { useEffect, useState } from 'react';
import homePageStyle from "../../../styles/homePageStyles.module.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fiveStart from "../../../assets/images/Yellow_start.svg";
import 'react-multi-carousel/lib/styles.css';
import { CardContent } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { DEV_PUBLIC_URL } from '../../../../configs/auth';
const apiUrl = `${DEV_PUBLIC_URL}form/candidates`;
import Image from 'next/image';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import hireDevStyle from "../../../styles/hireDevStyles.module.css";
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
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        backgroundColor: "white",
        marginTop: "-28px",
        // marginRight:"180px"
      } as any}
      onClick={onClick}
    >
      <NavigateNextIcon sx={{color:"black" ,fontSize:"46px"}}/>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        backgroundColor: "white",
        marginTop: "-28px",
        '@media("768px"<width and width<="1024px")': {
          marginLeft: "100px",
        }
      } as any}
      onClick={onClick}
    >
      <NavigateBeforeIcon sx={{color:"black",fontSize:"46px"}}/>
    </div>
  );
}
function truncateSentence(sentence: string, maxLength = 195) {
  if (sentence != undefined && sentence.length > maxLength) {
    return sentence.substring(0, maxLength) + "...";
  } else {
    return sentence;
  }
}
const HomeCandidateProfile: React.FC = () => {
  const [apiResponse, setApiResponse] = useState<Candidates[]>([]);
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState("TM")
  const fetchData = async (skills: string) => {
    try {
      console.log("Fetching data for skills:", skills);

      let resp = await axios.post(`${apiUrl}`, {
        profiles: { Skill_Set: skills }, pageNumber: Math.floor(Math.random() * 10) + 1
      });
      let candidates = resp.data.data.candidatesData;
      setApiResponse(candidates);
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
  const profileImageURLs = [
    // "https://thepienews.com/wp-content/uploads/2020/01/Profile-Picture-Small.jpg",
    "https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg",
    "https://img.freepik.com/premium-photo/happy-businessman_107420-67978.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1699747200&semt=ais",
    "https://img.freepik.com/premium-photo/photo-young-student-guy-internet-online-meeting-video-call-lesson-conference-study-concept_274222-31085.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699747200&semt=ais",
    "https://img.freepik.com/premium-photo/close-up-happy-bearded-man-suit-laughing-smiling-standing-white-background_1258-49895.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698451200&semt=ais",
  ];
  const settings: any = {
    dots: false,
    arrows: true,
    autoplay: true,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow  />
  };
  return (
    <>
      <div className={homePageStyle.carauselHeading}>Best Developers</div>
      <div className={homePageStyle.belowHeading}>They are some of the best developers we have and they have tested and worked with several client</div>
      <div className={hireDevStyle.buttonsContainer} >
        <div className={hireDevStyle.buttonsContainerSecond}>
          <div className={skills==="TM"?hireDevStyle.sapbuttonsecondClicked:hireDevStyle.sapbuttonsecond} onClick={() => setSkills("TM")}>TM</div>
          <div className={skills==="SD"?hireDevStyle.cloudbuttonsecondClicked:hireDevStyle.cloudbuttonsecond} onClick={() => setSkills("SD")}>SD</div>
          <div className={skills==="FI"?hireDevStyle.cloudbuttonsecondClicked:hireDevStyle.cloudbuttonsecond} onClick={() => setSkills("FI")}>FI</div>
          <div className={skills==="CO"?hireDevStyle.cloudbuttonsecondClicked:hireDevStyle.cloudbuttonsecond} onClick={() => setSkills("CO")}>CO</div>
          <div className={skills==="GTS"?hireDevStyle.cloudbuttonsecondClicked:hireDevStyle.cloudbuttonsecond} onClick={() => setSkills("GTS")}>GTS</div>
          <div className={skills==="MM"?hireDevStyle.legacybuttonsecondClicked:hireDevStyle.legacybuttonsecond} onClick={() => setSkills("MM")}>MM</div>
        </div>
      </div>
      <div className={homePageStyle.profileCarausel}>
        <Slider {...settings}>
          {(apiResponse === undefined) ? ("loading...") : (apiResponse.map((item: any, index: any) => (
            <div className={homePageStyle.slide} key={index}>
              <div className={homePageStyle.ProfilecardStyle}>
                <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {/* <div className={css.carauselContainer} > */}
                  <div>
                    <Image height={280} width={240} className={homePageStyle.carauselImagesProfile} src={profileImageURLs[index % 4]} alt="" />
                  </div>

                  <div className={homePageStyle.contentCandidate}>
                    <div className={homePageStyle.name}>{item.Name}</div>
                    <div className={homePageStyle.candidateskills}>{truncateSentence(item.CandidateProfile)}</div>
                    <div className={homePageStyle.skillsSection} ><span style={{ fontWeight: "600" }}>Salary:</span>  <span style={{ color: "blue" }}>{item.Salary}</span></div>
                    <div className={homePageStyle.availableContainer } >
                      <div style={{ color: "blue" }}><span style={{ fontWeight: "570" }}>Available:</span>  6 months</div>
                      <div>{item.CurrentLocation}</div>
                    </div>
                    <Image style={{ height: "50px", width: "120px", marginTop: "-6px" }} src={fiveStart} alt="" />
                    <div style={{ display: "flex", gap: "30px" }}>
                      <button className={homePageStyle.can_button}>Chat</button>
                      <button className={homePageStyle.can_button}>Hire</button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          )))}
        </Slider>
      </div>
    </>

  )

}

export default HomeCandidateProfile
