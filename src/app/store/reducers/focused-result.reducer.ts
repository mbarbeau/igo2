import { SearchResult } from '../../search/shared/search-result.interface';

export function focusedResult(state: SearchResult = null, {type, payload}) {
  switch (type) {
    case 'FOCUS_RESULT':
      return Object.assign({}, payload);
    default:
      return state;
  }
};
