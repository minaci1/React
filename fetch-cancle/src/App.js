import React, { useMemo, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Button = styled.button`
  margin-right: 10px;
`;

const Loading = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const ErrorMessage = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: red;
`;

const App = () => {
  const [answer, setAnswer] = useState({ result: "", status: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const random = useMemo(() => uuidv4(), []);

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }
  console.log("랜덤값" + random);

  let url = `http://localhost:8090/getSum?random=${random}`;

  const onRequset = () => {
    setLoading(true); // 요청 시작 시 로딩 상태로 변경

    //const randomNum = Math.floor(Math.random() * 1000);

    fetch(url, {
      credentials: "include",
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("정상 동작~");

          return response.json();
        } else {
          throw new Error("Something went wrong on api server!");
        }
      })
      .then((response) => {
        setLoading(false); // 요청 완료 시 로딩 상태 해제
        console.log(response.status);
        if (response.status === 1) {
          setAnswer({
            result: JSON.stringify(response.result),
            status: "요청완료",
          });
        } else if (response.status === -2) {
          setAnswer({
            result: JSON.stringify(response.result),
            status: "요청취소",
          });
        }
      })
      .catch((error) => {
        setLoading(false); // 에러 발생 시 로딩 상태 해제
        setError("요청 중 오류가 발생했습니다.");
        console.error(error);
      });
  };

  let url1 = `http://localhost:8090/getSumCancel?random=${random}`;

  const onCancle = () => {
    fetch(url1, {
      credentials: "include",
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        return null;
      } else {
        throw new Error("Something went wrong on api server!");
      }
    });
  };

  return (
    <Container>
      <Button onClick={onRequset}>요청</Button>
      <Button onClick={onCancle}>취소</Button>
      <div>
        {loading ? (
          <Loading>요청 중입니다...</Loading>
        ) : error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          <>
            <div>합 : {answer.result}</div>
            <div>상태 :{answer.status}</div>
          </>
        )}
      </div>
    </Container>
  );
};

export default App;
