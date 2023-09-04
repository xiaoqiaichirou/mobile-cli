import { Stepper } from 'vant'
import {Rule} from "../../type";
const JsStepper = (item: Rule, formParams):JSX.Element => {
    return (
        <Stepper v-model={formParams[item.fieldProps.prop]} {...item?.moduleProps} />
    )
}

export default JsStepper
