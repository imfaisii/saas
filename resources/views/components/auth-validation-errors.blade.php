<x-splade-errors>
    <div v-if="Object.keys(errors.all).length" {{ $attributes->class('font-medium text-danger') }}>
        <strong>{{ __('Whoops! Something went wrong.') }}</strong>

        <div v-for="(errors, key) in errors.all" v-text="errors[0]"> </div>
    </div>
</x-splade-errors>
