// ESTE CRUD LE PERTENECE A CARLOS JOEL SANCHEZ GALAN SOFTWARE C1
(function () {

    const btnEliminacion = document.querySelectorAll(".btnEliminacion");

    btnEliminacion.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const confirmacion = confirm('¿Está seguro que desea eliminar el curso?');
            if (!confirmacion) {
                e.preventDefault();
            }
        });
    });
    
})();