import React, { CSSProperties, useRef } from "react";

interface TodoFormProps {
    onAdd(title: string): void
}

const marginTop: CSSProperties = {
    marginTop: '40px'
}

export const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {
    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === "Enter") {
            onAdd(ref.current!.value);
            ref.current!.value = '';
        }
    }
    
    return (
        <div style={marginTop} className="input-field inpt" >
            <input
            // onChange={} 
            // value="" 
            type='text' 
            style={marginTop} 
            id='title'
            placeholder="Название"
            ref={ref}
            onKeyPress={keyPressHandler}
            >
            </input>
            <label htmlFor="title" >
                Введите название дела:
            </label>
        </div>
    )
}