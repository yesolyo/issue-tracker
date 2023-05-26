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
      const updateCheckedIssues = checkedIssues.filter((id) => id !== payload);
      const isUpdateIsAllChecked = updateCheckedIssues.length > 0;
      return {
        isAllChecked: isUpdateIsAllChecked,
        checkedIssues: updateCheckedIssues
      };
    }
    case 'ALL_CHECK': {
      const updatecheckedIssues = payload.reduce((acc, issue) => {
        if (issue.isOpen) acc.push(issue.id);
        return acc;
      }, []);
      return {
        isAllChecked: true,
        checkedIssues: updatecheckedIssues
      };
    }
    case 'ALL_UNCHECK': {
      return { isAllChecked: false, checkedIssues: [] };
    }
    default:
      return state;
  }
};
