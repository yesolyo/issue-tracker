package issuetracker.issuetracker.domain.page;

import io.swagger.v3.oas.annotations.tags.Tag;
import issuetracker.issuetracker.domain.issue.dto.IssueDTO;
import issuetracker.issuetracker.domain.page.dto.CountInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "posts", description = "issue 메인 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/issues")
public class PageController {

    private final PageService service;

    @GetMapping
    public List<IssueDTO> showMainPage() {
        return service.getMainPage();
    }

    @GetMapping("/countInfo")
    public CountInfo getCountInfo() {
        return service.getCountInfo();
    }
}
