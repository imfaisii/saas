@props(['disabled' => false, 'property'])

<input class="form-control @error($property) is-invalid @enderror" wire:model.lazy="{{ $property }}"
    wire:loading.attr='disabled' wire:target='{{ $property }}' {{ $disabled ? 'disabled' : '' }}
    {!! $attributes !!}>
