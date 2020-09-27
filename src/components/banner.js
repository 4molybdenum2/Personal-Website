import React from "react"
import {AnimatePresence, motion} from "framer-motion"


//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Banner = () => {
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

        <div className="about">
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised
          in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
          passages, and more recently with desktop publishing software like Aldus PageMaker 
          including versions of Lorem Ipsum.
          </p>
        </div>
      </AnimatePresence>
    </>
  )
}

export default Banner