package issuetracker.issuetracker.domain.label;

import issuetracker.issuetracker.domain.issue.Issue;
import org.springframework.data.repository.CrudRepository;

public interface LabelRepository extends CrudRepository<Label, Long> {
}
