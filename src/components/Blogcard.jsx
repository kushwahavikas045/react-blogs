import React from 'react'
import { Avatar, Card, Col, Row } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
const {Meta} = Card;
const Blogcard = ({posts, searchData}) => {
  const history = useHistory();
 
  //redirect to details
  const handleLink = (id) =>{
    return history.push(`/blog/details/${id}`);
  }

  //fetch data from posts
 const postsData = posts && searchData(posts).slice(0,10).map((post) =>(
    <Col span={8} key={post.id}>
    <Card style={{marginBottom:'2%'}}
    actions={[

      <div onClick={() => handleLink(post.id)}><EllipsisOutlined key="ellipsis" /><p >More</p></div>,
  
    ]}
  >
  
    <Meta
    style={{minHeight: 180}}
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={post.title}
      description={post.body}
    />
    </Card>
  </Col>
  ))
    return (
        <div className="site-card-wrapper">
        <Row gutter={16}>
             {postsData.length > 0 ? postsData : "No records found"}
        </Row>
      </div>
    )
}

export default Blogcard
