function toggleProductos() {
    const productosLista = document.getElementById("productos-lista");
    productosLista.classList.toggle("oculto");
}


function mostrarProductos() {
    const productos = [
        { nombre: 'Manzanas', precio: '30$' },
        { nombre: 'Bananas', precio: '23$' },
        { nombre: 'Zanahorias', precio: '30$' },
        { nombre: 'Tomates', precio: '40$' },
        { nombre: 'Leche', precio: '30$' },
        { nombre: 'Yogur', precio: '25$' },
        { nombre: 'Queso', precio: '60$' },
        { nombre: 'Mantequilla', precio: '32$' },
        { nombre: 'Pollo', precio: '50$' },
        { nombre: 'Res', precio: '90$' },
        { nombre: 'Cerdo', precio: '40$' },
        { nombre: 'Pescado', precio: '40$' },
        { nombre: 'Pan fresco', precio: '20$' },
        { nombre: 'Baguettes', precio: '15$' },
        { nombre: 'Galletas', precio: '27$' },
        { nombre: 'Verduras congeladas', precio: '27.50$' },
        { nombre: 'Helados', precio: '40$' },
        { nombre: 'Pizzas congeladas', precio: '30$' }
    ];

    const listaProductos = document.getElementById("productos-lista");
    listaProductos.innerHTML = "";  

    productos.forEach(producto => {
        const item = document.createElement('div');
        item.classList.add('producto');
        item.innerHTML = `<strong>${producto.nombre}</strong>: ${producto.precio}`;
        listaProductos.appendChild(item);
    });
}


function mostrarServicios() {
    const servicios = [
        'Entrega a domicilio',
        'Compras en línea',
        'Pago con tarjeta de crédito y débito',
        'Facturación Electrónica'
    ];

    const listaServicios = document.getElementById('servicios-lista');
    servicios.forEach(servicio => {
        const item = document.createElement('li');
        item.textContent = servicio;
        listaServicios.appendChild(item);
    });
}


window.onload = function() {
    mostrarServicios();
    mostrarProductos();
};
