<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="apple-touch-icon" sizes="180x180" href="https://laravel.com/img/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="https://laravel.com/img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="https://laravel.com/img/favicon/favicon-16x16.png">
    <link rel="mask-icon" href="https://laravel.com/img/favicon/safari-pinned-tab.svg" color="#ff2d20">
    <link rel="shortcut icon" href="https://laravel.com/img/favicon/favicon.ico">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
        rel="stylesheet">
    <!-- SweetAlert2 CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">
    <!-- SweetAlert2 JS -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link href="https://cdn.datatables.net/v/bs5/dt-2.1.7/r-3.0.3/datatables.min.css" rel="stylesheet">
    <style>
        body {
            background-color: lightgray;
            font-family: 'Nunito Sans', sans-serif;
        }
    </style>

    @routes
    {{-- Inertia --}}
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
</head>

<body>

    @inertia

    @include('sweetalert::alert')
    <script src="https://cdn.datatables.net/v/bs5/dt-2.1.7/r-3.0.3/datatables.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
