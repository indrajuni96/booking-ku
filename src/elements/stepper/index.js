import React, { useState } from 'react'
import propTypes from 'prop-types'


export default function Stepper(props) {
    const { steps, initialStep } = props
    const stepsKeys = Object.keys(steps)

    const [currentStep, setCurrentStep] = useState(
        stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
    )
    const totalStep = stepsKeys.length
    const indexStep = stepsKeys.indexOf(currentStep)

    const prevStep = () => {
        if (+indexStep > 0) {
            setCurrentStep(stepsKeys[indexStep - 1])
        }
    }

    const nextStep = () => {
        if (+indexStep < totalStep) {
            setCurrentStep(stepsKeys[indexStep + 1])
        }
    }

    return (
        <>
            {props.children(prevStep, nextStep, currentStep, steps)}
        </>
    )
}

Stepper.propTypes = {
    steps: propTypes.object.isRequired,
    initialStep: propTypes.string
}

export { default as Numbering } from './numbering'
export { default as Meta } from './meta'
export { default as Controller } from './controller'
export { default as MainContent } from './mainContent'