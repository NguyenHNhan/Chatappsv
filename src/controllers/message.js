const User = require('../models/users');
const Message = require('../models/message');

exports.createMessage = async (req, res) => {
    try {
        console.log(req.body);
        if (!req.body.id || !req.body.content) {
            return res.status(400).send({ message: "Content and sender are required fields" });
        }
        
        const existingUser = await User.findById(req.body.id);

        if (!existingUser) {
            return res.status(404).json({ error: 'User not found' });
        }
    
        const message = new Message({
            sender: req.body.sender,
            receiver: req.body.receiver,
            content: req.body.content,
            cvs_id: req.body.cvs_id
        });

        await message.save();

        res.status(201).send(message);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.viewMessages = async (req, res) => {
    try {
        if (!req.body.cvs_id) {
            return res.status(400).send({ message: "Content and sender are required fields" });
        }
        const messages = await Message.find({ cvs_id: req.body.cvs_id });
        res.send(messages);
    } catch (error) {
        res.status(500).send(error);
    }
};
