import { DivBar, NodoPedidoSubTitle, NovoPedidoContainer, NovoPedidoTitle } from '../../styles/styleCss';
import TipoPedido from "../../components/TipoPedido/TipoPedido";

export default function ModalNovoPedido() {
    return (
        <NovoPedidoContainer>
            <DivBar></DivBar>
            <NovoPedidoTitle>Novo pedido</NovoPedidoTitle>
            <NodoPedidoSubTitle>Selecione o tipo de pedido</NodoPedidoSubTitle>

            <TipoPedido></TipoPedido>
            <TipoPedido></TipoPedido>
            <TipoPedido></TipoPedido>
        </NovoPedidoContainer>
    );
}
