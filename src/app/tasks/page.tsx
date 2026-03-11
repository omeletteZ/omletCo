import TaskList from "@/components/TaskList/TaskList";

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  const todos: Todo[] = await res.json();

  return (
    <div>
      <TaskList todos={todos} />
    </div>
  );
}