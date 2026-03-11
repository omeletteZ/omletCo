"use client";

import TaskCard from "@/components/TaskCard/TaskCard";

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

type Props = {
  todos: Todo[];
};

export default function TaskList({ todos }: Props) {
  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "20px" }}>
        Task List
      </h1>
      {todos.map((todo) => (
        <TaskCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}