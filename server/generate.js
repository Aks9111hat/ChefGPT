import openaiClient from "./api.js";

const generate = async (dietDescription) => {

 /*const daVinci = async (dietDescription) => {
    const response = await openaiClient.createCompletion({
      model: 'text-davinci-003',
      prompt: `Give a healthy and flavourful diet plan for following natural language description:\n\n${dietDescription}`,
      max_tokens: 150,
      temperature: 5,
    });
    return response.data.choices[0].text;
  };
  const dietPlan = await daVinci(dietDescription);
  return dietPlan*/

  const chatGPT = async (dietDescription) => {
    const message = [
      { role: "system", content: `You are a diet planner for health conscious people.` },
      { role: "user", content: `Give a healthy and flavourful diet plan for following natural language description:\n\nDiet plan full of protein and vitamins` },
      { role: "assistant", content: "Breakfast \n 2-3 eggs scrambled with spinach and peppers \n ½ cup of oatmeal with nuts and berries \n 1 cup of Greek yogurt with honey and seeds \n Lunch \n Grilled chicken sandwich with lettuce, tomato, and avocado \n   Roasted sweet potatoes \n     A side salad with fresh vegetables and vinaigrette dressing  \n Snack \n Apple slices with nut butter \n Celery sticks with hummus \n Greek yogurt with flaxseeds \n Dinner \n Baked salmon with roasted vegetables \n Quinoa with mushrooms and peas \n Lentil soup with fresh herbs and spices \n Dessert \n Dark chocolate with mixed nuts \n Fruit smoothie with plain Greek yogurt     " },
      { role: "user", content: `Give a healthy and flavourful diet plan for following natural language description:\n\n${dietDescription}` },
    ];
    const response = await openaiClient.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: message,
    });

    return response.data.choices[0].message.content;
  }

  const dietPlan = await chatGPT(dietDescription);
  return dietPlan;

};

export default generate;