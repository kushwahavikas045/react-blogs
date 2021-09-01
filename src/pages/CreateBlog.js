import React,{useState} from 'react'
import Header from '../components/Header';
import {createPost} from '../apiconfig/api';
import { Form, Input, Button, message } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const CreateBlog = () => {
    const[formData, setFromData] = useState("");

    const success = () => {
        message.success('You response save successfull!');
      };

  const onFinish = (values) => {
    setFromData(values.user);
    if(!values.user.title || !values.user.body){
        return 
    }
    createPost(formData).then((res) =>{
        setFromData("");
        success();
       
    }).catch((err) =>{
        console.log(err.message);
    })
  };

  return (
      <>
      <Header title="Create Blog" subtitle="blogs..."/>
    <Form style={{marginTop:'10%'}} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'title']}
        label="Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'body']} label="Write Posts"
      rules={[
        {
          required: true,
        },
      ]}
      >
      
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary"  htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};
export default CreateBlog;