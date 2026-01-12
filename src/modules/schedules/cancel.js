const periods = document.querySelectorAll('.period')

// Gera o evento click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  period.addEventListener('click', (e) => {
    if (e.target.classlist.contains('cancel-icon')) {
      // Obbtém a li pai do elemento clicado
      const item = e.target.closest('li')
      const { id } = item.dataset

      if (id) {
        const isConfirmed = confirm('Deseja cancelar este agendamento?')

        if (isConfirmed) {
          console.log('Cancelando agendamento de id:', id)
        }
      }
    }
  })
})
