export interface CategoryItem{
  id: number;
  title: string;
  imgUrl: string;
}

export interface Category {
  forYou: Array<CategoryItem>
}

export const categories: Category[] = [
  {
    forYou: [{
      id:1,
      title: 'Shop the winter collection',
      imgUrl: 'https://rukminim2.flixcart.com/fk-p-flap/174/174/image/4b0c0ee7797b8ee0.jpg'
    },{
      id:2,
      title: "Wedding Picks",
      imgUrl: 'https://rukminim2.flixcart.com/fk-p-flap/174/174/image/ba0919ec9bddea81.jpg'
    }]
  },
];
