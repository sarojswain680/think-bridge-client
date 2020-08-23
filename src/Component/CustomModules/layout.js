
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
    return (
        <>
            <Header siteTitle={"Shop Bridge"} />
            <div
                style={{
                    margin: `0 auto`,
                    padding: `0 1.0875rem 1.45rem`,
                    backgroundColor: '#D3D3D3'
                }}
            >
                <main>{children}</main>
                <footer key="footer" style={{ textAlign: 'center' }}>
                    Developed by: Saroj kumar swain
        </footer>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout