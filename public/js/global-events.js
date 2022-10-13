// livewire events

$(function () {
    Livewire.on('select2', () => {
        // logic
    })
});

window.addEventListener('toast', event => {
    makeToastr(event.detail.type, event.detail.message)
})

// global browser events

window.addEventListener('hideModal', () => {
    $(".modal").modal('hide');
})

$('.modal').on('hidden.bs.modal', function () {
    Livewire.emit('onModalHidden');
});