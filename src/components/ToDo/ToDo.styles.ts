import tw from 'twin.macro';
import styled from 'styled-components';

export const Container = tw.li`flex flex-row justify-between hover:bg-slate-50 px-4 py-2`;

export const CompletedContainer = styled.div<{
  isCompleted: boolean;
}>`
  ${tw`flex flex-row`}
  ${(props) => props.isCompleted && tw`line-through decoration-wavy`}
`;

export const TodoContainer = tw.div`px-2`;

export const DeleteButton = tw.div`cursor-pointer`;
