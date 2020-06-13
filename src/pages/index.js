import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import '../styles/global.css'
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <Layout>
    <Helmet>
      <title>Daniel Kang | Home </title>
      <meta name="description" content="Daniel Kang's Personal Website" />
      <meta name="keywords" content="" />
      <meta property="og.title" content="Daniel Kang | Home" />
      <meta property="og.type" content="website" />
      <meta property="og.description" content="Daniel Kang's Personal Website" />
      <meta property="og.image" content="" />
      <meta property="og.locale" content="en_CA" />
      <meta property="og.url" content="https://danielkang.co" />
      <link rel="canonical" href="https://danielkang.co" />
    </Helmet>
      <h3>About Me <span role="img" aria-label="wave">👋</span></h3>
      <p>
      Hello! My name is Daniel, I'm a <b>senior product manager</b> at <a href="https://stackadapt.com">StackAdapt</a>, a platform that helps marketers run ads across the internet. Previously, I worked at <a href="https://rangle.io">Rangle.io</a>, a digital product consultancy. 
      </p>
      <p>
      I care deeply about building simple, useful products that contain clean user experiences. I'm also the co-founder of <a href="https://www.meetup.com/ProductGo/">ProductGo</a>, a Toronto-based meetup for product managers. Furthermore, I work with early-stage companies to build products as a product consultant.
      </p>
      <p>
      I currently live in Toronto, Canada. I was born in South Korea, but also lived in Thailand and Turkey growing up. For my undergrad, I studied at McGill University in Montreal.
      </p>
      <p>
      I love reading books of all kinds, here are my <Link to="/reading">reading recommendations</Link>. I spend the rest of my time on my trusty bicyle, cooking copious amounts of Korean food, and consuming tech news. 
      </p>
      <h3>Let's Talk <span role="img" aria-label="mailbox">📫</span></h3>
      <ul>
        <li><a href="mailto:danminkang@gmail.com">Email</a></li>
        <li><a href="https://linkedin.com/in/danielmkang/">LinkedIn</a></li>
        <li><a href="https://twitter.com/dkdkang">Twitter</a></li>
      </ul>
    </Layout>
  );
}