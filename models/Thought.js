const {Schema, model, Types} = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280

        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => createdAtVal.toDateString()
        },
        username: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

// reactionCount virtual here
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;