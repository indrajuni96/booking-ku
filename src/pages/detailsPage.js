import React, { Component } from 'react'
import Fade from 'react-reveal'

import Header from 'parts/header'
import PageDetailTitle from 'parts/pageDetailTitle'
import FeaturedImage from 'parts/featuredImage'
import PageDetailDescription from 'parts/pageDetailDescription'
import BookingForm from 'parts/bookingForm'
import Categories from 'parts/categories'
import Testimony from 'parts/testimony'
import Footer from 'parts/footer'

import ItemDetails from 'json/itemDetails.json'

export default class detailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page"
    window.scrollTo(0, 0)
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" }
    ]

    return (
      <>
        <Header {...this.props} > </Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        ></PageDetailTitle>
        <FeaturedImage data={ItemDetails.imageUrls} ></FeaturedImage>
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>

            <div className="col-5">
              <Fade bottom>
                <BookingForm itemDetails={ItemDetails} />
              </Fade>
            </div>
          </div>
        </section>

        <Categories data={ItemDetails.categories} />
        <Testimony data={ItemDetails.testimonial} />
        <Footer />
      </>
    )
  }
}
