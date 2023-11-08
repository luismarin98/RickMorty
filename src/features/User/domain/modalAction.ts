export interface ModalInsert {
    title: string;
    children: JSX.Element;
    isOpen: boolean;
    onClose: () => void;
}
