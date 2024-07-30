export interface IProps {
    title: string;
    price: number;
    toNavigate : () => void,
    image:string,
    rating: {
      rate: number;
      count: number;
    };
  }