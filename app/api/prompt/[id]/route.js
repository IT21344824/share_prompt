
import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//GET

export const GET = async ( request, { params }) => {
    try {
        // Connect to DB
        await connectToDB();

        // Fetch all prompts and populate the creator field
        const prompt = await Prompt.findById(params.id).populate('creator');

        if(!prompt) return new Response("prompt not found", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 });
    } catch (error) {
        console.error("Failed to get prompt:", error);
        return new Response("Failed to get prompt", { status: 500 });
    }
}

// PATCH
export const PATCH = async ( request, { params }) => {
    const { prompt, tag } = await request.json();
    try {
        // Connect to DB
        await connectToDB();

        // update prompt
        const existingPrompt = await Prompt.findById(params.id);

        if(!existingPrompt) return new Response("Prompt not found", { status: 404 });

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), { status: 200 });

    } catch (error) {
        console.error("Failed to update prompt:", error);
        return new Response("Failed to update prompt", { status: 500 });
    }
}

// DELETE
export const DELETE = async ( request, { params }) => {
    try {
        // Connect to DB
        await connectToDB();

        // delete Prompt
         await Prompt.findByIdAndDelete(params.id);

        return new Response("Prompt DELETED", { status: 200 });
    } catch (error) {
        console.error("Failed to Prompt DELET:", error);
        return new Response("Failed to Prompt DELET", { status: 500 });
    }
}
