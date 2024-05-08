
describe('5-Integers.js', () => {
  // Vamos a descansar un poco de booleanos y operadores lógicos.
  // Ahora ¡Números enteros!
  // Los números enteros engloban todos los números positivos, negativos
  // y el cero (sin decimales). Ejemplos: 0, 61, -15423142, 7
  it('se puede operar con ellos', () => {
    // ¡Sin calculadora!
    expect(1 + 1).toBe(RellenameCorrectamente)
    expect(1 - 1).toBe(RellenameCorrectamente)
    expect(0 - 1).toBe(RellenameCorrectamente)
    expect(12 * 4).toBe(RellenameCorrectamente)
    expect(12 / 4).toBe(RellenameCorrectamente)
    expect(12 / -4).toBe(RellenameCorrectamente)
    expect(21 % 2).toBe(RellenameCorrectamente) // Este es el módulo, devuelve el resto de una división
    expect(43 + 82 + 21).toBe(RellenameCorrectamente)
    expect(14 + 57 * 100 / 2 - 100).toBe(RellenameCorrectamente)
  })
  // Vale. El descanso se acabó.
  it('se pueden comparar', () => {
    // Cuando un entero es igual a otro es verdadero, si son diferentes, es falso.
    expect(10 === 10).toBe(true)
    expect(10 === 20).toBe(RellenameCorrectamente)
    // ¿Te imaginas lo siguiente?
    expect(20 !== 10).toBe(RellenameCorrectamente)
    expect(20 !== 20).toBe(RellenameCorrectamente)
    // Se puede saber si uno es mayor/menor que el otro
    expect(20 > 10).toBe(RellenameCorrectamente)
    expect(10 > 20).toBe(RellenameCorrectamente)
    expect(10 < 20).toBe(RellenameCorrectamente)
    expect(20 < 10).toBe(RellenameCorrectamente)
    // Incluso si es igual o mayor/menor
    expect(20 >= 10).toBe(RellenameCorrectamente)
    expect(10 <= 20).toBe(RellenameCorrectamente)
    expect(10 <= 10).toBe(RellenameCorrectamente)
  })

  it('se pueden usar con operadores lógicos', () => {
    expect((20 !== 10) && (10 <= 10)).toBe(RellenameCorrectamente)
    expect((20 === 10) || (10 < 10)).toBe(RellenameCorrectamente)
  })
  // Este archivo ha sido más relajado ;)
})
