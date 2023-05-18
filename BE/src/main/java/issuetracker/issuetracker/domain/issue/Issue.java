package issuetracker.issuetracker.domain.issue;

import issuetracker.issuetracker.domain.issue.dto.MilestoneResponse;
import issuetracker.issuetracker.domain.milestone.Milestone;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import nonapi.io.github.classgraph.json.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDateTime;
import java.util.List;

@Table
public class Issue {
    @Id
    private Long issue_id;
    private String title;
    private String contents;
    private LocalDateTime create_time;
    private LocalDateTime update_time;
    private boolean is_open;
    private boolean is_delete;
}
