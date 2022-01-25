React
"A JavaScript library for building user interface"

Created by Facebook Engineer.

Prerequisite:
- HTML
- CSS Dasar
- CSS Framework (Bootstrap)
- Javascript ES6
- Start learn basic react to can be a good front-end developer

Reactjs menganut paradigma component based (berbasis komponen), yang mana didalam suatu aplikasi terbangun atas kumpulan komponen-komponen.
Terdapat beberapa cara dalam membuat komponen, yang paling umum yaitu Class Component, Function Component, dan Arrow Function Component.

Ada komponen utama yang memanggil / mengimport komponen yang lebih kecil tingkatnya, yang mana komponen yang lebih kecil tersebut harus di export ke komponen utamanya. Kemudian untuk mengincludekannya ke dalam komponen utama gunakan sintaks jsx <Komponen />

Variabel
var = global scope, redeclarabel in any scope
let = block scope, redeclarabel on block scope
const = block scope, no-declarabel

Props vs State
Props : read only, can not be modified
State: state changes can be asynchronous, state can be modified using this.setState