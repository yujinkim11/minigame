import styled from "styled-components";

const BoxWrap = styled.div`
  width: 600px;
  border: 3px solid black;
  margin-right: 30px;
  img {
    width: 400px;
    height: 400px;
  }

  h1 {
    font-size: 40px;
    margin-left: 20px;
  }

  h2 {
    font-size: 50px;
    margin-left: 20px;
    font-weight: 900;
  }
`;

export const Box = (props) => {
  // console.log("props", props);

  let result;
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
    result = props.result === "win" ? "lose" : "win";
  } else {
    // 위의 경우가 아니라면 props 로 전달된 결과를 그대로 쓴다.
    result = props.result;
  }
  if (props.title === "Computer") {
    // console.log("computer", result);
  }

  return (
    <BoxWrap>
      <div>
        <h1>{props.title}</h1>
        <img className="item-img" src={props.item && props.item.img} />
        <h2>{result}</h2>
      </div>
    </BoxWrap>
  );
};
