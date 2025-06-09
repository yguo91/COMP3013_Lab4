import {create} from 'zustand';

type Assingment = {id: number; title: string; completed: boolean};

interface State {
  assignments: Assingment[];
  addAssignment: (title: string) => void;
  deleteAssignment: (id: number) => void;
  completeAssignment: (id: number) => void;
}

export const useStore = create<State>((set) => ({
  assignments: [],
  addAssignment: (title) =>
    set((state) => ({
      assignments: [
      ...state.assignments,
      {
        id: Date.now(),
        title,
        completed: false,
      },
    ],
    })),

  deleteAssignment: (id) =>
    set((state) => ({
      assignments: state.assignments.filter((assignment) => 
        assignment.id !== id),
    })),

  completeAssignment: (id) =>
    set((state) => ({
      assignments : state.assignments.map((assignment) => 
        assignment.id === id ? 
      {...assignment, completed: !assignment.completed} : assignment
    ),      
    })),
}));