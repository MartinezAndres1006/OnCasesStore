import On from '../../assets/imagenes/logooncases.png'
import CarritoCompras from './cardWidget'
import { NavLink } from 'react-router-dom'
const BarraNavegacion= () =>{
    return(
      <nav className="navbar navbar__fondo navbar-expand-lg navbar-dark linkNav">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/'><img src={On} className="imageNav" alt="logo" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav linkNav">
        <NavLink className="nav-link active" to='/'>Inicio</NavLink>
        <NavLink className="nav-link active" to='/catalogo'>catalogo</NavLink>
        <NavLink className="nav-link active" to='/category/apple'>Apple</NavLink>
        <NavLink className="nav-link active" to='/category/samsung'>Samsung</NavLink>
        <NavLink className="nav-link active" to='/cart'><CarritoCompras/></NavLink>

      </div>
    </div>
  </div>
</nav>
    )
}
export default BarraNavegacion;