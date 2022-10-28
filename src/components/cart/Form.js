import React from 'react';
import TextField from '@mui/material/TextField';
import './form.css'
import Swal from 'sweetalert2'
function Contact() {








return (
   <div className='cajaform'>
   <form className='FormContainer'>
   <h1 className='Titulo'>Ingresa tus datos</h1>
				<TextField
					placeholder='Name'
					style={{ margin: 10, width: 400 }}
					name='name'
				/>
        <br></br>
				<TextField
					placeholder='Last Name'
					style={{ margin: 10, width: 400 }}
					name='lastName'
				/>
        <br></br>
					<button className='btnASendAction btn btn-dark' onClick={Swal.fire({
  position: 'top-center',
  icon: 'success',
  title: 'Gracias por elejirnos juan ',
  showConfirmButton: false,
  timer: 1500
})}>Enviar</button>
			</form>
      </div>

  );
}

export default Contact;