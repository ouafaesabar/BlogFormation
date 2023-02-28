import axios from "../src/http-common"
import { useMutation } from "react-query"

const postUser = async (user) =>{
    const response = await axios.post(`/user`,user) 
      return response.data
    }


export const useAddUser = ()=>{
    const {
        error,
        isError,
        isLoading,
        isSuccess,
        mutate,
        mutateAsync,
        reset,
        status,
      } = useMutation(postUser, {})

      return {
        error,
        isError,
        isLoading,
        isSuccess,
        mutate,
      }
            
}