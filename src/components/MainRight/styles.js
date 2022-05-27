import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin: 50px;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: initial;
  justify-content: center;
  border-radius: 5px;
  background: #fff2de;
  @media (max-width: 1115px) {
    width: 80%;
    margin: 1rem;
  }

  button {
    width: 112px;
    height: 39px;
    font-family: Roboto;
    font-size: 14px;
    color: #707070;
    background: #fff2de;
    border-width: 1px;
    border-radius: 0.2rem;
    padding: 0.3rem 1rem;
    margin: 0.1rem 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const BoxTitle = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const Title = styled.h2`
  width: 115;
  height: 19;
  postion:
  
  font-family: Roboto;
  color: #707070;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin: 0.1rem 1rem;
`;

export const Text = styled.strong`
  width: 100%;
  height: 100%;
  color: #707070;
  font-family: Open Sans;
  font-style: normal;
  justify-content: justify;
  font-weight: 300;
  font-size: 17px;
  line-height: 20px;
  margin: 0.1rem 1rem;
`;
