import React from "react"
import Layout from "../components/layout"
import '../styles/global.css'
import { Helmet } from "react-helmet"

export default function Reading() {
  return (
    <Layout>
    <Helmet>
      <title>Daniel Kang | Reading Recommendations </title>
      <meta name="description" content="Daniel Kang's Personal Website" />
      <meta name="keywords" content="" />
      <meta property="og.title" content="Daniel Kang | Reading Recommendations" />
      <meta property="og.type" content="website" />
      <meta property="og.description" content="Daniel Kang's Personal Website" />
      <meta property="og.image" content="" />
      <meta property="og.locale" content="en_CA" />
      <meta property="og.url" content="https://danielkang.co/reading" />
      <link rel="canonical" href="https://danielkang.co/reading" />
    </Helmet>
      <h3>
        Reading Recommendations <span role="img" aria-label="book">📘</span>    
      </h3>
      <p>
        My rules when it comes to books are simple. If a book is boring after a few pages, I stop reading it. 
        I try to switch between fiction and non-fiction after each read. 
      </p> 
      <p>
      Here are the books I've enjoyed in the past, in no particular order:
      </p>
      <ul>
        <li><b>Slouching Towards Bethlehem</b> by Joan Didion</li>
        <li><b>The Splendid and the Vile: A Saga of Churchill, Family, and Defiance During the Blitz</b> by Erik Larsen</li>
        <li><b>Miracles of the Namiya General Store</b> by Keigo Higashino (translated to Korean)</li>
        <li><b>The Foundation Trilogy</b> by Isaac Asimov</li>
        <li><b>Permanent Record</b> by Edward Snowden</li>
        <li><b>Adults in the Room: My Battle with the European and American Deep Establishment</b> by Yanis Varoufakis</li>
        <li><b>The Forever War</b> by Joe Haldeman</li>
        <li><b>Team of Rivals</b> by Doris Kearns Goodwind</li>
        <li><b>Stories of Your Life and Others</b> by Ted Chiang</li>
        <li><b>In Cold Blood</b> by Truman Capote</li>
        <li><b>Kitchen Confidential</b> by Anthony Bourdain</li>
        <li><b>The Autobiography of Malcolm X</b> by Malcolm X</li>
      </ul>
  </Layout>
  )
}