import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBox = () => {
  return (
    <div className='d-flex'
        style={{
            padding:'20px',
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center'
            }}>
        <div>
            <input style={{
                borderRadius: '10px',
                padding: '5px 10px',
                marginRight: '10px',
                fontWeight: '600',
                outline: '0px',
                border: '0px'
            }} placeholder='Search for products...' type="text" />
        </div>
        <div>
            <FaSearch />
        </div>
    </div>
  )
}

export default SearchBox