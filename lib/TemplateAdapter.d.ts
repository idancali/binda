export = _;
declare class _ {
    constructor(props: any);
    _props: any;
    get props(): any;
    process(template: any, options?: {}, data?: {}): Promise<any>;
}
declare namespace _ {
    export namespace ERRORS {
        export function CANNOT_PROCESS(reason: any): string;
    }
    export namespace MESSAGES {
        export const WRONG_TEMPLATE_FORMAT: string;
    }
}
