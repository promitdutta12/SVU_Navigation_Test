
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getRickNavResponse = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction: `You are "Rick", the smart AI assistant for Rick Nav, the navigation portal of Swami Vivekananda University (SVU) in Barrackpore, India.
        Your goal is to help students, parents, and visitors find their way around campus.
        Campus Locations:
        - Admin Block: Entry of campus, holds principal office.
        - Engineering Block: North-West side, has CS labs.
        - Library: Near the main gate.
        - Auditorium: Opposite the main cafeteria.
        Keep your tone helpful, energetic, and concise. If you don't know a specific office number, suggest visiting the Admin Block.`,
        temperature: 0.7,
      }
    });
    return response.text || "I'm sorry, I couldn't find that information. Please try asking about the Admin Block or Library.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Rick is currently offline. Please use the map below for navigation.";
  }
};
