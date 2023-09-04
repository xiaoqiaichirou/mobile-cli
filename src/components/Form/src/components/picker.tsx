import { Picker } from 'vant'
import {Rule} from "../../type";
const JsPicker = (item: Rule, cancelFn: Function, confirmFn: Function):JSX.Element => {
    return (
        <Picker {...item.moduleProps} onCancel={cancelFn} onConfirm={(data) => confirmFn(data, item)} />
    )
}

export default JsPicker
