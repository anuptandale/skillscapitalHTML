import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import axios from "axios";
import { DEV_PUBLIC_URL } from '../../../../configs/auth';
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
const ProfileCorousel = () => {
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
        <div>
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet" />
            <link href="css/fonts.css" rel="stylesheet" />
            <link href="css/reset.css" rel="stylesheet" />
            <link href="css/style.css" rel="stylesheet" />
            <link href="css/responsive.css" rel="stylesheet" />
            <div className="searchSliderCont">
                <section className="container mt-4 ">
                    <div className="row ">
                        <div className="col-md-12   ">
                            <h2>Best Developers</h2>
                            <h4>They are some of the best developers we have and they have tested and worked with several client</h4>
                            {/* <Slider {...setting} className="searchSlider">
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
              </Slider> */}
                            <Slider className="searchSlider"> 
                                <div className="slide "> 
                                    <div className="slideCont">  
                                        <div className="SlideImg"><img src="images/sliderimg01.jpg" alt="name"/></div>
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
                                        <div className="SlideImg"><img src="images/sliderimg01.jpg" alt="name"/></div>
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
                                        <div className="SlideImg"><img src="images/sliderimg01.jpg" alt="name"/></div>
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
                                        <div className="SlideImg"><img src="images/sliderimg01.jpg" alt="name"/></div>
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
                                        <div className="SlideImg"><img src="images/sliderimg01.jpg" alt="name"/></div>
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
                                
                            </Slider>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProfileCorousel
