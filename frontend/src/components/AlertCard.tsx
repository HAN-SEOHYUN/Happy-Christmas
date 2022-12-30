import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { checkPwd } from "../service/service";

interface Props {
  recipient: string;
}

export interface ResData {
  id: number;
  success: boolean;
}

const AlertCard: React.FC<Props> = ({ recipient }) => {
  const history = useHistory();
  const [pwd, setPwd] = useState<string>("");
  let isConfirmed = false;

  const handleMoveDetail = (id: number, isConfirmed: boolean) => {
    history.push({
      pathname: "/detail",
      state: {
        id: id,
        isConfirmed: isConfirmed,
      },
    });
  };

  //비밀번호가 일치하는지 확인해줌
  const handleCheckPwd = async () => {
    try {
      const res = await checkPwd(recipient, pwd);

      if(!res){
        alert("비밀번호가 올바르지 않습니다 !");
      }else{
        isConfirmed = true;
        handleMoveDetail(res.id, isConfirmed);
      }
      
    } catch (err) {
      alert(err);
      history.push(`/`);
    }
  };

  return (
    <div className="alert-card">
      <hr />
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;{recipient} 님 에게
          </h5>
          <p className="card-text">전달된 크리스마스 메세지가 1개 있습니다</p>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              비밀번호
            </span>
            <input
              type="text"
              name ="pwd-input"
              className="form-control"
              placeholder="비밀번호입력"
              onChange={(event) => {
                setPwd(event.target.value);
              }}
            />
          </div>
          <button 
          className="btn btn-primary" 
          name="checkPwd-Btn" 
          onClick={handleCheckPwd}>
            메세지 읽기
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
