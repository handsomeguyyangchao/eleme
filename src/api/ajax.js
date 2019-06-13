import axios from 'axios'

export default function axios (url,data={},type="GET"){
    return new Promise(function(resolve,reject){
        let promise
        if(type === 'GET'){
            let string =''
            Object.keys(data).forEach((i,n) => {
                string += (i +'='+ n + '&')
            })
            if(!string){
                url = url +'?'+ string.slice(0,-1)
            }
            promise = axios.get(url,string)
        }else{
            promise = axios.post(url,data,'POST')
        }
        promise.then((response) => {
            resolve(response.data)
        }).catch((err)=>{
            reject(err)
        })
    })
}