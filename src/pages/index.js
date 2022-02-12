import React from "react"
import Layout from "../components/layout"
import Pricing from "../components/Pricing"
import Services from "../components/Services"
import Team from "../components/Team"
import Contact from "../components/Contact"
import BottomBar from "../components/BottomBar"
import Header from "../components/header"

const Index = () => {
  return (
    <Layout>
      <Header />
      <Pricing />
      <Services />
      <Team />
      <Contact />
      <BottomBar />
    </Layout>
  )
}

export default Index
