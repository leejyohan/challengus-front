import Calendar from "react-calendar";
import style from"../css/Home.module.css"
import BottomNav from "../components/BottomNav";

function Home() {
  return (
    <div>
      <div className={style.wrap}>
        <h2 className={style.title}>홈 메인</h2>
        <div>
          <h4>정보처리기사</h4>
          <progress id="progress" value={50} min="0" max={100}></progress>
        </div>
        <div>
          <h4>불어시험</h4>
          <progress id="progress" value={25} min="0" max={100}></progress>
        </div>
        <Calendar className={style.calendar} />
        <button>+</button>
      </div>
      <BottomNav />
    </div>
  );
}

export default Home;
