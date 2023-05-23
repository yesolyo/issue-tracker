package issuetracker.issuetracker.domain.issue;

import issuetracker.issuetracker.domain.milestone.Milestone;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.jdbc.core.mapping.AggregateReference;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
@Setter
public class Issue {
    @Id
    private Long id;
    private String title;
    private String contents;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
    private Boolean isOPen;
    private Boolean isDelete;
    //지워야 할수도
    AggregateReference<Milestone, @NotNull Long> milestoneId;

}
