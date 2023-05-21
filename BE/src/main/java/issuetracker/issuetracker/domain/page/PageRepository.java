package issuetracker.issuetracker.domain.page;

import issuetracker.issuetracker.domain.issue.Issue;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

public interface PageRepository extends CrudRepository<Issue, Long> {

    Iterable<Issue> findAll();

    @Query("select count(label_id) from label")
    Long countLabel();

    @Query("select count(milestone_id) from milestone")
    Long countMilestone();
}
