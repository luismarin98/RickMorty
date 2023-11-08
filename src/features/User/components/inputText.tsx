import { useFormContext } from "react-hook-form";

interface IPropsItems {
    title: string;
    name: string;
}

const InputText = (props: IPropsItems) => {
    const { register } = useFormContext();

    return <div>
        <p>
            {props.title}
            <input type="text" {...register(props.name)} />
        </p>
    </div>
}

export default InputText;