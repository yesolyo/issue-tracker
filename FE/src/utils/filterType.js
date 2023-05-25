const filterType = (tabKey) => {
  switch(tabKey){
    case 'assignees':
      {
        tabName: '담당자',
        filterTabKey: 'assignees',
        setValue: assigneeSetValue,
        filterOption (assignees) {
          return assignees.map((assignee) => {
            return {
              id: assignee.id,
              option: assignee.name,
              profileUrl: assignee.profileUrl
            };
          });
        }
      }
    case 'labels':
      filterOption (labels) {
        return labels.map((label) => {
          return {
            id: label.id,
            option: label.name,
            backgroundColor: label.backgroundColor,
            fontColor: label.fontColor
          };
        });
      }
    case 'milestone':
      filterOption (milestone) {
      return {
        id: milestone.id,
        option: milestone.name
      };
    }

  }
}
  