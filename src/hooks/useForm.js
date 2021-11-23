import React, {useState} from 'react'

//lo definimos que será un objeto vacio
const useForm = (initialState ={}) =>{
   const [values, setValues] = useState(initialState);


   const handleInputChange = ({target}) =>{
         //establecemos el objeto
         setValues({
            ...values,
            [target.name]: target.value,
          });
   }

   //primer valor sería retornar los valores ingresados por el form
   //segundo hacemos llamado al handeInputchange 
   return [values, handleInputChange];
}
export default useForm;