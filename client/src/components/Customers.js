import React, { useContext, useEffect, useState } from 'react'
import globalContext from '../context/globalContext'
import Modal from './Modal'
import '../Styles/Customer.css';
const Customers = () => {
  const { customers, getCustomers, loading } = useContext(globalContext)
  const [user, setUser] = useState(null)
  const [modalDisplay, setModalDisplay] = useState(false)
  useEffect(() => {
    getCustomers()
  }, [])
  return (
    <div className='customers'>
      {loading && <h2 className='loading'>loading
        <span className="load">.</span>
        <span className="load">.</span>
        <span className="load">.</span> 
      </h2>}
      {!loading && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {customers?.map(customer => (
              <tr
                className='customer'
                key={customer._id}
                onClick={() => {
                  setModalDisplay(true)
                  setUser(customer)
                }}
              >
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Modal
        user={user}
        setModalDisplay={setModalDisplay}
        modalDisplay={modalDisplay}
      />
    </div>
  )
}

export default Customers
