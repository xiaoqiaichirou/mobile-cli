import {Checkbox, CheckboxGroup} from 'vant'
import {Rule} from "../../type";
const JsCheckbox = (item: Rule, formParams):JSX.Element => {
    return (
        <CheckboxGroup
            {...item?.moduleProps}
            v-model={formParams[item.fieldProps.prop]}
        >
            {
                item.options?.map(option => <Checkbox {...option}>{option.label}</Checkbox>)
            }
        </CheckboxGroup>
    )
}

export default JsCheckbox
