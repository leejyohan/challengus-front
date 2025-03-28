import { useNavigate } from "react-router-dom";
import style from "../css/Login.module.css"

function Login() {

  const navigate = useNavigate();

  function gotoSign() {
    navigate('/signup')
  }

  return (
    <div className={style.wrap}>
      <h2 className={style.title}>로그인</h2>
      <div>
        <div>
          <input className={style.input} placeholder="아이디를 입력해주세요" />
        </div>
        <div>
          <input className={style.input} placeholder="비밀번호를 입력해주세요" />
        </div>
        <div>
          <p className={style.detail}>아이디찾기 | </p>
          <p className={style.detail}>비밀번호 찾기</p>
        </div>
      </div>
      <div className={style.button}>로그인</div>
      <div className={style.button} onClick={gotoSign}>회원가입</div>
    </div>
  );
}

export default Login;
