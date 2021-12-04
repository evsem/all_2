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
  console.log([...p])
}
