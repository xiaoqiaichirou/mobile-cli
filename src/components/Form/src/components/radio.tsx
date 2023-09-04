import {Radio, RadioGroup} from 'vant'
import {Rule} from "../../type";
const JsRadio = (item: Rule, formParams):JSX.Element => {
    return (
        <RadioGroup
            {...item?.moduleProps}
            v-model={formParams[item.fieldProps.prop]}
        >
            {
                item.options?.map(option => <Radio {...option}>{option.label}</Radio>)
            }
        </RadioGroup>
    )
}

export default JsRadio
