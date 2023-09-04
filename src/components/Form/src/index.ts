export const FormTypes = {
    fields: ['switch', 'checkbox', 'radio', 'stepper', 'rate', 'slider', 'uploader'],
    popups: ['picker', 'datePicker', 'timePicker', 'area'],
    specials: ['calendar'],
    all: (): string[] => {
        const { fields, popups, specials } = FormTypes
        return [...fields, ...popups, ...specials]
    }
}

export const DefaultFormat = {
    calendar: 'YYYY-MM-DD'
}

export const PRE_SLOT_STR = 'slot:'
