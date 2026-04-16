"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";

const schema = yup.object({
  user_name: yup.string().required("Введите имя пользователя"),
  email: yup.string().email("Некорректный email").required("Введите email"),
  age: yup.number().positive().integer().min(1).required("Введите возраст"),
  password: yup.string().min(6, "Минимум 6 символов").required("Введите пароль"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли не совпадают")
    .required("Подтвердите пароль"),
});

type FormData = yup.InferType<typeof schema>;

export default function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    router.push("/posts");
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("user_name")} placeholder="Имя пользователя" />
          {errors.user_name && <p>{errors.user_name.message}</p>}
        </div>
        <div>
          <input {...register("email")} placeholder="Email" />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <input {...register("age")} placeholder="Возраст" type="number" />
          {errors.age && <p>{errors.age.message}</p>}
        </div>
        <div>
          <input {...register("password")} placeholder="Пароль" type="password" />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <input {...register("confirm_password")} placeholder="Подтвердите пароль" type="password" />
          {errors.confirm_password && <p>{errors.confirm_password.message}</p>}
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}