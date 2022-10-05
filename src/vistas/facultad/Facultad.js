import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { ApiUrl } from "../../url/ApiUrl";
import TablaFacultad from "./TablaFacultad";
import ModalInsertar from "./ModalInsertar";
import ModalModificar from "./ModalModificar";
import ModalEliminar from "./ModalEliminar";

export default function Facultad() {

  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalModificar, setModalModificar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [facultadSeleccionada, setFacultadSeleccionada] = useState({
    id: '',
    nombre: '',
    descripcion: '',
    tenantId:''
  });
  
  const listaFacultad = () => { 
    axios.get(ApiUrl+"/facultad")
    .then(respuesta=>{setData(respuesta.data)})
  }

  const handleChange = (e) => {
    //const { name, value } = e.target;
    setFacultadSeleccionada({
      ...facultadSeleccionada,
      [e.target.name]: e.target.value
    });
    console.log(facultadSeleccionada);
  }

  const agregarNuevaFacultad = () => {
    delete facultadSeleccionada.id;
    facultadSeleccionada.tenantId = parseInt(facultadSeleccionada.tenantId);
    axios.post(ApiUrl+"/facultad", facultadSeleccionada)
      .then(respuesta => {
        setData(data.concat(respuesta.data));
        cerrarModalInsertar();
        
      })
      
  }

  const modificarFacultad = () => {
    facultadSeleccionada.tenantId = parseInt(facultadSeleccionada.tenantId);
    axios.put(ApiUrl+"/facultad", facultadSeleccionada)
      .then(respuesta => {
        var res = respuesta.data;
        var dataAuxiliar = data;
        dataAuxiliar.map(facultad => {
          if (facultad.id === facultadSeleccionada.id) {
            facultad.nombre = res.nombre;
            facultad.descripcion = res.descripcion;
            facultad.tenantId = res.tenantId;
          }
        });
        cerrarModalModificar();
    })

  }

  const eliminarFacultad = () => {
    axios.delete(ApiUrl + "/facultad/?id=" + facultadSeleccionada.id)
      .then(respuesta => {
        setData(data.filter(facultad => facultad.id !== respuesta.data  ));
        cerrarModalEliminar();
      });  
  }

  const seleccionarFacultad = (facultad, caso) => {
    setFacultadSeleccionada(facultad);
    (caso === "Modificar") ?
      abrirModalModificar() : abrirModalEliminar();

  }
  useEffect(() => {
    listaFacultad();

  }, []);
  
  const cerrarModalInsertar = () => setModalInsertar(false);
  const abrirModalInsertar = () => setModalInsertar(true);

  const abrirModalModificar = () => setModalModificar(true);
  const cerrarModalModificar = () => setModalModificar(false);

  const abrirModalEliminar = () => setModalEliminar(true);
  const cerrarModalEliminar = () => setModalEliminar(false);
 
  
  return (

    <div>
    
      <h2 className="text-center" >Lista de Facultades</h2>
      <br />
      <Button onClick={()=>abrirModalInsertar()}>Agregar Facultad</Button>
      <br />
      
      <TablaFacultad
        data={data}
        seleccionarFacultad={seleccionarFacultad}
      />

      <ModalInsertar
        modalInsertar={modalInsertar}
        cerrarModalInsertar={cerrarModalInsertar}
        handleChange={handleChange}
        agregarNuevaFacultad={agregarNuevaFacultad}
       
      />

      <ModalModificar
        modalModificar={modalModificar}
        cerrarModalModificar={cerrarModalModificar}
        modificarFacultad={modificarFacultad}
        handleChange={handleChange}
        facultadSeleccionada={facultadSeleccionada}
      />

      <ModalEliminar
        modalEliminar={modalEliminar}
        eliminarFacultad={eliminarFacultad}
        cerrarModalEliminar={cerrarModalEliminar}
        facultadSeleccionada={facultadSeleccionada}
      />
      </div>
  );

}