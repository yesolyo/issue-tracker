package issuetracker.issuetracker.domain.issue.service;

import issuetracker.issuetracker.domain.issue.Issue;
import issuetracker.issuetracker.domain.issue.dto.MilestoneResponse;
import issuetracker.issuetracker.domain.milestone.MileRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class MilestoneinfoIssue {

    private final MileRepository mileRepository;

    public MilestoneinfoIssue(MileRepository mileRepository) {
        this.mileRepository = mileRepository;
    }

    public MilestoneResponse findByMilestoneInfo() {
        Iterable<Issue> all = mileRepository.findAll();
        //TODO 여기서 마일스톤을 돌면서 issue 외래키로
        //TODO Join 해도됨
//        List<MilestoneResponse> issueMiles = StreamSupport.stream(all.spliterator(), false)
//                .map(issue -> mileRepository.findById(issue.getMileId()).orElse(null))
//                .filter(Objects::nonNull)
//                .collect(Collectors.toList());

        return new MilestoneResponse();
    }
}
