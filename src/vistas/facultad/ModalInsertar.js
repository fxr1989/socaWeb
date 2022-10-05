import React from "react";
import { Modal, Form, Button } from "react-bootstrap";



export default function ModalInsertar({ modalInsertar, cerrarModalInsertar, handleChange, agregarNuevaFacultad}) {
  
  
    return (

        <Modal show={ modalInsertar} >
        <Modal.Header closeButton onClick={()=>cerrarModalInsertar()}>
          <Modal.Title >Agregar Nueva Facultad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <Form>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
             
              <Form.Label >Nombre</Form.Label>
              <Form.Control type="textarea"
                placeholder="escriba el nombre"
                name="nombre"
                onChange={handleChange} />
              
              <Form.Label >Descripcion</Form.Label>
              <Form.Control as="textarea" rows={3}
                placeholder="escriba una descripcion"
                name="descripcion"
                onChange={handleChange} />
              
              <Form.Label >Tenant</Form.Label>
              <Form.Control type="textarea" 
                name="tenantId"
                onChange={handleChange}
              
                  />
                  
              
            </Form.Group>
     
              </Form>
             
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>agregarNuevaFacultad()}>Guardar</Button>
          <Button variant="secondary" onClick={()=>cerrarModalInsertar()}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );

}