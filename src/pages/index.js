import React from "react"
import "../styles/styles.scss"
import SEO from "../components/SEO"
//Import Components
import Header from "../components/header"
import Banner from "../components/banner"
import Layout from "../components/layout"
import { motion, AnimatePresence } from "framer-motion"

const transition = { duration: 1, ease: [0.6, -0.05, 0.01, 0.9] }


const IndexPage = () => (
  <Layout>
    <div className="container">
      <AnimatePresence
        exitBeforeEnter
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={transition}
        >
          <SEO title="Home"/>
          <Header />
          <Banner />
        </motion.div>
      </AnimatePresence>
    </div>
  </Layout>
)

export default IndexPage
