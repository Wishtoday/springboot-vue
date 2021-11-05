//输出通用axios实例
import axios from 'axios';
 
const instance = axios.create({
  baseURL: 'http://localhost:8081', // api 的 base_url
  timeout: 10000,
   headers: {
    'Content-Type': "application/json;charset=utf-8"
  }
});
 
export default {
  login ( data ) {
    return instance.post('/api/login', data);
  },
  queryAll () {
    return instance.post('/api/queryAll');
  },
  userInfo (data) {
    return instance.post('/api/queryUserInfo',data)
  },
  register (data){
  	return instance.post('/api/register',data)
  },
  edit (data){
  	return instance.post('/api/edit',data)
  }
};