import axios from 'axios';


export const CREATE_POST ='create_post'

const RootUrl='http://reduxblog.herokuapp.com/api';

const  ApiKey='?key=eugene123'

 export function createPost(values,callback){
  const request= axios.post(`${RootUrl}/posts${ApiKey}`,values)
  .then(()=>callback());

     return {
         type:CREATE_POST,
         payload:request
     };
 }  