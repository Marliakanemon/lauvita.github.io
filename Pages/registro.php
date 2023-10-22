<?php
//1. Invocar conexión
include_once("conexion.php");

//2. Crear conexión a la Base de Datos
$con=mysqli_connect($host,$usuario,$clave,$bd) or die('Fallo la conexion');
mysqli_set_charset($con,"utf8");

//3. Tomar los datos provenientes de los campos del Formulario
$vnombre = $_POST['nombres'];
$vapellido = $_POST['apellidos'];
$vcorreo = $_POST['correo'];
$vusuario = $_POST['usuario'];
$vpassword = $_POST['pass'];
 
//4. Insertar los datos en la tabla de la Base de Datos 
$inserta = "INSERT INTO $bd.datos (nombres, apellidos, correo, usuario, pass) VALUES ('$vnombre','$vapellido','$vcorreo','$vusuario','$vpassword');";
$resultado = mysqli_query($con,$inserta);
//echo json_encode ($resultado);

//echo "LOS DATOS SE GUARDARON DE FORMA EXITOSA...";

header("location:resultado.php");

//5. Cerrar la conexion 
mysqli_close($con);
?>