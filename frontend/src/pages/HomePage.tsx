import { useState } from "react";
import AlertCard from "../components/AlertCard";
import { getCountByName } from "../service/service";

export interface confirm {
  count: number;
}


const HomePage: React.FC = () => {
  const [recipient, setRecipient] = useState<string>("");
  const [count, setCount] = useState<number>();

  //서버에서 name 에 해당하는 row의 count 를 받아옴
  const getCount = async () => {
    try {
      //서버에 요청한 이름으로 등록된 메세지가 있는지 확인
      const res = await getCountByName(recipient);
      setCount(res.count);

      if (!res.count) {
        alert(recipient + "에게 등록된 메세지가 없습니다");
      }
    } catch (err) {
      alert(err + "에러");
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center mb-3">
        <img
          className="w-50 "
          src="img/merry-christmas-word.jpg"
          alt="merry-christmas-word"
        ></img>
      </div>
      <div className="my-4">
        <p className="font-size-md">
          <b>
            이름을 입력하면 등록된 편지가 있는지 확인할 수 있습니다.
            <br />
            방문해주신 모든분들 남은 한 해 즐겁고, 행복하게 마무리 잘 하시고
            <br /> 즐거운 크리스마스 보내시길 바랍니다.
          </b>
        </p>
      </div>

      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            name="recipient"
            className="form-control"
            placeholder="이름을 입력하세요 ex) 홍길동"
            aria-label="name"
            aria-describedby="button-addon2"
            onChange={(event) => {
              setRecipient(event.target.value);
              setCount(0); //alert 카드 이름이 수정되는 오류 막아주기
            }}
          />
          <button
            className="btn btn-outline-secondary"
            name='check-Btn'
            type="button"
            disabled={!recipient}
            onClick={getCount}
          >
            확인하기
          </button>
        </div>
        {count ? <AlertCard recipient={recipient} /> : null}
      </div>
    </div>
  );
};

export default HomePage;
