package issuetracker.issuetracker.domain.milestone;

import issuetracker.issuetracker.domain.milestone.dto.MileStoneDTO;
import lombok.AllArgsConstructor;
import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;

@Service
@AllArgsConstructor
public class MileStoneService {

    final private MileRepository mileRepository;

    public MileStoneDTO findMilestoneInIssue(AggregateReference<Milestone, @NotNull Long> issue) {
        return mileRepository.findByMilestoneInIssue(issue.getId());
    }

}
