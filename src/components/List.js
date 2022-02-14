import React, { useEffect, useState } from 'react';
import '../styles/List.css';
import axios from 'axios';
import {url} from '../helpers/url'

export const List = () => {

    const [registro, setRegistro] = useState([])

    const getData = () => {
        axios.get(url)
        .then(response => {
            setRegistro(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const deleteData = (id) => {
        axios.delete(url + id)
        .then(response => {
            getData()
        }).catch(error => {
            console.log(error)
        })
    }


    useEffect(() => {
      getData()
    }, [])
   
    return (
        <div>
            <table className="tabla">
                <thead>
                    <tr>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Género</th>
                    <th>Editorial</th>
                    <th>Usuario</th>
                    <th>Fecha Préstamo</th>
                    <th>Fecha Devolución</th>
                    <th>Imagen</th>
                    <th>Acción</th>
                    </tr>
                </thead>
                
                 <tbody>
                     {
                        registro.map(registro =>(
                        <tr key={registro.id}>
                            <td>{registro.titulo}</td>
                            <td>{registro.autor}</td>
                            <td>{registro.genero}</td>
                            <td>{registro.editorial}</td>
                            <td>{registro.usuario}</td>
                            <td>{registro.prestamo}</td>
                            <td>{registro.devolucion}</td>
                            <td><img src={registro.imagen} alt="" /></td>
                            <td> <button onClick={ ()=> deleteData(registro.id) }>Devolver</button> </td>

                        </tr>
                         ))
                     }
                   
                 </tbody>
            </table>
        </div>
    )
}
