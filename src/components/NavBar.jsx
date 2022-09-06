import On from '../assets/imagenes/oncases__definitico.png'
import CarritoCompras from './cardWidget'

const BarraNavegacion= () =>{
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-danger linkNav">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={On} className="imageNav" alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav linkNav">
        <a className="nav-link" href="#">Inicio</a>
        <a className="nav-link" href="#">Fundas Iphone 11</a>
        <a className="nav-link" href="#">Fundas Iphone se</a>
        <a className="nav-link" href="#">Fundas Iphone 13</a>
        <a className="nav-link" href="#"><CarritoCompras/></a>

      </div>
    </div>
  </div>
</nav>
    )
}
export default BarraNavegacion;