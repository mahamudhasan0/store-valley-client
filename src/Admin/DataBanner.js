import React from 'react'
import {BsPencil} from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import {CgToolbox} from 'react-icons/cg'
import {Link} from 'react-router-dom'
import './Data.css'

const DataBanner = () => {
    return (
        <div className='banner'>
            <p className='storeValley'>Store Valley</p>
            <div className='links'>
                <Link to='/manageproduct' className='adminp'><CgToolbox/> Manage Product</Link>
                <Link to='/addproduct' className='adminp'><AiOutlinePlus/> Add Product</Link>
                <p className='adminp'><BsPencil/> Edit Product</p>
            </div>
        </div>
    )
}

export default DataBanner
