import { Area } from 'vant'
import { areaList } from '@vant/area-data';
import {Rule} from "../../type";
const JsArea = (item: Rule, cancelFn: Function, confirmFn: Function):JSX.Element => {
    return (
        <Area areaList={areaList} {...item.moduleProps} onCancel={cancelFn} onConfirm={(data) => confirmFn(data, item)} />
    )
}

export default JsArea
