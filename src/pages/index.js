import React from "react"
import Layout from "../components/layout"
import Pricing from "../components/Pricing"
import Services from "../components/Services"
import Team from "../components/Team"
import Contact from "../components/Contact"
import BottomBar from "../components/BottomBar"

const Index = () => {
  return (
    <Layout>
      <Pricing />
      <Services />
      <Team />
      <Contact />
      <BottomBar />
    </Layout>
  )
}

export default Index
