import { ReactNode } from 'react';

export interface StepProps {
  id: number;
  key: string;
  icon: ReactNode;
  miner: string;
  squad: string;
}