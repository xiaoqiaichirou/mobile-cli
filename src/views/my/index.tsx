import {defineComponent, reactive, ref } from "vue";

export default defineComponent({
    name: 'my',
    setup() {
        const formParams = reactive({})
        return () => (
            <div class="container">
                my
            </div>
        )
    }
})
