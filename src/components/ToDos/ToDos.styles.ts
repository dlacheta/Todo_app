import tw from 'twin.macro';

export const Container = tw.div`flex justify-center mt-10`;

export const ToDoContainer = tw.div`flex flex-col drop-shadow-sm bg-white w-4/5 min-w-[500px]`;

export const Welcome = tw.div`h-16 flex flex-row w-full justify-center items-center text-2xl border-b-2 border-slate-200`;

export const InputContainer = tw.div`flex flex-col px-10`;

export const Input = tw.input`border-slate-200 placeholder-slate-400 p-2 border-2 rounded border-solid`;

export const FormContainer = tw.div`flex flex-col space-y-10 py-6`;

export const TodosListContainer = tw.div`flex flex-col`;
