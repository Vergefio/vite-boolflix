import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'metteri qui API',
    movieListData: [],
    isLoaded: false
});