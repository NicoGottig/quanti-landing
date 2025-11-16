import styled from "styled-components";

const CardContainer = styled.div`
  background: #1f1f1f;
  border-radius: 18px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  width: 260px;
  min-height: 270px;
  max-width: 96vw;
  box-shadow: 0 4px 32px rgba(44, 55, 131, 0.10);
  transition: transform 0.28s cubic-bezier(.55,.04,.5,.95), box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-7px) scale(1.03);
    box-shadow: 0 15px 30px rgba(76, 99, 245, 0.18);
  }

  svg {
    margin-bottom: 0.7rem;
    max-width: 64px;
    max-height: 64px;
    width: 52px;
    height: 52px;
    @media (max-width: 500px) {
      width: 40px;
      height: 40px;
    }
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1.1rem 0 0.5rem 0;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    @media (max-width: 500px) {
      font-size: 1.08rem;
    }
  }

  p {
    color: #c4c7d6;
    font-size: 1rem;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    @media (max-width: 500px) {
      font-size: 0.97rem;
    }
  }

  @media (max-width: 900px) {
    width: 320px;
    min-width: unset;
  }

  @media (max-width: 768px) {
    width: 98vw;
    max-width: 390px;
    min-width: unset;
    padding: 1.7rem 0.8rem;
  }

  @media (max-width: 500px) {
    width: 98vw;
    max-width: 360px;
    padding: 1.2rem 0.5rem;
    min-height: 180px;
  }
`;

function SpotlightCard({ icon, title, description }) {
  return (
    <CardContainer>
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </CardContainer>
  );
}

export default SpotlightCard;
