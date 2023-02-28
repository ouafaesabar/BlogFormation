import axios from "../src/http-common";
import { useQuery } from "react-query"


const getArticle = async (articleId) => {
     const response = await axios.get(`/article/${articleId}`) 
      return response.data}
export const useGetArticle = (articleId)=>{
        const {  isLoading,
                 isError,
                 error,
                 data: article,
                 isFetching,
                 isPreviousData,}
                  = useQuery('articlesByPage', () => getArticle(articleId), {})
            
            return {  isLoading,
                      isError,
                      article} ;}