
describe('6-Floats.js', () => {
  // ¿Te acuerdas de los integers?
  // Pues los Floats funcionan prácticamente igual que los integers,
  // pero también tienen decimales
  it('se pueden comparar con enteros', () => {
    expect(6 === 6.0).toBe(true)
    expect(123 === 123.567).toBe(false)
  })
  // pueden hacer las mismas operaciones que los integers
  it('se pueden operar', () => {
    expect(1.45 - 1.21).toBe(0.24)
    expect(1.45 + 1.21).toBe(2.66)
    expect(14.22 / 7.11).toBe(2)
    expect(14.22 % 2.10).toBe(1.62)
    // etc...
  })
  it('se pueden operar con integers', () => {
    expect(10 - 1.20).toBe(8.8)
    expect(2.21 + 1).toBe(3.21)
    expect(16 * 1.6).toBe(25.6)
    expect(1.6 / 1.6).toBe(1)
  })
  it('las operaciones pueden dar resultados inesperados', () => {
    // Esta no la vas a acertar ;)
    expect(2.22 - 2.20).toBe(0.020000000000000018)
    // Por esto mismo, siempre que puedas usar integers, úsalos.
    // Los floats molan, pero pueden darnos resultados que no esperamos.
  })
  // Lo que viene a continuación puede que te reviente la cabeza.
  // Pero tú quédate con que se puede hacer y ya lo entenderás perfectamente.
  it('se puede controlar la precisión decimal', () => {
    // Precisión decimal === cantidad de decimales xD
    expect((1.1231231).toPrecision(3)).toBe("1.12") // ¿Qué es esto de las comillas?
    // Es una cadena de texto o string, que veremos en las siguientes Koans.
    expect((1.1231231).toPrecision(4)).toBe("1.123")
    expect((1.1231231).toPrecision(6)).toBe("1.12312")    // Para que te vaya sonando el #toPrecision es un método de los
    // floats, que controla la cantidad de decimales. Ya los habías visto,
    // pero estaban muy bien escondidos. Las operaciones como las sumas o
    // las divisiones, también son métodos pero los reconoces de forma natural.
    // Por ahora, los métodos, son operaciones que puedes hacer con los
    // diferentes tipos. Los booleanos, tienen unas, los enteros otras, etc...
  })
  // También se puede redondear, pero eso para más adelante.
 })
