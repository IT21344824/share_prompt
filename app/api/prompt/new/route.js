import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
    const { userId, prompt, tag } = await req.json();
    
    try {
        //connect to Db
        await connectToDB();

        //create newPrompt
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })

        //save in DB
        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("fail to create prompt", { status: 500 })

    }
}