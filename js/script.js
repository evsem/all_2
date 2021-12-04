console.log('Hello World')

let allServer = {
  server: 'aex-par/',
  status: false,
  port: 4700,
  adressServer: {
    country: 'France',
    town: 'Lion',
  },
  infoServer: {
    dev: 'evsem',
    dateBirth: '27.09.19',
    lang: ['JS', 'Python'],
  },
}

const str_Hello = 'Hello'
localStorage.setItem('String_1', str_Hello)

let a = 89
const b = 34
for (let i = b; i < 89; i++) {
  if (i == 47) {
    break
  }
  //console.log(i)
}
for (let p = 13; p > 7; p--) {
  if (p == 9) {
    continue
  }
  //console.log(p)
}

let prom_1 = new Promise((res, rej) => {
  const ob_Prom = {
    str_Start: 'Start...',
    str_End: 'End.',
    num_1: 13,
    num_2: 27,
    array_inObject: [33, 84, 142, 98, 901, [45, 0, 9], 11, 99],
    infoServer: {
      server: 'ausa-tes',
      port: 2000,
      code: 2077432019,
      statusWorking: true,
      dev: 'par/all',
    },
  }

  let array_inProm = [21, 1, 0, 7, 67, 1076]

  setTimeout(() => {
    if (ob_Prom.num_2 > array_inProm[2]) {
      function fun_inSet(a = 1, b = 0) {
        console.log(ob_Prom.num_1 + ob_Prom.num_2)
      }
      fun_inSet()
    }
    res(ob_Prom)
  }, 3000)
})
  .then((th_Ob_1) => {
    const th_newOb = {
      code_par: 30627839,
      status: false,
    }
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log(th_Ob_1)
      }, 2000)
      res(th_Ob_1)
    })
  })
  .then((th_Ob_2) => {
    setInterval(() => {
      //console.log(th_Ob_2)
    }, 4000)
  })
  .catch((err) => {
    console.error(err)
  })
  .finally((text = 'End.') => {
    console.log(text)
  })
