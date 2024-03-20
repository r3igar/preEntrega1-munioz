import React from 'react';

const ItemListContainer = ({ greeting, categoryId }) => {
    return (
        <div>
            <h1>{greeting}</h1>
            {}
            <p>Categoría seleccionada: {categoryId}</p>
        </div>
    );
}

export default ItemListContainer;
