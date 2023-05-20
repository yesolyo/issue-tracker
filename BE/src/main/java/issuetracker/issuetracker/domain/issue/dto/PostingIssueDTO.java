package issuetracker.issuetracker.domain.issue.dto;

import issuetracker.issuetracker.domain.label.dto.LabelDTO;
import issuetracker.issuetracker.domain.milestone.Milestone;
import issuetracker.issuetracker.domain.milestone.dto.MileStoneDTO;
import issuetracker.issuetracker.domain.user.dto.AssigneeDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
public class PostingIssueDTO {
    @NotNull
    private String title;
    private String contents;
    private String fileUrl;
    private AssigneeDTO assignee;
    private LabelDTO label;
    private MileStoneDTO milestone;
}
