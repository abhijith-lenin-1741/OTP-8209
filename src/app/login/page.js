'use client'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Checkbox, Form, Input } from 'antd'

const Login = () => {
  const [details, setDetails] = useState({
    email: '',
    password: '',
  })
  const [alert, setAlert] = useState(false)
  const [message, setMessage] = useState('')
  const login = async () => {
    try {
      const req = await fetch('api/users/login', {
        method: 'POST',
        // credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: details.email,
          password: details.password,
        }),
      })
      const data = await req.json()

      return data
    } catch (err) {
      console.log(err)
    }
  }
  const onFinish = async (values) => {
    const response = await login()
    console.log(response)
    if (response?.message) {
      setMessage('Login Successfully')
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 2000)
    } else {
      setMessage('Login Failed')
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 2000)
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="login-form">
      {alert && <Alert message={message} type="success" />}
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          className="label"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input
            value={details?.name}
            onChange={(e) => setDetails((prev) => ({ ...prev, email: e.target.value }))}
            type="email"
            placeholder="Enter Email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          className="label"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password
            value={details?.password}
            onChange={(e) => setDetails((prev) => ({ ...prev, password: e.target.value }))}
            placeholder="Enter Password"
          />
        </Form.Item>

        {/* <Form.Item name="remember" valuePropName="checked" label={null}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
