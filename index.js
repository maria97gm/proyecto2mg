const signos = [
  {
    id: 1,
    nombre: 'Aries',
    elemento: 'Fuego',
    modalidad: 'Cardinal',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-aries.png',
    inicio: new Date(null, 2, 21), // Meses se cuentan desde 0 (0 = enero, 1 = febrero, ..., 11 = diciembre)
    fin: new Date(null, 3, 19)
  },
  {
    id: 2,
    nombre: 'Tauro',
    elemento: 'Tierra',
    modalidad: 'Fijo',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-tauro.png',
    inicio: new Date(null, 3, 20),
    fin: new Date(null, 4, 20)
  },
  {
    id: 3,
    nombre: 'Géminis',
    elemento: 'Aire',
    modalidad: 'Mutable',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-geminis.png',
    inicio: new Date(null, 4, 21),
    fin: new Date(null, 5, 20)
  },
  {
    id: 4,
    nombre: 'Cáncer',
    elemento: 'Agua',
    modalidad: 'Cardinal',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-cancer.png',
    inicio: new Date(null, 5, 21),
    fin: new Date(null, 6, 22)
  },
  {
    id: 5,
    nombre: 'Leo',
    elemento: 'Fuego',
    modalidad: 'Fijo',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-leo.png',
    inicio: new Date(null, 6, 23),
    fin: new Date(null, 7, 22)
  },
  {
    id: 6,
    nombre: 'Virgo',
    elemento: 'Tierra',
    modalidad: 'Mutable',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-virgo.png',
    inicio: new Date(null, 7, 23),
    fin: new Date(null, 8, 22)
  },
  {
    id: 7,
    nombre: 'Libra',
    elemento: 'Aire',
    modalidad: 'Cardinal',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-libra.png',
    inicio: new Date(null, 8, 23),
    fin: new Date(null, 9, 22)
  },
  {
    id: 8,
    nombre: 'Escorpio',
    elemento: 'Agua',
    modalidad: 'Fijo',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-escorpio.png',
    inicio: new Date(null, 9, 23),
    fin: new Date(null, 10, 21)
  },
  {
    id: 9,
    nombre: 'Sagitario',
    elemento: 'Fuego',
    modalidad: 'Mutable',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-sagitario.png',
    inicio: new Date(null, 10, 22),
    fin: new Date(null, 11, 21)
  },
  {
    id: 10,
    nombre: 'Capricornio',
    elemento: 'Tierra',
    modalidad: 'Cardinal',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-capricornio.png',
    inicio: new Date(null, 11, 22),
    fin: new Date(null, 0, 19)
  },
  {
    id: 11,
    nombre: 'Acuario',
    elemento: 'Aire',
    modalidad: 'Fijo',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-acuario.png',
    inicio: new Date(null, 0, 20),
    fin: new Date(null, 1, 18)
  },
  {
    id: 12,
    nombre: 'Piscis',
    elemento: 'Agua',
    modalidad: 'Mutable',
    img: 'https://rsc.lavanguardia.com/img/horoscopo/ico-piscis.png',
    inicio: new Date(null, 1, 19),
    fin: new Date(null, 2, 20)
  }
]

const elementos = []

let elemento = ''

const filtrar = () => {
  const elementoFiltrado = []
  for (const signo of signos) {
    if (elemento === signo.elemento) {
      elementoFiltrado.push(signo)
    }
  }
  printSignos(elementoFiltrado)
}

const fillElementos = () => {
  elementos.splice(0)
  for (const signo of signos) {
    if (!elementos.includes(signo.elemento)) {
      elementos.push(signo.elemento)
    }
  }
}
fillElementos()

const printSignos = (listaSignos) => {
  const sectionSignos = document.querySelector('#signosZodiaco')
  sectionSignos.innerHTML = ''
  for (const signo of listaSignos) {
    const divSignos = document.createElement('div')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    const pElemento = document.createElement('p')
    const pModalidad = document.createElement('p')
    img.src = signo.img
    h3.innerText = signo.nombre
    pElemento.innerText = `Elemento: ${signo.elemento}`
    pModalidad.innerText = `Modalidad: ${signo.modalidad}`
    divSignos.appendChild(img)
    divSignos.appendChild(h3)
    divSignos.appendChild(pElemento)
    divSignos.appendChild(pModalidad)
    document.body.appendChild(divSignos)
    sectionSignos.appendChild(divSignos)

    if (signo.elemento.toLowerCase() === 'fuego') {
      divSignos.classList.add('fuego')
    } else if (signo.elemento.toLowerCase() === 'agua') {
      divSignos.classList.add('agua')
    } else if (signo.elemento.toLowerCase() === 'tierra') {
      divSignos.classList.add('tierra')
    } else {
      divSignos.classList.add('aire')
    }
  }
}

const createSelectSignos = () => {
  const divFiltros = document.querySelector('#filtros')
  const selectSignos = document.createElement('select')
  for (const elemento of elementos) {
    const option = document.createElement('option')

    option.value = elemento
    option.textContent = elemento

    selectSignos.appendChild(option)
  }

  const question = document.createElement('h2')
  const limpiar = document.createElement('button')
  question.textContent = '¿Qué elemento buscas?'
  limpiar.textContent = ' Limpiar filtro'
  divFiltros.appendChild(question)
  divFiltros.appendChild(selectSignos)
  divFiltros.appendChild(limpiar)

  limpiar.addEventListener('click', () => {
    elemento = ''
    printSignos(signos)
  })

  selectSignos.addEventListener('change', (event) => {
    elemento = event.target.value
    filtrar()
  })
}

const createCalendar = () => {
  const divFiltros = document.querySelector('#filtros')
  const calendario = document.createElement('input')
  calendario.type = 'date'
  calendario.classList.add('fechaNacimiento')
  const nacimiento = document.createElement('h2')
  nacimiento.textContent = '¿Cuándo naciste?'
  divFiltros.appendChild(nacimiento)
  divFiltros.appendChild(calendario)
  calendario.addEventListener('input', queSignoEres)
}
const queSignoEres = (event) => {
  const fechaSeleccionada = new Date(event.target.value)
  const mesDiaSeleccionado =
    fechaSeleccionada.getMonth() * 100 + fechaSeleccionada.getDate()

  const signoEncontrado = signos.find((signo) => {
    const inicioMesDia = signo.inicio.getMonth() * 100 + signo.inicio.getDate()
    const finMesDia = signo.fin.getMonth() * 100 + signo.fin.getDate()
    return mesDiaSeleccionado >= inicioMesDia && mesDiaSeleccionado <= finMesDia
  })

  if (signoEncontrado) {
    printSignos([signoEncontrado])
  } else {
    const capricornioEncontrado = signos.find((signo) => {
      return signo.id === 10
    })
    printSignos([capricornioEncontrado])
  }
}
printSignos(signos)
createSelectSignos()
createCalendar()
