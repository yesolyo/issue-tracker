package issuetracker.issuetracker.domain.issue.mapper;

import issuetracker.issuetracker.domain.issue.dto.req.IssueDTO;
import issuetracker.issuetracker.domain.label.dto.LabelDTO;
import issuetracker.issuetracker.domain.user.dto.AssigneeDTO;
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
        Set<AssigneeDTO> assignees = new HashSet<>();
        AssigneeDTO assignee = new AssigneeDTO();
        assignee.setAssigneeId(rs.getLong("assignee_id"));
        assignee.setAssigneeName(rs.getString("assignee_name"));
        assignee.setAssigneeProfileUrl(rs.getString("assignee_profile_url"));
        assignees.add(assignee);
        issue.setAssignees(assignees);

        // labelList 매핑
        Set<LabelDTO> labels = new HashSet<>();
        LabelDTO label = new LabelDTO();
        label.setId(rs.getLong("label_id"));
        label.setLabelName(rs.getString("label_name"));
        label.setBackgroundColor(rs.getString("background_color"));
        labels.add(label);
        issue.setLabel(labels);

        // author 매핑
        AuthorDTO author = new AuthorDTO();
        author.setAuthorId(rs.getLong("author_id"));
        author.setAuthorName(rs.getString("author_name"));
        author.setAuthorProfileUrl(rs.getString("author_profile_url"));
        issue.setAuthor(author);

        return issue;
    }

    private Boolean getBoolean(ResultSet rs, String column) throws SQLException {
        Object value = rs.getObject(column);
        if (value instanceof Boolean) {
            return (Boolean) value;
        } else if (value instanceof Integer) {
            return ((Integer) value) != 0;
        }

        return null;
    }

}
