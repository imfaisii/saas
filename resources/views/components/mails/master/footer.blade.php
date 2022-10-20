<tr>
    <td align="center" valign="center"
        style="font-size: 13px; text-align:center; padding: 0 10px 10px 10px; font-weight: 500; color: #A1A5B7; font-family:Arial,Helvetica,sans-serif">
        <p style="color:#181C32; font-size: 16px; font-weight: 600; margin-bottom:9px;text-align:center;">
            It’s all about
            customers!</p>
        <p style="margin-bottom:2px;text-align:center;">
            Call our customer care number: {{ config('company.basic_details.phone') }}
        </p>
        <p style="margin-bottom:4px;text-align:center;">
            You may reach us at
            <a href="{{ config('company.basic_details.website') }}" rel="noopener" target="_blank" style="font-weight: 600">
                {{ parse_url(config('company.basic_details.website'))['host'] }}
            </a>.
        </p>
        <p style="text-align:center;">{{ config('company.working_hours.basic') }}</p>
    </td>
</tr>
<tr>
    <td align="center" valign="center" style="text-align:center; padding-bottom: 20px;">
        <a href="{{ config('company.social_handles.linkedin') }}" style="margin-right:10px">
            <img alt="Logo" src="https://innovativeappstudio.website/icon-linkedin.svg" />
        </a>
        <a href="{{ config('company.social_handles.facebook') }}" style="margin-right:10px">
            <img alt="Logo" src="https://innovativeappstudio.website/icon-facebook.svg" />
        </a>
        <a href="{{ config('company.social_handles.twitter') }}">
            <img alt="Logo" src="https://innovativeappstudio.website/icon-twitter.svg" />
        </a>
    </td>
</tr>
<tr>
    <td align="center" valign="center"
        style="font-size: 13px; padding:0 15px; text-align:center; font-weight: 500; color: #A1A5B7;font-family:Arial,Helvetica,sans-serif">
        <p style="text-align:center;">&copy; Copyright {{ config('company.basic_details.name') }}.
            <a href="#" rel="noopener" target="_blank"
                style="font-weight: 600;font-family:Arial,Helvetica,sans-serif">Unsubscribe</a>&nbsp;
            from newsletter.
        </p>
    </td>
</tr>
