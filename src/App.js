import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';
const M1 = Game({
 setup:() => ({p1cells:Array(9).fill(null),p2cells:Array(9).fill(null)}),




})
const App = Client({ game: M1 });

export default App;
