import axios from 'axios'


 export const DELETE_POST ='delete_post'

const RootUrl='http://reduxblog.herokuapp.com/api';

const  ApiKey='?key=eugene123'

 export function deletePost(id,callback){
  const request= axios.delete(`${RootUrl}/posts/${id}${ApiKey}`)
  .then(()=>callback())

     return {
         type:DELETE_POST,
         payload:id
     }
 }  