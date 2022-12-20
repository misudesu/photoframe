import React, { Component }  from 'react';
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='container'>
        <div className=' row mt-5'>
<div className='col-12 col-md-4 col-lg-4 '>
<p className='text-3xl font-bold text-center  '>የኔ Frame</p>
<p className='md:w-60 text-sm text-center'>It gives you the posablity you need to creat a truly professional Frame </p>
</div>
<div className='col-12 col-md-4 col-lg-4 text-center'>
<Link to='about' ><button>About</button></Link> <br/>
<Link to='contact'><button>Contact</button></Link>

</div>
<div className='col-12 col-md-4 col-lg-4 text-center'>
<p>Terms & Conditions</p>
<p>Privacy Policy</p>
</div>

<div className='text-center font-bold mb-5'>&copy; 2022, All Rights Reserver by የኔ Frame  </div>
        </div>
    </div>
  )
}

export default Footer