import React from 'react';

function ProductList() {
  const products = [
    { id: 1, name: "NB 574 Stone Island", price: "Rp 4.999.000", image: "/src/style/NB\ 574.webp" },
    { id: 2, name: "Iphone 16", price: "Rp 18.400.000", image: "/src/style/ip\ 16.webp" },
    { id: 3, name: "Nike Airmax 97 triple white", price: "Rp 2.799.000", image: "/src/style/sepatu_airmax.jpg" },
    { id: 4, name: "Jaket puffer Stone Island", price: "Rp 10.500.000", image: "/src/style/jaket_puffer_SI.jpg" }
  ];

  return (
    <div className="product-list">
      <h2>Produk Terlaris</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
