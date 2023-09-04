import {Rule} from "../../type";
import JsPicker from "../components/picker";
import JsDatePicker from '../components/datePicker.tsx'
import JsArea from '../components/area.tsx'
import JsSlider from '../components/slider'
import JsStepper from  '../components/stepper.tsx'
import JsRate from '../components/rate.tsx'
import JsRadio from '../components/radio.tsx'
import JsCheckbox from '../components/checkbox.tsx'
import JsSwitch from '../components/switch.tsx'

export const useFormFieldSlots = (item: Rule, formParams: any):JSX.Element => {
    switch (item.type) {
        case 'slider': // 滑块
            return JsSlider(item, formParams)
        case 'stepper': // 步进器
            return JsStepper(item, formParams)
        case 'rate': // 评分
            return JsRate(item, formParams)
        case 'radio': // 单选
            return JsRadio(item ,formParams)
        case 'checkbox': //复选
            return JsCheckbox(item, formParams)
        case 'switch':// 开关
            return JsSwitch(item, formParams)
        default:
    }
}
export const useFormFieldPopup = (item: Rule, cancelFn: Function, confirmFn: Function):JSX.Element => {
    return {
        picker: JsPicker(item, cancelFn, confirmFn),
        datePicker: JsDatePicker(item, cancelFn, confirmFn),
        area: JsArea(item, cancelFn, confirmFn)
    }[item.type]
}
