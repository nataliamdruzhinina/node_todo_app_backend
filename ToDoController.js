const ToDoModel = require('./ToDoModel')

//GET

module.exports.getToDo = async(req, res) => {
    const myToDo = await ToDoModel.find()
    res.send(myToDo)
}
// POST

module.exports.saveToDo = async(req, res) => {
    const { title } = req.body
    ToDoModel.create({ title })
    .then((data) => 
    res.send(data)
    )
}

// DELETE

module.exports.deleteToDo = async(req, res)=> {
    const{_id} = req.body
    ToDoModel.findByIdAndDelete(_id)
    .then(()=> res.send('DELETED TO_DO'))
}

// EDIT

module.exports.editToDo = async(req, res) => {
    const{_id, title} = req.body
    ToDoModel.findByIdAndUpdate(_id,{ title })
    .then(()=> res.send('EDITED TO_DO'))
}