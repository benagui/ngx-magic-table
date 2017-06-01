import { MagicPaginationOptions } from '../../pagination/index';

export interface MagicTableActionButton {
    title: string;
    action: string;
    styleClass?: string;
    styleIcon?: string;
}

export declare type MagicTableActionButtons = MagicTableActionButton[];

export interface MagicTableDropDownInfo {
    title: string;
    styleClass: string;
    styleIcon: string;
}

export interface MagicTableActions {
    type: string;
    dropdownInfo: MagicTableDropDownInfo;
    buttons: MagicTableActionButtons;
}

export interface MagicTableColumn {
    field?: string;
    title?: string;
    format?: any;
    align?: string;
    sort?: string;
    actions?: MagicTableActions;
}

export declare type MagicTableColumns = MagicTableColumn[];

export interface MagicTableOptions {
    pagination?: MagicPaginationOptions;
    api?: Object;
}

export { MagicPaginationOptions };
