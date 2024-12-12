
import React from 'react'
import config from '@payload-config'
import { getPayload } from 'payload'
import AddDoc from '../component/AddDoc'
const AddUser = async () => {
  const payload = await getPayload({ config })
  const findResult = await payload.find({ collection: 'documents' })

  return (
    <div>
      <ul>
        {findResult?.docs?.map((page) => {
          return <li>{page?.name}</li>
        })}
      </ul>
      <AddDoc />
    </div>
  )
}

export default AddUser
