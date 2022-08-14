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
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }
  if (props.title === "Computer") {
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
