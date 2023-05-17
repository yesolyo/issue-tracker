package issuetracker.issuetracker.domain.issue;


import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "posts", description = "issue API")
@RestController
@RequestMapping("/issues")
public class IssueController {

}