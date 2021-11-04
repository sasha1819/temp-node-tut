//npm -global command, comse with node 
//npm --version 
// local depandency - use it only in this praticular project 
//npm i <packageName>

//global depandensy - use in in any project 
//npm inastall -g <packageName>
//sudo npm install -g <packageName (mac)

//package.json - manifest file (stores important info about projects/package)
// mnual approach (create packge.jasn in the root, create propreties etc)
//npm init (step by step, press enter to skip )
// nom inti -y (everything default)


const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)