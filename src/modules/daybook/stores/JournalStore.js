import { defineStore } from "pinia";

export const useJournalStore = defineStore("JournalStore", {
  // other options...
  state: () => ({
    isLoading: true,
    entries: [
      {
        id: new Date().getTime(),
        date: new Date().toDateString(),
        text: "Aliqua commodo anim dolor sit deserunt non excepteur est sint cupidatat magna.",
        picture: null,
      },
      {
        id: new Date().getTime() + 1000,
        date: new Date().toDateString(),
        text: "Labore exercitation incididunt consequat esse occaecat sint elit.",
        picture: null,
      },
      {
        id: new Date().getTime() + 2000,
        date: new Date().toDateString(),
        text: "Non consectetur deserunt occaecat est nisi laborum qui consequat et nulla enim enim tempor pariatur.",
        picture: null,
      },
    ],
  }),
  getters: {
    getEntriesByTerm(state) {
      return state.count;
    },
    getEntryById(state) {
      return state.count;
    },
  },
  actions: {
    async loadEntries() {
      this.count++;
    },
    async updateEntry() {
      this.count++;
    },
    async createEntry() {
      this.count++;
    },
  },
});
