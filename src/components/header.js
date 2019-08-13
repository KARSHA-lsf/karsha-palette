
import React from "react"
import { PageHeader } from 'antd';
import { useStaticQuery, graphql } from "gatsby"

import {Query} from 'react-apollo'
import gql from 'graphql-tag'

const  GET_SITE = gql`
  {
    site {
      siteMetadata {
       title
       subtitle
      }
    }
  }
`;

export default class Header_own extends React.Component{
  render (){
    return(
      <Query query={GET_SITE}>
        {({data,error}) => {
          if(error) return <PageHeader title="Karsha"  style={{ margin: '16px 16px' }}/>
          
          return  <PageHeader title={data.site.siteMetadata.title} subTitle={data.site.siteMetadata.subtitle}  style={{ margin: '16px 16px' }}/>
        }}
      </Query>
    )
  }

}
