<?php
    @session_start();
    include '../../../models/conexion.php';
    include '../../../controllers/funciones.php';
    include '../../../models/procesos.php';

    $idproveedor = $_GET['idproveedor'];
    
    $dataProveedor = CRUD("SELECT * FROM proveedores WHERE idproveedor = '$idproveedor'","s");

    foreach ($dataProveedor AS $result)
    {
        $proveedor = $result['proveedor'];
        $direccion = $result['direccion'];
        $telefono = $result['telefono'];
        $correo = $result['correo'];
       
    }
?>
<script src="./public/js/funciones-proveedores.js"></script>
<script src="./public/js/funciones.js"></script>
<form id="UpdateProveedor" enctype="multipart/formdata">
    <input type="hidden" name="idproveedor" value="<?php echo $idproveedor;?>">
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Proveedor: </span>
        </div>
        <input type="text" name="proveedor" class="form-control" value="<?php echo $proveedor; ?>" required="ON">
    </div>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Dirección: </span>
        </div>
        <input type="text" name="direccion" class="form-control" value="<?php echo $direccion; ?>" required="ON">
    </div>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Telefono: </span>
        </div>
        <input type="text" name="telefono" class="form-control" value="<?php echo $telefono; ?>" required="ON">
    </div>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Correo: </span>
        </div>
        <input type="email" name="email"  class="form-control" value="<?php echo $correo; ?>"required="ON">
    </div>
    <div style="margin-top:10px">
        <button class="btn btn-primary">Guardar</button>
    </div>
</form>