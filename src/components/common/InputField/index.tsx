import { type FC } from 'react'

interface InputFieldProps {
  name: string;
  className: string;
  value: string;
  limit?: number;
  onChange?: (name: string, value: string) => void;
  onBlur?: (name: string, value: string) => void;
  onKeyDown?: (name: string, value: string) => void;
}

const InputField: FC<InputFieldProps> = ({ name, className, value, limit = 0, onChange, onBlur, onKeyDown }) => {

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length > limit && limit) return;

    if (onChange) {
      onChange(name, e.currentTarget.value);
    }
  }

  const handleBlur = (e: React.FormEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(name, e.currentTarget.value);
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onKeyDown) {
      onKeyDown(name, value);
    }
  }

  return (
    <input className={className} id={name} type='input' value={value} onChange={handleChange} onBlur={handleBlur} onKeyDown={handleKeyDown} />
  )
}

export default InputField