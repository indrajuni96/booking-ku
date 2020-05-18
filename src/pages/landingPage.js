import React, { Component } from "react";

import landingPageJson from "json/landingPage.json"

import Header from "parts/header"
import Hero from "parts/hero"

export default class landingPage extends Component {

  render() {
    return <>
      <Header {...this.props}></Header>
      <Hero data={landingPageJson.hero} />
    </>;
  }
}
