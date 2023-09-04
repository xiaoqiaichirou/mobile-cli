import { Slider } from 'vant'
import {Rule} from "../../type";
const JsSlider = (item: Rule, formParams):JSX.Element => {
    return (
        <Slider v-model={formParams[item.fieldProps.prop]} {...item?.moduleProps} />
    )
}

export default JsSlider
