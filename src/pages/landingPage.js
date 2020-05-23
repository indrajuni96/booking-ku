import React, { Component } from "react";

import landingPageJson from "json/landingPage.json"

import Header from "parts/header"
import Hero from "parts/hero"
import MostPicked from "parts/MostPicked"

export default class landingPage extends Component {
  constructor(props) {
    super(props)
    this.refMostPicked = React.createRef()
  }

  render() {
    return <>
      <Header {...this.props}></Header>
      <Hero refMostPicked={this.refMostPicked} data={landingPageJson.hero} />
      <MostPicked refMostPicked={this.refMostPicked} data={landingPageJson.mostPicked} />
    </>;
  }
}
