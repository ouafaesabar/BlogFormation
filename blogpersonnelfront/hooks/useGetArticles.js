import axios from "../src/http-common";
import { useQuery } from "react-query"


const getArticlePage = async (page,pageSize) => {
     const response = await axios.get(`/articles?pageNo=${page}&pageSize=${pageSize}`) 
      return response.data}
export const useGetArticles = (page,pageSize)=>{
        const {  isLoading,
                 isError,
                 error,
                 data: pageArticles,
                 isFetching,
                 isPreviousData,}
                  = useQuery('articlesByPage', () => getArticlePage(page-1,pageSize), {})
            
            return {  isLoading,
                      isError,
                      pageArticles} ;}