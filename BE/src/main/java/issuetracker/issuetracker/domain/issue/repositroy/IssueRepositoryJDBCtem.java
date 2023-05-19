package issuetracker.issuetracker.domain.issue.repositroy;

import issuetracker.issuetracker.domain.issue.dto.req.IssueDTO;
import issuetracker.issuetracker.domain.issue.mapper.IssueRowMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class IssueRepositoryJDBCtem {

    private final JdbcTemplate jdbcTemplate;

    public List<IssueDTO> findAll() {
        String sql = "SELECT i.issue_id, i.title, i.create_time, i.update_time, i.is_open, m.title AS milestone, " +
                "a.member_id, a.member_name, a.profile_url, " +
                "l.label_id, l.title AS label_name, l.background_color " +
                "FROM issue i " +
                "JOIN milestone m ON i.milestone_id = m.milestone_id " +
                "JOIN member a ON i.author = a.member_id " +
                "JOIN label_list ll ON i.issue_id = ll.issue_id " +
                "JOIN label l ON ll.label_id = l.label_id ";

        return jdbcTemplate.query(sql, new IssueRowMapper());
    }
}
