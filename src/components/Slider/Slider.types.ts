import { StepProps } from "@/pages/Profile/Profile.types";

export interface SliderProps {
  options: StepProps[];  
  name: string;
  value: number;
  type: string;
  coin: string;
  onChange: (name: string, value: number) => void;
}