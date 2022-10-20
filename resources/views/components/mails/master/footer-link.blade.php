@props(['displayableActionUrl'])

<div
    style="padding-bottom: 20px;padding: 20px;font-size: 14px; font-weight: 400; font-family:Arial,Helvetica,sans-serif">
    <p style="margin-bottom: 2px;text-align:center;">Button not
        working? Try pasting this URL into your
        browser</p>
    <a href="{{ $displayableActionUrl }}" rel="noopener" target="_blank"
        style="text-decoration:none;color: #009EF7;word-break: break-all;white-space: pre-wrap;">
        {{ $displayableActionUrl }}
    </a>
</div>
