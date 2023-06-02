import { createContext, useState, useEffect, ReactNode, useContext } from "react";

import { toast } from "react-toastify";
import api from "../services/api";
import React from 'react';





interface listProviderProps {
  children: ReactNode
}
export interface IComment{
  comment: string,
  weapon:number
}
export interface ICommentResponse{
  id:number,
  comment:string,
  user_comments:number,
  commented_at:string,
  weapon:number
  user_name:string;

}

export interface IweaponsResponse {
  id: number,
  name: string,
  tipe: string,
  price: number,
  descripition: string,
  image: string,
  image2: string,
  image3: string | undefined,
  group: string,
  quantidade: number | null,
  oldPrice: number | null,
  atributes: {
    id: number,
    caliber: string | null,
    system: string | null,
    capacity: string | null,
    weight: string | null,
    length: string | null,
    material: string | null,
    model: string | null,
    peration: string | null,
    finishing: string | null,
    operation: string | null,
  }


}

export interface IDataRegistration {
  username: string,
  email: string,
  phone_number: number,
  cpf: string,
  password: string,
  confirmPassword: string,


}
export interface IDataLogin {
  username: string
  password: string
}
export interface IGunsContext {
  guns: IweaponsResponse[],
  revolvers: IweaponsResponse[],
  crossbows: IweaponsResponse[],
  onSubmitFunction: (data: IDataRegistration) => void,
  onSubmit: (data: IDataLogin) => void,
  online: boolean,
  userName: string,
  item: IweaponsResponse|undefined,
  setItem: any,
  allProducts: IweaponsResponse[],
  input: string,
  setInput: any,
  itensFiltrados: IweaponsResponse[],
  setItensFiltrados: any
  count: number;
  setCount: any,
  itens: IweaponsResponse[],
  setItens: any;
  setUsername: (value: React.SetStateAction<string | null>) => void
  carrinho: IweaponsResponse[],
  setCarrinho: any,
  model: boolean,
  setModel: (value: React.SetStateAction<boolean>) => void
  setAllProducts: any,
  arcos: IweaponsResponse[],
  facas: IweaponsResponse[]
  img: boolean,
  setImg: (value: React.SetStateAction<boolean>) => void,
  pegaImg: string | undefined,
  setPegaImg: any,
  logout: () => void,
  comments : ICommentResponse[]


  

 






}
export const ContexctPages = createContext({} as IGunsContext);

export const ProviderPages = ({ children }: listProviderProps) => {


  const storage = localStorage.getItem('@Carrinho')
  const storage2 = localStorage.getItem('@userName')
  const storage3 = localStorage.getItem('UserToken')

  const commentStorage = localStorage.getItem('@Comment')
  const [model, setModel] = useState(false)
  const [img, setImg] = useState(false)
  const [input, setInput] = useState<string>("")
  const [itensFiltrados, setItensFiltrados] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [guns, setGuns] = useState([])
  const [item, setItem] = useState()
  const [itens, setItens] = useState([])
  const [crossbows, setCrossBow] = useState([])
  const [arcos, setArcos] = useState([])
  const [facas, setFacas] = useState([])
  const [revolvers, setRevolvers] = useState([])
  const [online, setOnline] = useState(false)
  const [userName, setUsername] = useState(storage2 ? JSON.parse(storage2) : "")
  const [count, setCount] = useState(0)
  const [pegaImg, setPegaImg] = useState()
  const [carrinho, setCarrinho] = useState(storage ? JSON.parse(storage) : [])
  const [comments, setComments] = useState(commentStorage ? JSON.parse(commentStorage) : [])

 

 
  useEffect(() => {
    api.get('/comments/').then((response)=>{
      localStorage.getItem('@Comment')
      setComments(response.data)
    }).catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });},[comments])


  useEffect(() => {
    api.get('/comments/').then((response)=>{
      setComments(response.data)
    }).catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
    api
      .get("/weapons/pistols")
      .then((response) => {
        setGuns(response.data)

      }

      )

      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

    api
      .get("/weapons/revolvers")
      .then((response) => {
        setRevolvers(response.data)


      }

      )

      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });




    api
      .get("/weapons/crossbowls")
      .then((response) => {
        setCrossBow(response.data)


      }

      )

      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });


    api
      .get("/weapons/bowls")
      .then((response) => {
        setArcos(response.data)


      }

      )

      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });


    api
      .get("/weapons/knifes")
      .then((response) => {
        setFacas(response.data)


      }

      )

      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

    api
      .get("/weapons/")

      .then((response) => {
        setAllProducts(response.data)


      }

      )

      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });



  }, []);



  // cadastro 

  function onSubmitFunction(data: IDataRegistration) {
    console.log(data)
    api.post("users/", data)

      .then((response) => {
        toast.success("Usuario Cadastrado Com Sucesso!");


      }).catch((err) => {
        console.log(err);

        toast.error("Informações invalidas");

      });
  }
  // login

  function onSubmit(data: IDataLogin) {
    console.log(data)

    api.post("users/login/", data)
      .then((response) => {


        localStorage.setItem('@userName', JSON.stringify(data.username))



        localStorage.setItem("UserToken", ( response.data.access))
        setUsername(JSON.parse(localStorage.getItem('@userName')!))
        toast.success("Login feito Com Sucesso!");


      }).catch((err) => {

        toast.error("Informações invalidas");


      });

     
    


  }

 // Commentar produto

  function logout() {
    
    localStorage.removeItem("UserToken");
    setUsername('')
    toast.info("Logout realizado", { autoClose: 3000 });

  }



  return (
    <ContexctPages.Provider
      value={{
        guns,
        revolvers,
        crossbows,
        onSubmitFunction,
        onSubmit,
        online,
        userName,
        item,
        setItem,
        allProducts,
        input,
        setInput,
        setItensFiltrados,
        itensFiltrados,
        count,
        setCount,
        itens,
        setItens,
        setUsername,
        carrinho,
        setCarrinho,
        model,
        setModel,
        setAllProducts,
        facas,
        arcos,
        img,
        setImg,
        pegaImg,
        setPegaImg,
        logout,
        comments,
       

        





      }}
    >{children}
    </ContexctPages.Provider>
  );
}


export function useSimulationContext(): IGunsContext {
  const contexct = useContext(ContexctPages)
  return contexct
}