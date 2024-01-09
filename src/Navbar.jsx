import logo from "../images/logo.png"

function Navbar() {
  return (
    <nav id="nav">
      <div className="nav__content">
        <div className="nav__content--logo">
          <a href="#">
            <img src={logo} alt="coffe" />
          </a>
        </div>
        <div className="nav__content--disabled">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Nòsotros</a>
        <a href="#">
          <i class="bx bxs-cart"></i>
        </a>
        </div>
        <a href="#">
          <div className="nav__content--menu">
            <i class="bx bx-menu menu"></i>
          </div>
        </a>
      </div>
    </nav>
  )
}

export default Navbar

const menu = document.querySelector(".menu")

