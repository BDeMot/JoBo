export default class SpontaneousApplication {
  constructor(data) {
    this._contact = data.contact
    this._coverLetter = data.coverLetter
    this._date = data.date
    this._email = data.email
    this._entreprise = data.entreprise
    this._id = data.id
    this._poste = data.poste
    this._telephon = data.telephon
  }

  get contact() {
    return this._contact
  }

  get coverLetter() {
    return this._coverLetter
  }

  get date() {
    return this._date
  }

  get email() {
    return this._email
  }

  get entreprise() {
    return this._entreprise
  }

  get id() {
    return this._id
  }

  get poste() {
    return this._poste
  }

  get telephon() {
    return this._telephon
  }
}
