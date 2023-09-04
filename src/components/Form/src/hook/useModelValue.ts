export const useModelValue = (data: any, type: string): string | number => {
    if(!data) return
    switch (type) {
        case 'picker':
            return data.text
        case 'datePicker':
            return data
        case 'calendar':
            return data
        case 'area':
            return data.selectedOptions.map(item => item.text).join('-')
        case 'slider':
            console.log(data, 'data');
            return data
        default:
            return 1
    }
}
