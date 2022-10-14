import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Facultad from "../vistas/facultad/Facultad";
import Home from "../vistas/home/Home";
import Login from "../vistas/usuario/Login";
import Registrar from "../vistas/usuario/Registrar";

export const Rutas = (
  <Routes>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/registrar" element={<Registrar />}></Route>
    <Route path="/" element={<Home />}></Route>
    <Route path="/facultad" element={<Facultad />} />
  </Routes>
);
