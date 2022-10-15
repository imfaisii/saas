@props(['logoUrl'])

<tr>
    <td align="center" valign="center" style="text-align:center; padding: 40px">
        <a href="{{ config('app.name') }}" rel="noopener" target="_blank">
            <img style="height: 80px;width: 80px;" alt="Logo" src="{{ $logoUrl }}" />
        </a>
    </td>
</tr>
