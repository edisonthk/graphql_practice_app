/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from 'styled-components'

const Label = styled.label`
  display: block;
`;

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

const FormControl = ({label, name, defaultValue}) => (
  <Wrapper>
    <Label>{label}</Label>
    <input type="text" name={name} defaultValue={defaultValue} />
  </Wrapper>
)

export default FormControl
