package issuetracker.issuetracker.domain.page;

import issuetracker.issuetracker.domain.issue.dto.req.IssueDTO;
import issuetracker.issuetracker.domain.issue.repositroy.IssueRepositoryJDBCtem;
import issuetracker.issuetracker.domain.page.dto.CountInfo;
import issuetracker.issuetracker.domain.page.dto.MainPage;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class PageService {

    private final PageRepository repository;
    private final IssueRepositoryJDBCtem issueRepository;

    public MainPage getMainPage() {

        // issueList 조회
        List<IssueDTO> issueList = issueRepository.findAll();

        long openIssueCount = issueList.stream().filter(IssueDTO::getIsOPen).count();
        long closeIssueCount = issueList.size() - openIssueCount;

        // label count , repository 에서 label count 만 꺼내는 쿼리 작성
        Long labelCount = repository.countLabel();
        Long milestoneCount = repository.countMilestone();

        CountInfo countInfo = new CountInfo(labelCount, milestoneCount, openIssueCount, closeIssueCount);

        // 열린이슈  카운트 하기, 닫힌이슈
        return new MainPage(issueList, countInfo);
    }
}
