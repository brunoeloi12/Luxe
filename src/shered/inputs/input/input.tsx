import { Input as InputAntd } from 'antd';
import { BoxInput, TitleInput } from './input.styles';

interface InputProps {
  title?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
}

const Input = ({ onChange, value, title, type, ...props }: InputProps) => {
  return (
    <BoxInput>
      <TitleInput>{title}</TitleInput>
      <InputAntd onChange={onChange} value={value} type={type} placeholder={title} {...props} />
    </BoxInput>
  );
};

export default Input;
