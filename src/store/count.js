import { defineStore } from "pinia";

export const counterStore = defineStore(
    "counter", {
        state: () =>({
            count: 0
        }),
        actions: {
            increaseCount(){
                this.count++
            },

            decreaseCount(){
                this.count--
            }
        },
        getters: {
            oldOrEven: (state) => {
                if(state.count % 2 == 0) return "even"
                return "old"
            },
            doubleCount: (state) => state.count * 2,
        }
    }
)