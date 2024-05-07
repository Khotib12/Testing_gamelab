import styled from "styled-components";
import BgBenner from "./img/image01.jpg";

export const BennerStyle = styled.section`
  min-height: 80vh;
  background-image: url(${BgBenner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: grid;
  align-items: center;
  padding: 0 100px;
`;

export const ButtonStyle = styled.button`
  padding: 10px 40px;
  border-radius: 0.3rem;
  background: #3887be;
  color: #ffffff;
  font-weight: 500;
  border: none;

  &:hover {
    cursor: pointer;
    background: #ffffff;
    color: #3887be;
    border-color: #3887be;
    border: 2px solid;
  }
`;

export const BennerText = styled.div`
  font-size: 3.4rem;
  color: #3887be;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const AboutStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
  align-items: center;
  gap: 1.5rem;
  padding: 0 100px;
`;

export const AboutImg = styled.div`
  border-radius: 0.5rem;
`;

export const AboutHeading = styled.h2`
  font-size: 0.938rem;
  margin: 0.5rem 0 1.1rem;
`;

export const AboutText = styled.div`
  font-size: 0.938rem;
  margin: 0.5rem 0 1.1rem;
`;

// Testimoni

export const TestiStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 0 20px;
  background-color: #3887be;
  text-align: center;
  color: black;
`;

export const TestiBox = styled.div`
  padding: 20px;
  border-radius: 0.5rem;
  text-align: center;
  background: #3887be;

  p {
    font-size: 0.938rem;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0.5rem 0 0.5rem;
  }
`;

export const TestiForm = styled.div`
  width: 500px;
  margin: 0 auto;

  label {
    display: block;
    margin-bottom: 10px;
  }

  input[type="text"],
  textarea {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
  }

  input[type="submit"] {
    background-color: #3887be;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
`;
