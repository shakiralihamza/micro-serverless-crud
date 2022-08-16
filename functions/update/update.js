/* Import faunaDB sdk */
const process = require('process')

const { Client, query } = require('faunadb')

const client = new Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
})

const handler = async (event) => {
  const data = JSON.parse(event.body)
  console.log(`Function 'update' invoked. update id: ${data.id}`)
  try {
    const response = await client.query(query.Update(query.Ref(query.Collection('todos'), data.id), { data }))
    console.log('success', response)
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    }
  } catch (error) {
    console.log('error', error)
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    }
  }
}

module.exports = { handler }
