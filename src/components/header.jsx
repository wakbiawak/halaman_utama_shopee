import React, { useState } from 'react';

function Header() {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (query) {
      // Redirect ke Shopee dengan query pencarian
      window.location.href = `https://shopee.co.id/search?keyword={search_query}`;
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/src/style/logo_shopee-removebg-preview.png" alt='logo shopee'/>
      </div>
      <div className="search-bar">
      <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
        handleSearch(event);
          }
        }}
        placeholder="Cari produk, kategori, toko atau merek..."
      />
        <button>Cari</button>
      </form>
      </div>
      <div className="user-profile">
            <img src="/src/style/user_profil.jpg" alt="User Profile"/>
      </div>
    </header>
  );
}

export default Header;
