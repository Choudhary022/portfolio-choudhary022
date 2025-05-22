import { Layout, } from 'antd'
import { useState } from 'react'
import NavigationBar from './module/navbar';
import ProfileSummary from './module/content/profileSummary';
import FooterComp from './module/footer';
import { Content } from 'antd/es/layout/layout';
import ContentComp from './module/content';

const App = () => {

  return (
    <Layout>
      <NavigationBar />

      <Content
        style={{
          marginLeft: "200px",
          marginRight: "200px"
        }}
      >
        <ProfileSummary />
        <hr />
        <ContentComp />
      </Content>
      <FooterComp />
    </Layout>
  )
}

export default App