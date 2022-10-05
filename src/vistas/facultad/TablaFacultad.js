import React from "react";
import { Table,Button } from "react-bootstrap";

export default function TablaFacultad({data,seleccionarFacultad}) {
    
  //console.log(data);
  
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th className="text-center">Nombre</th>
            <th className="text-center">Descripcion</th>
              <th colSpan="2" className="text-center">Acciones</th>              
          </tr>
        </thead>
        <tbody>
          {data.map(facultad =>(
            <tr key={facultad.id}>
              <td>{facultad.id}</td>
              <td>{facultad.nombre}</td>
              <td>{facultad.descripcion}</td>
              <td><Button variant="warning" onClick={() => seleccionarFacultad(facultad,"Modificar")}>Modificar</Button>{' '}</td>
              <td><Button variant="danger" onClick={()=> seleccionarFacultad(facultad,"Eliminar")}>Eliminar</Button>{' '}</td>
          </tr>
          ))}
        </tbody>
      </Table>
    );
}