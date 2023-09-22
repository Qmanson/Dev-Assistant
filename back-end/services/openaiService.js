
const OpenAI = require("openai");
require('dotenv').config();


const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI(OPENAI_API_KEY);

const generateBlueprint = async (userInput) => {
    const blueprintInput = "You are a helpful assistant. Your job is to turn user input about a project into a visual diagram of functionality by means of code for Mermaid.js to process. Before the mermaid code start the text with [MERMAID_START] and once you have finished the code end with [MERMAID_END]. Here is the user's input: " + userInput + '. Make sure you enclose the mermaid code within [MERMAID_START] and [MERMAID_END] and only put mermaid code inside of these.';

    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: blueprintInput }],
        model: "gpt-3.5-turbo",
    });
    return completion.choices[0].message.content;
};


// = async (userInput) => {
//     return "[MERMAID_START]graph TD \nA[Start]--> B[Prepare Hot Dog] \nB--> C[Grill Hot Dog] \nC--> D[Place in Bun] \nD--> E[Add Toppings] \nE--> F[Wrap Hot Dog] \nF--> G[Serve Hot Dog] \nG--> H[End][MERMAID_END]";
// }





module.exports = { generateBlueprint };

