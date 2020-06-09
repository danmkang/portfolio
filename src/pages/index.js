import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import '../styles/global.css'

export default function Home() {
  return (
    <Layout>
      <h3>About Me <span role="img" aria-label="wave">👋</span></h3>
      <p>
      Hello! I'm currently a <b>senior product manager</b> at <a href="https://stackadapt.com">StackAdapt</a>, a platform that helps marketers run ads across the internet. Previously, I worked at <a href="https://rangle.io">Rangle.io</a>, a digital product consultancy.
      </p>
      <p>
      I care deeply about building simple, useful products that contain clean user experiences. Also, I'm the co-founder of <a href="https://www.meetup.com/ProductGo/">ProductGo</a>, a Toronto-based meetup for folks in product. 
      </p>
      <p>
      I currently live in Toronto, Canada. I was born in South Korea, but also lived in Thailand and Turkey growing up. I studied at McGill University in Montreal.
      </p>
      <p>
      I love books of all kinds, here are my <Link to="/reading">reading recommendations</Link>. I spend the rest of my time on my trusty bicyle, cooking copious amounts of Korean food, and consuming tech news. 
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