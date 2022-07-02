import { client } from "apis";
import { TodoType } from "App";

const getTodos = async (id) => {
  const response = await client.get<TodoType[]>("/todos");

  console.log("id", id);

  return response.data;
};

export { getTodos };
