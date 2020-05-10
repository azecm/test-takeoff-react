export enum EType {
    none, range, type, status
}

export type TRow = ((string | number)[] | (string | number));

export interface ResultInterface {
    resultName: string;
    items: ResItem[];
}

export interface ResItem {
    type: EType;
    typeName: string;
    rows: TRow[];
}

export const pollTitles = ['', 'Диапазон', 'Тип', 'Статус'];
export const pollTypeName = ['', 'Возраст респондента', 'Тип карты лояльности', 'Статус карты лояльности'];


export interface DataPollItemEntity {
    ind: number;
    elements: (HTMLInputElement|HTMLSelectElement)[];
}

export interface DataPollItem {
    ind: number;
    type: EType
    entityList: DataPollItemEntity[]
}
/*
export class DataPollItemEntity {
    static index = 0;
    ind: number;
    elements = [] as HTMLInputElement[];

    constructor() {
        this.ind = ++DataPollItemEntity.index;
    }
}

export class DataPollItem {
    static index = 0;
    ind: number;
    private _type = EType.none;
    entityList = [] as DataPollItemEntity[];

    constructor() {
        this.ind = ++DataPollItem.index;
    }

    get type() {
        return this._type;
    }

    set type(val) {
        this._type = val;
        this.entityList = [];
    }

    //addEntity() {
    //    this.entityList.push(new DataPollItemEntity());
    //}
}

*/