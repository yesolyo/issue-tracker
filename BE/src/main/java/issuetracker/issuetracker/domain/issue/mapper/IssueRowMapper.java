package issuetracker.issuetracker.domain.issue.mapper;

import issuetracker.issuetracker.domain.issue.dto.req.IssueDTO;
import issuetracker.issuetracker.domain.label.dto.LabelDTO;
import issuetracker.issuetracker.domain.user.dto.AuthorDTO;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class IssueRowMapper implements RowMapper<IssueDTO> {
    @Override
    public IssueDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
        IssueDTO issue = new IssueDTO();
        issue.setIssueId(rs.getLong("issue_id"));
        issue.setTitle(rs.getString("title"));
        issue.setCreateTime(rs.getTimestamp("create_time").toLocalDateTime());
        issue.setUpdateTime(rs.getTimestamp("update_time").toLocalDateTime());
        issue.setIsOPen(getBoolean(rs, "is_open"));
        issue.setMilestone(rs.getString("milestone"));

        // authorList 매핑
        Set<AuthorDTO> authors = new HashSet<>();
        AuthorDTO author = new AuthorDTO();
        author.setId(rs.getLong("member_id"));
        author.setName(rs.getString("member_name"));
        author.setProfileUrl(rs.getString("profile_url"));
        authors.add(author);
        issue.setAuthorList(authors);

        // labelList 매핑
        Set<LabelDTO> labels = new HashSet<>();
        LabelDTO label = new LabelDTO();
        label.setId(rs.getLong("label_id"));
        label.setLabelName(rs.getString("label_name"));
        label.setBackgroundColor(rs.getString("background_color"));
        labels.add(label);
        issue.setLabelList(labels);
        return issue;
    }

    private Boolean getBoolean(ResultSet rs, String column) throws SQLException {
        Object value = rs.getObject(column);
        if (value instanceof Boolean) {
            return (Boolean) value;
        } else if (value instanceof Integer) {
            return ((Integer) value) != 0;
        }
        // 기본이 true이기 때문에 true return
        return true;
    }

}
