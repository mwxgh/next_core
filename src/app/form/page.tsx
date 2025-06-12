'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import LocationSelector from '@/components/ui/location-input'

const formSchema = z.object({
  name_7750271748: z.tuple([z.string(), z.string().optional()]),
})

const MyForm = () => {
  const [_countryName, setCountryName] = useState<string>('')
  const [stateName, setStateName] = useState<string>('')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values)
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>,
      )
    } catch (error) {
      console.error('Form submission error', error)
      toast.error('Failed to submit the form. Please try again.')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10"
      >
        <FormField
          control={form.control}
          name="name_7750271748"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Country</FormLabel>
              <FormControl>
                <LocationSelector
                  onCountryChange={(country) => {
                    setCountryName(country?.name || '')
                    form.setValue(field.name, [
                      country?.name || '',
                      stateName || '',
                    ])
                  }}
                  onStateChange={(state) => {
                    setStateName(state?.name || '')
                    form.setValue(field.name, [
                      form.getValues(field.name)[0] || '',
                      state?.name || '',
                    ])
                  }}
                />
              </FormControl>
              <FormDescription>
                If your country has states, it will be appear after selecting
                country
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default MyForm
