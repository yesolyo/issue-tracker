package issuetracker.issuetracker.domain.user;

import issuetracker.issuetracker.domain.user.dto.UserFilterDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserRepository repository;

    @GetMapping("/users")
    public List<UserFilterDTO> getUserFilter() {
        return repository.getUserFilter();
    }
}
