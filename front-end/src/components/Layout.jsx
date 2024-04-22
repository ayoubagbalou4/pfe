import React from 'react'

const Layout = (props) => {
    return (
        <div class="containerDahboard">
            <div class="aside">
                <div class="brand">double<span>AC</span></div>
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
                        <img src="http://localhost:3000/images/provile_empty.png" alt="" />
                    </div>
                </nav>
                {props.content}
            </div>
        </div>
    )
}

export default Layout
