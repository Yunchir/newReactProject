import "./../styles/header.css"

export default function Header () {
    return (
        <div>
            <header>
            <div className="nav container">
                    <img className="logo" src="https://149611589.v2.pressablecdn.com/wp-content/uploads/2016/07/stack-overflow.png" alt="#" />
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Help</a>
                    </li>
                    <li>
                        <a href="#">about</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <input className="search" type="search" placeholder="Search..." />
                <button className="log">Log-in</button>
                <button className="sing">Sign up</button>
            </div> 
        </header>
        </div>
    )
}