'use client'

import { useEffect, useState } from 'react'
import qs from 'qs'
import EmpForms from './EmpForms'
const AddDoc = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [id, setId] = useState(null)
  const [token, setToken] = useState('')
  useEffect(() => {
    updateUser()
  }, [])

  // Updating a collection
  const updateUser = async () => {
    const stringifiedQuery = qs.stringify(
      {
        where: {
          name: {
            contains: 'John',
          },
        },
      },
      { addQueryPrefix: true },
    )
    const response = await fetch(`api/documents/${stringifiedQuery}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Joseph',
        description: 'Updated Description',
      }),
    })
    const data = await response.json()
  }
  const handleAdd = async () => {
    const response = await fetch(`api/documents`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Added from page',
        description: 'Added Description from new page',
      }),
    })
    const data = await response.json()
  }
  const getUser = async () => {
    try {
      const req = await fetch('api/users/me', {
        method: 'GET',
        // credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await req.json()
      setToken(data?.token)
      setId(data?.user?.id)
    } catch (err) {
      console.log(err)
    }
  }
  const handleLogout = async () => {
    try {
      const req = await fetch('api/users/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await req.json()
    } catch (err) {
      console.log(err)
    }
  }

  const handleLogin = async () => {
    try {
      const req = await fetch('api/users/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      })
      const data = await req.json()
    } catch (err) {
      console.log(err)
    }
  }
  const getDetails = async () => {
    try {
      const req = await fetch('api/employe', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const data = await req.json()
      const filterd_item = data?.docs?.filter((item) => item?.empId == id)
      console.log('filteredDta', filterd_item)
    } catch (err) {
      console.log(err)
    }
  }
  const getTestDetails = async () => {
    const response = await fetch('api/test', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`, // Include the token
        'Content-Type': 'application/json',
      },
    })
    const json = await response.json()
    console.log("json", json);
  }
  return (
    <div>
      Updated Description
      <button onClick={handleAdd}>Add Document</button>
      <button onClick={getUser}>Get Current User</button>
      <div>
        <button onClick={handleLogout}>Logout</button>
        <form>
          <input
            type="text"
            onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
          />
          <input
            type="text"
            onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
          />
        </form>
        <button onClick={handleLogin}>Login</button>
      </div>
      <EmpForms id={id} />
      <div>
        <button onClick={getDetails}>Get My Emp Details</button>
      </div>
      <div>
        <button onClick={getTestDetails}>Get Test Api</button>
      </div>
    </div>
  )
}

export default AddDoc
