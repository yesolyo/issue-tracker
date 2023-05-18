package issuetracker.issuetracker.domain.issue.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class InformationOfAssigneeInIssue {
    private long author_id;
    private String assigneeName;
    private String assigneeUrl;
}