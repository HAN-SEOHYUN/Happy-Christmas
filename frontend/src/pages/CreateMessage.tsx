import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { postToSian } from "../service/service";

const CreateMessage: React.FC = () => {
  const history = useHistory();
  const [sender, setSender] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleMessageSubmit = () => {
    try {
      postToSian(sender, message);
      alert(`${sender}님의 메세지가 등록되었습니다. HappyChristmas!`);
      history.push(`/`);
    } catch (err) {
      alert(err + "에러");
      history.push(`/`);
    }
  };

  return (
    <>
      <h1 className="">
        Write a Christmas Letter to <span className="font-size-md">Sian</span>
        &nbsp;
        <FontAwesomeIcon icon={faGift} />
      </h1>
      <hr />
      <div className="mb-3">
        <label className="form-label">작성자</label>
        <input
          className="form-control"
          name="sender"
          onChange={(event) => {
            setSender(event.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Christmas Message</label>
        <textarea
          className="form-control"
          rows={10}
          name="message"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
      </div>

      <button
        className="btn btn-primary"
        onClick={handleMessageSubmit}
        name="create-Btn"
        disabled={!sender || !message}
      >
        작성하기
      </button>

      <Link
        className="btn btn-danger ms-2"
        to="/"
        id="home-Btn"
      >
        돌아가기
      </Link>
    </>
  );
};

export default CreateMessage;
