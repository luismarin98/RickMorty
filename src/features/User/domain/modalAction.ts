export interface ModalInsertRequest {
    title: string;
    children: JSX.Element;
    isOpen: boolean;
    onClose: () => void;
}
