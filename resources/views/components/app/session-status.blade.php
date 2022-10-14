@props(['type' => 'primary', 'message' => session('status') ?? 'Some default message', 'icon', 'dismissable' => false])
<!-- Session Status -->
<div class="alert alert-dismissible bg-{{ $type }} d-flex flex-column flex-sm-row w-100 p-5 mb-10">
    <span class="svg-icon svg-icon-2hx svg-icon-light me-4">
        <i
            class="fas {{ $icon ??
                match ($type) {
                    'success' => 'fa-check-circle',
                    'danger' => 'fa-times-circle',
                    'info' => 'fa-info-circle',
                    'warning' => 'fa-exclamation-circle',
                    default => 'fa-question-circle',
                } }} fa-2x text-light"></i>
    </span>
    <div class="d-flex flex-column">
        <h4 class="mb-1 text-light">{{ ucwords($type == 'primary' ? 'Information' : $type) }} Alert</h4>
        <span class="text-light">
            {{ $message }}
        </span>
    </div>

    @if ($dismissable)
        <button type="button"
            class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto"
            data-bs-dismiss="alert">
            <span class="svg-icon svg-icon-2x svg-icon-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                        transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
                    <rect x="7.41422" y="6" width="16" height="2" rx="1"
                        transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
                </svg>
            </span>
        </button>
    @endif
</div>
