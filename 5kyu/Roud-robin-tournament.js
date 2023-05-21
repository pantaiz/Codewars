function rotate(arr) {
    // Rotates the order of the array clockwise, but keeps the first element in place
    let new_arr = [...arr];
    const first = new_arr.shift();
    new_arr.unshift(new_arr.pop());
    new_arr.unshift(first);
    return new_arr;
  }
  
  function createMatches(arr) {
    console.log(arr);
    let pairing = [];
    for (let i=0; i<arr.length/2; i++) {
      pairing.push([arr[i], arr[arr.length - i - 1]]);
    }
    //console.log(pairing);
    return pairing;
  }
  
  function buildMatchesTable(numberOfTeams) {
    let circle = [...Array(numberOfTeams).keys()].map(x => x+1);
    let matches = [];
    for (let i=0; i<numberOfTeams-1; i++) {
      matches.push(createMatches(circle));
      circle = rotate(circle);
    }
    return matches;
  }
console.log(buildMatchesTable(6));

