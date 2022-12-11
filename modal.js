const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

function boasvindas() {
  Swal.fire(
    {
      icon: 'success',
        title: 'Boas Vindas!',
        text: 'Você realizou o Login',
        showCloseButton: true
    }
  )
}