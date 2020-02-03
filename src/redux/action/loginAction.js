import { userProfileConstants } from '../constant'
import LoginService from '../../services/loginService';
const LoginServiceApi = new LoginService();

export const getDataFile = (loginVo) => {
  LoginServiceApi.login(loginVo)
 let dataFileLocal = 'login Data'
  return dispatch => {
    dispatch(fatchSuccessDataFile(dataFileLocal))
  }
}

export const fatchSuccessDataFile = dataFileLocal => {
  return {
    type: userProfileConstants.LOGIN_DATA,
    payload: dataFileLocal
  }
}
