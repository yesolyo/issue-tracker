package issuetracker.issuetracker.domain.issue.dto;

import issuetracker.issuetracker.domain.issue.Issue;
import issuetracker.issuetracker.domain.label.dto.LabelDTO;
import issuetracker.issuetracker.domain.milestone.dto.MileStoneDTO;
import issuetracker.issuetracker.domain.user.dto.AssigneeDTO;
import issuetracker.issuetracker.domain.user.dto.AuthorDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.MappedCollection;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class IssueDTO {
    @Id
    @NotNull
    private Long id;
    @NotNull
    private String title;
    @NotNull
    private LocalDateTime createTime;
    @NotNull
    private LocalDateTime updateTime;
    @NotNull
    private Boolean isOPen;
    private String milestone;
    @NotNull
    private AuthorDTO author;

    @MappedCollection(idColumn = "issue_id")
    private Set<AssigneeDTO> assignees;

    @MappedCollection(idColumn = "issue_id")
    private Set<LabelDTO> labels;

    @MappedCollection(idColumn = "issue_id")
    private Set<Long> commentAuthorId;

    public IssueDTO() {
    }

    public static IssueDTO of(Issue issue, AuthorDTO author, Set<AssigneeDTO> assignees, Set<LabelDTO> labels, MileStoneDTO mileStoneDTO) {
        return IssueDTO.builder()
                .id(issue.getId())
                .title(issue.getTitle())
                .isOPen(issue.getIsOPen())
                .milestone(mileStoneDTO.getTitle())
                .author(author)
                .assignees(assignees)
                .labels(labels)
                .build();
    }
}