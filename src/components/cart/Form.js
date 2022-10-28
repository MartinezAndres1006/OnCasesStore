import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingresa Tu nombre Acá</Form.Label>
        <Form.Control type="name" placeholder="Ingresa tu nombre" />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ingresa tu direccion</Form.Label>
        <Form.Control type="Name" placeholder="Address" />
      </Form.Group>
      <Button variant="primary" type="submit" className='Submit' >
        Enviar
      </Button>
    </Form>
  );
}

export default Contact;