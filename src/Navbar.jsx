function Navbar() {
  return (
    <nav id="nav">
      <div className="nav__content">
        <div className="nav__content--logo">
          <a href="#">
            <img src="src/images/logo.png" alt="coffe" />
          </a>
        </div>
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Nòsotros</a>
        <a href="#">
          <i class="bx bxs-cart"></i>
        </a>
        <a href="#">
          <div className="nav__content--menu">
            <i class="bx bx-menu menu"></i>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Navbar

const menu = document.querySelector(".menu")

window.addEventListener("resize", () => {
  if (window.innerWidth <= 914) {
    menu.style.display = "initial"
  } else {
    menu.style.display = "none"
  }
})