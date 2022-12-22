import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { getMessageById } from "../service/service";

export interface Message {
  sender: string;
  message: string;
  createdAt: string;
  recipient: string;
  isConfirmed: boolean;
}

interface PropsType {
  id: number;
  isConfirmed: boolean;
}

const DetailMessage: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  const [object, setObject] = useState<Message | null>(null);
  const [loading, setLoading] = useState(true);

  //const { id, isConfirmed } = location.state;

  const state = location.state as PropsType;

  const getMessage = async (id: number, isConfirmed: boolean) => {
    if (isConfirmed) {
      //id / isconfirmed
      try {
        const message = await getMessageById(id);
        setObject(message);
      } catch (err) {
        alert(err + "에러");
      }
      setLoading(false);
    } else {
      alert("올바른 경로가 아닙니다 !");
      history.push(`/`);
    }
  };
  console.log(object);

  useEffect(() => {
    //id가 변경될때마다 실행됨

    getMessage(state.id, state.isConfirmed);
    console.log(location);
  }, [state.id]); //eslint-disable-line

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div>
            <div className="d-flex">
              <h1 className="flex-grow-1">{object?.recipient || "없음"}</h1>
            </div>
            <small className="text-muted">{object?.createdAt}</small>
            <hr />
            <p>{object?.message}</p>
          </div>
          <Link id="write-Btn" className="btn btn-primary" to={`/register`}>
            편지쓰기
          </Link>{" "}
        </>
      )}
    </>
  );
};
export default DetailMessage;
