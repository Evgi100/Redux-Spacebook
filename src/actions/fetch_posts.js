import axios from 'axios'


 export const FETCH_POSTS ='fetch_posts'

const RootUrl='http://reduxblog.herokuapp.com/api';

const  ApiKey='?key=eugene123'

 export function fetchPosts(){
  const request= axios.get(`${RootUrl}/posts${ApiKey}`)

     return {
         type:FETCH_POSTS,
         payload:request
     }
 }  