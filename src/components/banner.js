import React ,{useEffect} from "react"
import {AnimatePresence, motion, useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer';
import {Link} from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const variants = {
  visible: { 
    transition:{delay: 0.6},
     opacity: 1
    },
  hidden: { 
    opacity: 0}
}



const Banner = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();


  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div className="banner">
            <motion.div className="container">
              <motion.div initial={{ y: "-20%" }} animate={{ y: 0 }} transition={transition} className="banner-block-left">
                <motion.p>
                  I am Tathagata Paul, <br></br> developer and creator.
                </motion.p>
              </motion.div>
              <motion.div initial={{ y: "20%" }} animate={{ y: 0 }} transition={transition}className="banner-block-right">
                <motion.p>
                  I am an undergraduate<br></br> pursuing bachelor's degree in <br></br>Computer Science.
                </motion.p>
              </motion.div>
            </motion.div>
            <div className="background-text">
              <p>KONICHIWA</p>
            </div>
        </motion.div>

        <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}  className="about">
          <motion.p>
           <br></br><br></br>
            <motion.span>I am Tathagata Paul.</motion.span>
            <br></br> 
            <motion.span>I like to create stuff that is <b>beautiful</b> and <b>aesthetic</b>.</motion.span>
            <br></br>
            <motion.span>I am an undergraduate pursuing a CSE degree.</motion.span>
            <br></br> 
            <motion.span>My hobbies include listening to music and playing games.</motion.span>
            <br></br>
            <motion.span>molybdenum is just a nickname :)</motion.span>
          </motion.p>

          <motion.div >
            <a href="https://github.com/4molybdenum2"><FontAwesomeIcon icon={faGithub}/></a> &nbsp;
            <a href="https://twitter.com/4molybdenum2"><FontAwesomeIcon icon={faTwitter}/></a>
          </motion.div>

        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Banner