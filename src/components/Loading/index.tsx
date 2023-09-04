import { defineComponent } from 'vue'
import { Loading, Overlay } from 'vant'
export default defineComponent({
    props: {
        Message: {
            type: String,
            default: ''
        },
    },
	setup(props) {
		return () => (
            <Overlay show={true} class="flex justify-center items-center">
                <Loading type="spinner" vertical v-slots={{
                    default: () => props.Message
                }} />
            </Overlay>
        )
	}
})
