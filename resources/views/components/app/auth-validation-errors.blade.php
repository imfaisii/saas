@props(['errors'])

@if ($errors->any())
    <div {{ $attributes }}>
        <div>
            <strong class="h3 text-danger">{{ __('Whoops! Something went wrong.') }}</strong>
        </div>

        <div class="d-flex flex-column">
            @foreach ($errors->all() as $error)
                <li class="d-flex align-items-center py-2 text-danger">
                    <span class="bullet bullet-dot bg-danger me-5"></span> {{ $error }}
                </li>
            @endforeach
        </div>
        
    </div>
@endif