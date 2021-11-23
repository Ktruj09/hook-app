import React from "react";
import './simpleform.css'

import useForm from "../../hooks/useForm";

const FormWithCustomHook = () =>{

    const [formValues, handleInputChange] = useForm({
        name: "",
        email: "",
        password: ""
      });
    
      //desctructuramos, para que sea más fáciles de utilizar
      //esto para evitar el formstate.name y así solo podemos llamar name sin problema alguno
      const { name, email, password } = formValues;

      //esta función nos ayudará para enviar los valores e imprimirlos en consola
      const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues)
      }
    
      return (
        <form onSubmit={handleSubmit}>
          <h1>FormWithCustomHook</h1>
          <hr></hr>
    
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Nombre"
              
              value={name}
              onChange={handleInputChange}
            />
          </div>
    
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Correo electrónico"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Contraseña"
              autoComplete="off"
              value={password}
              onChange={handleInputChange}
            />
          </div>
    
   
          <button type="submit" className="btn btn-info">
            Enviar
          </button>
        </form>
      );

};


export default FormWithCustomHook;