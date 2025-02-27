import { GoogleGenerativeAI } from "@google/generative-ai"
  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 2,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
   export const AIChatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "job title : software engineer , employer : infosys , start date :2/2/2015 , end date : 4/5/2017,city:hyderabad, \nnow basing on the above details , generate a description for experience in resume , use simple and presice grammer , answer should be in 2 to 4 lines in json format, do not give any sentences if mentions \n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"experience\": \"Software Engineer at Infosys, Hyderabad from February 2015 to April 2017. Contributed to software development projects. Involved in coding, testing, and debugging. Worked in a team environment.\"\n  }\n]\n```"},
          ],
        },
      ],
    });
  
  