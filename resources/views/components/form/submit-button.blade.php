@props([
    'functionName' => 'submit',
    'btnText' => 'Submit',
    'loadingText' => 'Please wait...',
    'type' => 'primary',
    'disabled' => false,
])

<!-- Submit Button -->
<button type="button" wire:loading.attr='disabled' wire:click="{{ $functionName }}"
    {{ $attributes->merge(['class' => "btn btn-$type"]) }} {{ $disabled ? 'disabled' : '' }}>
    <span class="indicator-label" wire:loading.remove wire:target="{{ $functionName }}">{{ $btnText }}</span>
    <span class="indicator-progress" wire:loading wire:target="{{ $functionName }}">
        {{ $loadingText }}
        <span class="spinner-border spinner-border-sm align-middle ms-2 mb-1"></span>
    </span>
</button>
