package issuetracker.issuetracker.domain.user;

import issuetracker.issuetracker.domain.user.dto.UserFilterDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;

    @Transactional(readOnly = true)
    public List<UserFilterDTO> getUserFilter() {
        return repository.getUserFilter();
    }
}
