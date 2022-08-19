import React from 'react'
import { InputStyle, LabelStyle, TextAreaStyle } from './FormStyle'

function Form() {
    return <div>Form</div>
}

export function Input({ ...props }) {
    return <InputStyle {...props} />
}

export function Label({ children, ...props }) {
    return <LabelStyle htmlFor={props.htmlFor} >{children}</LabelStyle>
}

export function TextArea({ ...props }) {
    return <TextAreaStyle {...props} />
}
export default Form