import { useFormContext } from "react-hook-form";

interface IPropsItems {
    title: string;
    name: string;
}

const InputText = (props: IPropsItems) => {
    const { register } = useFormContext();

    return <div className="flex flex=col gap-1 justify-center items-center p-1">
        <p className="dark:text-white">{props.title}</p>
        <input className="border-solid text-center border-spacing-1 rounded-sm" type="text" {...register(props.name)} />
    </div>
}

export default InputText;