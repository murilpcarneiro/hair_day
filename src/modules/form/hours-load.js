import dayjs from 'dayjs'
import { openingHours } from '../../utils/opening-hours.js'

const hours = document.getElementById('hours')

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora
    const [scheduleHour] = hour.split(':')

    // Adiciona a hora na date e verificar se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, 'hour').isBefore(dayjs())

    return {
      hour,
      avaible: !isHourPast,
    }
  })

  // Renderizar os horários
  opening.forEach(({ hour, avaible }) => {
    const li = document.createElement('li')
    li.classList.add('hour')
    li.classList.add(avaible ? 'hour-avaible' : 'hour-unavaible')

    li.textContent = hour

    hours.appendChild(li)
  })
}
