@push('extended-css')
    <style>
        .select2-container--default .select2-search--dropdown .select2-search__field {
            display: block;
            width: 100%;
            height: 2.625rem;
            padding: 0.375rem 1.2rem;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #f1f2f6;
            border-radius: 5px;
            box-shadow: 0 0;
            transition: border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
            -o-transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
            transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
            transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
        }
    </style>
@endpush

@push('extended-js')
    <x:pharaonic-select2::scripts />
    <script>
        $(function() {
            $(".select2-search__field").addClass('form-control')
        });
    </script>
@endpush
