import React, { Component } from 'react';
import  './login.css';
import imgURL from '../../image/logokou.png';
import { Form, Icon, Input, Button, Typography } from 'antd';

const { Title } = Typography;

class Login extends Component {
  render() {
    return (
      <div 
        className="login-box"
        style={{backgroundImage: "url(" + require("../../image/dangan.jpeg") + ")"}}
      >
        <div className="left" >
          <div>
            <img src={imgURL} alt="img" className="logoImg"/>
          </div>
          <div>
            掌舵科技档案管理系统
          </div>
          
        </div>
        <div className="right">
          <div className='login-main'>
            <Title className="tagcolor">登陆</Title>
            <Form className="login-form">
              <span  className="tagcolor tagcolor2">账号：</span>
              <Form.Item>
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="请填入用户名/手机/邮箱"
                  />
              </Form.Item>
              <span className="tagcolor tagcolor2">密码：</span>
              <Form.Item>
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="请输入密码"
                  />
              </Form.Item>
              <Form.Item>
                <Button type="primary" className="login-form-button">
                  登陆
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
