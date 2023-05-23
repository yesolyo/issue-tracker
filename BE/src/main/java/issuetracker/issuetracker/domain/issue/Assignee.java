package issuetracker.issuetracker.domain.issue;

import issuetracker.issuetracker.domain.label.Label;
import issuetracker.issuetracker.domain.user.Member;
import org.springframework.data.jdbc.core.mapping.AggregateReference;

import javax.validation.constraints.NotNull;
import java.util.UUID;

public class Assignee {
    AggregateReference<Label, @NotNull UUID> memberId;
    AggregateReference<Member, @NotNull UUID> issueId;
}
