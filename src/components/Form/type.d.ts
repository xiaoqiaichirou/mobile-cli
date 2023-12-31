import type {
    FieldProps,
    PickerProps,
    DatePickerProps,
    TimePickerProps,
    CalendarProps,
    AreaProps,
    SliderProps,
    StepperProps,
    RateProps,
    SwitchProps
} from 'vant'

interface FieldAttrs extends FieldProps {
    prop: string
}

interface Option {
    label: string,
    name: string | number
}
export interface Rule {
    type: string,
    fieldProps: FieldAttrs,
    moduleProps?: PickerProps | DatePickerProps | TimePickerProps | CalendarProps | AreaProps | SliderProps | StepperProps | RateProps | SwitchProps,
    format?: string,
    hidden?: boolean,
    options?: Array<Option>
}
