import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

export default function ModalModificar({ modalModificar,
    cerrarModalModificar,
    modificarFacultad,
    handleChange,
    facultadSeleccionada }) {
    
    return (

        <Modal show={ modalModificar} >
        <Modal.Header closeButton onClick={()=>cerrarModalModificar()}>
          <Modal.Title >Modificar Facultad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <Form>
         
            <Form.Group className="mb-3" controlId="formBasicEmail">
             
            <Form.Label >Id</Form.Label>
              <Form.Control type="textarea" 
                    
                    readOnly
                onChange={handleChange} value={facultadSeleccionada && facultadSeleccionada.id }/>

              <Form.Label >Nombre</Form.Label>
              <Form.Control type="textarea"
                placeholder="escriba el nombre"
                name="nombre"
                onChange={handleChange} value={facultadSeleccionada && facultadSeleccionada.nombre}/>
              <Form.Label >Descripcion</Form.Label>
              <Form.Control as="textarea" rows={3}
                placeholder="escriba una descripcion"
                name="descripcion"
                onChange={handleChange} value={facultadSeleccionada && facultadSeleccionada.descripcion}/>
              <Form.Label >Tenant</Form.Label>
              <Form.Control type="textarea" 
                   
                readOnly
                onChange={handleChange} value={facultadSeleccionada && facultadSeleccionada.tenantId}/>

            </Form.Group>
     
              </Form>
              
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>modificarFacultad()}>Guardar</Button>
          <Button variant="secondary" onClick={()=>cerrarModalModificar()}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
}