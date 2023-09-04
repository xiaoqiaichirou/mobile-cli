import {defineComponent, reactive, ref } from "vue";

export default defineComponent({
    name: 'questionBank',
    setup() {
        const formParams = reactive({})
        return () => (
            <div class="container">
                questionBank
            </div>
        )
    }
})
