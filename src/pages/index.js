import React from "react"
import Layout from "../components/layout"
import LogoCloud from "../components/LogoCloud"
import Services from "../components/Services"
import Team from "../components/Team"
import Contact from "../components/Contact"

const Index = () => {
  return (
    <Layout>
      <LogoCloud />
      <Services />
      <Team />
      <Contact />
    </Layout>
  )
}

export default Index
