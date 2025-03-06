import Calendar from "react-calendar";
import "../css/Home.css"
import BottomNav from "../components/BottomNav";

function Home() {
  return (
    <div>
      <div className="wrap">
        <h2 className="title">홈 메인</h2>
        <div>
          <h4>정보처리기사</h4>
          <progress className="progress-bar" id="progress" value={50} min="0" max={100}></progress>
        </div>
        <div>
          <h4>불어시험</h4>
          <progress id="progress" value={25} min="0" max={100}></progress>
        </div>
        <Calendar className="calendar" />
        <button>+</button>
      </div>
      <BottomNav />
    </div>
  );
}

export default Home;
