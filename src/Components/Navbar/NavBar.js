import React from 'react'

function NavBar() {
  return (
    <div  style={{position:"fixed", top:"0", width:"100%", height:"30px", padding:"20px", display:"flex", justifyContent:"space-between", backgroundColor:"black"}} className='navabr'>
        < img style={{width:"80px",position:"fixed", left:"20px"}} className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png " alt="" />
      <img style={{width:"30px", position:"fixed", right:"20px"}} className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
    </div>
  )
}

export default NavBar