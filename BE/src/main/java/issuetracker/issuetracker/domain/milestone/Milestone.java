package issuetracker.issuetracker.domain.milestone;

import issuetracker.issuetracker.domain.issue.Issue;
import nonapi.io.github.classgraph.json.Id;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDate;
import java.util.List;

@Table
public class Milestone {

    @Id
    private Integer milestone_id;
    private String title;
    private String description;
    private LocalDate datetime;
    @MappedCollection(idColumn = "user_id", keyColumn = "id")
    private List<Issue> issue_id;
}
