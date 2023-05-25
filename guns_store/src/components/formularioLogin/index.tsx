import { Form } from "./style"
import * as yup from "yup";
import { useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSimulationContext } from "../../context/contexct";
import { IDataLogin } from "../../context/contexct";
import { useEffect } from "react";



function FormularioLogin(){


  useEffect(()=>{
    function getDados() {
      const users = localStorage.getItem('userName')
      
     setUsername(users)
     return console.log(userName)
       
  
     }
   getDados()
  },[])
  
    const{onSubmit,userName,setUsername}= useSimulationContext()
    const shemma = yup.object().shape({
        username: yup.string().required("Nome obrigatorio"),
        password: yup
          .string()
          .required("Digite sua senha")
      });
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<IDataLogin>({ resolver: yupResolver(shemma) });
    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
           <h2>Ja sou cadastrado</h2>
            <div className="div1">
            
            <label htmlFor="Nome">Nome</label>
            <input {...register('username')}></input>
            <p>{errors.username && errors.username.message}</p>
          
            </div>

            <div className="div2">
            <label htmlFor="Senha">Senha</label>
            <input {... register('password')}></input>
            <p>{errors.password && errors.password.message}</p>
            
            </div>
            <button type="submit">Login</button>
        </Form>
    )
}

export default FormularioLogin