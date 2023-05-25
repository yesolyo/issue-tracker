package issuetracker.issuetracker.domain.user;

import issuetracker.issuetracker.domain.user.dto.UserFilterDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserService service;

    @GetMapping("/users")
    public List<UserFilterDTO> getUserFilter() {
        return service.getUserFilter();
    }
}
