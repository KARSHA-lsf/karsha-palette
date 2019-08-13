import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { PageHeader } from 'antd';
import { useStaticQuery, graphql } from "gatsby"



export default class Header_own extends React.Component{
  render (){
    return(
      <PageHeader title={ this.props.title }   style={{ margin: '16px 16px' }}/>
    )
  }

}
