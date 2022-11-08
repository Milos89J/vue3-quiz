
import { createRouter, createWebHistory } from "vue-router";
import QuizView from '../view/QuizView.vue';
import QuizCard from '../view/QuizCard.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: QuizView,
            name: "QuizView"
        },
        {
            path: "/page/:id",
            component: QuizCard,
            name: QuizCard
        }
    ]
});
export default router 