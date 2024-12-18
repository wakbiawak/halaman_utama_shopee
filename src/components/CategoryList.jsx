import React from 'react';

function CategoryList() {
  const categories = [
    { id: 1, name: "Elektronik", image: "/src/style/kategori_elektronik.jpg" },
    { id: 2, name: "Fashion", image: "/src/style/kategori_sepatu.jpg" },
    { id: 3, name: "Peralatan Rumah", image: "/src/style/kategori_peralatan_rumah.jpg" },
    { id: 4, name: "Makanan & Minuman", image: "/src/style/kategori_makanan&minuman.webp" }
  ];

  return (
    <div className="category-list">
      <h2>Kategori Populer</h2>
      <div className="categories">
        {categories.map((category) => (
          <div key={category.id} className="category">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
