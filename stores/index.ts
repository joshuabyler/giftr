import { defineStore } from 'pinia';

interface item {
    id: number;
    name: string;
}

interface list {
    id: string;
    name: string;
    items: item[];
}

export const useStore = defineStore('main', () => {
    const fakeLists = ref([
        {
            id: "1",
            name: 'List 1',
            items: [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' }
            ]
        },
        {
            id: "2",
            name: 'List 2',
            items: [
                { id: 4, name: 'Item 4' },
                { id: 5, name: 'Item 5' },
                { id: 6, name: 'Item 6' }
            ]
        },
        {
            id: "3",
            name: 'List 3',
            items: [
                { id: 7, name: 'Item 7' },
                { id: 8, name: 'Item 8' },
                { id: 9, name: 'Item 9' }
            ]
        }
    ]);
    const selectedList = ref<list>();

    const getById = (id: string | string[]) => {
        selectedList.value = fakeLists.value.find((list) => list.id === id);
    };

    return {
        fakeLists,
        getById,
        selectedList
    };
});
