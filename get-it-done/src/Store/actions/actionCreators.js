
 import storageService from '../../services/storageService';
 const USER_DATA='USERDATA';
 function login(user){
     storageService.saveToStorage(USER_DATA,user);
    return {
        type: 'LOGIN',
        payload: user
      };
 }
 function logout(){
    storageService.saveToStorage(USER_DATA,'');
    return {
        type: 'LOGOUT'
      };
 }

 export {
     login,logout
 }