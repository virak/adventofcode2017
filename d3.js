/**
 * Script for day 3 in advent of code calendar
 * http://adventofcode.com/2017/day/1
 * 
 * Quick and dirty , just get the result.
 * 
 * To run this code, run the command node d3.js
 * 
 */

class Puzzle {

  constructor() {}

  getAnswer() {
    let theAnswerIs_Attention_dot_dot_dot = this.theSolver(this.inputString)
    console.log(`The answer is ... ${theAnswerIs_Attention_dot_dot_dot}`)
  }

  theSolver(inputVal) {

    let moveArray = ['right', 'up', 'left', 'down']
    let moveCursor = 0
    let countDownChangeDirection = 1
    let previousCount = 1
    let x = 0
    let y = 0

    for (var i = 2; i <= 325489; i++) {

      let currentMouvDirection = moveArray[moveCursor]

      if (currentMouvDirection == 'right') {
        x++
      }
      if (currentMouvDirection == 'up') {
        y++
      }
      if (currentMouvDirection == 'left') {
        x--
      }
      if (currentMouvDirection == 'down') {
        y--
      }

      // console.log(
      //   '> Current number ' + i 
      //   + ' | current mouv : ' + currentMouvDirection 
      //   + ' | countDownChangeDirection : ' + countDownChangeDirection 
      //   + ' | position ( ' + x + ' , '+ y +' )'
      // )

      countDownChangeDirection--
      if (countDownChangeDirection == 0) {

        // Reset or change direction
        if (moveCursor == moveArray.length - 1) {
          moveCursor = 0
        } else {
          moveCursor++
        }

        // Update count down for new direction
        if (currentMouvDirection == 'up' || currentMouvDirection == 'down') {
          previousCount++
          countDownChangeDirection = previousCount
        } else {
          countDownChangeDirection = previousCount
        }

      }

    }

    return this.getManhattanDistance(0, 0, x, y)



  }

  getManhattanDistance(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2)
  }

  theChecker() {

    // Check manhatten distance
    let test1 = this.getManhattanDistance(0, 0, 0, 1)
    let expected1 = 1
    if (test1 == expected1) console.log('> Test 1 ok ');
    else console.log('> Test 1 Not ok :(');

    let test2 = this.getManhattanDistance(0, 0, 2, 1)
    let expected2 = 3
    if (test2 == expected2) console.log('> Test 2 ok ');
    else console.log('> Test 2 Not ok :(');


  }

}

let puzzle = new Puzzle();
puzzle.theChecker();
console.log(puzzle.getAnswer())