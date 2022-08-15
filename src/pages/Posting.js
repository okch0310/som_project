import "../styles/posting.scss";
function App() {
  return (
    <div>
      <div className="display">
        <div className="header">글 작성</div>

        <div className="title_box">
          <div className="title_text">
            <h3>제목</h3>
          </div>
          <div className="title_input">
            <input className="t_input" placeholder="제목을 입력하세요"></input>
          </div>
        </div>

        <div className="content_box">
          <div className="content_text">
            <h3>내용</h3>
          </div>
          <div className="content_input">
            <input className="c_input" placeholder="내용을 입력하세요"></input>
          </div>
        </div>
        <div className="button_box">
          <button className="btn">목록</button>
          <button className="btn">등록</button>
        </div>
      </div>
    </div>
  );
}

export default App;
