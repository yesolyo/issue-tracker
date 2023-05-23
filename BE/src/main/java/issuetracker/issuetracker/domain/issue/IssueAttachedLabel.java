package issuetracker.issuetracker.domain.issue;

import issuetracker.issuetracker.domain.label.Label;
import org.springframework.data.jdbc.core.mapping.AggregateReference;

import javax.validation.constraints.NotNull;
import java.util.UUID;

public class IssueAttachedLabel {
    AggregateReference<Label, @NotNull UUID> labelId;
    AggregateReference<Issue, @NotNull UUID> issueId;
}
