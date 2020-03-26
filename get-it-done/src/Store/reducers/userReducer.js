const initialState = {
  user: {name:'moshe'},
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
                user: { username: payload.username },
                isConnected: true
            };
            default:
      return state;
        }
}
export default userReducer;