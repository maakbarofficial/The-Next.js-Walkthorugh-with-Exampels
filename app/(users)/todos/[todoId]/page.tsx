import { PageProps } from "@/.next/types/app/layout";
import { Todo } from "@/typings";
import { notFound } from "next/navigation";
import React from "react";

export const dynamicParams = true;

const fetchTodos = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    // { cache: "no-cache" }
    { next: { revalidate: 60 } }
  );
  const todo = await res.json();
  //   console.log(todos);
  return todo;
};

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodos(todoId);

  if (!todo.id) return notFound();

  return (
    <div>
      {/* Server Side Render because all pages are by default server components */}
      {/* @ts-ignore */}
      <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
        <p>
          #{todo.id} . {todo.title}
        </p>
        <p>Completed: {todo.Completed ? "Yes" : "No"}</p>
        <p className="border-t border-black mt-5 text-right">
          By User: {todo.userId}
        </p>
      </div>
    </div>
  );
}

export default TodoPage;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();
  // DEMO

  const trimmedTodos = todos.splice(0, 10);

  return todos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
