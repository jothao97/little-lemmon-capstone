import bruschetta from './images/bruschetta.jpg'
import greeksalad from './images/greeksalad.jpg'
import lemondessert from './images/lemondessert.jpg'


const Food = [
    { 
      id: 1,
      title: "Greek salad",
      price: 12.99,
      image: greeksalad,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
    },
    {
      id: 2,
      title: "Bruschetta",
      price: 5.99,
      image: bruschetta,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      id: 3,
      title: "Lemon Dessert",
      price: 4.78,
      image: lemondessert,
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  
  ];
  
  export default Food;
  
  