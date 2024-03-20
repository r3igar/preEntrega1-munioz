import React, { useState, useEffect } from 'react';

const ItemDetailContainer = ({ itemId }) => {
    const [item, setItem] = useState(null);
  
    useEffect(() => {
      
      const fetchItem = async () => {
      
        const response = await fetch(`https://api.example.com/products/${itemId}`);
        const data = await response.json();
        setItem(data);
      };
  
      fetchItem();
    }, [itemId]);
  
    return (
      <div>
        {item ? (
          <div>
            <h2>Detalles del producto</h2>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    );
}

export default ItemDetailContainer;
