/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import './layout.css';
import zIndex from '@material-ui/core/styles/zIndex';

//import Header from "./header"
//import "./layout.css"

const Layout = ({ children }) => {
  // eslint-disable-next-line
  const data = useStaticQuery(graphql`
    query SiteTitleNewQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: 5,
          padding: 5
        }}
      >
        <main>
          {children}
        </main>
      </div>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout