function mastermind(secretCombination, testCombination) {
  const evaluation = {
    wellPlaced : 0 ,
    misplaced: 0
  }

  if (secretCombination[0] === testCombination[0]){
    evaluation.wellPlaced += 1
  }
  

  return evaluation;
}

describe("MasterMind", () => {
  it("knows when there is not well-placed and misplaced", () => {
    // Arrange
    const secretCombination = ['blue'];
    const testCombination = ['red'];
    // Action to test
    const evaluation = mastermind(secretCombination, testCombination)
    // Assert
    expect(evaluation).toBe({wellPlaced: 0, misplaced: 0})
  })


  it("knows when there is well-placed and not misplaced", () => {
    // Arrange
    const secretCombination = ['blue'];
    const testCombination = ['blue'];
    // Action to test
    const evaluation = mastermind(secretCombination, testCombination)
    // Assert
    expect(evaluation).toBe({wellPlaced: 1, misplaced: 0})
  })

it("knows when there is well-placed and not misplaced", () => {
    // Arrange
    const secretCombination = ['red'];
    const testCombination = ['red'];
    // Action to test
    const evaluation = mastermind(secretCombination, testCombination)
    // Assert
    expect(evaluation).toBe({wellPlaced: 1, misplaced: 0})
  })
it("knows when there are two well-placed and one misplaced", () => {
    // Arrange
    const secretCombination = ['red', 'blue', 'yellow'];
    const testCombination = ['red', 'blue', 'green'];
    // Action to test
    const evaluation = mastermind(secretCombination, testCombination)
    // Assert
    expect(evaluation).toBe({wellPlaced: 2, misplaced: 1})
  })
})