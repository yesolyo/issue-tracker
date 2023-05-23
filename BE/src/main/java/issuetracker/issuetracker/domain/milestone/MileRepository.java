package issuetracker.issuetracker.domain.milestone;

import issuetracker.issuetracker.domain.issue.Issue;
import issuetracker.issuetracker.domain.milestone.dto.MilestoneFilterDTO;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MileRepository extends CrudRepository<Milestone, Long> {

    @Query("SELECT " +
            "milestone.milestone_id AS id, " +
            "milestone.title AS title " +
            "FROM milestone")
    List<MilestoneFilterDTO> getMilestoneFilter();
}
