import {defineComponent, reactive, ref } from "vue";

export default defineComponent({
    name: 'examination',
    setup() {
        const formParams = reactive({})
        return () => (
            <div class="container">
                examination
            </div>
        )
    }
})
