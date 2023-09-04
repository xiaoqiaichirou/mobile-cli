import {computed, defineComponent, onBeforeMount, onMounted, PropType, reactive, ref, toRaw, toRefs} from "vue";
import {Form, CellGroup, Field, Button, Popup, Picker, DatePicker, Calendar} from 'vant'
import type { FormProps, PopupProps, CalendarProps } from 'vant'
import { Rule } from "./type";
import {useFormFieldPopup, useFormFieldSlots} from "./src/hook/useForm";
import {useFormConfirm} from "./src/hook/useFormConfirm";
import { FormTypes, DefaultFormat, PRE_SLOT_STR } from "./src/index.ts"
import {useModelValue} from "./src/hook/useModelValue";

export default defineComponent({
    props: {
        PropsConfig: {
            type: Object as PropType<FormProps>,
            default: () => {}
        },
        Rules: {
            type: Object as PropType<Array<Rule>>,
            required: true
        },
        FormParams: {
            type: Object as PropType<any>,
            required: true
        },
        PopupProps: {
            type: Object as PropType<PopupProps>,
            default: () => {
                return {
                    position: "bottom",
                    style: "{ height: '30%' }"
                }
            }
        },
    },
    setup(props, { slots, emit }) {
        const showPicker = ref(false)
        const showCalendar = ref(false)
        let active = ''

        const { PropsConfig, Rules, FormParams, PopupProps } = toRefs(props)

        const calendarRule = Rules.value.find(item => item.type === 'calendar')

        // field input 插槽实现
        const fieldSlots = FormTypes.fields

        // field popup 类型
        const fieldPopups = computed(() => {
            return Rules.value.filter(item => FormTypes.popups.includes(item.type))
        })

        const handleRender = (data, type) => {
            return useModelValue(data, type)
        }

        const handleConfirm = (data: any, item: Rule) => {
            const { fieldProps } = item

            FormParams.value[fieldProps.prop] = useFormConfirm(data, item)
            showPicker.value = false
            showCalendar.value = false
        }
        const handleFieldChange = (e, type: string) => {
            console.log(e, 'e');
        }
        const handleCancel = () => {
            showPicker.value = false
        }

        const handleFieldClick = (type) => {
            if(type === 'slider') return
            if(type === 'calendar') {
                showCalendar.value = true
            }else {
                active = type
                showPicker.value = true
            }
        }

        const handleFormFailed = (error) => {
            console.log(error, 'error');
        }

        const handleFormSubmit = (values) => {
            console.log(values, 'values');
            console.log(FormParams.value, 'FormParams.value');
        }
        return () => (
            <Form  {...PropsConfig.value} onFailed={handleFormFailed} onSubmit={handleFormSubmit}>
                <CellGroup inset>
                    {
                        Rules.value?.map(item => {
                            if(item.hasOwnProperty('type') && item.type.startsWith(PRE_SLOT_STR)) {
                                const slotName = item.type.substring(PRE_SLOT_STR.length);
                                // 插槽
                                return (
                                    <Field {...item.fieldProps} v-slots={{
                                        [slots[slotName]]: () => slots[slotName]?.(item)
                                    }} />
                                )
                            }else if(fieldSlots.includes(item.type)){
                                // 不需要弹出层表单组件
                                return (
                                    <Field
                                        {...item.fieldProps}
                                        v-slots={{
                                            input: () => useFormFieldSlots(item, FormParams.value)
                                        }}
                                    />
                                )
                            }else {
                                // 弹出层表单组件
                                return (
                                    <Field
                                        {...item.fieldProps}
                                        modelValue={handleRender(FormParams.value[item.fieldProps.prop], item.type)}
                                        onChange={(e) => handleFieldChange(e, item.type)}
                                        onClick={() => handleFieldClick(item.type)}
                                    />
                                )
                            }
                        })
                    }
                </CellGroup>
                <Button size='large' round block type="primary" native-type="submit"> 提交</Button>
                <Popup v-model:show={showPicker.value} {...PopupProps.value}>
                    {
                        fieldPopups.value.filter(item => item.type === active).map(item => useFormFieldPopup(item, handleCancel, handleConfirm))
                    }
                </Popup>
                {/*日历*/}
                <Calendar v-model:show={showCalendar.value} onConfirm={(data) => handleConfirm(data, calendarRule)}   />
            </Form>
        )
    }
})
