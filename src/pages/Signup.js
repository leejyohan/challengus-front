import style from "../css/Signup.module.css"

function Signup() {
  return (
    <div className={style.wrap}>
      <h2 className={style.title}>회원가입</h2>
      <div>
        <div>
          <input className={style.input} placeholder="아이디를 입력해주세요" />
        </div>
        <div>
          <input className={style.input} placeholder="비밀번호를 입력해주세요" />
        </div>
        <div>
          <input className={style.input} placeholder="비밀번호를 한 번 더 입력해주세요" />
        </div>
        <div>
          <input className={style.input} placeholder="이름을 입력해주세요" />
        </div>
        <div>
          <input className={style.input} placeholder="숫자만 입력해주세요" />
        </div>
      </div>
      <div className={style.button}>회원가입</div>
    </div>
  );
}

export default Signup;
