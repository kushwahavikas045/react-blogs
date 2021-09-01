import React from 'react'
import { PageHeader, Button } from 'antd';
const Header = ({title, subtitle, extra, search}) => {
    return (
        <PageHeader
    className="site-page-header"
    title={title}
    subTitle={search}

    extra={[
        <a href="/blog/create" target="_blank"><Button key="3">{extra}</Button></a>,
        
      ]}
  />
    )
}

export default Header
