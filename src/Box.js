import styled from "styled-components";

const BoxWrap = styled.div`
  width: 600px;
  border: 3px solid black;
  margin-right: 30px;
  img {
    width: 400px;
    height: 400px;
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
  return (
    <BoxWrap>
      <div>
        <h1>{props.title}</h1>
        <img className="item-img" src={props.item && props.item.img} />
        <h2>{props.result}</h2>
      </div>
    </BoxWrap>
  );
};
