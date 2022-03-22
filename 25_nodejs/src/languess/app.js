import { franc, francAll } from 'franc';
import langs from 'langs';

const phrase = process.argv[2];

console.log(phrase)

console.log(langs.where("2", franc(phrase)).local);
