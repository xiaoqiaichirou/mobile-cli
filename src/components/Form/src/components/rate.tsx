import { Rate } from 'vant'
import {Rule} from "../../type";
const JsRate = (item: Rule, formParams):JSX.Element => {
    return (
        <Rate v-model={formParams[item.fieldProps.prop]} {...item?.moduleProps} />
    )
}

export default JsRate
