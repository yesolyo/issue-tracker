package issuetracker.issuetracker.domain.issue.repository;

import issuetracker.issuetracker.domain.issue.Issue;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IssueRepository extends CrudRepository<Issue, Long> {
}
