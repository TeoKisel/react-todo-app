import React from 'react';
import { Filter } from '../../types/Filter';

type Props = {
  onFilterChange: (value: Filter) => void;
  filterTodos: Filter;
  countActiveTodos: number | null;
  hasCompletedTodos: boolean;
  onDelete: () => void;
};

export const Footer: React.FC<Props> = ({
  onFilterChange,
  filterTodos,
  countActiveTodos,
  hasCompletedTodos,
  onDelete,
}) => (
  <footer className="todoapp__footer" data-cy="Footer">
    <span className="todo-count" data-cy="TodosCounter">
      {countActiveTodos} items left
    </span>

    {/* Active link should have the 'selected' class */}
    <nav className="filter" data-cy="Filter">
      <a
        href="#/"
        className={`filter__link ${filterTodos === Filter.All ? 'selected' : ''}`}
        data-cy="FilterLinkAll"
        onClick={() => onFilterChange(Filter.All)}
      >
        All
      </a>

      <a
        href="#/active"
        className={`filter__link ${filterTodos === Filter.Active ? 'selected' : ''}`}
        data-cy="FilterLinkActive"
        onClick={() => onFilterChange(Filter.Active)}
      >
        Active
      </a>

      <a
        href="#/completed"
        className={`filter__link ${filterTodos === Filter.Completed ? 'selected' : ''}`}
        data-cy="FilterLinkCompleted"
        onClick={() => onFilterChange(Filter.Completed)}
      >
        Completed
      </a>
    </nav>

    {/* this button should be disabled if there are no completed todos */}
    {}
    <button
      type="button"
      className="todoapp__clear-completed"
      data-cy="ClearCompletedButton"
      disabled={!hasCompletedTodos}
      onClick={onDelete}
    >
      Clear completed
    </button>
  </footer>
);
