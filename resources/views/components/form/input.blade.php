@props(['disabled' => false, 'property', 'formControl' => true])

<input
    class="@if ($formControl) form-control form-control-lg form-control-solid @endif @error($property) is-invalid @enderror"
    wire:model.lazy="{{ $property }}" wire:loading.attr='disabled' wire:target='{{ $property }}'
    {{ $disabled ? 'disabled' : '' }} {!! $attributes !!}>
