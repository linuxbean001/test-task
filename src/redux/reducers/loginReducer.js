import { userProfileConstants } from '../constant'

const defaultNum = {
  loginData: []
}

const loginReducer = (state = { loginData: defaultNum.loginData }, action) => {
  switch (action.type) {
    case userProfileConstants.LOGIN_DATA:
      return { loginData: action.payload }

    case userProfileConstants.ERROR:
      return { error: action.payload }

    default:
      return state
  }
}

export default loginReducer
