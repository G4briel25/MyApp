import { DivBar, NodoPedidoSubTitle, NovoPedidoContainer, NovoPedidoTitle } from '../../styles/styleCss';
import TipoPedido from "../../components/TipoPedido/TipoPedido";
import { ModalNovoPedidoProps } from '../../types/modalNovoPedidoProps';
import Modal from 'react-native-modal';
import MesaIcone from '../../components/MesaIcone/MesaIcone';
import ShoppingBagSpeed from '../../components/ShoppingBagSpeed/ShoppingBagSpeed';

export default function ModalNovoPedido({
    isVisible,
    onClose
}: ModalNovoPedidoProps) {
    return (
        <Modal
            isVisible={isVisible}
            onSwipeComplete={onClose}
            swipeDirection={['down']}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            style={{ justifyContent: 'flex-end', margin: 0 }}
            propagateSwipe={true}
            scrollOffset={0}
            scrollOffsetMax={0}
        >
            <NovoPedidoContainer>
                <DivBar></DivBar>
                <NovoPedidoTitle>Novo pedido</NovoPedidoTitle>
                <NodoPedidoSubTitle>Selecione o tipo de pedido</NodoPedidoSubTitle>

                <TipoPedido 
                    SvgIcon={MesaIcone}
                    title="Mesa"
                />
                <TipoPedido
                    SvgIcon={ShoppingBagSpeed}
                    title='Balcão'
                />
            </NovoPedidoContainer>
        </Modal>
    );
}
