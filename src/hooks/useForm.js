import React, {useState} from 'react'

//lo definimos que será un objeto vacio
const useForm = (initialState ={}) =>{
   const [values, setValues] = useState(initialState);

   //función que nos ayuda para resetear formulario.
   //importante retornar el tercer argumento
   const reset = () =>{
      setValues(initialState)
   }

   const handleInputChange = ({target}) =>{
         //establecemos el objeto
         setValues({
            ...values,
            [target.name]: target.value,
          });
   }

   //primer valor sería retornar los valores ingresados por el form
   //segundo hacemos llamado al handeInputchange 
   return [values, handleInputChange, reset];
}
export default useForm;