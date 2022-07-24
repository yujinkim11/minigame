import styled from "styled-components";

const BoxWrap = styled.div`
  width: 600px;
  border: 3px solid black;
  margin-right: 30px;
  /* img {
    width: 400px;
  } */
`;

export const Box = ({ user }) => {
  console.log("props", props);
  return (
    <BoxWrap>
      <div>
        <h1>{user}</h1>
        <img src="https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8=" />
        <h2>결과값</h2>
      </div>
    </BoxWrap>
  );
};
