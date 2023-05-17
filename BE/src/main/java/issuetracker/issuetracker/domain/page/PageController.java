package issuetracker.issuetracker.domain.page;

import io.swagger.v3.oas.annotations.tags.Tag;
import issuetracker.issuetracker.domain.page.dto.MainPage;
import issuetracker.issuetracker.domain.page.dto.request.MainPageRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Tag(name = "posts", description = "issue 메인 API")
@RestController
@RequestMapping("/issues")
public class PageController {

    private final PageService service;

    @Autowired
    public PageController(PageService service) {
        this.service = service;
    }

    @GetMapping("/")
    public MainPage showMainPage(@ModelAttribute final MainPageRequest mainPageRequest) {
        //TODO 세부로직은 나중에
        return service.getMainPage();
    }
}
