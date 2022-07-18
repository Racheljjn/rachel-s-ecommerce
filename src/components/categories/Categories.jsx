import React from 'react';
import Category from '../category-item/Category';
import "./categories.styles.scss"

const Categories = () => {
 const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?cs=srgb&dl=pexels-pixabay-35185.jpg&fm=jpg",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?cs=srgb&dl=pexels-mentatdgt-1336873.jpg&fm=jpg",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?cs=srgb&dl=pexels-jordan-hyde-1032110.jpg&fm=jpg",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?cs=srgb&dl=pexels-radomir-jordanovic-1644888.jpg&fm=jpg",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?cs=srgb&dl=pexels-helena-lopes-1049317.jpg&fm=jpg",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          imageUrl={category.imageUrl}
        />
      ))}
    </div>
  )
}

export default Categories