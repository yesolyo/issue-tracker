package issuetracker.issuetracker.domain.user.repository;

import issuetracker.issuetracker.domain.user.Member;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface MemberRepository extends CrudRepository<Member, UUID> {
}
