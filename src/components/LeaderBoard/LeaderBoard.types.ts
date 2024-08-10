interface OptionProps {
  id: number;
  name: string;
  value: number;
  rank: number;
}

export interface LeaderBoardProps {
  options?: OptionProps[];
  owner?: OptionProps;
  height: string;
  type: string;
  handleChange: (name:string, value: string) => void;
}

export interface UserItemProps {
  item: OptionProps;
  isMe?: boolean;
}