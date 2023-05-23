const initialFilterState = {
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
    case 'RESET': {
      return initialFilterState;
    }
    case 'FILTER': {
      return { ...state, ...payload };
    }
    case 'CHECK': {
      break;
    }
    case 'ALL_CHECK': {
      break;
    }
    case 'UN_CHECK': {
      break;
    }
    default:
      return state;
  }
};

export const issueReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CREATE': {
      return initialFilterState;
    }
    case 'REMOVE': {
      return initialFilterState;
    }
  }
};
