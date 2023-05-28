export const initialFilterState = {
  isOpen: true,
  author: null, // 작성자
  labels: null, // 레이블
  milestone: null, // 마일스톤
  assignees: null, // 담당자
  comments: null // 댓글
};

export const filterStateReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'RESET-FILTER': {
      return initialFilterState;
    }
    case 'FILTER-ISSUES': {
      return {
        ...initialFilterState,
        ...payload
      };
    }
    default:
      return state;
  }
};
