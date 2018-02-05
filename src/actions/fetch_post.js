import axios from 'axios';


export const FETCH_POST ='fetch_post'

const RootUrl='http://reduxblog.herokuapp.com/api';

const  ApiKey='?key=eugene123'

 export function fetchPost(id){
  const request= axios.get(`${RootUrl}/posts/${id}${ApiKey}`);

     return {
         type:FETCH_POST,
         payload:request
     };
 }  