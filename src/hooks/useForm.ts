import { ChangeEvent, useState } from "react"




export const useForm = <T>(initialState: T) => {
    const [formData, setFormData] = useState(initialState);

    const onHandleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    };

    const onResetForm = () => setFormData(initialState);


    return {
        ...formData,
        formData,
        onHandleChange,
        onResetForm,
    }
}