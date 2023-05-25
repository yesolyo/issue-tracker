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
  isAllChecked: false, // false(initial) 또는 true(disable)
  selectedIssues: []
};

export const checkReducer = (state, action) => {
  const { selectedIssues } = state;
  const { type, payload } = action;

  switch (type) {
    case 'CHECK': {
      return {
        isAllChecked: true,
        selectedIssues: [...selectedIssues, payload]
      };
    }
    case 'UNCHECK': {
      const updateSelectedIssues = selectedIssues.filter(
        ({ id }) => id !== payload.id
      );
      const updateIsAllChecked = updateSelectedIssues.length > 0;
      return {
        isAllChecked: updateIsAllChecked,
        selectedIssues: [...updateSelectedIssues]
      };
    }
    case 'ALL_CHECK': {
      // check박스가 몇개있는지 카운트를 어떻게 함 ?? (모두선택)
      const updateSelectedIssues = [payload];
      return {
        isAllChecked: true,
        selectedIssues: []
      };
    }
    case 'ALL_UNCHECK': {
      return { isAllChecked: false, selectedIssues: [] };
    }
  }
};
