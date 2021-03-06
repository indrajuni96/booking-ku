import React, { Component } from "react";

import landingPageJson from "json/landingPage.json"

import Header from "parts/header"
import Hero from "parts/hero"
import MostPicked from "parts/MostPicked"
import Categories from 'parts/categories'
import Testimony from 'parts/testimony'
import Footer from 'parts/footer'

export default class landingPage extends Component {
  constructor(props) {
    super(props)
    this.refMostPicked = React.createRef()
  }

  componentDidMount() {
    window.title = "Staycation | Home"
    window.scrollTo(0, 0)
  }

  render() {
    return <>
      <Header {...this.props}></Header>
      <Hero refMostPicked={this.refMostPicked} data={landingPageJson.hero} />
      <MostPicked refMostPicked={this.refMostPicked} data={landingPageJson.mostPicked} />
      <Categories data={landingPageJson.categories} />
      <Testimony data={landingPageJson.testimonial} />
      <Footer />
    </>;
  }
}
