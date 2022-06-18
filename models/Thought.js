const {Schema, model} = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {

        },
        createdAt: {

        },
        username: {

        },
        reactions: {

        }
    }
);

// reactionCount virtual here

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;