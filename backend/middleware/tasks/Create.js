const Note = require("../../models/Note");
const { validationResult } = require("express-validator");

const CreateNote = async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title,
            description,
            tag,
            user: req.user.id,
        });


        const savedNote = await note.save();
        res.json({ message: "Note added successfully", note: savedNote });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { CreateNote };
