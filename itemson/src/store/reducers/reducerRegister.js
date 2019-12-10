const initialState = {
    username:"",
    password: "",
    isFetching: false,
    regStatus:false //注册态标识
  };

  // action types
  export const types = {
    REG_REQUEST: "REG/REG_REQUEST",
    REG_SUCCESS: "REG/REG_SUCCESS",
    REG_FAILURE: "REG/REG_FAILURE",
    SET_USERNAME: "REG/SET_USERNAME",
    SET_PASSWORD: "REG/SET_PASSWORD"
  };
  
  // action creators
  export const actions = {
    // 异步action, 执行注册
    reg: () => {
      return (dispatch, getState) => {
        const { username, password } = getState(). reg;
        var reg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
        var mima = /123456/;
        if (!username === reg.test(username)) {
          return dispatch(regFailure(alert("用户名格式错误！")));
        }else if(!password === mima.test(password)){
            return dispatch(regFailure(alert("密码格式错误！")));
        }
        dispatch(regRequest());
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            dispatch(regSuccess());
            if (window.localStorage.useArr) {
                var array = JSON.parse(window.localStorage.useArr)
              } else {
                array = []
              }
              for (var i = 0; i < array.length; i++) {
                if (username === array[i].username) {
                  return alert("账号已存在")
                }
              }
                var obj = {
                username,
                password
              }
              array.push(obj)
              window.localStorage.useArr = JSON.stringify(array)
              alert("注册成功")
            resolve();
          }, 1000);
        });
      };
    },
    setUsername: username => ({
      type: types.SET_USERNAME,
      username
    }),
    setPassword: password => ({
      type: types.SET_PASSWORD,
      password
    })
  };
  
  const regRequest = () => ({
    type: types.REG_REQUEST
  });
  
  const regSuccess = () => ({
    type: types.REG_SUCCESS
  });
  
  const regFailure = error => ({
    type: types.REG_FAILURE,
    error
  });
  
  // reducer
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case types.REG_REQUEST:
        return { ...state,isFetching: true};
      case types.REG_SUCCESS:
        return { ...state, isFetching: false, regStatus: true };
      case types.REG_FAILURE:
        return { ...state,username:"",password:"",isFetching: false};
      case types.SET_USERNAME:
        return { ...state, username: action.username };
      case types.SET_PASSWORD:
        return { ...state, password: action.password };
      
      default:
        return state;
    }
  };
  
  export default reducer;
  
  // selectors
  export const getUsername = state => state. reg.username;
  
  export const getPassword = state => state. reg.password;
  
  export const isReg = state => state. reg.regStatus;
  