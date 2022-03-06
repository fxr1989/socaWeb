import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../vistas/home/Home';

export const Rutas = (
    <Routes>
        <Route path='/' element={<Home />}></Route>
    </Routes>
);