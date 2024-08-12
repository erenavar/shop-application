export interface IProps {
    title: string;
    price: number;
    toNavigate? : () => void,
    toFav? : () => void,
    image:string,
    rating: {
      rate: number;
      count: number;
    };
  }