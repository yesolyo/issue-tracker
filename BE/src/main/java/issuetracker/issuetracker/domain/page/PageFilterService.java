package issuetracker.issuetracker.domain.page;

import issuetracker.issuetracker.domain.issue.repository.IssueRepository;
import issuetracker.issuetracker.domain.label.LabelRepository;
import issuetracker.issuetracker.domain.milestone.MileRepository;
import issuetracker.issuetracker.domain.user.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class PageFilterService {

    private final IssueRepository issueRepository;
    private final LabelRepository labelRepository;
    private final MileRepository mileRepository;
    private final MemberRepository memberRepository;


//    public List<IssueDTO> filterIssueDto() {
//        Iterable<Issue> all = issueRepository.findAll();
//        for (Issue issue : all) {
//            long issueId = issue.getId();
//            IssueDetail byIssueDetail = issueRepository.findByIssueDetail(issueId);
//            issueRepository.findByAuthor();
//            issueRepository.findByAssignees();
//            labelRepository.findByLabelDto();
//        }
//        IssueDTO.of()
//    }
}
