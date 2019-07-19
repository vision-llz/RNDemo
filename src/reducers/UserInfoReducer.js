const initialState = {
  status: 'userinfo',
  isSuccess: false,
  data: {},
  name: '小六'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'changeName':
      return Object.assign({}, state, {
        name: action.info
      });
    default:
      return state;
  }
}
