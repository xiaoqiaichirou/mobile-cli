import {Rule} from "../../type";
import * as dayjs from 'dayjs'

const defaultFormat = {
    calendar: 'YYYY-MM-DD'
}
export const useFormConfirm = (data: any, item: Rule) => {
    const { type, fieldProps, format } = item
    switch (type) {
        case 'calendar':
            return dayjs(data).format(format || defaultFormat[type])
        case 'picker':
            return data.selectedOptions[0]
        case 'datePicker':
            return data.selectedValues.join('-')
        case 'timePicker':
            return null
        case 'area':
            return data
        default:
            return null
    }
}
