import Image from 'next/image'
import React from 'react'
import css from "../../styles/subreq.module.css";
import { Button } from '@mui/material';
import { useRouter } from "next/router";
import { AskclientPageText } from '@/constants/texts';
import FotterComponent from '../molecules/Fotter';
import Navbar from '../molecules/navbar';
interface searchdevProps {
  handleYouSelect: () => void;
}
const AskClient: React.FC<searchdevProps> = ({ handleYouSelect }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/subreq');
  }
  return (
    // <div classNameName={css.askclient}>
    //   <div classNameName={css.askclient1}>
    //     <div classNameName={css.askclienttext} >{AskclientPageText.point1}</div>
    //     <Image
    //       src="/subreqImages/select-candidates2.jpg"
    //       width={200}
    //       height={200}
    //       alt="WorldImg"
    //       classNameName={css.image}
    //     />
    //     <Button onClick={handleYouSelect} type="submit" variant="contained" color="primary">
    //           Get candidates
    //         </Button>
    //   </div>
    //   <div classNameName={css.askclient1}>
    //     <div classNameName={css.askclienttext}>{AskclientPageText.point2}</div>
    //     <Image
    //       src="/subreqImages/select-candidates.jpg"
    //       width={200}
    //       height={200}
    //       alt="WorldImg"
    //       classNameName={css.image}
    //     />
    //     <Button onClick={handleClick} type="submit" variant="contained" color="primary"> 
    //           fill information
    //     </Button>
    //   </div>
    // </div>
    <div>
      <Navbar/>
      <div className="wrapper candidateSection ">
        {/* <!-- welcome Section  --> */}
        <div className="candidateCont ">
          <section className="container mt-4 ">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-5 ">
                <h2>Initiate Candidate Selection!</h2>
                <div><img src="images/select-candidates2.png" alt="Initiate Candidate Selection" className="img-fluid" /></div>
                <div><a onClick={handleYouSelect}>Get Candidates</a></div>
              </div>
              <div className="col-md-5 ">
                <h2>Automate Selection Process!</h2>
                <div><img src="images/select-candidates1.png" alt="Initiate Candidate Selection" className="img-fluid" /></div>
                <div onClick={handleClick}><a>Fill Information</a></div>
              </div>
              <div className="col-md-1"></div>
            </div>

          </section>
        </div>


      </div>
      <FotterComponent/>
    </div>
  )
}

export default AskClient
