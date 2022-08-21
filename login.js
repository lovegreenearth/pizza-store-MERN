import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Form, Button, Input, Checkbox, notification} from 'antd';
import './style.css'

class Login extends React.Component {

    componentDidMount(){
            fetch('https://s3.amazonaws.com/hr.bamstrategy.media/updatedlist.json', {
                method: 'get',
                headers: {
                  "Content-Type": "application/json"
                }
            })
            .then(res =>{
                let t=res.json();
                t.then(function(result){
                    console.log('result',result)
                })
            })
            .then(data => {
                console.log('data',data)
            })
            // fetch('https://s3.amazonaws.com/hr.bamstrategy.media/updatedlist.json')
            //   .then(response => response.json())
            //   .then((jsonData) => {
            //     // jsonData is parsed json object received from url
            //     console.log(jsonData)
            //   })
            //   .catch((error) => {
            //     // handle your errors here
            //     console.error(error)
            //   })
    }

    onFinish = (sendData) => {
        fetch(`http://localhost:5000/menus`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json"
            }
        })
        .then(res =>res.json())
        .then(data => {
            if(data.response==='success'){
                this.openNotification("Success!","W E L C O M E !",'success');
                this.props.navigate111("/main");
            }else{
                this.openNotification("Failure!","You aren't registered!",'error');
            }
        })
    }

    openNotification = (title,discription,icon) => {
        notification[icon]({
          message: title,
          description: discription,
          duration:2
        });
    };

    render() {
      return(
        <div className='container-fluid login-background d-flex'>
            <div className='row d-flex login-form'>
                <h1>Log In</h1>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    // onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item 
                        className='form-input'
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        className='form-input'
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item className='justify-content-center' name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item className='justify-content-center'>
                        <Button type="primary" htmlType="submit">
                        Log In
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
      );
    }
}

function NavigateMain(props) {
    let navigate = useNavigate();
    return <Login {...props} navigate111={navigate} />
}

export default NavigateMain;