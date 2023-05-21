package issuetracker.issuetracker.domain.issue.repositroy;

import issuetracker.issuetracker.domain.issue.Issue;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface IssueRepository extends CrudRepository<Issue, Long> {
}