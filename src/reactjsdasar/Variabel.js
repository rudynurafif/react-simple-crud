import React from 'react';

// const
// const harga = 3000;
// harga = 4000

// Var
// var harga = 20000;
// if(true) {
//   var harga = 30000;
// }

// let
let harga = 20000;
if(true) {
  harga = 30000;
}

const Variabel = () => {
  return (
    <div>
      <h2>Harga : {harga}</h2>
    </div>
  );
};

export default Variabel
