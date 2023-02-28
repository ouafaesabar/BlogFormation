import axios from "../src/http-common"
import { useMutation } from "react-query"

const postComment = async (comment) =>{
    const response = await axios.post(`/comment`,comment) 
      return response.data
    }


export const useAddComment = ()=>{
    const {
        error,
        isError,
        isLoading,
        isSuccess,
        mutate,
        mutateAsync,
        reset,
        status,
      } = useMutation(postComment, {})

      return {
        error,
        isError,
        isLoading,
        isSuccess,
        mutate,
      }
            
}

