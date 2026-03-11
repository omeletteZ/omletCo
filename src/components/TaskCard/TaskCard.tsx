"use client";

import { useState } from "react";

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

type Props = {
  todo: Todo;
};

export default function TaskCard({ todo }: Props) {
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  return (
    <div
      onClick={() => setIsCompleted(!isCompleted)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 20px",
        marginBottom: "12px",
        borderRadius: "8px",
        border: "1px solid #e5e7eb",
        backgroundColor: isCompleted ? "#f0fdf4" : "#ffffff",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "20px", color: isCompleted ? "#22c55e" : "#9ca3af" }}>
          {isCompleted ? "☑" : "☐"}
        </span>
        <div>
          <p
            style={{
              fontWeight: "600",
              textDecoration: isCompleted ? "line-through" : "none",
              color: isCompleted ? "#6b7280" : "#111827",
            }}
          >
            {todo.title}
          </p>
          <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "2px" }}>
            ID: {todo.id} • User: {todo.userId}
          </p>
        </div>
      </div>
      <span
        style={{
          padding: "4px 12px",
          borderRadius: "999px",
          fontSize: "12px",
          fontWeight: "600",
          backgroundColor: isCompleted ? "#1F2D3D" : "transparent",
          color: isCompleted ? "#ffffff" : "#6b7280",
          border: isCompleted ? "none" : "1px solid #d1d5db",
        }}
      >
        {isCompleted ? "Completed" : "In Progress"}
      </span>
    </div>
  );
}