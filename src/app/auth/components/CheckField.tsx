import styled from "styled-components";
import { colors } from "@/styles/colors";
import { font_size, font_weight } from "@/styles/typography";
import { B2_M_14 } from "@/styles/stylesComponents/typographyComponents";
type CheckFieldProps = {
  title: string;
  name: string;
  id: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type CheckFieldStyle = {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
};
export default function CheckField({
  title,
  name,
  id,
  color,
  fontSize,
  fontWeight,
  height,
  onChange,
  checked,
}: CheckFieldProps) {
  return (
    <Container>
      <Label
        htmlFor={id}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        height={height}
      >
        <input
          checked={checked}
          onChange={onChange}
          type="checkbox"
          name={name}
          id={id}
        />
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" fill="#CCCCCC" />
            <circle cx="12" cy="12" r="3" fill="white" />
          </svg>
        </div>
        {name === "require" && <Require>(필수)</Require>}
        <span>{title}</span>
      </Label>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label<CheckFieldStyle>`
  cursor: pointer;
  color: ${({ color }) => color || "black"};

  font-weight: ${({ fontWeight }) => fontWeight || "500"};
  display: flex;
  align-items: center;
  div {
    margin-right: 8px;
    svg {
      vertical-align: middle;
    }
  }
  span {
    height: ${({ height }) => height || "16px"};
  }
  input {
    overflow: hidden;
    position: absolute;
    clip: rect(0px, 0px, 0px, 0px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
  }

  input:checked + div svg circle:nth-of-type(1) {
    fill: #4c8bff;
  }
`;

const Require = styled.strong`
  color: var(${colors.PRIMARY_80});
  font-size: var(${font_size.FONT_SIZE_20});
  font-weight: var(${font_weight.FONT_WEIGHT_700_B});
  margin-right: 4px;
`;
