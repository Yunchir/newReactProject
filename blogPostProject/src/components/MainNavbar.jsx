import "../styles/MainNavbar.css"

export default function MainNAvbar() {
    return (
      <>
        <div>
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse"
                id="navbarNavDropdown"
                style={{ display: "flex", alignContent: "space-around" }}
              >
                <ul className="navbar-nav" style={{}}>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#1">
                      All
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#1">
                      UI Design
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#1">
                      Product Dessign
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#1">
                      Articles
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#1">
                      Tutorials
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#1">
                      News
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }