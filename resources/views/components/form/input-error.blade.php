@props(['messages'])

<!-- Form Input Error -->
<div class="fv-plugins-message-container invalid-feedback">
    <div>{{ count($messages) > 0 ? $messages[0] : null }}</div>
</div>
