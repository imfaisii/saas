<style>
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: Inter, Helvetica, "sans-serif";
    }

    a:hover {
        color: #009ef7;
    }
</style>
<div
    style="background-color:#D5D9E2; font-family:Arial,Helvetica,sans-serif; line-height: 1.5; min-height: 100%; font-weight: normal; font-size: 15px; color: #2F3044; margin:0; padding:0; width:100%;margin-top:20px;margin-bottom:20px;">
    <div style="height:20px;"></div>
    <div
        style="background-color:#ffffff; padding: 45px 0 34px 0; border-radius: 24px; margin:40px auto; max-width: 600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="auto"
            style="border-collapse:collapse">
            <tbody>
                <tr>
                    <td align="center" valign="center" style="text-align:center; padding-bottom: 10px">
                        <div style="text-align:center; margin:0 15px 34px 15px">

                            <!-- Header Component -->
                            <x-mails.master.header logoUrl="https://innovativeappstudio.website/logo-1.svg"
                                subImageUrl="https://innovativeappstudio.website/icon-positive-vote-1.svg" />


                            <div
                                style="font-size: 14px; font-weight: 500; margin-bottom: 27px; font-family:Arial,Helvetica,sans-serif;">
                                <p
                                    style="margin-bottom:9px; color:#181C32; font-size: 22px; font-weight:700;text-align:center;">
                                    Hey {{ auth()->check() ? auth()->user()->name : '' }}, thanks for signing up!
                                </p>

                                @foreach ($introLines as $line)
                                    <p style="margin-bottom:2px; color:#7E8299;text-align:center;">
                                        {{ $line }}
                                    </p>
                                @endforeach

                            </div>

                            <!-- Button -->
                            <a href='{{ $actionUrl }}' target="_blank"
                                style="background-color:#50cd89; border-radius:6px;display:inline-block; padding:11px 19px; color: #FFFFFF; font-size: 14px; font-weight:500;">
                                {{ $actionText ?? 'Activate Account' }}
                            </a>
                            <div
                                style="font-size: 14px; font-weight: 300; margin-bottom: 27px;margin-top: 27px; font-family:Arial,Helvetica,sans-serif;">
                                {{-- Outro Lines --}}
                                @foreach ($outroLines as $line)
                                    <p style="margin-bottom:2px;color:#7E8299;text-align:center;">
                                        {{ $line }}
                                    </p>
                                @endforeach
                            </div>
                        </div>
                    </td>
                </tr>

                <!-- Points Table -->
                <x-mails.master.content />

                <!-- Footer -->
                <x-mails.master.footer />

            </tbody>
        </table>

        <div style="border-bottom: 1px solid #eeeeee; margin: 10px 0"></div>

        <!-- Footer Component Link -->
        <x-mails.master.footer-link :displayableActionUrl="$displayableActionUrl" />
    </div>
    <div style="height:20px;"></div>
</div>
