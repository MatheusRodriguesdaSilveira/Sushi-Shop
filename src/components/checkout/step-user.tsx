"use client"

import { Steps } from "@/types/steps";
import { Dispatch, SetStateAction } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useCheckoutStore } from "@/stores/ckeckout";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name: z.string().min(2, 'Fill in your name').max(50),
  })

type Props = {
    setStep: Dispatch<SetStateAction<Steps>>
}

export const StepUser = ({setStep}: Props) => {
    const { name, setName } = useCheckoutStore(state => state)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {name}
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setName(values.name);
        setStep('address');
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                            <Input
                            autoFocus
                            placeholder="What is your name?" 
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} 
                />

                <Button type="submit" variant='outline'>Next</Button>
            </form>
        </Form>
    );
}