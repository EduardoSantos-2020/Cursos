<!DOCTYPE html>
<html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <title>Teste do PHP</title>
            <style type="text/css">


            body{
                background-color: #ff0000;
            }
            h1{
                color:#fff;
            }
            .linha{
                color:#00fefe;
                line-height: 50px;
                font-weight: bolder;
                font-size: 30px;
                padding-left:10px;
                text-align: center;
            }
            </style>
        </head>
        <body>
            <h1>Testando Codigo</h1>
            <?php

                for($i=0 ; $i <10;$i ++ )

                print("<span class=\"linha\"> Linha Indice ==> " .$i. "</span><br><br/>")

            ?>
        </body>
    <script type="text/javascript">
        $(document).ready(function(){
            alert("Estou Funcionando !!")
        })
    </script>
</html>