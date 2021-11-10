$(document).ready(function() {
    /* carga contenido Proveedores*/
    $(".proveedores").click(function(event) {
        $("#contenido-panel").load("./views/panel/proveedores/principal.php");
        event.preventDefault();
    });

    /* Paginado*/
    $("a.pagina").click(function(event) {
        var num, reg;
        num = $(this).attr("v-num");
        reg = $(this).attr("num-reg");
        $("#contenido-panel").load("./views/panel/proveedores/principal.php?num=" + num + "&num_reg=" + reg);
        event.preventDefault();
    });

     /* Aumenta N° registros para el paginado*/
     $("#select-reg").on('change', function(event) {
        var valor;
        valor = $("#select-reg option:selected").val();
        $("#contenido-panel").load("./views/panel/proveedores/principal.php?num_reg=" + valor);
        event.preventDefault();
    });

    /* Buscar Proveedor*/
    $("#like-prov").on('change', function(event) {
        var valor;
        valor = $("#like-prov").val();
        if (valor.trim() == "") {
            alertify.alert("Buscar Proveedor", "No ingreso el nombre ó código del proveedor a buscar...");
            event.preventDefault();
        } else {
            //alert(valor);
            $("#contenido-panel").load("./views/panel/proveedores/principal.php?like=1&valor=" + valor);
            //event.preventDefault();
        }
    });

    /* Despliega Modal Registro Proveedor*/
    $("a.new-prov").click(function(event) {
        $("#ModalNewProveedor").modal("show");
        $("#DataFormProveedor").load("./views/panel/proveedores/form_proveedor.php");
        event.preventDefault();
    });

    /*Guardar nuevo proveedor*/
    $("#FormNewProv").on("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(document.getElementById("FormNewProv"));
            formData.append("dato", "valor");
            $.ajax({
                    url: "./views/panel/proveedores/insert.php",
                    type: "POST",
                    dataType: "html",
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false
                })
                .done(function(res) {
                    $("#contenido-panel").html(res);
                });
              
    });

     /* Despliega Modal para Editar Proveedor*/
     $(".upd-prov").click(function() {
        var  idproveedor = $(this).attr("id-proveedor");
        $('#ProvUpd').modal('show');
        $("#dataProveedor").load("./views/panel/proveedores/edit_form_proveedor.php?idproveedor=" + idproveedor);
    });

     /* Actualizar Proveedor*/
     $("#UpdateProveedor").on("submit", function(event) {
        var tipo = $('#tipo-user').val();
        event.preventDefault();
        if (tipo == 0) {
            alertify.alert("Registro Usuario", "No seleciono el tipo de usuario...");
            event.preventDefault();
        } else {
            var formData = new FormData(document.getElementById("UpdateProveedor"));
            formData.append("dato", "valor");
            $.ajax({
                    url: "./views/panel/proveedores/update.php",
                    type: "POST",
                    dataType: "html",
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false
                })
                .done(function(res) {
                    $("#contenido-panel").html(res);
                });
        }
    });
     /* Eliminar Proveedor */
     $("a.del-prov").click(function(event) {
        var idproveedor = $(this).attr("id-proveedor");
        alertify.confirm('Eliminar Proveedor', '¿Seguro/a de eliminar este proveedor?',
            function() {
                $("#contenido-panel").load("./views/panel/proveedores/del.php?idproveedor=" + idproveedor);
                event.preventDefault();
            },
            function() {
                alertify.error('Proceso cancelado...');
            });
        event.preventDefault();
    });
});