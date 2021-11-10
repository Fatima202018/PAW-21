<?php 
    include '../../../models/conexion.php';
    include '../../../controllers/funciones.php';
    include '../../../models/procesos.php';

?>
<script src="./public/js/funciones-proveedores.js"></script>
<script src="./public/js/funciones.js"></script>
<form id="FormNewProv" enctype="multipart/formdata">
    <!--Campo nombre del proveedor-->
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Proveedor: </span>
        </div>
        <input type="text" name="proveedor" class="form-control" placeholder="Proveedor" required="ON">
    </div>
    <!--Campo dirección-->
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Dirección: </span>
        </div>
        <input type="text" name="direccion" class="form-control" placeholder="Direccion" required="ON">
    </div>
    <!--Campo telefono-->
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Telefono: </span>
        </div>
        <input type="text" name="telefono" class="form-control" placeholder="Telefono" required="ON">
    </div>
    <!--Campo correo-->
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Correo: </span>
        </div>
        <input type="email" name="email" placeholder="Correo Electrónico" class="form-control" required="ON">
    </div>
    <div style="margin-top:10px">
        <button class="btn btn-primary">Guardar</button>
    </div>
</form>