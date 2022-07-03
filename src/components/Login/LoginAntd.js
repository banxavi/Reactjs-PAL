import React from 'react';
import { Form , Input, Button, Checkbox } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

class NormalLoginForm extends React.PureComponent {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          
            <Input
              prefix={<SmileOutlined  type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
       
        </Form.Item>
        <Form.Item>
         
            <Input
              prefix={<SmileOutlined  type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
    
        </Form.Item>
        <Form.Item>
       
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

export default NormalLoginForm;