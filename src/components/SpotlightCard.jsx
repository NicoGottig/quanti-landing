import styled from "styled-components";

const CardContainer = styled.div`
  background: #1f1f1f;
  border-radius: 18px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  width: 260px;
  min-height: 270px;
  box-shadow: 0 4px 32px rgba(44, 55, 131, 0.10);
  transition: transform 0.28s cubic-bezier(.55,.04,.5,.95), box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-7px) scale(1.03);
    box-shadow: 0 15px 30px rgba(76, 99, 245, 0.18);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1.2rem 0 0.6rem 0;
    font-family: 'Poppins', sans-serif;
    color: #fff;
  }

  p {
    color: #c4c7d6;
    font-size: 1rem;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    width: 95vw;
    min-width: unset;
    padding: 1.8rem 1rem;
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
