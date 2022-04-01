import styled from "styled-components";

export const Article = styled.article`
  padding: 20px;
  color: white;
  max-width: 1300px;
`;
export const Img = styled.img`
  width: 100%;
  height: auto;
  max-width: 1300px;
  margin: 0 auto;
  display: block;
`;

export const BtnClose = styled.button`
  border-radius: 50%;
  width: 34px;
  height: 34px;
  font-weight: bold;
  font-size: 21px;
  color: #f10606;
  background: transparent;
  cursor: pointer;
  position: absolute;
  top: 8px;
  border: 2px solid white;
  right: 10px;
`;

export const ModalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "auto",
    background: "black",
  },
};

export const SMovieImg = styled.img`
  height: 200px;
`
