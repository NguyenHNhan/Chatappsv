const Conversations = require("../models/conversations");

exports.viewConversations = async (req, res) => {
    try {
        if (!req.body.cvs_user) {
            return res.status(400).send({ message: "Content and sender are required fields" });
        }
        const conversations1 = await Conversations.find({ cvs_user_1: req.body.cvs_user });
        const conversations2 = await Conversations.find({ cvs_user_2: req.body.cvs_user });
        res.send(conversations1.concat(conversations2));
    } catch (error) {
        res.status(500).send(error);
    }
};
