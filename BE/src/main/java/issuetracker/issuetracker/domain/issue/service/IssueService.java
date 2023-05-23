package issuetracker.issuetracker.domain.issue.service;

import issuetracker.issuetracker.domain.issue.Issue;
import issuetracker.issuetracker.domain.issue.repository.IssueRepository;
import issuetracker.issuetracker.domain.milestone.MileRepository;
import org.springframework.stereotype.Service;

@Service
public class IssueService {

    private final IssueRepository issueRepository;
    private final MileRepository mileRepository;

    public IssueService(IssueRepository issueRepository, MileRepository mileRepository) {
        this.issueRepository = issueRepository;
        this.mileRepository = mileRepository;
    }

    public Iterable<Issue> findByIssue() {
        return issueRepository.findAll();
    }


//    public void findByMilestone(Long id) {
//        Issue issue = issueRepository.findById(id).get();
//        issueRepository.findById(milestoneId.getId());
//        return new TodoDetails(todo, owner);
//    }
}
