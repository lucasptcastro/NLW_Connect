import { ComponentProps } from "react";

// Dicas: no tailwind, para aplicar css em um elemento de acordo com o estado de outro elemento basta usar o atributo "group". Exemplo: para deixar a borda de uma div branca quando houver o click em um input, basta usar o atributo group na div que envolve o input e passar as estilizações nela

// focus-within: adiciona uma estilização quando algum filho do componente pai estiver com foco (ex.: clicar em um input)

// group-focus-within: adiciona uma estilização quando qualquer componente do grupo receber focus

// group-[&:not(:has(input:placeholder-shown))]: verifica se algum placeholder que está no grupo não está sendo exibido. Se sim, adicionará text-gray-100. É uma forma interessante de estilizar um componente caso o input esteja preenchido

// a propriedade data-* da div permite que qualquer valor seja atribuido a essa propriedade. Por ex.: se quiser passar o valor de true ou false para um data da div, basta setar o nome do atributo antecedido do prefixo "data-" (data-error, data-teste, data-value, data-fazer25) e o valor logo após (data-error={false})

// data-[error=true]: define a estilização de acordo com o valor presente no atributo data-error

// group-data-[error=true]: define a estilização de acordo com o valor presente no atributo data-error de algum componente do grupo

interface InputRootProps extends ComponentProps<"div"> {
  error?: boolean;
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="group data-[error=true]:border-danger flex h-12 items-center gap-2 rounded-xl border border-gray-600 bg-gray-800 px-4 focus-within:border-gray-100"
      {...props}
    />
  );
}

interface InputIconProps extends ComponentProps<"span"> {}

export function InputIcon({ ...props }: InputIconProps) {
  return (
    <span
      className="group-data-[error=true]:text-danger text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100"
      {...props}
    />
  );
}

interface InputFieldProps extends ComponentProps<"input"> {}

export function InputField({ ...props }: InputFieldProps) {
  return <input className="flex-1 placeholder-gray-400 outline-0" {...props} />;
}
