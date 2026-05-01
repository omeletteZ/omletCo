"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";

const schema = yup.object({
  title: yup.string().required("Введите заголовок"),
  body: yup.string().required("Введите содержимое"),
});

type FormData = yup.InferType<typeof schema>;

export default function CreatePostPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    router.push("/posts");
  };

  return (
    <div>
      <h1>Создать пост</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("title")} placeholder="Заголовок" />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <textarea {...register("body")} placeholder="Содержимое" />
          {errors.body && <p>{errors.body.message}</p>}
        </div>
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}