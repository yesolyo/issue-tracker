package issuetracker.issuetracker.domain.user;

import issuetracker.issuetracker.domain.user.User;
import issuetracker.issuetracker.domain.user.dto.AssigneeDTO;
import issuetracker.issuetracker.domain.user.dto.AuthorFilterDTO;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    @Query("SELECT " +
            "member.member_id AS id, " +
            "member.member_name AS name, " +
            "member.profile_url AS profile_url " +
            "FROM assignee " +
            "JOIN member " +
            "ON assignee.member_id = member.member_id")
    List<AssigneeDTO> findPopupAssignee();


    @Query("SELECT " +
            "member.member_id AS id, " +
            "member.member_name AS name, " +
            "member.profile_url " +
            "FROM member " +
            "WHERE " +
            "member.member_id IN (SELECT issue.author FROM issue)")
    List<AuthorFilterDTO> getAuthorFilter();
}
