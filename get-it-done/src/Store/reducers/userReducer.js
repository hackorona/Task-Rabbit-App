const initialState = {
  user: '',
  isConnected: false,
  feedPosts: [],
};

function userReducer(state = initialState, action) {
    const { payload } = action;
    switch(action.type)
    {
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