//import "mocha"
import { expect } from "chai"
import {add } from "../src/prueba.js"


describe('Prueba ',()=>{
  it('prueba',() =>{
    expect(add(5,7)).to.be.equal(12);
  });
});

