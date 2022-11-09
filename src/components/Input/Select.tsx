import React, { memo } from 'react'
import { areEqual } from '../../utils/equalChecks'
import { useField } from "formik";

type Props = {
  label: string,
  name: string,
  asterisk: string,
  required: boolean,
}
const Select = ({ children, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className="input-container">
      <label className="text-sm font-semibold flex gap-1 items-center">
        {props.label} <span className="text-[#eb5757] mt-1">{props.asterisk}</span>
      </label>
      <select {...field} {...props} className="my-[10px] w-full h-12 bg-white rounded-[10px] h-[35px] py-3 px-4 border-[#645CAA] border">
        {children}
      </select>
      {(meta.touched && meta.error) ||
        (meta.error && meta.value !== "") ||
        (meta.error && meta.value === "") ? (
        <div className="text-[#eb5757] text-[10px]">{meta.error}</div>
      ) : null}
    </div>
  );
};

const SelectMemo = memo(Select, areEqual)

export { SelectMemo as Select }