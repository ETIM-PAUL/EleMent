import React, { memo } from 'react'
import { areEqual } from '../../utils/equalChecks'
import { useField } from "formik";

type Props = {
  label: string,
  placeholder: string,
  type: string,
  name: string,
  asterisk: string,
  required: boolean,
}

const InputField = ({ ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <div className="input-container">
      <label className="text-sm font-semibold flex gap-1 items-center">
        {props.label} <span className="text-[#eb5757] mt-1">{props.asterisk}</span>
      </label>
      <input {...field} {...props} className="my-[10px] h-12 w-full bg-white rounded-[10px] h-[35px] py-3 px-4 border-[#645CAA] border" />
      {(meta.touched && meta.error) ||
        (meta.error && meta.value !== "") ||
        (meta.error && meta.value === "") ? (
        <div className="text-[#eb5757] text-[10px]">{meta.error}</div>
      ) : null}
    </div>
  )
}

const InputFieldMemo = memo(InputField, areEqual)
export { InputFieldMemo as InputField }