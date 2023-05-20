package issuetracker.issuetracker.domain.issue.repositroy;

import issuetracker.issuetracker.domain.issue.dto.IssueDTO;
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
                "a.member_id AS author_id, a.member_name AS author_name, a.profile_url AS author_profile_url, " +
                "asg.member_id AS assignee_id, asg.member_name AS assignee_name, asg.profile_url AS assignee_profile_url, " +
                "l.label_id, l.title AS label_name, l.background_color " +
                "FROM issue i " +
                "LEFT JOIN milestone m ON i.milestone_id = m.milestone_id " +
                "LEFT JOIN member a ON i.author = a.member_id " +
                "LEFT JOIN assignee ag ON i.issue_id = ag.issue_id " +
                "LEFT JOIN member asg ON ag.member_id = asg.member_id " +
                "LEFT JOIN label_list ll ON i.issue_id = ll.issue_id " +
                "LEFT JOIN label l ON ll.label_id = l.label_id ";

        return jdbcTemplate.query(sql, new IssueRowMapper());
    }
}
