<base href="../../../">
<title>
    {{ config('app.name') }} - {{ $title ?? (request()->segments() ? ucwords(last(request()->segments())) : 'Home') }}
</title>
<meta charset="utf-8" />
<meta name="description" content="" />
<meta name="keywords" content="" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="article" />
<meta property="og:title" content="" />
<meta property="og:url" content="" />
<meta property="og:site_name" content="{{ config('app.name') }} | Fast Devs" />
<link rel="canonical" href="" />
<link rel="shortcut icon" href="{{ asset('backend/assets/media/logos/favicon.ico') }}" />
<link href="{{ asset('backend/assets/plugins/global/plugins.bundle.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ asset('backend/assets/css/style.bundle.css') }}" rel="stylesheet" type="text/css" />
@vite(['resources/css/dashboard/guest.css', 'resources/js/app.js'])
