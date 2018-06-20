export enum Category{
    GENERAL,
    BUSINESS,
    ACADEMIC,
    OTHER
}
export namespace Category {
    export function values() {
      return   [{label:'Please select', value: null},
                {label:'Academic', value: Category.ACADEMIC},
                {label:'Business', value: Category.BUSINESS},
                {label:'General', value: Category.GENERAL},
                {label:'Other', value: Category.OTHER}];
    }
}