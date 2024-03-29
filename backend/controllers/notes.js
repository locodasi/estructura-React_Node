const router = require("express").Router()

let notes = [
    {"id": 1, "name":"Nota 1", "descripcion":"Soy la nota 1"},
    {"id": 2, "name":"Nota 2", "descripcion":"Soy la nota 2"},
]

router.get("/", (request, response) => {
    response.json(notes)
})

router.delete("/:id", (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    response.status(204).end()
})

router.put("/:id", (request, response) => {
    const id = Number(request.params.id)
    const newNote = request.body
    notes = notes.map(note => note.id !== id ? note : newNote)
    response.json(newNote)
})

router.post("/", (request, response) => {
    const note = request.body
    notes.push(note)
    response.json(note)
})

module.exports = router