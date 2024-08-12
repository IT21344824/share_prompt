import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId, //user type
        ref: 'User', // 1(user) - M relationshiop
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is requied '],
    },
    tag: {
        type: String,
        required: [true, 'tag is requied '],
    }
});

const  Prompt = models.Prompt || model('Prompt', PromptSchema);
export default Prompt;
