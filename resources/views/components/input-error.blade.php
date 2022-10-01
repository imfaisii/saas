@props(['messages'])

@if ($messages)
    <ul {{ $attributes->merge(['class' => 'invalid-feedback text-sm text-danger space-y-1']) }}>
        @if ((array) $messages)
            <li>{{ $messages[0] }}</li>
        @endif
        {{-- @foreach ((array) $messages as $message)
            <li>{{ $message }}</li>
        @endforeach --}}
    </ul>
@endif
