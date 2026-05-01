import { Suspense } from "react";
import { getT } from "@/i18n/getT";
import TaskList from "@/components/TaskList/TaskList";
import { cacheLife } from "next/cache";

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

async function getTasks(): Promise<Todo[]> {
  "use cache";
  cacheLife("hours");
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  return res.json();
}

async function TasksContent({ lang }: { lang: string }) {
  const { t } = await getT("common", lang);
  const todos = await getTasks();
  return (
    <div>
      <h1>{t("tasks_title")}</h1>
      <TaskList todos={todos} />
    </div>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TasksContent lang={lang} />
    </Suspense>
  );
}