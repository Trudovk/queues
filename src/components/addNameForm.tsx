"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { pb } from "@/lib/pb";
import { updPage } from "@/lib/auth";

type Props = {
  id: string;
};

export const AddNameForm: React.FC<Props> = ({ id }) => {
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Имя должно быть больше 2 символов.",
    }),
    middleName: z.string().min(2, {
      message: "Отчество должно быть больше 2 символов",
    }),
    lastName: z.string().min(2, {
      message: "Фамилия должно быть больше 2 символов.",
    }),
  });
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      middleName: "",
      lastName: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    await pb.collection("users").update(id, values);
    await updPage();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Фамилия</FormLabel>
              <FormControl>
                <Input
                  placeholder="Иванов"
                  {...field}
                  autoComplete="family-name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя</FormLabel>
              <FormControl>
                <Input
                  placeholder="Иван"
                  {...field}
                  autoComplete="given-name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="middleName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Отчество</FormLabel>
              <FormControl>
                <Input
                  placeholder="Иванович"
                  {...field}
                  autoComplete="additional-name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormDescription>Ваше реальное ФИО</FormDescription>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
