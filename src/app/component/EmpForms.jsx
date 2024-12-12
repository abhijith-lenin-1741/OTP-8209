import React, { useState } from 'react'

const EmpForms = ({ id }) => {
  const [datas, setData] = useState({
    erno: '',
    desc: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`api/employe`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        erNo: datas?.erno,
        empId: JSON.stringify(id),
        data: datas?.desc,
      }),
    })
    const data = await response.json()
    console.log('data', data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Er No"
          onChange={(e) => setData((prev) => ({ ...prev, erno: e.target.value }))}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => setData((prev) => ({ ...prev, desc: e.target.value }))}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default EmpForms
