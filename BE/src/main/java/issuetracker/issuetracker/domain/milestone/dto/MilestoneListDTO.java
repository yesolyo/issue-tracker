package issuetracker.issuetracker.domain.milestone.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
@Setter
public class MilestoneListDTO {

    @NotNull
    private Long id;
    @NotNull
    private String title;
    private String description;
    private LocalDateTime completeDate;
    private Long openIssueCount;
    private Long closeIssueCount;
}
