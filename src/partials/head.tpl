<head>
    <title>Hola mundo</title>
    <meta charset="UTF-8">
    <link href="assets/css/style.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
    <script>
        $( document ).ready(function() {
            $('#ocultarFooter').click(function () {
                $('footer').slideUp();
            });

            $('#mostrarFooter').click(function () {
                $('footer').slideDown();
            });
        });
    </script>
</head>