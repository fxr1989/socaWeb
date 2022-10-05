import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function ModalEliminar({modalEliminar, eliminarFacultad, cerrarModalEliminar, facultadSeleccionada}) {
    
    return (

        <Modal show={modalEliminar} >
       
        <Modal.Body>
            <p>¿Esta seguro que desea eliminar la facultad {facultadSeleccionada && facultadSeleccionada.nombre}?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=>eliminarFacultad()}>Si</Button>
          <Button variant="secondary" onClick={()=>cerrarModalEliminar()}>No</Button>
        </Modal.Footer>
      </Modal>

    );
}