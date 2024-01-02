import main from "../images/main.png"

function Hero(){
    return(
        <section id="hero">
            <div className="hero__content">
                <div className="hero__content-column">
                <h1>Descubre el Sabor Auténtico del Café</h1>
                    <p>Sumérgete en un mundo de aromas irresistibles y sabores inigualables. Nuestro café, cuidadosamente seleccionado y tostado, te brinda una experiencia única en cada sorbo.</p>
                </div>
                <img src={main} alt="coffe" />
            </div>
        </section>
    )
}

export default Hero