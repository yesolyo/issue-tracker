export const initialFilterState = {
  isOpen: true,
  author: null, // 작성자
  labels: null, // 레이블
  milestone: null, // 마일스톤
  assignees: null, // 담당자
  comments: null // 댓글
};

export const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INIT': {
      return payload;
    }
    case 'RESET': {
      return initialFilterState;
    }
    case 'FILTER': {
      return {
        ...initialFilterState,
        ...payload
      };
    }
    default:
      return state;
  }
};

export const initialCheckState = {
  checkBox: 'initial',
  selectedIssue: {}
};

export const checkReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHECK': {
      break;
    }
    case 'UNCHECK': {
      break;
    }
    case 'ALL_CHECK': {
      break;
    }
    case 'ALL_UNCHECK': {
      break;
    }
  }
};
