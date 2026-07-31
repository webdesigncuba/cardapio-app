import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function Login(){
    return (
     <div className="flex flex-col justify-center items-center h-screen space-y-6 px-4 md:px-0">
      {/* Logo centrado */}
      <Image src="/logo1.png" alt="Logo Cardapio" width={200} height={200} />

      {/* Formulario responsivo */}
      <form className="w-full md:max-w-lg lg:max-w-2xl">
        <FieldSet className="w-full">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                autoComplete="off"
                placeholder="dd@dd.com"
                className="w-full"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                autoComplete="off"
                placeholder="••••••••"
                type="password"
                className="w-full"
              />
            </Field>
          </FieldGroup>
          <Button className="bg-btn hover:bg-btn w-full">Login</Button>
        </FieldSet>
      </form>

      {/* Versión */}
      <div>
        <p className="text-btn font-bold">v0.0.1</p>
      </div>
    </div>
    );
}