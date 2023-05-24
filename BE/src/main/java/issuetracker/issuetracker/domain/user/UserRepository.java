package issuetracker.issuetracker.domain.user;

import issuetracker.issuetracker.domain.user.dto.UserFilterDTO;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    @Query("SELECT member_id AS id, member_name AS name, profile_url FROM member")
    List<UserFilterDTO> getUserFilter();
}
