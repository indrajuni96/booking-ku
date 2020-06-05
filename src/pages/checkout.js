import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

import Header from 'parts/header'
import Button from 'elements/button'
import Stepper, { Numbering, Meta, MainContent, Controller } from 'elements/stepper'

import BookingInformation from 'parts/checkout/bookingInformation'
import Payment from 'parts/checkout/payment'
import Completed from 'parts/checkout/completed'

import ItemDetails from "json/itemDetails.json";

export default class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: ""
    }
  }

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value
      }
    })
  }

  componentDidMount() {
    window.scroll(0, 0)
  }

  render() {
    const { data } = this.state
    const checkout = { duration: 3 }
    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below.",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        )
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below.",
        content: (
          <Payment
            data={data}
            ItemDetails={ItemDetails}
            checkout={checkout}
            onChange={this.onChange}
          />
        )
      },
      completed: {
        title: "Yay! Completed",
        description: null,
        content: <Completed />
      }
    }

    return (
      <>
        <Header isCentered />
        <Stepper steps={steps}>
          {
            (prevStep, nextStep, currentStep, steps) => (
              <>
                <Numbering
                  data={steps}
                  current={currentStep}
                  style={{ marginBottom: 50 }}
                />

                <Meta
                  data={steps}
                  current={currentStep}
                />

                <MainContent
                  data={steps}
                  current={currentStep}
                />

                {currentStep === "bookingInformation" && (
                  <Fade>
                    <Controller>
                      {data.firstName !== "" &&
                        data.lastName !== "" &&
                        data.email !== "" &&
                        data.phone !== "" && (
                          <Fade>
                            <Button
                              className="btn mb-3"
                              type="button"
                              isBlock
                              isPrimary
                              hasShadow
                              onClick={nextStep}
                            >
                              Continue to Book
                            </Button>
                          </Fade>
                        )}

                      <Button
                        className="btn"
                        type="link"
                        isBlock
                        isLight
                        href={`/properties/${ItemDetails._id}`}
                      >
                        Cancel
                        </Button>
                    </Controller>
                  </Fade>
                )}

                {currentStep === "payment" && (
                  <Controller>
                    {data.proofPayment !== "" &&
                      data.bankName !== "" &&
                      data.bankName !== "" && (
                        <Fade>
                          <Button
                            className="btn mb-3"
                            type="button"
                            isBlock
                            isPrimary
                            hasShadow
                            onClick={nextStep}
                          >
                            Continue to Book
                        </Button>
                        </Fade>
                      )}

                    <Button
                      className="btn"
                      type="button"
                      isBlock
                      isLight
                      href={prevStep}
                    >
                      Cancel
                        </Button>
                  </Controller>
                )}

                {currentStep === "completed" && (
                  <Controller>
                    <Button
                      className="btn"
                      type="link"
                      isBlock
                      isPrimary
                      hasShadow
                      href=""
                    >
                      Back to Home
                    </Button>
                  </Controller>
                )}
              </>
            )
          }
        </Stepper>
      </>
    )
  }
}
