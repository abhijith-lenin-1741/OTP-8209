'use client'

import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
const { Meta } = Card;
const Page = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      // const response = await fetch('api/users');
      const response = await fetch('api/users')
      const data = await response.json()
      console.log('users', data?.docs)
      setUsers(data?.docs)
    }

    getPosts()
  }, [])

  return (
    <div>
      <h1>users</h1>
      <ul className='main'>
        {users?.map((user) => (
          <Card key={user?.id}
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img alt="example" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" />
            }
          >
            <Meta title={user?.name} description={user?.email} />
          </Card>
        ))}
      </ul>
    </div>
  )
}

export default Page
