const express = require("express");
const router = express.Router();
const { UsersInfo } = require("../middleware/auth/UsersInfo");
const { body } = require("express-validator");
const { FetchNote } = require("../middleware/tasks/Fetch");
const { CreateNote } = require("../middleware/tasks/Create");
const { UpdateNote } = require("../middleware/tasks/Update");
const { DeleteNote } = require("../middleware/tasks/Delete");


// Route: /api/notes/fetchallnotes
// Description: Fetch all notes of the authenticated user
router.get("/fetchallnotes", UsersInfo, FetchNote);

// Route: /api/notes/addnote
// Description: Add a new note for the authenticated user
router.post(
  "/addnote",
  UsersInfo,
  [
    body('title', 'Title is required').isLength({ min: 1 }),
    body('description', 'Description is required').isLength({ min: 1 }),
  ],
  CreateNote
);

// Route: /api/notes/updatenote/:id
// Description: Update a note by its ID for the authenticated user
router.put("/updatenote/:id", UsersInfo, UpdateNote);

// Route: /api/notes/deletenote/:id
// Description: Delete a note by its ID for the authenticated user
router.delete("/deletenote/:id", UsersInfo, DeleteNote);

module.exports = router;
