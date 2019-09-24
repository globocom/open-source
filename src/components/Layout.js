import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import GlobalStyle from "../styles/global"
import Header from "./Header"

const Main = styled.main`
  margin-top: 2rem;
`

const Layout = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    <Header />
    <Main>{children}</Main>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
