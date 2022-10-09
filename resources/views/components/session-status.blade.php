@props(['status', 'type' => 'success', 'message' => session('status'), 'icon' => 'check-circle'])

<div class="alert-icon-area alert alert-{{ $type }}" role="alert">
    <div class="alert-icon">
        <span data-feather="{{ $icon }}"></span>
    </div>
    <div class="alert-content">
        <p>
            {{ $message }}
        </p>
    </div>
</div>
