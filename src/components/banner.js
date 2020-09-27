import React ,{useEffect} from "react"
import {AnimatePresence, motion, useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer';



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
                  I am an undergraduate<br></br> pursuing Bachelor in <br></br>Computer Science degree.
                </motion.p>
              </motion.div>
            </motion.div>
        </motion.div>

        <div className="background-text">
          <p>KONICHIWA</p>
        </div>

        <motion.div  className="about">
          <motion.p 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants}
          >
           <br></br><br></br>
            <motion.span>I am Tathagata Paul.</motion.span>
            <br></br> 
            <motion.span>I like to create stuff that is <b>beautiful</b> and <b>aesthetic</b>.</motion.span>
            <br></br>
            <motion.span>I am an undergraduate pursuing a CSE degree.</motion.span>
            <br></br> 
            <motion.span>As a hobby I like to listen to music and play games.</motion.span>
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Banner