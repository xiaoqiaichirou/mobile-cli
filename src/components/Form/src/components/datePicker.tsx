import { DatePicker } from 'vant'
import {Rule} from "../../type";
const JsDatePicker = (item: Rule, cancelFn: Function, confirmFn: Function):JSX.Element => {
    return (
        <DatePicker {...item.moduleProps} onCancel={cancelFn} onConfirm={(data) => confirmFn(data, item)} />
    )
}

export default JsDatePicker
