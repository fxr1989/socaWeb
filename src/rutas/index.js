import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Facultad from '../vistas/facultad/Facultad';
import Home from '../vistas/home/Home';

export const Rutas = (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/facultad' element={<Facultad/>}/>
    </Routes>
);