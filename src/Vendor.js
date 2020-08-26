import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClearIcon from '@material-ui/icons/Clear';
import './Vendor.css';

function Vendor() {
    return (
        <div className='vendor'>
            <div className='vendor__addCriteria'>
                <h1>ADD CRITERIA</h1>
                <ArrowDropDownIcon />
            </div>

            <div className='vendor__container'>
                <ClearIcon />
                <div className='vendor__containerHeader'>
                <img 
                    className='vendor__containerImage'
                    src='https://media.glassdoor.com/sql/9079/google-squarelogo-1441130773284.png'
                    alt=''/>
                <h1>Dropbox</h1>
                </div>

                <h2><span>Dropbox is a cloud based file management</span></h2>
                <h2><span>Total funding $170m</span></h2>
                <h2><span>www.dropbox.com/pricing</span></h2>
                <h2><span>5 different features present</span></h2>
                <h2><span>4 customer case studies found</span></h2>

            </div>
        </div>
    )
}

export default Vendor;
