@props([
    'functionName' => 'submit',
    'text' => 'Submit',
    'loading' => 'Please wait...',
    'type' => 'primary',
    'disabled' => false,
])

<button {{ $attributes->merge(['class' => "btn btn-$type"]) }} wire:click="{{ $functionName }}"
    wire:loading.attr='disabled' type="button" {{ $disabled ? 'disabled' : '' }}>
    <span>
        <div wire:loading wire:target="{{ $functionName }}">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        </div>
        <div wire:loading wire:target="{{ $functionName }}">{{ $loading }}</div>
        <div wire:loading.remove wire:target="{{ $functionName }}">{{ $text }}</div>
    </span>
</button>
