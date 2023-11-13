export interface ModalRequest {
    title: string;
    children: JSX.Element;
    isOpen: boolean;
    onClose: () => void;
}