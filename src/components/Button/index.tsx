import { ComponentProps } from "react";

// A tipagem ComponentProps pega todas as propriedades que existe dentro da tag html que for explícita nas setas. Ex.: ComponentProps<input> irá retornar todas as propriedades da tag input
// No caso do button ele já necessita de um children, então não precisa passar uma nova tipagem children dentro da interface ButtonProps
interface ButtonProps extends ComponentProps<"button"> {}

export function Button(props: ButtonProps) {
  return (
    <button
      className="text-blue hover:bg-blue flex h-12 w-full cursor-pointer items-center justify-between rounded-xl bg-gray-500 px-5 font-semibold transition-colors duration-300 hover:text-gray-900"
      {...props}
    />
  );
}
