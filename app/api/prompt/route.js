import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request) => {
    try {
        // Connect to DB
        await connectToDB();

        // Fetch all prompts and populate the creator field
        const prompts = await Prompt.find({}).populate('creator'); 

        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.error("Failed to fetch prompts:", error);
        return new Response("Failed to fetch prompts", { status: 500 });
    }
}
