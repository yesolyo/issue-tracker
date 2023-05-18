package issuetracker.issuetracker.domain.issue.service;

import issuetracker.issuetracker.domain.issue.Issue;
import issuetracker.issuetracker.domain.issue.repositroy.IssueRepository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class IssueService {

    private final IssueRepository issueRepository;

    public IssueService(IssueRepository issueRepository) {
        this.issueRepository = issueRepository;
    }

    public Iterable<Issue> findByIssue() {
        return issueRepository.findAll();
    }


}
