export default class Address {
  constructor({
    firstLine,
    secondLine,
    type,
    city,
    postalCode,
    state,
    country,
  }) {
    this.FirstLine = firstLine
    this.SecondLine = secondLine
    this.Type = type
    this.City = city
    this.PostalCode = postalCode
    this.State = state
    this.Country = country
  }
}
