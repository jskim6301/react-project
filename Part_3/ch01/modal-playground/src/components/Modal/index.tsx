import styled from "@emotion/styled";
import { CSSTransition } from 'react-transition-group';
import Portal from "../../component/Portal";

const Overlay = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Dim = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
    max-width: 456px;
    position: relative;
    width: 100%;
`;

interface Props {
    children: any;
    isOpen: boolean;
    onClose: () => void;
    selector?: string;
}
/**
 * Portal로 인해 rootElement하위에 태그가 붙는다.
 */
const Modal: React.FC<Props> = ({ children, onClose, isOpen, selector = '#modal-root' }) => (
    <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
      <Portal selector={selector}>
        <Overlay>
          <Dim onClick={onClose} />
          <Container>{children}</Container>
        </Overlay>
      </Portal>
    </CSSTransition>
)


const Modal2: React.FC<Props> = ({ children, onClose, isOpen, selector = '#modal-root' }) => {
    return(
        <>
        {isOpen ? (
        <Portal selector={selector}>
            <Overlay>
                <Dim onClick={onClose} />
                <Container>{children}</Container>
            </Overlay>
        </Portal>
        )   :   
        null
        }
        </>
    );
}

export default Modal;