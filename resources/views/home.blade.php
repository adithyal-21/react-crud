<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>React</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        </head>
    <body>
    <div class="container">
    <div id="app">
    </div>
    </div>
    <script type="text/javascript" src="{{asset('js/app.js')}}">
    </script>
    </body>
    </html>