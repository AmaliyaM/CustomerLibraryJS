import Person from '../src/Entities/Person'
const person = new Person({
  firstName: 'u',
  lastName: 'Smith',
})

describe('person test', () => {
  it('create person', () => {
    expect(person).toBeDefined()
  })
})
