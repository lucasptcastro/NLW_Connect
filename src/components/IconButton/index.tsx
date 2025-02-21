import { ComponentProps } from "react";

// A tipagem ComponentProps pega todas as propriedades que existe dentro da tag html que for explícita nas setas. Ex.: ComponentProps<input> irá retornar todas as propriedades da tag input
// No caso do button ele já necessita de um children, então não precisa passar uma nova tipagem children dentro da interface ButtonProps
interface IconButtonProps extends ComponentProps<"button"> {}

export function IconButton(props: IconButtonProps) {
  return (
    <button
      className="text-blue hover:bg-blue cursor-pointer rounded-md bg-gray-500 p-1.5 transition-colors duration-300 hover:text-gray-900"
      {...props}
    />
  );
}
