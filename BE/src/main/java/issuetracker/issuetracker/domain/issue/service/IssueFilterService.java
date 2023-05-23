package issuetracker.issuetracker.domain.issue.service;

import issuetracker.issuetracker.domain.issue.Issue;
import issuetracker.issuetracker.domain.page.dto.request.FilterRequestDTO;
import issuetracker.issuetracker.domain.issue.dto.IssueDTO;
import issuetracker.issuetracker.domain.issue.repository.IssueRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class IssueFilterService {

    private final IssueRepository issueRepository;

    public IssueFilterService(IssueRepository issueRepository) {
        this.issueRepository = issueRepository;
    }

    public List<IssueDTO> filterIssues(FilterRequestDTO filterRequest) {
        //TODO 이슈 필터링 구현해야합니다.
        //issueRepository.filterByIssue();
        Iterable<Issue> all = issueRepository.findAll();
        List<IssueDTO> issueIds = new ArrayList<>();
        return issueIds;
    }
}
