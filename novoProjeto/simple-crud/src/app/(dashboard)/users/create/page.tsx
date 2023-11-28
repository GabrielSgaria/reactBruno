"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { $Enums } from "@prisma/client";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formUserSchema = z.object({
  name: z.string().min(1, {
    message: "Campo Obrigatório",
  }),
  email: z
    .string()
    .min(1, {
      message: "Campo Obrigatório",
    })
    .email({
      message: "Email inválido",
    }),
  role: z.nativeEnum($Enums.Role),
});

type FormUserSchema = z.infer<typeof formUserSchema>;

export default function CreateUserPage() {
  const form = useForm<FormUserSchema>({
    defaultValues: {
      name: "",
      email: "",
      role: "USER",
    },
  });

  function onSubmit(values:FormUserSchema){
    console.log(values)
  }

  return (
    <div className="container mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({field}) => (
              <FormItem>
                <FormLabel>nome</FormLabel>
                <FormControl>
                  <Input {...field} className="border-0 bg-zinc-300/50 text-zinc-800 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-zinc-800" placeholder="Digite o nome" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant="outline"> SALVAR </Button>
        </form>
      </Form>
    </div>
  );
}
