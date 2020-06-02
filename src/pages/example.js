import React, { Component } from 'react'

// import { InputDate } from 'elements/Form'
import Header from 'parts/header'
import Breadcrumb from 'elements/breadcrumb'

export default class Example extends Component {
    render() {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "House Details", pageHref: "" }
        ]

        return (
            <>
                <Header {...this.props}></Header>
                <div className="container">
                    <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
                        <div className="col-auto">
                            <Breadcrumb
                                data={breadcrumb}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
