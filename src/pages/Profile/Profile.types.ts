
export interface StepProps {
  id: number;
  key: string;
  image: string;
  imageSize: string;
  miner: string;
  squad: string;
}

interface UserProps {
  id: number;
  name: string;
  value: number;
  rank: number;
}

export interface UserItemProps {
  item: UserProps;
  isMe?: boolean;
}