import { scheduleDelete } from '../../services/schedule-delete'
import { schedulesDay } from './load.js'

const periods = document.querySelectorAll('.period')

// Gera o evento click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  period.addEventListener('click', async (e) => {
    if (e.target.classList.contains('cancel-icon')) {
      // Obbtém a li pai do elemento clicado
      const item = e.target.closest('li')

      // Pega o id do agendamento
      const { id } = item.dataset

      // Verifica se o id existe
      if (id) {
        // Pergunta se o usuário tem certeza que deseja cancelar
        const isConfirmed = confirm('Deseja cancelar este agendamento?')

        // Se confirmou, deleta o agendamento
        if (isConfirmed) {
          await scheduleDelete({ id })
          // Recarregar os agendamentos
          await schedulesDay()
        }
      }
    }
  })
})
