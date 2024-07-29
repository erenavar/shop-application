export interface IProps {
    title: string;
    price: number;
    toNavigate : () => void,
    rating: {
      rate: number;
      count: number;
    };
  }