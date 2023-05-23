package issuetracker.issuetracker.domain.issue;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class IssueFilterCondition {
    private Long assignee;
    private Long label;
    private Long milestone;
    private Long author;
    private Boolean isOpen;
    private Boolean isWrittenByMe;
    private Boolean isAssignedToMe;
    private Boolean commentedByMe;
    private Boolean isDelete;
}
