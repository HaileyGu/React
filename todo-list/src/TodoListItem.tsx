import React from 'react';

interface Todo {
  text: string;
  complete: boolean;
}

interface Props {
  todo: Todo;
}

export const TodoListItem: React.FC<Props> = props => {
  return <li>content</li>;
};
