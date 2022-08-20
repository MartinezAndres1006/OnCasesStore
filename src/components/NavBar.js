import On from '../assets/imagenes/oncases__definitico.png'
const BarraNavegacion= () =>{
    return(
      <nav className="barraNav">
          <ul>
          <img className='logo__oncases' src={On}/>
            <li><a href="#"><b>Inicio</b></a></li>
            <li><a href="#">Catalogo</a></li>
            <li><a href="#">Envios</a></li>
            <li><a href="#">Ubicación</a></li>
          </ul>
        </nav>
    )
}
export default BarraNavegacion;