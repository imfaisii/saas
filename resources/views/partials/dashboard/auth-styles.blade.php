<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
<title>
    {{ config('app.name') }} - {{ $title ?? (request()->segments() ? ucwords(last(request()->segments())) : 'Home') }}
</title>
<link rel="icon" type="image/png" sizes="16x16" href="{{ asset('img/favicon.png') }}">
<script src="{{ asset('js/libs/vue2.6.min.js') }}"></script>
@vite(['resources/css/dashboard/guest.css'])
