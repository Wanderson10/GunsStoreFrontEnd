import { Form } from "./style"
import * as yup from "yup";
import { useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IDataRegistration } from "../../context/contexct";
import { useSimulationContext } from "../../context/contexct";
function FormularioCadastro(){
   
    const{onSubmitFunction}= useSimulationContext()

    const shemma = yup.object().shape({    
    username: yup.string().required("Nome obrigatorio"),
    email: yup.string().required("Email obrigatorio").email("Email invalido"),
    password: yup
      .string()
      .required("Digite sua senha")
      .min(8, " A senha deve possuir no minimo 8 caracteres"),
    confirmPassword: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password")], "As senhas não concidem"),
      phone_number: yup.string().required().max(11,"Numero invalido").min(11,"Numero invalido"),
    cpf:yup.string().required("Digite seu CPF").max(11,"CPF invalido").min(11,"CPF invalido")
})

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<IDataRegistration>({ resolver: yupResolver(shemma) });
        return(

        <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Não sou cadastrado</h2>
            <div>
            <label htmlFor="nome"> Nome</label>
            <input {...register('username')}></input>
            <p>{errors.username && errors.username.message}</p>
            </div>
            
            <div>
            <label htmlFor="email">Email </label>
            <input {...register('email')}></input>
            <p>{errors.email && errors.email.message}</p>
            </div>

            <div>
            <label htmlFor="password">Senha </label>
            <input {... register('password')}></input>
            <p>{errors.password && errors.password.message}</p>
            </div>

            <div>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input {... register('confirmPassword')}></input>
            <p>{errors.confirmPassword && errors.confirmPassword.message}</p>
            </div>

            <div>
            <label htmlFor="phone_number">Telefone </label>
            <input {... register('phone_number')}></input>
            <p>{errors.phone_number && errors.phone_number.message}</p>
            </div>

            <div>
            <label htmlFor="CPF">CPF </label>
            <input {... register('cpf')}></input>
            <p>{errors.cpf && errors.cpf.message}</p>
            </div>
            <button type="submit">Cadastre-se</button>
        </Form>
    )
}

export default FormularioCadastro