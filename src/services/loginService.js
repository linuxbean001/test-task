import axios from 'axios';
import {url} from '../url/url'



export default class LoginService {
    constructor() {
        
    }

    login(userInfoVo){
        return axios.post(`${url.USER_LOGIN}`,userInfoVo)
        .then(res => {
         return res.data;
        }).catch(err =>{
         console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err); 
        })
     }

   

     
     
    
   
}
