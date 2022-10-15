@push('extended-css')
    <link rel="stylesheet" type="text/css" href="{{ asset('vendor/css/toastr.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('vendor/css/toastr.min.css') }}">
@endpush

@push('extended-js')
    <script src="{{ asset('vendor/js/toastr.min.js') }}"></script>
    <script>
        function makeToastr(type, message) {
            if (type == 'success') toastr.success(message)
            else if (type == 'error') toastr.error(message)
            else if (type == 'warning') toastr.warning(message)
            else toastr.info(message)
        }
    </script>
@endpush
