import { helper } from '@ember/component/helper';

export function trimString([string, length]) {
    return string.substring(0, length);
}

export default helper(trimString);
