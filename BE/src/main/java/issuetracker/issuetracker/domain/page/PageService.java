package issuetracker.issuetracker.domain.page;

import issuetracker.issuetracker.domain.issue.Issue;
import issuetracker.issuetracker.domain.page.dto.MainPage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


@Service
public class PageService {

    private final PageRepository repository;

    @Autowired
    public PageService(PageRepository repository) {
        this.repository = repository;
    }

    public MainPage getMainPage() {

        // issueList 조회
        Iterable<Issue> allIssue = repository.findAll();

        List<Issue> issueList = Collections.unmodifiableList(new ArrayList<>());
        allIssue.forEach(issueList::add);

        long openIssueCount = issueList.stream().filter(Issue::isOpen).count();
        long closeIssueCount = issueList.size() - openIssueCount;

        // label count , repository 에서 label count 만 꺼내는 쿼리 작성
        Long labelCount = repository.countLabel();
        Long milestoneCount = repository.countMilestone();

        // 열린이슈  카운트 하기, 닫힌이슈
        return new MainPage(issueList, labelCount, milestoneCount, openIssueCount, closeIssueCount);
    }
}
