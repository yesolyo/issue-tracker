package issuetracker.issuetracker.domain.page;

import io.swagger.v3.oas.annotations.tags.Tag;
import issuetracker.issuetracker.domain.page.dto.request.FilterRequestDTO;
import issuetracker.issuetracker.domain.issue.dto.IssueDTO;
import issuetracker.issuetracker.domain.issue.service.IssueFilterService;
import issuetracker.issuetracker.domain.page.dto.CountInfo;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "posts", description = "issue 메인 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/issues")
public class PageController {

    private final PageService service;
    private final IssueFilterService issueQueryService;


//    @GetMapping
//    public List<IssueDTO> showMainPage() {
//        return service.getMainPage();
//    }

    //TODO 이슈 필터링 기능 하는 메서드 처음에는 issue에 만들었지만 여기가 더 맞는것 같다.
    @GetMapping("/test")
    public List<IssueDTO> filterIssue(FilterRequestDTO filterRequestDTO) {
        List<IssueDTO> filteredIssues = issueQueryService.filterIssues(filterRequestDTO);
        return filteredIssues;
    }

    @GetMapping("/countInfo")
    public CountInfo getCountInfo() {
        return service.getCountInfo();
    }
}
