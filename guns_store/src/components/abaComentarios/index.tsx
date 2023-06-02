import { IComment, useSimulationContext } from "../../context/contexct";
import { UL, Div } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

import { toast } from "react-toastify";


function Comments() {
  const { comments, item } = useSimulationContext()
  
  function Comentar(data: IComment) {
    const token = localStorage.getItem('UserToken')
    if (token) {
      const dataAdd = { ...data, weapon: item?.id }
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      api.post('/comments/', dataAdd).then((response) => {
    
      }).catch((err) => {
        console.log(dataAdd, token)
        console.error("ops! ocorreu um erro" + err);
      });
    }
    else {
      toast.warning("Faça login para poder comentar sobre o produto!")
    }

  }


  const shemma = yup.object().shape({
    comment: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IComment>({ resolver: yupResolver(shemma) });


  const Comments = comments.map((comment) =>

    <li key={comment.id}>

      <div className="divTop">    <p className="UserName"> Usuario :{comment.user_name}</p> <p className="Data">Comentado em :{comment.commented_at.slice(0, 10)}</p></div>
      <p className="Comentario">{comment.comment}</p>
      <p className="esconder">{comment.weapon}</p>
    
    </li>
  )




  const productComment = Comments.filter((produto) => produto.props.children[2].props.children === item?.id)

  

  return (
    
    

    <Div>
    <div className="divTitulo"> <h2>Opiniões sobre o Produto</h2></div>



      <div className="divPostComentario">


        <form onSubmit={(handleSubmit(Comentar))}>

          <input placeholder="Comente aqui" {...register('comment')}></input><button className="ButtonComment" type="submit" >Comentar</button>
        </form>
      </div>
      <UL>
        {productComment.length === 0 ? (<div className="divSemComentarios"><h3>Nenhum comentario ainda. Faça o primeiro!</h3></div>) : (productComment)}

      </UL>


    </Div>
  
  )


}

export default Comments