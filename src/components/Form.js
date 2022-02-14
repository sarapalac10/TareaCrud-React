import axios from 'axios';
import React, { useState } from 'react';
import { fileUpload } from '../helpers/fileUpdload';
import { url } from '../helpers/url';
import '../styles/Form.css';
// import { List } from './List';

export const Form = () => {

    const [prestador, setPrestador] = useState({
        id: "",
        titulo: "",
        autor: "",
        genero: "",
        editorial: "",
        usuario: "",
        prestamo: " ",
        devolucion: "",
        imagen: ""
    });
 
    const { id, titulo, autor, genero, editorial, usuario, prestamo, devolucion, imagen } = prestador;

    const handleOnChange = ( {target} ) => {
        setPrestador( {
            ...prestador,
            [target.name] : target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("SE HA REGISTRADO")
    }

    const handleFileChange = (e) => {
        console.log(e.target.files);
        const file = e.target.files[0];
        fileUpload(file)
            .then(response => {
                prestador.imagen = response
            }).catch(error => {
                console.log(error)
            })
    }
    
    const postData = () => {
        axios.post(url, prestador)
            .then(response => {
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
           <form id="formulario" onSubmit={handleSubmit}>
           <h2>Registro Préstamo de Libros</h2>
           <hr/>
               <div>
                   <label>Título</label>
                   <input id="inputTitulo" name="titulo" onChange={handleOnChange} value={titulo} />
               </div>
               <div>
                   <label>Autor</label>
                   <input id="inputAutor" name="autor" onChange={handleOnChange} value={autor} />
               </div>
               <div>
                   <label>Género</label>
                   <input id="inputGenero" name="genero" onChange={handleOnChange} value={genero} />
               </div>
               <div>
                   <label>Editorial</label>
                   <input id="inputEditorial" name="editorial" onChange={handleOnChange} value={editorial} />
               </div>
               <div>
                   <label>Usuario</label>
                   <input id="inputUsuario" name="usuario" onChange={handleOnChange} value={usuario} />
               </div>
               <div>
                   <label>Fecha Préstamo</label>
                   <input id="inputPrestamo" type="date" name="prestamo" onChange={handleOnChange} value={prestamo} />
               </div>
               <div>
               <label>Fecha Devolución</label>
                   <input id="inputDevolucion" type="date" name="devolucion" onChange={handleOnChange} value={devolucion} />
               </div>
               <div>
                   <label>Imagen</label>
                   <input id="botonImagen" type="file" name="imagen" onChange={handleFileChange} value={imagen}/>
                    
               </div>
               <div>
                   <button id="btnRegistro" onClick={postData} >Enviar</button> 
               </div>
           </form>
        </div>
    )
}
