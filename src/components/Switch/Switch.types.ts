type OptionProps = {
  key: string;
  value: string;
};

export interface SwitchProps {
  name: string;
  options: OptionProps[];
  value: string;
  onChange: (name: string, value: string) => void;
}