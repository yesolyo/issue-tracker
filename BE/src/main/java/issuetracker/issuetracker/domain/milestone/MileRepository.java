package issuetracker.issuetracker.domain.milestone;

import issuetracker.issuetracker.domain.issue.Issue;
import org.springframework.data.repository.CrudRepository;

public interface MileRepository extends CrudRepository<Issue, Long> {
}
