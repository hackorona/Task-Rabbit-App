const initialState = {
  user: '',
  isConnected: false,
  feedPosts: [],
  score:120
};

function userReducer(state = initialState, action) {
    const { payload } = action;
    switch(action.type)
    {
        case'ADD_TASK_POINTS':
        const tempScore=state.score+15;
     
        return{
            ...state,score:tempScore
            
        };     
        case 'LOGIN':
            return {
                ...state,
                user: payload,
                isConnected: true
            };
        case 'LOGOUT':
          return{
            ...state,
            user:'',
            isConnected:false
          }
            default:
      return state;
        }
}
export default userReducer;