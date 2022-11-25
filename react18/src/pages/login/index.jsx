import React, { useEffect } from 'react';
import LoginPanel from "./components/LoginPanel.jsx";
import { getMain } from '../../utils/global'


const Login = () => {

  useEffect(() => {
    const main = getMain()
    if (!main) {
      return
    }
    // 登录页面隐藏头部底部
    if (main.appInfo) {
      main.appInfo.footerState.changeFooter(false)
      main.appInfo.headerState.changeHeader(false)
    }
  }, [])

  return (
    <div >
      <LoginPanel />
    </div>
  )
}

export default Login
