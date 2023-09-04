import {Switch} from 'vant'
import {Rule} from "../../type";
const JsSwitch = (item: Rule, formParams):JSX.Element => {
    return (
        <Switch
            {...item?.moduleProps}
            v-model={formParams[item.fieldProps.prop]}
        />
    )
}

export default JsSwitch
