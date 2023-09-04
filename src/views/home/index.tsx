import {defineComponent, reactive, ref } from "vue";
import JsForm from '../../components/Form/index.tsx'

export default defineComponent({
    name: 'questionBank',
    setup() {
        const formParams = reactive({})
        const formRules = ref([
            {
                type: 'picker',
                fieldProps: {
                    prop: 'city',
                    name: 'picker',
                    label: '选择器',
                },
                moduleProps: {
                    columns: [
                        { text: '杭州', value: 'Hangzhou' },
                        { text: '宁波', value: 'Ningbo' },
                        { text: '温州', value: 'Wenzhou' },
                        { text: '绍兴', value: 'Shaoxing' },
                        { text: '湖州', value: 'Huzhou' },
                    ]
                }
            },
            {
                type: 'calendar',
                fieldProps: {
                    prop: 'endTime',
                    name: 'time',
                    label: '选择日历',
                    value: 'date'
                }
            },
            {
                type: 'datePicker',
                fieldProps: {
                    prop: 'startTime',
                    name: 'datePicker',
                    'is-link': true,
                    label: '选择日期',
                    placeholder: "点击选择时间"
                }
            },
            {
                type: 'area',
                fieldProps: {
                    prop: 'regin',
                    name: 'area',
                    label: '选择地区'
                }
            },
            {
                type: 'slider',
                fieldProps: {
                    prop: 'slid',
                    name: 'huakuai',
                    label: '滑块选择'
                }
            },
            {
                type: 'stepper',
                fieldProps: {
                    prop: 'asd',
                    name: 'stepper',
                    label: '步进器'
                }
            },
            {
                type: 'rate',
                fieldProps: {
                    prop: 'vbv',
                    name: 'rate',
                    label: '评分'
                }
            },
            {
                type: 'radio',
                fieldProps: {
                    prop: 'ggg',
                    name: 'radio',
                    label: '单选'
                },
                moduleProps: {
                    direction: 'horizontal'
                },
                options: [
                    {
                        label: '单选1',
                        name: 'a'
                    },
                    {
                        label: '单选2',
                        name: 'b'
                    }
                ]
            },
            {
                type: 'checkbox',
                fieldProps: {
                    prop: 'jjj',
                    name: 'checkbox',
                    label: '复选'
                },
                moduleProps: {
                    direction: 'horizontal',
                    shape: 'square'
                },
                options: [
                    {
                        label: '复选1',
                        name: 1
                    },
                    {
                        label: '复选2',
                        name: 2
                    }
                ]
            },
            {
                type: 'switch',
                fieldProps: {
                    prop: 'ddd',
                    name: 'switch',
                    label: '开关'
                }
            }
        ])
        return () => (
            <div class="container">
                <JsForm Rules={formRules.value} FormParams={formParams}/>
            </div>
        )
    }
})
