import tw from 'twin.macro';
import styled from 'styled-components';

export const TodosListInfo = tw.div`flex flex-row border-y-2 border-solid border-slate-200 text-sm justify-between`;

export const TodosListItemsLeft = tw.div`p-4`;

export const TodosListControls = tw.div`flex flex-row justify-around`;

export const TodosListControl = styled.div<{
  isActive?: boolean;
  isDisabled?: boolean;
}>`
  ${tw`p-4 cursor-pointer`}
  ${(props) => props.isActive && tw`bg-slate-200 text-red-800`}
  ${(props) => props.isDisabled && tw`text-slate-200 cursor-default`}
`;
