import axios from 'axios'

const baseUrl = 'http://localhost:3001/db/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getAnecdote = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const addVote = async (id) => {
  const getResponse = await axios.get(baseUrl)
  const anecdotes = getResponse.data
  const anecdote = anecdotes.find(anecdote => anecdote.id === id)
  const updatedAnecdote = await axios.put(`${baseUrl}/${id}`, { ...anecdote, votes: anecdote.votes + 1 })
  return updatedAnecdote.data
}

export default { getAll, getAnecdote, createNew, addVote }