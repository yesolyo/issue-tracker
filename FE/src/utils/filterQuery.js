export const getFilterQueryString = ({
  isOpen,
  author,
  labels,
  milestone,
  assignees,
  comments
}) => {
  return [
    `isOpen=${isOpen}`,
    author && `&author=${author.id}`,
    labels && `&labels=${labels.id}`,
    milestone && `&milestone=${milestone.id}`,
    assignees && `&assignees=${assignees.id}`,
    comments && `&comments=${comments.id}`
  ].join('');
};

export const convertFilterQueryToInputValue = ({
  isOpen,
  author,
  labels,
  milestone,
  assignees,
  comments
}) => {
  return [
    `is:${isOpen ? 'open' : 'close'} is:issue`,
    author && `author:${author.id}`,
    labels && `labels:${labels.id}`,
    milestone && `milestone:${milestone.id}`,
    assignees && `assignees:${assignees.id}`,
    comments && `comments:${comments.id}`
  ].join(' ');
};
