import React from 'react'

const Content = (props) => {
  return (
    <div class="containerDahboard">
        <div class="aside">
            <div class="brand">doubleac<span>Blog</span></div>
            <div class="linksSide">
                <a href=""><i class="fa-solid fa-house-chimney"></i> Dashboard</a>
                <a class="active" href=""><i class="fa-solid fa-user"></i>Affectation annuel des formateurs</a>
                
                <a href=""><i class="fa-solid fa-users"></i> Users</a>
                <a href=""><i class="fa-solid fa-house-chimney"></i> Dashboard</a>
            </div>
        </div>
        <div class="main">
            <nav>
                <div class="header">Header</div>
                <div class="logout">
                    <img src="images/profile_1.webp" alt=""/>
                </div>
            </nav>
            {props.content}
            
        </div>
    </div>
    
  )
}

export default Content