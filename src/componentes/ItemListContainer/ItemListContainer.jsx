import React from 'react';

const ItemListContainer = ({ greeting, categoryId }) => {
    return (
        <div>
            <h1>{greeting}</h1>
            {/* Aquí puedes agregar la lógica para mostrar la lista de productos */}
            <p>Categoría seleccionada: {categoryId}</p>
        </div>
    );
}

export default ItemListContainer;
