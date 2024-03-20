import React, { useState, useEffect } from 'react';

const ItemDetailContainer = ({ itemId }) => {
    const [item, setItem] = useState(null);
  
    useEffect(() => {
      // Aquí puedes hacer una llamada a una API o cargar datos de algún otro lugar
      // Por ejemplo, podrías cargar los detalles de un producto específico basado en el ID
      const fetchItem = async () => {
        // Simulando una llamada a una API
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
