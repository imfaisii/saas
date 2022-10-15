@props(['displayableActionUrl'])

<div style="padding-bottom: 50px; word-wrap: break-all;">
    <p style="margin-bottom: 10px;">Button not working? Try pasting this URL into your
        browser:</p>
    <a href="{{ $displayableActionUrl }}" rel="noopener" target="_blank" style="text-decoration:none;color: #009EF7">
        {{ $displayableActionUrl }}
    </a>
</div>
