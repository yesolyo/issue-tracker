export const getFilterQueryString = ({
  isOpen,
  author,
  labels, // 중복가능
  milestone,
  assignees, // 중복가능
  comments, // user 1명만
  isWrittenByMe,
  isAssignedToMe,
  commentedByMe
}) => {
  return [
    `isOpen=${isOpen}`,
    author && `&author=${author.id}`,
    labels?.length ? `&labels=${labels.map(({ id }) => id).join(',')}` : null,
    milestone && `&milestone=${milestone.id}`,
    assignees?.length
      ? `&assignees=${assignees.map(({ id }) => id).join(',')}`
      : null,
    comments && `&comments=${comments.id}`,
    isWrittenByMe && `&isWrittenByMe=${isWrittenByMe}`,
    isAssignedToMe && `&isAssignedToMe=${isAssignedToMe}`,
    commentedByMe && `&commentedByMe=${commentedByMe}`
  ].join('');
};

export const convertFilterQueryToInputValue = ({
  isOpen,
  author,
  labels,
  milestone,
  assignees,
  comments,
  isWrittenByMe,
  isAssignedToMe,
  commentedByMe
}) => {
  return [
    `is:${isOpen ? 'open' : 'close'} is:issue`,
    author && `author:${author.id}`,
    labels?.length ? `&labels=${labels.map(({ id }) => id).join(',')}` : null,
    milestone && `milestone:${milestone.id}`,
    assignees?.length
      ? `&assignees=${assignees.map(({ id }) => id).join(',')}`
      : null,
    comments && `comments:${comments.id}`,
    isWrittenByMe && `isWrittenByMe=@me`,
    isAssignedToMe && `isAssignedToMe=@me`,
    commentedByMe && `commentedByMe=@me`
  ]
    .filter((query) => query)
    .join(' ');
};

// console.log(
//   getFilterQueryString({
//     isOpen: true,
//     isWrittenByMe: true
//   })
// );
// console.log(
//   convertFilterQueryToInputValue({
//     isOpen: true,
//     isWrittenByMe: true
//   })
// );
