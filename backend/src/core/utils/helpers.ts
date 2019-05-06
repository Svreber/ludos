import * as _ from "lodash";

export function throwIfUndefined(value: any, errorToThrow: Error): void {
    if (_.isUndefined(value)) {
        throw errorToThrow;
    }
}
