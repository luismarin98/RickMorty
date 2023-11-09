import { useFormContext } from "react-hook-form";

interface IPropsItems {
    title: string;
    name: string;
    value: string;
}

const InputTextEdit = (props: IPropsItems) => {
    const { register } = useFormContext();

    return <div className="flex flex=col gap-1 justify-center items-center p-1">
        <p className="dark:text-white">{props.title}</p>
        <input className="border-solid rounded-lg text-center border-spacing-1 bg-slate-300" type="text" value={props.value} {...register(props.name)} />
    </div>
}

export default InputTextEdit;