import create from 'zustand';

// Function to save tasks to localStorage
const saveToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Function to load tasks from localStorage
const loadFromLocalStorage = () => {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
};

const useStore = create((set) => ({
  tasks: loadFromLocalStorage(),
  addTask: (task) => set((state) => {
    const newTasks = [{ text: task, completed: false }, ...state.tasks];
    saveToLocalStorage(newTasks);
    return { tasks: newTasks };
  }),
  toggleTask: (index) => set((state) => {
    const newTasks = [...state.tasks];
    newTasks[index].completed = !newTasks[index].completed;
    saveToLocalStorage(newTasks);
    return { tasks: newTasks };
  }),
  removeTask: (index) => set((state) => {
    const newTasks = [...state.tasks];
    newTasks.splice(index, 1);
    saveToLocalStorage(newTasks);
    return { tasks: newTasks };
  })
}));

export default useStore;