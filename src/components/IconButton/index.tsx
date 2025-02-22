import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

// A tipagem ComponentProps pega todas as propriedades que existe dentro da tag html que for explícita nas setas. Ex.: ComponentProps<input> irá retornar todas as propriedades da tag input
// No caso do button ele já necessita de um children, então não precisa passar uma nova tipagem children dentro da interface ButtonProps
interface IconButtonProps extends ComponentProps<"button"> {}

// o twMerge faz um merge do className do componente com o que for passado nas propriedades do componente quando chamado, priorizando o className passado como propriedade na chamada do componente. Ex.: aqui eu criei o botão com esse className, porém quando ele for chamado em alguma página e for passado alguma estilização na propriedade className, o twMerge vai mergear os dois className e priorizar o className do componente que foi chamado na página

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        "text-blue hover:bg-blue cursor-pointer rounded-md bg-gray-500 p-1.5 transition-colors duration-300 hover:text-gray-900",
        className,
      )}
      {...props}
    />
  );
}
