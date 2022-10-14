import React, { useState } from "react";
import axios from "axios";
import { ApiUrl } from "../../url/ApiUrl";
import { Button, Form, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { puntosAccesos } from "../../url/puntosAccesos";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [cargando, setCargando] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const redirect = useNavigate();
  const [alert, setAlert] = useState({
    show: false,
    tipo: "",
    mensaje: "",
  });

  const onChangeControl = (e) => {
    const value = { ...login, [e.target.name]: e.target.value };
    setLogin(value);
  };

  const onClickLogin = () => {
    setCargando(true);
    axios
      .post(`${ApiUrl}${puntosAccesos.usuario.login}`, login)
      .then((respuesta) => {
        setAlert({
          show: true,
          type: "success",
          mensaje: "Inisio de sesion exitosamente",
        });
        setAutenticacion(respuesta.data);
        setTimeout(() => {
          setCargando(false);
          redirect("/");
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

  const setAutenticacion = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.usuarioId);
    localStorage.setItem("nombreTenant", data.nombreTenant);
    localStorage.setItem("tenantId", data.tenantId);
  };

  return (
    <Form className="login">
      <h1 className="titulo">Login</h1>
      <Alert key={alert.type} variant={alert.type} show={alert.show}>
        {alert.mensaje}
      </Alert>
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
      <Form.Group className="mb-3">
        <Link to="/registrar">Registrarse</Link>
      </Form.Group>
      <Form.Group className="mb-3">
        <Button variant="primary" onClick={onClickLogin}>
          {cargando ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            "Iniciar sesion"
          )}
        </Button>
      </Form.Group>
    </Form>
  );
}
