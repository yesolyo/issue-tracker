package issuetracker.issuetracker.domain.page;

import io.swagger.v3.oas.annotations.tags.Tag;
import issuetracker.issuetracker.domain.page.dto.MainPage;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@Tag(name = "posts", description = "issue 메인 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/issues")
public class PageController {

    private final PageService service;

    @GetMapping("/test")
    public MainPage showMainPage() {
        return service.getMainPage();
    }
}
