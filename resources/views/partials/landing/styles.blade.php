<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="author" content="DSAThemes" />
<meta name="description" content="OLMO - Software, App, SaaS & Startup Landing Pages Pack" />
<meta name="keywords"
    content="Responsive, HTML5, DSAThemes, One Page, Landing, Software, Mobile App, SaaS, Startup, Creative, Freelancers, Digital Product">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- SITE TITLE -->
<title>{{ env('APP_NAME') . ucwords(last(request()->segments()))}}</title>
<!-- FAVICON AND TOUCH ICONS -->
<link rel="shortcut icon" href="{{ asset('landing/images/favicon.ico') }}" type="image/x-icon">
<link rel="icon" href="{{ asset('landing/images/favicon.ico') }}" type="image/x-icon">
<link rel="apple-touch-icon" sizes="152x152" href="{{ asset('landing/images/apple-touch-icon-152x152.png') }}">
<link rel="apple-touch-icon" sizes="120x120" href="{{ asset('landing/images/apple-touch-icon-120x120.png') }}">
<link rel="apple-touch-icon" sizes="76x76" href="{{ asset('landing/images/apple-touch-icon-76x76.png') }}">
<link rel="apple-touch-icon" href="{{ asset('landing/images/apple-touch-icon.png') }}">
<link rel="icon" href="{{ asset('landing/images/apple-touch-icon.png') }}" type="image/x-icon">
@vite(['resources/css/landing/app.css'])