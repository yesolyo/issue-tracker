export const initialCheckState = {
  isAllChecked: false, // false(initial) 또는 true(disable)
  checkedIssues: []
};

export const checkBoxReducer = (state, action) => {
  const { checkedIssues } = state;
  const { type, payload } = action;

  switch (type) {
    case 'CHECK': {
      return {
        isAllChecked: true,
        checkedIssues: [...checkedIssues, payload]
      };
    }
    case 'UNCHECK': {
      const updateCheckedIssues = checkedIssues.filter(
        (issueId) => issueId !== payload
      );
      const isAllUpdatedChecked = updateCheckedIssues.length > 0;
      return {
        isAllChecked: isAllUpdatedChecked,
        checkedIssues: updateCheckedIssues
      };
    }
    case 'ALL-CHECK': {
      const updateCheckedIssues = payload.map(({ issueId }) => issueId);
      return {
        isAllChecked: true,
        checkedIssues: updateCheckedIssues
      };
    }
    case 'ALL-UNCHECK': {
      return { isAllChecked: false, checkedIssues: [] };
    }
    case 'CHANGE-OPEN': {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};
