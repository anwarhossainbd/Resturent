
import axios from "axios";

class RestClients {

    static GetRequest=(getUrl)=>{
      return    axios.get(getUrl).then(response=>{
            return  response.data
        }).catch(error=>{
            return null
        })
    }

static PostRequest(postUrl,postData){

        let config={
            headers:{'Content-Type':'application/x-www-form-urlencoded',}

        }

        return axios.post(postUrl,postData,config).then(
            response=>{
                return response.data
            }
        ).catch(error=>{
            return "main problem" ;
        })

    }







}

export default RestClients ;