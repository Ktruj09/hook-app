import React, { useState, useEffect } from "react";
import "./simpleform.css";
const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  //desctructuramos, para que sea más fáciles de utilizar
  //esto para evitar el formstate.name y así solo podemos llamar name sin problema alguno
  const { name, email } = formState;

  useEffect(() => {
    console.log("Hey!");
  }, []);

  //cada vez que se haga un cambio, es importante añadir otro useEffect
  useEffect(() => {
    console.log("FormState cambió!");
  }, [formState]);

  //ejemplo cuando queremos que solo uno cambie
  useEffect(() => {
    console.log("Email cambió!");
  }, [email]);

  const handleInputChange = ({ target }) => {
    //establecemos el objeto
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>UseEffect</h1>
      <hr></hr>

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre"
          autoComplete="off"
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
    </>
  );
}; //end funtion SimpleForm

export default SimpleForm;
