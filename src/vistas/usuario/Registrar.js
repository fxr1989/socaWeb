import React, { useState } from "react";
import axios from "axios";
import { ApiUrl } from "../../url/ApiUrl";
import { Button, Form, Spinner, Alert } from "react-bootstrap";
import { puntosAccesos } from "../../url/puntosAccesos";
import { useNavigate } from "react-router-dom";

export default function Registrar() {
  const [cargando, setCargando] = useState(false);
  const [registrar, setRegistrar] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    userName: "",
    nombreTenant: "",
    descripcionTenant: "",
  });
  const redirect = useNavigate();
  const [alert, setAlert] = useState({
    show: false,
    tipo: "",
    mensaje: "",
  });

  const onChangeControl = (e) => {
    const value = { ...registrar, [e.target.name]: e.target.value };
    setRegistrar(value);
  };

  const onClickRegistrar = () => {
    setCargando(true);
    axios
      .post(`${ApiUrl}${puntosAccesos.usuario.registrar}`, registrar)
      .then((respuesta) => {
        setCargando(false);
        setAlert({
          show: true,
          type: "success",
          mensaje: "Se registro exitosamente",
        });
        setTimeout(() => {
          redirect("/login");
        }, 1000);
      })
      .catch((error) => {
        setCargando(false);
        setAlert({
          show: true,
          type: "danger",
          mensaje: error.response.data.mensaje,
        });
      });
  };

  return (
    <>
      <Alert key={alert.type} variant={alert.type} show={alert.show}>
        {alert.mensaje}
      </Alert>
      <Form className="login">
        <h2 className="titulo">Registrar datos usuario</h2>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="nombre del usuario"
            onChange={onChangeControl}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            name="apellido"
            placeholder="apellido del usuario"
            onChange={onChangeControl}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Nombre Usuario</Form.Label>
          <Form.Control
            type="text"
            name="userName"
            placeholder="nickname"
            onChange={onChangeControl}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            onChange={onChangeControl}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Constraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="*******"
            onChange={onChangeControl}
          />
        </Form.Group>
        <h2 className="titulo">Registrar datos de empresa</h2>
        <Form.Group className="mb-3" controlId="nombreTenant">
          <Form.Label>Nombre empresa</Form.Label>
          <Form.Control
            type="text"
            name="nombreTenant"
            placeholder="nombre de la empresa"
            onChange={onChangeControl}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcionTenant">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            name="descripcionTenant"
            placeholder="descripcion"
            onChange={onChangeControl}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Button
            variant="primary"
            onClick={onClickRegistrar}
            disabled={cargando}
          >
            {cargando ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              "Registrar"
            )}
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
