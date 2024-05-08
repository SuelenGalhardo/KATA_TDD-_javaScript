// Ok, ahora que ya sabes de que va esto de los tests, vamos a ver que tal
// con los booleanos.
describe('2-Booleanos.js', () => {
  //Los booleanos son un tipo de dato lógico que se representa
  // como falso o verdadero (false y true, desde ahora)
  it('cual de los dos es verdadero', () => {
    //¿false o true?
    expect(RellenameCorrectamente).toBeTruthy()
  })

  it('cual de los dos es falso', () => {
    //¿false o true?
    expect(RellenameCorrectamente).toBeFalsy()
  })

  //¡WoW! ¿Difícil? ^^
  //¡¡¡¡¡GIT!!!!!
})
