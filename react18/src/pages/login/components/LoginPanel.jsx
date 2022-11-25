import React from "react";
import { getMain } from '../../../utils/global'
import phone from '../../../static/phone.png'
import verification from '../../../static/verification.png'
import "./LoginPanel.scss"

const LoginPanel = () => {

  const goIndex = () => {
    const main = getMain()
    if (!main) {
      return
    }
    window.localStorage.setItem('login', true)
    main.appInfo.loginState.login()
    main.appInfo.routerLink.routerPush('/vue3/#/index')
  }

  return (
    <div className="panel">
      <div className="box">
        <h2 className="panelSubtitle">快速登录</h2>

        <div className="panelForm">

          <div className="panelFormItem">
            <img className="panelFormIcon" src={phone} />
            <input className="panelFormInput" placeholder="请输入手机号" />
          </div>

          <div className="panelFormItem">
            <img className="panelFormIcon" src={verification} />
            <input className="panelFormInput" placeholder="请输入动态码" />
          </div>
        </div>

        <button className="panelButton" onClick={goIndex}>登录</button>

        <h4 className="panelTip">头部和顶部都隐藏了~~~</h4>
        <h4 className="panelBack">点击登录返回</h4>
      </div>
    </div>
  )
}

export default LoginPanel;
