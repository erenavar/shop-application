export interface IProps {
    title: string;
    price: number;
    toNavigate? : () => void,
    tofav? : () => void,
    image:string,
    rating: {
      rate: number;
      count: number;
    };
  }