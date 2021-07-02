// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const persons = [
  {"id":1, "name":"John", "age":30, "car":"Toyota"},
  {"id":2, "name":"Polina", "age":24, "car":"Mazda"},
  {"id":3, "name":"Lers", "age":55, "car":"Mersedes"}]

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(persons)
}
