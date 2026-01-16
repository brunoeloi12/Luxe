import type { ButtonProps } from 'antd';
import { ButtonAntd } from './button.styles';

interface ButttonCurrentProps extends ButtonProps {
  texto?: string;
  margin?: string;
}

const Button = ({ texto, margin, ...props }: ButttonCurrentProps) => {
  return (
    <ButtonAntd style={{ margin }} {...props}>
      {texto}
    </ButtonAntd>
  );
};

export default Button;
