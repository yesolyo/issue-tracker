//package issuetracker.issuetracker.domain.issue.repository;
//
//import issuetracker.issuetracker.domain.issue.dto.IssueDTO;
//import issuetracker.issuetracker.domain.issue.mapper.IssueResultSetExtractor;
//import lombok.RequiredArgsConstructor;
//import org.springframework.jdbc.core.JdbcTemplate;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//
//@Repository
//@RequiredArgsConstructor
//public class IssueRepositoryJDBCtem {
//
//    private final JdbcTemplate jdbcTemplate;
//
//    public List<IssueDTO> findAll() {
//
//        String sql = "SELECT i.issue_id, i.title, i.create_time, i.update_time, i.is_open, m.title AS milestone,\n" +
//                "    a.member_id AS author_id, a.member_name AS author_name, a.profile_url AS author_profile_url,\n" +
//                "    asg.member_id AS assignee_id, asg.member_name AS assignee_name, asg.profile_url AS assignee_profile_url,\n" +
//                "    l.label_id, l.title AS label_name, l.background_color, l.font_color, c.comment_id\n" +
//                "FROM issue i\n" +
//                "LEFT JOIN milestone m ON i.milestone_id = m.milestone_id\n" +
//                "LEFT JOIN member a ON i.author = a.member_id\n" +
//                "LEFT JOIN assignee ag ON i.issue_id = ag.issue_id\n" +
//                "LEFT JOIN member asg ON ag.member_id = asg.member_id\n" +
//                "LEFT JOIN label_list ll ON i.issue_id = ll.issue_id\n" +
//                "LEFT JOIN label l ON ll.label_id = l.label_id\n" +
//                "LEFT JOIN comment c ON i.issue_id = c.issue_id;\n";
//
//        return jdbcTemplate.query(sql, new IssueResultSetExtractor());
//    }
//}