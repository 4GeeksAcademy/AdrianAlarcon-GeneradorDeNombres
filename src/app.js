/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  function randomGenerator(arr1, arr2, arr3) {
    let dominios = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        for (let k = 0; k < arr3.length; k++) {
          dominios.push(arr1[i] + arr2[j] + arr3[k] + ".com");
        }
      }
    }
    return dominios;
  }
  let dominiosGen = randomGenerator(pronoun, adj, noun);

  for (let index of dominiosGen) {
    console.log(index);
  }
};
