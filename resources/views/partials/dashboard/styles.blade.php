<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
<title>{{ ucwords(last(request()->segments())) }} | {{ config('app.name') }}</title>
<link rel="icon" type="image/png" sizes="16x16" href="img/favicon.png">
<link rel="icon" type="image/png" sizes="16x16" href="{{ asset('img/favicon.png') }}">
@vite('resources/css/dashboard/app.css')
