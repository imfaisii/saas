@props(['logoUrl', 'subImageUrl'])

<div style="margin-bottom: 10px">
    <a href="{{ config('app.url') }}" rel="noopener" target="_blank">
        <img alt="Logo" src="{{ $logoUrl ?? 'https://innovativeappstudio.website/logo-1.svg' }}"
            style="height: 35px" />
    </a>
</div>

<div style="margin-bottom: 15px">
    <img alt="Logo" src="{{ $subImageUrl ?? 'https://innovativeappstudio.website/icon-positive-vote-1.svg' }}" />
</div>