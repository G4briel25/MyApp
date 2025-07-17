import {
  CardMesaContainer,
  CardMesaClienteComanda,
  CardMesaFrame,
  CardMesaNumero,
  CardMesaFrameText
} from "../../styles/styleCss";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CardMesaProps } from "../../types";
import { formatarMoeda } from "../../utils/formatarMoeda";

export default function CardMesa({ mesa, largura }: CardMesaProps & { largura: number }) {
  return (
    <CardMesaContainer cor={mesa.cor} style={{ width: largura }}>
      <CardMesaNumero>{mesa.numero}</CardMesaNumero>

      {mesa.status != 'livre' ? (
        <>
          <CardMesaClienteComanda>
            <CardMesaFrame>
              {mesa.numeroComandas != 1 ? (
                <>
                  <Icon name="receipt" size={12} />
                  <CardMesaFrameText
                    style={{ marginRight: 8 }}
                  >
                    {mesa.numeroComandas}
                  </CardMesaFrameText>
                </>
              ) : (
                <></>
              )}
            </CardMesaFrame>

            <CardMesaFrame>
              <Icon name="account-circle" size={12} />
              {mesa.cliente != null ? (
                <CardMesaFrameText
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {mesa.cliente}
                </CardMesaFrameText>
              ) : (
                <CardMesaFrameText>{mesa.numeroClientes}</CardMesaFrameText>
              )}
            </CardMesaFrame>
          </CardMesaClienteComanda>
          <CardMesaFrame>
            <Icon name="access-time-filled" size={12} />
            <CardMesaFrameText>
              {`${mesa.tempoEmAberto}min`}
            </CardMesaFrameText>
          </CardMesaFrame>
          <CardMesaFrame>
            <Icon name="monetization-on" size={12} />
            <CardMesaFrameText>{formatarMoeda(mesa.valorTotal)}</CardMesaFrameText>
          </CardMesaFrame>
          <CardMesaFrame>
            <Icon name="room-service" size={12} />
            <CardMesaFrameText
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {mesa.atendente}
            </CardMesaFrameText>
          </CardMesaFrame>
        </>
      ) : (
        <></>
      )}
    </CardMesaContainer>
  );
}