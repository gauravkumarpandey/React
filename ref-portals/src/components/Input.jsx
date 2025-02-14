import { forwardRef } from "react"
const Input = forwardRef(function Input({ label, ...props }, ref) {
  // Todo: Accept forwarded ref and "connect" it to the <input> element
  return (
    <p className="control">
      <label>{label}</label>
      <input ref={ref} props={...props}/>
    </p>
  )
})

export default Input
