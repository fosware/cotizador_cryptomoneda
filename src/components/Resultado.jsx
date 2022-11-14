import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
  @media (max-width: 520px) {
    margin-top: 5px;
    gap: .8rem;
   }
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
    display: block;
  }
  @media (max-width: 520px) {
    font-weight: 200;
   }
`;
const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
    display: block;
  }
  @media (max-width: 520px) {
    font-weight: 400;
    font-size: 22px;
   }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
      <div>
        <Precio>
          El precio: <span>{PRICE}</span>{" "}
        </Precio>
        <Texto>
          El precio más alto del día: <span>{HIGHDAY}</span>{" "}
        </Texto>
        <Texto>
          El precio más bajo del día: <span>{LOWDAY}</span>{" "}
        </Texto>
        <Texto>
          Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>{" "}
        </Texto>
        <Texto>
          Última actualización: <span>{LASTUPDATE}</span>{" "}
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
